// SCROLL ANIMATION
const faders = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  faders.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});


// 3D USING THREE.JS
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

document.getElementById("three-container").appendChild(renderer.domElement);

// OBJECT
const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
const material = new THREE.MeshStandardMaterial({
  color: 0x00ffcc,
  wireframe: true
});

const object = new THREE.Mesh(geometry, material);
scene.add(object);

// LIGHT
const light = new THREE.PointLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);

camera.position.z = 5;

// ANIMATION
function animate() {
  requestAnimationFrame(animate);

  object.rotation.x += 0.01;
  object.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();


// SCROLL EFFECT ON 3D
window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  object.rotation.x = scroll * 0.001;
  object.rotation.y = scroll * 0.001;
});
