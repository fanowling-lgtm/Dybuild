const db = firebase.database();
const others = {};

function startNetworking() {
  setInterval(syncPlayer, 100);
}

function syncPlayer() {
  db.ref("players/" + player.id).set(player.pos);
}

db.ref("players").on("value", snap => {
  const data = snap.val() || {};
  for (let id in data) {
    if (id === player.id) continue;
    if (!others[id]) others[id] = createAvatar();
    others[id].position.set(data[id].x, data[id].y, data[id].z);
  }
});
