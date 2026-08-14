"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import {
  constellationNodes,
  constellationConnections,
} from "@/data/constellationNodes";
import type { ConstellationNode } from "@/lib/types";

// Sprite con forma de estrella de 4 puntas (destello): convierte los puntos
// planos de Three.js (cuadrados por defecto) en un brillo tipo "sparkle" real,
// con núcleo central y dos haces cruzados que se desvanecen hacia las puntas.
// Se genera una sola vez y se comparte entre montajes; textura minúscula, no
// hace falta liberarla.
let starSpriteTexture: THREE.Texture | null = null;

function drawStarSpike(
  ctx: CanvasRenderingContext2D,
  size: number,
  axis: "horizontal" | "vertical"
) {
  ctx.save();
  ctx.translate(size / 2, size / 2);
  ctx.scale(axis === "horizontal" ? 1 : 0.09, axis === "horizontal" ? 0.09 : 1);

  const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size / 2);
  gradient.addColorStop(0, "rgba(255, 255, 255, 0.95)");
  gradient.addColorStop(0.15, "rgba(255, 250, 230, 0.6)");
  gradient.addColorStop(1, "rgba(232, 202, 101, 0)");

  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(0, 0, size / 2, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function getStarSpriteTexture(): THREE.Texture {
  if (starSpriteTexture) return starSpriteTexture;

  const size = 128;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;

  ctx.globalCompositeOperation = "lighter";

  drawStarSpike(ctx, size, "horizontal");
  drawStarSpike(ctx, size, "vertical");

  // Núcleo brillante central
  const core = ctx.createRadialGradient(
    size / 2,
    size / 2,
    0,
    size / 2,
    size / 2,
    size * 0.18
  );
  core.addColorStop(0, "rgba(255, 255, 255, 1)");
  core.addColorStop(1, "rgba(255, 255, 255, 0)");
  ctx.fillStyle = core;
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size * 0.18, 0, Math.PI * 2);
  ctx.fill();

  starSpriteTexture = new THREE.CanvasTexture(canvas);
  return starSpriteTexture;
}

