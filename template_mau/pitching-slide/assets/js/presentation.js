const s = document.getElementById('slidesWrapper'),
      sl = document.querySelectorAll('.slide'),
      dc = document.getElementById('dots'),
      ce = document.getElementById('counter'),
      ab = document.getElementById('autoPlayBtn'),
      db = document.getElementById('demo-bar'),
      dp = document.getElementById('demo-progress'),
      fsBtn = document.getElementById('fullscreenBtn');

let c = 0,
    t = sl.length,
    ap = false,
    ai = null;

function initDots() {
  if (!dc) return;
  dc.innerHTML = '';
  for (let i = 0; i < t; i++) {
    const d = document.createElement('div');
    d.className = 'slide-dot' + (i === 0 ? ' active' : '');
    d.setAttribute('data-index', i);
    d.title = `Slide ${i + 1}`;
    d.addEventListener('click', () => goSlide(i));
    dc.appendChild(d);
  }
}
initDots();

function goSlide(n) {
  if (n < 0 || n >= t) return;
  c = n;
  s.style.transform = `translateX(-${c * 100}vw)`;
  updateUI();
}

function nextSlide() {
  if (c < t - 1) goSlide(c + 1);
  else if (ap) stopAutoPlay();
}

function prevSlide() {
  if (c > 0) goSlide(c - 1);
}

function updateUI() {
  document.querySelectorAll('.slide-dot').forEach((d, i) => d.classList.toggle('active', i === c));
  if (ce) ce.textContent = `${c + 1} / ${t}`;
  sl.forEach((s, i) => s.classList.toggle('active', i === c));
}

function toggleAutoPlay() {
  ap = !ap;
  ap ? startAutoPlay() : stopAutoPlay();
}

function startAutoPlay() {
  if (!ab) return;
  ab.textContent = '⏸ Pause';
  ab.classList.add('playing');
  if (db) db.style.display = 'block';
  let p = 0;
  const sd = 6000,
        iv = 50,
        st = (iv / sd) * 100;
  ai = setInterval(() => {
    p += st;
    if (p >= 100) {
      p = 0;
      if (c < t - 1) {
        goSlide(c + 1);
      } else {
        stopAutoPlay();
        goSlide(0);
        return;
      }
    }
    if (dp) dp.style.width = p + '%';
  }, iv);
}

function stopAutoPlay() {
  ap = false;
  if (ab) {
    ab.textContent = '▶ Auto';
    ab.classList.remove('playing');
  }
  if (db) db.style.display = 'none';
  if (dp) dp.style.width = '0%';
  if (ai) {
    clearInterval(ai);
    ai = null;
  }
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => {
      console.warn(`Error attempting to enable fullscreen: ${err.message}`);
    });
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

// ─── Dark Mode Toggle ───
const themeBtn = document.getElementById('themeBtn');

function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    setTheme('dark');
  } else {
    setTheme('light');
  }
}

function setTheme(mode) {
  document.documentElement.setAttribute('data-theme', mode);
  localStorage.setItem('theme', mode);
  if (themeBtn) {
    themeBtn.textContent = mode === 'dark' ? '☀️' : '🌙';
    themeBtn.title = mode === 'dark' ? 'Chuyển sang Giao diện Sáng (Phím D)' : 'Chuyển sang Giao diện Tối (Phím D)';
  }
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  setTheme(current === 'dark' ? 'light' : 'dark');
}

initTheme();

document.addEventListener('keydown', (e) => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

  if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'PageDown') {
    e.preventDefault();
    if (ap) stopAutoPlay();
    nextSlide();
  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') {
    e.preventDefault();
    if (ap) stopAutoPlay();
    prevSlide();
  } else if (e.key === 'Home') {
    e.preventDefault();
    if (ap) stopAutoPlay();
    goSlide(0);
  } else if (e.key === 'End') {
    e.preventDefault();
    if (ap) stopAutoPlay();
    goSlide(t - 1);
  } else if (e.key === ' ' || e.key === 'Space') {
    e.preventDefault();
    toggleAutoPlay();
  } else if (e.key === 'f' || e.key === 'F') {
    e.preventDefault();
    toggleFullscreen();
  } else if (e.key === 'd' || e.key === 'D') {
    e.preventDefault();
    toggleTheme();
  } else if (e.key >= '1' && e.key <= '9') {
    const idx = parseInt(e.key, 10) - 1;
    if (idx < t) {
      if (ap) stopAutoPlay();
      goSlide(idx);
    }
  }
});

let tsx = 0, tex = 0;
document.addEventListener('touchstart', (e) => {
  tsx = e.changedTouches[0].screenX;
}, { passive: true });

document.addEventListener('touchend', (e) => {
  tex = e.changedTouches[0].screenX;
  const d = tsx - tex;
  if (Math.abs(d) > 50) {
    if (ap) stopAutoPlay();
    if (d > 0) nextSlide();
    else prevSlide();
  }
}, { passive: true });

// Initialize active slide
sl[0].classList.add('active');

// Window global bindings
window.goSlide = goSlide;
window.nextSlide = nextSlide;
window.prevSlide = prevSlide;
window.toggleAutoPlay = toggleAutoPlay;
window.toggleFullscreen = toggleFullscreen;
window.toggleTheme = toggleTheme;
