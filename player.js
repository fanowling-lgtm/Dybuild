const player = {
  id: null,
  pos: new THREE.Vector3(0, 2, 0),
  velY: 0
};

const keys = {};
window.onkeydown = e => keys[e.key] = true;
window.onkeyup = e => keys[e.key] = false;

function updatePlayer() {
  if (keys.w) player.pos.z -= 0.1;
  if (keys.s) player.pos.z += 0.1;
  if (keys.a) player.pos.x -= 0.1;
  if (keys.d) player.pos.x += 0.1;

  player.velY -= 0.01;
  player.pos.y += player.velY;

  if (player.pos.y < 2) {
    player.pos.y = 2;
    player.velY = 0;
  }

  if (keys[" "] && player.pos.y === 2) {
    player.velY = 0.2;
  }

  camera.position.copy(player.pos);
}
