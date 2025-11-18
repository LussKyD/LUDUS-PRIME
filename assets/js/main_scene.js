// main_scene.js — lightweight Three.js control-room concept
// Uses the global THREE loaded from CDN

let scene, camera, renderer, particleSystem, globe;
const clock = new THREE.Clock();

function init() {
  scene = new THREE.Scene();
  const container = document.getElementById('canvas-container');

  // camera
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 2000);
  camera.position.set(0, 0, 18);

  // renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio || 1);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.domElement.style.display = 'block';
  container.appendChild(renderer.domElement);

  // lights
  const ambient = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambient);
  const gold = new THREE.PointLight(0xFFD700, 1.2, 100);
  gold.position.set(10, 10, 10);
  scene.add(gold);

  // globe (wireframe low-poly)
  const geo = new THREE.IcosahedronGeometry(3.4, 2);
  const mat = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true, opacity: 0.18, transparent: true });
  globe = new THREE.Mesh(geo, mat);
  scene.add(globe);

  // particle field
  const particleCount = 4000;
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    positions[i*3] = (Math.random() - 0.5) * 60;
    positions[i*3 + 1] = (Math.random() - 0.5) * 30;
    positions[i*3 + 2] = (Math.random() - 0.5) * 200 - 20;
  }
  const bufferGeo = new THREE.BufferGeometry();
  bufferGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const pMat = new THREE.PointsMaterial({ size: 0.08, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, color: 0x66ff66 });
  particleSystem = new THREE.Points(bufferGeo, pMat);
  scene.add(particleSystem);

  window.addEventListener('resize', onWindowResize);
  animate();
}

function animate(){
  requestAnimationFrame(animate);
  const dt = clock.getDelta();

  // rotate globe
  if (globe) globe.rotation.y += 0.08 * dt;

  // move particles toward camera and loop
  const pos = particleSystem.geometry.attributes.position.array;
  for (let i = 2; i < pos.length; i += 3) {
    pos[i] += 40 * dt;
    if (pos[i] > 40) pos[i] = -140;
  }
  particleSystem.geometry.attributes.position.needsUpdate = true;

  // slow camera orbit
  const t = clock.getElapsedTime() * 0.15;
  camera.position.x = Math.sin(t) * 18;
  camera.position.z = Math.cos(t) * 18;
  camera.lookAt(0, 0, 0);

  renderer.render(scene, camera);
}

function onWindowResize(){
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// init after DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
