import { Component, ElementRef, ViewChild, AfterViewInit, EventEmitter, Output } from '@angular/core';
import * as THREE from 'three';

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
  private cube!: THREE.Mesh;

  ngAfterViewInit(): void {
    this.initScene();
  }

  private initScene(): void {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.canvasContainer.nativeElement.appendChild(this.renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0x0077ff });
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);

    // Lights
    const light = new THREE.AmbientLight(0xffffff, 1);
    this.scene.add(light);

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 5;

    // Start rendering loop
    this.animate();

    // Emit event when the scene is ready
    setTimeout(() => {
      this.sceneLoaded.emit(true);
    }, 100); // Delay to ensure rendering starts
  }

  private animate(): void {
    requestAnimationFrame(() => this.animate());
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
  }
}
