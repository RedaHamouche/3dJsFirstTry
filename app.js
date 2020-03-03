// Variables for setup;

let container;
let camera;
let renderer;
let scene;
let universe;
let viewZ = 0;

function init() {
  container = document.querySelector(".scene");

  // Create scene
  scene = new THREE.Scene();

  const fov = 50;
  const aspect = container.clientWidth / container.clientHeight;
  const near = 0.1;
  const far = 500;

  // Camera setup
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

  camera.position.set(-8, 3, 25);

  const ambient = new THREE.AmbientLight(0x404040, 2);

  scene.add(ambient);

  const light = new THREE.DirectionalLight(0xffffff, 5);
  light.position.set(-1, 30, 3);
  scene.add(light);

  // Renderer

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  container.appendChild(renderer.domElement);

  // Load Model

  let loader = new THREE.GLTFLoader();
  loader.load("scenes/scene.gltf", function(gltf) {
    scene.add(gltf.scene);
    universe = gltf.scene.children[0];
    animate();
  });
}

function animate() {
  requestAnimationFrame(animate);
  universe.rotation.z = viewZ;
  universe.rotation.y += 0.005;
  renderer.render(scene, camera);
}
addEventListener("mousemove", e => {
  viewZ += e.clientX / 10000;
  console.log("hi");
});

init();
console.log("linked");
