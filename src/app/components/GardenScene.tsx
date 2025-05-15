"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export type GardenSceneProps = {
  zoom: number;
  theme?: 'spring' | 'summer' | 'fall' | 'winter' | 'night';
};

const GardenScene: React.FC<GardenSceneProps> = ({ zoom, theme = 'spring' }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const zoomRef = useRef<number>(zoom);
  const [sceneReady, setSceneReady] = useState(false);

  useEffect(() => {
    zoomRef.current = zoom;
  }, [zoom]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let frameId: number;

    scene = new THREE.Scene();
    const backgroundTexture = new THREE.CanvasTexture(generateAquarelleTextureWithPaper(theme));
    backgroundTexture.wrapS = THREE.RepeatWrapping;
    backgroundTexture.wrapT = THREE.RepeatWrapping;
    scene.background = backgroundTexture;

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 45, 100);
    camera.lookAt(0, 0, 0);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.3);
    directionalLight.position.set(0, 50, 50);
    scene.add(ambientLight, directionalLight);

    const trunk = new THREE.Mesh(
      new THREE.CylinderGeometry(1.2, 1.8, 15, 32),
      new THREE.MeshStandardMaterial({ color: 0x6e4b1f })
    );
    trunk.position.set(0, -3, 0);
    scene.add(trunk);

    const leaves = new THREE.Mesh(
      new THREE.SphereGeometry(12, 48, 48),
      new THREE.MeshStandardMaterial({
        color: 0x3db8a0,
        transparent: true,
        opacity: 0.85,
        roughness: 0.5,
        emissive: 0x000000,
        emissiveIntensity: 0.3
      })
    );
    leaves.position.set(0, 15, 0);
    scene.add(leaves);

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const onMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(leaves);
      (leaves.material as THREE.MeshStandardMaterial).emissiveIntensity = intersects.length > 0 ? 0.8 : 0.3;
    };
    window.addEventListener("mousemove", onMouseMove);

    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(200, 200, 64, 64),
      new THREE.MeshStandardMaterial({
        color: 0x3db8a0,
        roughness: 1,
        metalness: 0,
        side: THREE.DoubleSide,
      })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -8;

    const pos = ground.geometry.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const y = Math.sin(i / 5) * 0.5;
      pos.setY(i, y);
    }
    ground.geometry.computeVertexNormals();
    scene.add(ground);

    const seasonalGroup = new THREE.Group();
    const petalThemes: Record<string, number[]> = {
      spring: [0xffb6c1, 0xfadadd, 0xffe1f0],
      summer: [0xffd700, 0xffa07a, 0xffdab9],
      fall: [0xd4af37, 0xff8c00, 0xcd853f],
      winter: [0xe0f7fa, 0xd0f0ff, 0xb0c4de],
      night: [0x0f9d91, 0x3db8a0, 0x00747a]
    };

    const colors = petalThemes[theme] ?? petalThemes.spring;
    for (let i = 0; i < 80; i++) {
      const petal = new THREE.Mesh(
        new THREE.CircleGeometry(0.5, 6),
        new THREE.MeshBasicMaterial({
          color: colors[Math.floor(Math.random() * colors.length)],
          transparent: true,
          opacity: 0.35,
          side: THREE.DoubleSide,
        })
      );
      petal.position.set((Math.random() - 0.5) * 120, Math.random() * 30 + 5, (Math.random() - 0.5) * 120);
      petal.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      seasonalGroup.add(petal);
    }
    scene.add(seasonalGroup);

    const butterfly = new THREE.Mesh(
      new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(-1, 2, 0),
        new THREE.Vector3(1, 2, 0)
      ]),
      new THREE.MeshBasicMaterial({ color: 0xd4af37, side: THREE.DoubleSide })
    );
    scene.add(butterfly);

    const clock = new THREE.Clock();
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      leaves.rotation.y += 0.0015;
      seasonalGroup.children.forEach((child, idx) => {
        child.rotation.z += 0.001 * (idx + 1);
        child.position.y -= 0.02;
        if (child.position.y < -10) child.position.y = 30;
      });

      butterfly.position.set(Math.sin(t) * 22, Math.sin(t * 2) * 4 - 0.5, Math.cos(t) * 21);
      butterfly.rotation.y = t * 0.2;

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    setSceneReady(true);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(frameId);
      if (mount.firstChild) mount.removeChild(mount.firstChild);
    };
  }, [theme]);

  const generateAquarelleTextureWithPaper = (theme: string): HTMLCanvasElement => {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Canvas context not available");

    ctx.fillStyle = "#f5f5f5";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 0.2;

    for (let i = 0; i < 5000; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const r = Math.random() * 1.4;
      ctx.fillStyle = `rgba(0, 0, 0, ${Math.random() * 0.1})`;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.globalAlpha = 1.0;
    const splotch = (x: number, y: number, r: number, color: string) => {
      const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
      grad.addColorStop(0, color);
      grad.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    };

    const palettes: Record<string, string[]> = {
      spring: ["#0f9d91", "#3db8a0", "#00747a", "#d4af37"],
      summer: ["#fff7e0", "#ffe0b2", "#ffd580"],
      fall: ["#f5deb3", "#d4af37", "#f0c987"],
      winter: ["#d0f0ff", "#e0f7fa", "#f0ffff"],
      night: ["#0f9d91", "#3db8a0", "#00747a"]
    };
    const palette = palettes[theme] || palettes.spring;
    for (let i = 0; i < palette.length; i++) {
      splotch(100 + i * 80, 120 + i * 40, 100 - i * 15, palette[i]);
    }

    return canvas;
  };

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        opacity: sceneReady ? 1 : 0,
        transition: "opacity 0.5s ease-out",
        pointerEvents: "none",
      }}
    />
  );
};

export default GardenScene;
