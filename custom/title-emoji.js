(function() {
  const plantEmojis = ['🌱', '🌿', '🍃', '🌲', '🌳', '🌵'];
  
  function spawnEmojisAroundTitle() {
    const titleLink = document.querySelector('.page-title a');
    if (!titleLink) return;
    
    // Wrap existing text in a span with higher z-index
    const textContent = titleLink.textContent;
    titleLink.innerHTML = '';
    const textSpan = document.createElement('span');
    textSpan.className = 'title-text';
    textSpan.textContent = textContent;
    titleLink.appendChild(textSpan);
    
    // Create emoji container
    const container = document.createElement('div');
    container.className = 'title-emoji-container';
    titleLink.appendChild(container);
    
    const rect = titleLink.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const radiusX = rect.width * 0.7;
    const radiusY = rect.height * 0.7;
    const emojiCount = 180;
    const emojis = [];
    
    function getEllipsePosition() {
      const angle = Math.random() * Math.PI * 2;
      const r = Math.sqrt(Math.random()) * 0.9;
      return {
        x: centerX + r * radiusX * Math.cos(angle),
        y: centerY + r * radiusY * Math.sin(angle)
      };
    }
    
    // Create all emojis
    for (let i = 0; i < emojiCount; i++) {
      const emoji = document.createElement('div');
      emoji.className = 'title-emoji';
      emoji.textContent = plantEmojis[Math.floor(Math.random() * plantEmojis.length)];
      const size = Math.random() * 6 + 10;
      emoji.style.fontSize = size + 'px';
      const pos = getEllipsePosition();
      emoji.style.left = (pos.x - size/2) + 'px';
      emoji.style.top = (pos.y - size/2) + 'px';
      container.appendChild(emoji);
      emojis.push(emoji);
    }
    
    // Lifecycle - respawn random emojis
    setInterval(() => {
      const count = Math.floor(Math.random() * 4) + 3;
      for (let i = 0; i < count; i++) {
        const idx = Math.floor(Math.random() * emojis.length);
        const emoji = emojis[idx];
        if (emoji) {
          emoji.classList.add('fading');
          setTimeout(() => {
            emoji.textContent = plantEmojis[Math.floor(Math.random() * plantEmojis.length)];
            const size = parseFloat(emoji.style.fontSize) || 12;
            const pos = getEllipsePosition();
            emoji.style.left = (pos.x - size/2) + 'px';
            emoji.style.top = (pos.y - size/2) + 'px';
            emoji.classList.remove('fading');
          }, 500);
        }
      }
    }, 800);
    
    console.log('Title emoji system initialized with ' + emojiCount + ' emojis');
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', spawnEmojisAroundTitle);
  } else {
    spawnEmojisAroundTitle();
  }
})();
