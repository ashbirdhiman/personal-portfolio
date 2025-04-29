import {
  Component,
  ElementRef,
  OnInit,
  AfterViewInit,
  ViewChild,
  HostListener,
  OnDestroy,
} from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-background-scene',
  standalone: true,
  template: '<div #rendererContainer class="renderer-container"></div>',
  styles: [
    `
      .renderer-container {
        position: fixed; /* Fixed positioning */
        top: 0;
        left: 0;
        width: 100vw; /* Full viewport width */
        height: 100vh; /* Full viewport height */
        z-index: 10; /* Lower z-index so content appears above */
        overflow: hidden;
      }
    `,
  ],
})
export class BackgroundSceneComponent implements OnInit, AfterViewInit {
  @ViewChild('rendererContainer') rendererContainer!: ElementRef;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private particles: THREE.Points[] = [];
  private clock = new THREE.Clock();
  private animationFrameId: number | null = null;

  constructor() {}

  ngOnInit(): void {
    // Initialize Three.js components
    this.initScene();
  }

  ngAfterViewInit(): void {
    // Add renderer to the DOM
    this.setupRenderer();

    // Add elements to the scene
    this.createParticles();

    // Start animation loop
    this.animate();
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
  }

  private initScene(): void {
    // Create scene
    this.scene = new THREE.Scene();

    // Create camera
    const aspectRatio = window.innerWidth / window.innerHeight;
    this.camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
    this.camera.position.z = 30;

    // Add ambient light - increased intensity for better contrast
    const ambientLight = new THREE.AmbientLight(0x404040, 3);
    this.scene.add(ambientLight);
  }

  private setupRenderer(): void {
    // Create renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    // this.renderer.setClearColor(0x061428, 1); // Darkened background for better text contrast

    // // Append to container
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
  }

  private createParticles(): void {
    // Create particles
    const particleCount = window.innerWidth <= 768 ? 100 : 500;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSizes = new Float32Array(particleCount);

    // Set random positions
    for (let i = 0; i < particleCount * 3; i += 1) {
      particlePositions[i] = (Math.random() - 0.5) * 100;
      particlePositions[i + 1] = (Math.random() - 0.5) * 100;
      particlePositions[i + 2] = (Math.random() - 0.5) * 100;

      particleSizes[i / 3] = Math.random() * 2;
    }

    particleGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(particlePositions, 3)
    );
    particleGeometry.setAttribute(
      'size',
      new THREE.BufferAttribute(particleSizes, 1)
    );

    // Create point materials with different colors - increase opacity and size
    const particleMaterial1 = new THREE.PointsMaterial({
      color: 0xffd700,
      size: 0.7, // Increased from 0.5
      transparent: true,
      opacity: 0.9, // Increased from 0.8
      blending: THREE.AdditiveBlending,
    });

    const particleMaterial2 = new THREE.PointsMaterial({
      color: 0xffd700,
      size: 0.4, // Increased from 0.3
      transparent: true,
      opacity: 0.7, // Increased from 0.6
      blending: THREE.AdditiveBlending,
    });

    // Create point clouds
    const pointCloud1 = new THREE.Points(
      particleGeometry.clone(),
      particleMaterial1
    );
    const pointCloud2 = new THREE.Points(
      particleGeometry.clone(),
      particleMaterial2
    );

    this.particles.push(pointCloud1, pointCloud2);
    this.scene.add(pointCloud1, pointCloud2);

    // Create a larger central particle cluster - fewer particles for better contrast
    const centralParticleCount = 200; // Reduced from 300
    const centralGeometry = new THREE.BufferGeometry();
    const centralPositions = new Float32Array(centralParticleCount * 3);

    for (let i = 0; i < centralParticleCount * 3; i += 3) {
      const radius = 15 * Math.random();
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      centralPositions[i] = radius * Math.sin(phi) * Math.cos(theta);
      centralPositions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      centralPositions[i + 2] = radius * Math.cos(phi);
    }

    centralGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(centralPositions, 3)
    );

    // const centralMaterial = new THREE.PointsMaterial({
    //   color: 0x64ffda,
    //   size: 0.7,
    //   transparent: true,
    //   opacity: 0.7, // Reduced from 0.8 for better text readability
    //   blending: THREE.AdditiveBlending,
    // });

    // const centralCloud = new THREE.Points(centralGeometry, centralMaterial);
    // this.particles.push(centralCloud);
    // this.scene.add(centralCloud);
  }

  private animate(): void {
    this.animationFrameId = requestAnimationFrame(() => this.animate());

    const elapsedTime = this.clock.getElapsedTime();

    // Rotate particles
    if (this.particles.length > 0) {
      this.particles[0].rotation.y = elapsedTime * 0.05;
      this.particles[0].rotation.x = elapsedTime * 0.03;

      this.particles[1].rotation.y = -elapsedTime * 0.04;
      this.particles[1].rotation.z = elapsedTime * 0.02;

      if (this.particles[2]) {
        this.particles[2].rotation.y = elapsedTime * 0.07;
        this.particles[2].rotation.z = elapsedTime * 0.05;
      }
    }

    // Update camera position slightly to create a subtle floating effect
    this.camera.position.x = Math.sin(elapsedTime * 0.1) * 2;
    this.camera.position.y = Math.cos(elapsedTime * 0.1) * 2;
    this.camera.lookAt(0, 0, 0);

    // Render scene
    this.renderer.render(this.scene, this.camera);
  }

  ngOnDestroy(): void {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }

    // Clean up resources
    this.particles.forEach((particle) => {
      this.scene.remove(particle);
      particle.geometry.dispose();
      (particle.material as THREE.Material).dispose();
    });

    this.renderer.dispose();
  }
}
