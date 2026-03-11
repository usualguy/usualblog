const plantEmojis = ['🌱', '🌿', '🍃', '🌲', '🌳', '🌵'];

export function TitleEmojiSystem() {
  var titleLink = document.querySelector('.page-title a');
  if (!titleLink) return;
  
  // Create emoji container
  var container = document.createElement('div');
  container.className = 'title-emoji-container';
  container.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:-1;';
  titleLink.style.position = 'relative';
  titleLink.appendChild(container);
  
  var rect = titleLink.getBoundingClientRect();
  var centerX = rect.width / 2;
  var centerY = rect.height / 2;
  var radiusX = rect.width * 0.7;
  var radiusY = rect.height * 0.7;
  var emojiCount = 180;
  var emojis = [];
  
  function getEllipsePosition() {
    var angle = Math.random() * Math.PI * 2;
    var r = Math.sqrt(Math.random()) * 0.9;
    return {
      x: centerX + r * radiusX * Math.cos(angle),
      y: centerY + r * radiusY * Math.sin(angle)
    };
  }
  
  // Create all emojis
  for (var i = 0; i < emojiCount; i++) {
    var emoji = document.createElement('div');
    emoji.className = 'title-emoji';
    emoji.textContent = plantEmojis[Math.floor(Math.random() * plantEmojis.length)];
    var size = Math.random() * 6 + 10;
    emoji.style.fontSize = size + 'px';
    emoji.style.position = 'absolute';
    emoji.style.opacity = '0.7';
    emoji.style.transition = 'opacity 0.5s ease';
    var pos = getEllipsePosition();
    emoji.style.left = (pos.x - size/2) + 'px';
    emoji.style.top = (pos.y - size/2) + 'px';
    container.appendChild(emoji);
    emojis.push(emoji);
  }
  
  // Lifecycle - respawn random emojis
  setInterval(function() {
    var count = Math.floor(Math.random() * 4) + 3;
    for (var j = 0; j < count; j++) {
      var idx = Math.floor(Math.random() * emojis.length);
      var e = emojis[idx];
      if (e) {
        e.style.opacity = '0';
        setTimeout(function() {
          e.textContent = plantEmojis[Math.floor(Math.random() * plantEmojis.length)];
          var s = parseFloat(e.style.fontSize) || 12;
          var p = getEllipsePosition();
          e.style.left = (p.x - s/2) + 'px';
          e.style.top = (p.y - s/2) + 'px';
          e.style.opacity = '0.7';
        }, 500);
      }
    }
  }, 800);
  
  console.log('Title emoji system initialized with ' + emojiCount + ' emojis');
}

// Auto-initialize on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', TitleEmojiSystem);
} else {
  TitleEmojiSystem();
}
