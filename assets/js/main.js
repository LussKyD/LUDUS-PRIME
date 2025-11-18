
async function loadFeed() {
  const res = await fetch("feed.json");
  const data = await res.json();
  const c = document.getElementById("feed-container");
  c.innerHTML = data.items.map(i => `
    <div class="feed-item">
      <strong>${i.title}</strong><br>${i.time}
    </div>
  `).join('');
}
loadFeed();
