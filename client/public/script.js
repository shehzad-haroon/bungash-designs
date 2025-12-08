// ============================================
// GSAP Animations & Interactions (copied from root script.js)
// ============================================

// Register GSAP Plugins
try{
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}catch(e){
  // when loading in SSR or if GSAP isn't ready yet, this will fail silently
}

// Initialization
document.addEventListener('DOMContentLoaded', function() {
    initLoader();
    initCursor();
    initNavigation();
    initHeroAnimations();
    initScrollAnimations();
    initCounters();
    initProductFilters();
    initTestimonialSlider();
    initContactForm();
    initSmoothScroll();
});

function initLoader() {
    const loader = document.querySelector('.loader');
    if(!loader) return;
    setTimeout(() => {
        loader.classList.add('hidden');
        setTimeout(() => { animateHeroContent(); }, 100);
    }, 1200);
}

function initCursor() {
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    if(!cursor || !cursorFollower) return;
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX; mouseY = e.clientY;
        cursor.style.left = mouseX + 'px'; cursor.style.top = mouseY + 'px';
    });
    function animateFollower(){ followerX += (mouseX - followerX) * 0.1; followerY += (mouseY - followerY) * 0.1; cursorFollower.style.left = followerX + 'px'; cursorFollower.style.top = followerY + 'px'; requestAnimationFrame(animateFollower); }
    animateFollower();
    const interactiveElements = document.querySelectorAll('a, button, .product-card, .gallery-item');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => { cursor.style.transform = 'translate(-50%, -50%) scale(1.5)'; cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)'; });
        el.addEventListener('mouseleave', () => { cursor.style.transform = 'translate(-50%, -50%) scale(1)'; cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)'; });
    });
}

function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const hamburger = document.querySelector('.hamburger');
    window.addEventListener('scroll', () => { if (window.scrollY > 100) navbar?.classList.add('scrolled'); else navbar?.classList.remove('scrolled'); });
    window.addEventListener('scroll', () => {
        let current = ''; const sections = document.querySelectorAll('section[id]');
        sections.forEach(section => { const sectionTop = section.offsetTop; if (scrollY >= (sectionTop - 200)) { current = section.getAttribute('id'); } });
        navLinks.forEach(link => { link.classList.remove('active'); if (link.getAttribute('href')?.slice(1) === current) link.classList.add('active'); });
    });
    hamburger?.addEventListener('click', () => { const navLinksContainer = document.querySelector('.nav-links'); navLinksContainer?.classList.toggle('active'); hamburger.classList.toggle('active'); });
}

