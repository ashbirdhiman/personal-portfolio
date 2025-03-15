import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  HostListener,
  EventEmitter,
  Output,
} from '@angular/core';
import * as THREE from 'three';
import { FontLoader, Font } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

@Component({
  selector: 'app-three-scene',
  templateUrl: './three-scene.component.html',
  styleUrls: ['./three-scene.component.css'],
})
export class ThreeSceneComponent implements AfterViewInit {
  @ViewChild('canvasContainer', { static: true }) canvasContainer!: ElementRef;
  @Output() sceneLoaded = new EventEmitter<boolean>();

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private torusKnot!: THREE.Mesh;

  ngAfterViewInit(): void {
    this.initScene();
  }

  private initScene(): void {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.renderer = new THREE.WebGLRenderer({ antialias: true });

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0x0a0a23); // Set the background color of the renderer
    this.canvasContainer.nativeElement.appendChild(this.renderer.domElement);

    const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16); // Create a torus knot geometry
    const material = new THREE.MeshStandardMaterial({ color: 0xff6347 }); // Change color to a visually appealing one
    this.torusKnot = new THREE.Mesh(geometry, material);
    this.scene.add(this.torusKnot);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    this.scene.add(pointLight);

    this.camera.position.z = 50; // Adjust camera position to fit the larger object

    // Load font and create text
    const loader = new FontLoader();
    loader.load('assets/fonts/helvetiker_regular.typeface.json', (font) => {
      this.createText(font, 'Java', -20, 20, 0);
      this.createText(font, 'AWS', 0, 20, 0);
      this.createText(font, 'Spring Boot', 20, 20, 0);
    });

    // Start rendering loop
    this.animate();

    // Emit event when the scene is ready
    setTimeout(() => {
      this.sceneLoaded.emit(true);
    }, 100); // Delay to ensure rendering starts
  }

  private createText(
    font: Font,
    text: string,
    x: number,
    y: number,
    z: number
  ): void {
    const textGeometry = new TextGeometry(text, {
      font: font,
      size: 5,
      depth: 1, // Use 'depth' instead of 'height'
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 1,
      bevelSize: 0.5,
      bevelOffset: 0,
      bevelSegments: 5,
    });
    const textMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    const textMesh = new THREE.Mesh(textGeometry, textMaterial);

    // Create balloon
    const balloonGeometry = new THREE.SphereGeometry(6, 32, 32);
    const balloonMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
    const balloonMesh = new THREE.Mesh(balloonGeometry, balloonMaterial);

    // Position text and balloon
    textMesh.position.set(x, y, z);
    balloonMesh.position.set(x, y - 10, z);

    this.scene.add(textMesh);
    this.scene.add(balloonMesh);
  }

  private animate(): void {
    requestAnimationFrame(() => this.animate());
    this.torusKnot.rotation.x += 0.01;
    this.torusKnot.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event): void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}
