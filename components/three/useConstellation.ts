"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import {
  constellationNodes,
  constellationConnections,
} from "@/data/constellationNodes";
import type { ConstellationNode } from "@/lib/types";

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

    // Polvo cósmico de fondo
    const dustCount = 700;
    const dustPos = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount * 3; i += 3) {
      dustPos[i] = (Math.random() - 0.5) * 180;
      dustPos[i + 1] = (Math.random() - 0.5) * 140;
      dustPos[i + 2] = (Math.random() - 0.5) * 180;
    }
    const dustGeometry = new THREE.BufferGeometry();
    dustGeometry.setAttribute("position", new THREE.BufferAttribute(dustPos, 3));
    const dustMaterial = new THREE.PointsMaterial({
      color: 0xe8ca65,
      size: 0.6,
      transparent: true,
      opacity: 0.5,
    });
    const dustPoints = new THREE.Points(dustGeometry, dustMaterial);
    scene.add(dustPoints);

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
      dustPoints.rotation.y -= 0.0003;

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

      dustGeometry.dispose();
      dustMaterial.dispose();

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
