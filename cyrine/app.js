// A lovely little page for Cyrine 💖
(function () {
  // --- floating hearts background ---
  const layer = document.getElementById("hearts");
  const emojis = ["💖", "💕", "💗", "🌸", "💞", "✨", "🌷", "💝"];
  const COUNT = 26;
  for (let i = 0; i < COUNT; i++) {
    const s = document.createElement("span");
    s.textContent = emojis[i % emojis.length];
    s.style.left = Math.random() * 100 + "vw";
    s.style.fontSize = 0.9 + Math.random() * 1.8 + "rem";
    const dur = 9 + Math.random() * 10;          // 9–19s rise
    s.style.animationDuration = dur + "s";
    s.style.animationDelay = -(Math.random() * dur) + "s"; // spread across screen at load
    layer.appendChild(s);
  }

  // --- surprise messages ---
  const lines = [
    "You make my world softer 🌸",
    "I'm so lucky it's you 🥰",
    "My heart picked you, and it was right 💘",
    "You + me = my favorite story 📖💕",
    "Every little thing about you, I adore 💖",
    "You're my today and all of my tomorrows 🌷",
    "Thinking of you makes me smile 😊💗",
    "Forever isn't long enough with you ✨",
  ];
  let i = 0;
  const btn = document.getElementById("loveBtn");
  const out = document.getElementById("surprise");

  const burst = () => {
    // a quick shower of hearts from the button
    const rect = btn.getBoundingClientRect();
    for (let k = 0; k < 8; k++) {
      const h = document.createElement("span");
      h.textContent = "💕";
      h.style.left = rect.left + rect.width / 2 + "px";
      h.style.top = rect.top + "px";
      h.style.position = "fixed";
      h.style.fontSize = "1.3rem";
      h.style.zIndex = 5;
      h.style.pointerEvents = "none";
      h.style.transition = "transform 1s ease-out, opacity 1s ease-out";
      document.body.appendChild(h);
      requestAnimationFrame(() => {
        const dx = (Math.random() - 0.5) * 200;
        const dy = -80 - Math.random() * 140;
        h.style.transform = `translate(${dx}px, ${dy}px) scale(1.4)`;
        h.style.opacity = "0";
      });
      setTimeout(() => h.remove(), 1100);
    }
  };

  btn.addEventListener("click", () => {
    out.style.opacity = "0";
    setTimeout(() => {
      out.textContent = lines[i % lines.length];
      out.style.opacity = "1";
      i++;
    }, 180);
    burst();
  });
})();