export function useConstellation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const [activeNode, setActiveNode] = useState<ConstellationNode | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let animationFrameId: number;

    // Escena, Cámara y Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0e0d0b, 0.002);

    const camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 15, 65);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Controles Orbitales
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxDistance = 110;
    controls.minDistance = 25;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.6;
    controlsRef.current = controls;

    // Iluminación
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const goldPointLight = new THREE.PointLight(0xf3de8a, 2.5, 100);
    goldPointLight.position.set(0, 20, 20);
    scene.add(goldPointLight);

    // Polvo cósmico de fondo: 3 capas con distinto tamaño/brillo para simular
    // un campo de estrellas natural en vez de puntos uniformes.
    const starSprite = getStarSpriteTexture();
    const dustGroup = new THREE.Group();
    scene.add(dustGroup);

    const dustLayers = [
      { count: 650, size: 0.9, opacity: 0.45 },
      { count: 200, size: 1.4, opacity: 0.65 },
      { count: 70, size: 2.1, opacity: 0.9 },
    ];

    const dustGeometries: THREE.BufferGeometry[] = [];
    const dustMaterials: THREE.PointsMaterial[] = [];

    dustLayers.forEach(({ count, size, opacity }) => {
      const positions = new Float32Array(count * 3);
      for (let i = 0; i < count * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 180;
        positions[i + 1] = (Math.random() - 0.5) * 140;
        positions[i + 2] = (Math.random() - 0.5) * 180;
      }
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

      const material = new THREE.PointsMaterial({
        color: 0xe8ca65,
        size,
        map: starSprite,
        transparent: true,
        opacity,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true,
      });

      dustGeometries.push(geometry);
      dustMaterials.push(material);
      dustGroup.add(new THREE.Points(geometry, material));
    });

    // Nodos de la constelación
    const starGroup = new THREE.Group();
    scene.add(starGroup);

    const starGeo = new THREE.SphereGeometry(1, 24, 24);
    const starMat = new THREE.MeshStandardMaterial({
      color: 0xd8af38,
      emissive: 0x966b0e,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.8,
    });
    const centerStarMat = new THREE.MeshStandardMaterial({
      color: 0xf3de8a,
      emissive: 0xc59b27,
      emissiveIntensity: 1.2,
      roughness: 0.1,
      metalness: 0.9,
    });

    const starMeshes: THREE.Mesh[] = [];
    constellationNodes.forEach((data) => {
      const isCenter = data.id === 7;
      const mesh = new THREE.Mesh(starGeo, isCenter ? centerStarMat : starMat.clone());
      mesh.position.set(...data.position);
      mesh.scale.setScalar(data.size);
      mesh.userData = data;
      starMeshes.push(mesh);
      starGroup.add(mesh);
    });

    // Líneas de conexión
    const lineMat = new THREE.LineBasicMaterial({
      color: 0xc59b27,
      transparent: true,
      opacity: 0.45,
      linewidth: 1.5,
    });
    const lineGeometries: THREE.BufferGeometry[] = [];
    constellationConnections.forEach(([a, b]) => {
      const p1 = new THREE.Vector3(...constellationNodes[a].position);
      const p2 = new THREE.Vector3(...constellationNodes[b].position);
      const lineGeo = new THREE.BufferGeometry().setFromPoints([p1, p2]);
      lineGeometries.push(lineGeo);
      starGroup.add(new THREE.Line(lineGeo, lineMat));
    });

    // Interactividad: raycaster (hover + click)
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    function updateMouseFromEvent(event: MouseEvent) {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    }

    function onPointerMove(event: MouseEvent) {
      updateMouseFromEvent(event);
    }

    function onPointerClick(event: MouseEvent) {
      updateMouseFromEvent(event);
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(starMeshes);
      if (intersects.length > 0) {
        const data = intersects[0].object.userData as ConstellationNode;
        setActiveNode(data);
        controls.autoRotate = false;
      }
    }

    renderer.domElement.addEventListener("mousemove", onPointerMove);
    renderer.domElement.addEventListener("click", onPointerClick);

    function handleResize() {
      camera.aspect = container!.clientWidth / container!.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container!.clientWidth, container!.clientHeight);
    }
    window.addEventListener("resize", handleResize);

    // Loop de animación
    function animate() {
      animationFrameId = requestAnimationFrame(animate);

      starGroup.rotation.y += 0.0008;
      dustGroup.rotation.y -= 0.0003;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(starMeshes);

      starMeshes.forEach((mesh) => {
        const data = mesh.userData as ConstellationNode;
        const material = mesh.material as THREE.MeshStandardMaterial;
        if (intersects.length > 0 && intersects[0].object === mesh) {
          mesh.scale.setScalar(data.size * 1.35);
          material.emissiveIntensity = 1.6;
        } else {
          mesh.scale.setScalar(data.size);
          material.emissiveIntensity = data.id === 7 ? 1.2 : 0.6;
        }
      });

      controls.update();
      renderer.render(scene, camera);
    }
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      renderer.domElement.removeEventListener("mousemove", onPointerMove);
      renderer.domElement.removeEventListener("click", onPointerClick);

      controls.dispose();

      starGeo.dispose();
      starMat.dispose();
      starMeshes.forEach((mesh) => {
        (mesh.material as THREE.Material).dispose();
      });

      dustGeometries.forEach((geo) => geo.dispose());
      dustMaterials.forEach((mat) => mat.dispose());

      lineMat.dispose();
      lineGeometries.forEach((geo) => geo.dispose());

      renderer.dispose();
    };
  }, []);

  function closeStarCard() {
    setActiveNode(null);
    if (controlsRef.current) controlsRef.current.autoRotate = true;
  }

  return { containerRef, canvasRef, activeNode, closeStarCard };
}
