// NL: Kleine interacties (jaar updaten, mobiel menu, smooth scroll)
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('primary-nav');
if (toggle && nav){
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    nav.style.display = open ? 'none' : 'flex';
  });
}

// Smooth scroll voor anchorlinks
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(l=>{
  l.addEventListener('click', e => {
    const id = l.getAttribute('href');
    if (id.length > 1){
      const target = document.querySelector(id);
      if (target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth'});
        if (window.innerWidth < 841 && nav){ nav.style.display='none'; toggle.setAttribute('aria-expanded','false'); }
      }
    }
  });
});