function initHeroAnimations() {
    try{
      gsap.to('.hero-bg', { yPercent: 30, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
    }catch(e){}
}

function animateHeroContent(){
    try{
      const tl = gsap.timeline();
      tl.from('.hero-badge', { opacity:0, y:30, duration:0.8, ease:'power3.out' });
      tl.from('.hero-title .line', { opacity:0, y:100, duration:1, stagger:0.2, ease:'power4.out' }, '-=0.4');
      tl.from('.hero-subtitle', { opacity:0, y:30, duration:0.8, ease:'power3.out' }, '-=0.5');
      tl.from('.hero-buttons .btn', { opacity:0, y:30, duration:0.6, stagger:0.15, ease:'power3.out' }, '-=0.4');
      tl.from('.stat-item', { opacity:0, y:30, duration:0.6, stagger:0.15, ease:'power3.out' }, '-=0.3');
      tl.from('.scroll-indicator', { opacity:0, y:20, duration:0.6, ease:'power3.out' }, '-=0.3');
    }catch(e){}
}

function initScrollAnimations(){ try{
  gsap.utils.toArray('.section-header').forEach(header => { gsap.from(header.children, { opacity:0, y:60, duration:1, stagger:0.2, ease:'power3.out', scrollTrigger:{ trigger: header, start:'top 80%', end:'bottom 20%' } }); });
  gsap.from('.about-image', { opacity:0, x:-100, duration:1.2, ease:'power3.out', scrollTrigger:{ trigger: '.about-content', start:'top 70%' } });
  gsap.from('.about-text', { opacity:0, x:100, duration:1.2, ease:'power3.out', scrollTrigger:{ trigger: '.about-content', start:'top 70%' } });
  gsap.from('.floating-card', { opacity:0, y:50, duration:1, delay:0.5, ease:'back.out(1.7)', scrollTrigger:{ trigger: '.about-content', start:'top 70%' } });
  gsap.from('.feature-card', { opacity:0, y:50, duration:0.8, stagger:0.15, ease:'power3.out', scrollTrigger:{ trigger: '.features-grid', start:'top 80%' } });
  gsap.utils.toArray('.feature-item').forEach((item, index) => {
    const isReverse = item.classList.contains('reverse');
    gsap.from(item.querySelector('.feature-visual'), { opacity:0, x:isReverse?100:-100, duration:1.2, ease:'power3.out', scrollTrigger:{ trigger:item, start:'top 70%' } });
    gsap.from(item.querySelector('.feature-content'), { opacity:0, x:isReverse?-100:100, duration:1.2, ease:'power3.out', scrollTrigger:{ trigger:item, start:'top 70%' } });
  });
  gsap.from('.product-card', { opacity:0, y:80, duration:0.8, stagger:0.1, ease:'power3.out', scrollTrigger:{ trigger: '.products-grid', start:'top 70%' } });
  gsap.from('.gallery-item', { opacity:0, scale:0.8, duration:0.8, stagger:0.1, ease:'back.out(1.7)', scrollTrigger:{ trigger: '.gallery-grid', start:'top 70%' } });
  gsap.from('.testimonial-card', { opacity:0, y:60, duration:0.8, stagger:0.2, ease:'power3.out', scrollTrigger:{ trigger: '.testimonials-slider', start:'top 70%' } });
  gsap.from('.cta-content', { opacity:0, y:60, duration:1, ease:'power3.out', scrollTrigger:{ trigger: '.cta-section', start:'top 70%' } });
  gsap.from('.contact-info', { opacity:0, x:-80, duration:1, ease:'power3.out', scrollTrigger:{ trigger: '.contact-wrapper', start:'top 70%' } });
  gsap.from('.contact-form', { opacity:0, x:80, duration:1, ease:'power3.out', scrollTrigger:{ trigger: '.contact-wrapper', start:'top 70%' } });
  gsap.from('.footer-column', { opacity:0, y:40, duration:0.8, stagger:0.15, ease:'power3.out', scrollTrigger:{ trigger: '.footer-content', start:'top 85%' } });
}catch(e){}
}

function initCounters(){ const counters = document.querySelectorAll('.stat-number'); counters.forEach(counter => { const target = parseInt(counter.getAttribute('data-count')); ScrollTrigger.create({ trigger: counter, start: 'top 80%', onEnter: () => animateCounter(counter, target) }); }); }
function animateCounter(element, target){ try{ gsap.to(element, { innerText: target, duration:2, ease:'power2.out', snap:{ innerText:1 }, onUpdate:function(){ element.innerText = Math.ceil(element.innerText); } }); }catch(e){}
}

function initProductFilters(){ const filterButtons = document.querySelectorAll('.filter-btn'); const productCards = document.querySelectorAll('.product-card'); filterButtons.forEach(button => { button.addEventListener('click', () => { const filter = button.getAttribute('data-filter'); filterButtons.forEach(btn => btn.classList.remove('active')); button.classList.add('active'); productCards.forEach((card, index) => { const categories = card.getAttribute('data-category'); if (filter === 'all' || categories.includes(filter)) { gsap.to(card, { opacity:1, scale:1, duration:0.5, delay: index * 0.05, ease:'power2.out', onStart: () => { card.style.display = 'block'; } }); } else { gsap.to(card, { opacity:0, scale:0.8, duration:0.3, ease:'power2.in', onComplete: () => { card.style.display = 'none'; } }); } }); }); }); }

function initTestimonialSlider(){ const slider = document.querySelector('.testimonials-slider'); const dotsContainer = document.querySelector('.slider-dots'); const cards = document.querySelectorAll('.testimonial-card'); if (!slider || cards.length === 0) return; let currentIndex = 0; const totalSlides = Math.ceil(cards.length / 3); for (let i=0;i<totalSlides;i++){ const dot = document.createElement('div'); dot.classList.add('dot'); if(i===0) dot.classList.add('active'); dot.addEventListener('click', ()=> goToSlide(i)); dotsContainer.appendChild(dot); } function goToSlide(index){ const dots = document.querySelectorAll('.slider-dots .dot'); dots.forEach(dot => dot.classList.remove('active')); dots[index].classList.add('active'); currentIndex = index; } setInterval(()=>{ currentIndex = (currentIndex+1) % totalSlides; goToSlide(currentIndex); }, 5000); }

function initContactForm(){ const form = document.querySelector('.contact-form'); if(!form) return; form.addEventListener('submit', (e)=>{ e.preventDefault(); const formData = new FormData(form); gsap.to(form, { opacity:0.5, duration:0.3, onComplete: ()=>{ showSuccessMessage(); form.reset(); gsap.to(form, { opacity:1, duration:0.3 }); } }); }); }
function showSuccessMessage(){ const message = document.createElement('div'); message.style.cssText = `position: fixed; top:50%; left:50%; transform: translate(-50%,-50%); background: linear-gradient(135deg, #667eea, #764ba2); color:white; padding:30px 50px; border-radius:15px; z-index:10000; font-size:18px; font-weight:600; text-align:center;`; message.innerText = '✓ Message sent successfully!'; document.body.appendChild(message); gsap.from(message, { opacity:0, scale:0.5, duration:0.5, ease:'back.out(1.7)'}); setTimeout(()=>{ gsap.to(message, { opacity:0, scale:0.5, duration:0.3, onComplete: ()=> message.remove() }); }, 3000); }

function initSmoothScroll(){ const links = document.querySelectorAll('a[href^="#"]'); links.forEach(link => { link.addEventListener('click', (e)=>{ const href = link.getAttribute('href'); if(!href || href === '#' ) return; e.preventDefault(); const target = document.querySelector(href); if(!target) return; gsap.to(window, { duration:1.5, scrollTo:{ y: target, offsetY: 80 }, ease:'power3.inOut' }); }); }); }

// some small UI helpers
const progressBar = document.createElement('div'); progressBar.style.cssText = `position: fixed; top: 0; left: 0; height: 3px; background: linear-gradient(90deg, #667eea, #764ba2); z-index: 10000; transform-origin: left; transform: scaleX(0);`; document.body.appendChild(progressBar);
window.addEventListener('scroll', ()=>{ const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)); try{ gsap.to(progressBar, { scaleX: scrollPercent, duration: 0.1 }); }catch(e){} });
window.addEventListener('resize', ()=>{ try{ ScrollTrigger.refresh(); }catch(e){} });

console.log('%c🎨 Premium Bungash Designs Website ', 'background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 10px 20px; font-size: 16px; font-weight: bold;');
console.log('%cBuilt with GSAP, Modern JavaScript, and Love ❤️', 'color: #667eea; font-size: 12px;');
