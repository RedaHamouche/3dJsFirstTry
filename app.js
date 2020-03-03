// Variables for setup;

let container;
let camera;
let renderer;
let scene;
let universe;

function init() {
  container = document.querySelector(".scene");

  // Create scene
  scene = new THREE.Scene();

  const fov = 35;
  const aspect = container.clientWidth / container.clientHeight;
  const near = 0.1;
  const far = 500;

  // Camera setup
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

  camera.position.set(-50, 40, 350);

  // Renderer

  renderer = new THREE.WebGLRenderer({ antialias: true });

  // Load Model

  let loader = new THREE.GLTFLoader();
  loader.load("./3d/scene.gtlf", function(gltf) {
    scene.add(gltf.scene);
  });
}
