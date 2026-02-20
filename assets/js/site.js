// ==========================================
// Scroll-triggered animations
// ==========================================
(function() {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  document.addEventListener('DOMContentLoaded', function() {
    // Observe all animate-on-scroll and stagger-children elements
    var targets = document.querySelectorAll('.animate-on-scroll, .stagger-children');
    targets.forEach(function(el) {
      observer.observe(el);
    });

    // Also auto-mark common card grids for stagger animation
    var grids = document.querySelectorAll('.services-grid, .spaces-list, .programs-grid, .stats-row');
    grids.forEach(function(grid) {
      if (!grid.classList.contains('stagger-children')) {
        grid.classList.add('stagger-children');
        observer.observe(grid);
      }
    });

    // Auto-mark sections and project cards for fade-in
    var sections = document.querySelectorAll('section, .showcase-project, .chart-section, .project-card');
    sections.forEach(function(el) {
      if (!el.classList.contains('animate-on-scroll') && !el.classList.contains('stagger-children')) {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
      }
    });
  });
})();

// ==========================================
// Nav scroll behavior
// ==========================================
(function() {
  var nav = document.getElementById('site-nav');
  if (!nav) return;

  var scrollThreshold = 100;

  window.addEventListener('scroll', function() {
    if (window.scrollY > scrollThreshold) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }, { passive: true });
})();

// ==========================================
// Mobile nav toggle
// ==========================================
(function() {
  var toggle = document.getElementById('nav-toggle');
  var links = document.getElementById('nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', function() {
    links.classList.toggle('open');
    var isOpen = links.classList.contains('open');
    toggle.setAttribute('aria-expanded', isOpen);
    toggle.innerHTML = isOpen ? '&#10005;' : '&#9776;';
  });

  // Close menu when a link is clicked
  links.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      links.classList.remove('open');
      toggle.innerHTML = '&#9776;';
    });
  });
})();
