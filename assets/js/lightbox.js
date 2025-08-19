/**
 * Image Lightbox for Jekyll Posts
 * GitHub Pages compatible, no external dependencies
 */

(function() {
  'use strict';

  // Lightbox state
  let currentImages = [];
  let currentIndex = 0;
  let lightboxOverlay = null;

  /**
   * Initialize lightbox functionality
   */
  function initLightbox() {
    createLightboxStructure();
    attachEventListeners();
    bindImageClicks();
  }

  /**
   * Create lightbox HTML structure
   */
  function createLightboxStructure() {
    lightboxOverlay = document.createElement('div');
    lightboxOverlay.className = 'lightbox-overlay';
    lightboxOverlay.innerHTML = `
      <div class="lightbox-content">
        <button class="lightbox-close" aria-label="Close lightbox">&times;</button>
        <img class="lightbox-image" alt="" />
        <button class="lightbox-nav lightbox-prev" aria-label="Previous image">&lt;</button>
        <button class="lightbox-nav lightbox-next" aria-label="Next image">&gt;</button>
        <div class="lightbox-counter"></div>
      </div>
    `;
    document.body.appendChild(lightboxOverlay);
  }

  /**
   * Attach global event listeners
   */
  function attachEventListeners() {
    const lightboxImage = lightboxOverlay.querySelector('.lightbox-image');
    const closeBtn = lightboxOverlay.querySelector('.lightbox-close');
    const prevBtn = lightboxOverlay.querySelector('.lightbox-prev');
    const nextBtn = lightboxOverlay.querySelector('.lightbox-next');

    // Close lightbox when clicking overlay
    lightboxOverlay.addEventListener('click', function(e) {
      if (e.target === lightboxOverlay) {
        closeLightbox();
      }
    });

    // Close button
    closeBtn.addEventListener('click', closeLightbox);

    // Navigation buttons
    prevBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      showPrevious();
    });

    nextBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      showNext();
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
      if (!lightboxOverlay.classList.contains('active')) return;

      switch(e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          showPrevious();
          break;
        case 'ArrowRight':
          showNext();
          break;
      }
    });

    // Prevent image click from closing lightbox
    lightboxImage.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  }

  /**
   * Bind click events to post images
   */
  function bindImageClicks() {
    // Find all images in post content
    const postContent = document.querySelector('.post-content') || document.querySelector('main');
    if (!postContent) return;

    const images = postContent.querySelectorAll('img');
    
    // Convert NodeList to array and filter out small images (likely icons)
    currentImages = Array.from(images).filter(img => {
      const computedStyle = window.getComputedStyle(img);
      const width = parseInt(computedStyle.width) || img.naturalWidth || 0;
      const height = parseInt(computedStyle.height) || img.naturalHeight || 0;
      
      // Only include images larger than 100x100 pixels
      return width > 100 && height > 100;
    });

    // Add click handlers to eligible images
    currentImages.forEach((img, index) => {
      img.style.cursor = 'pointer';
      img.addEventListener('click', function(e) {
        e.preventDefault();
        openLightbox(index);
      });
    });
  }

  /**
   * Open lightbox with specified image index
   */
  function openLightbox(index) {
    if (!currentImages.length) return;

    currentIndex = index;
    const img = currentImages[currentIndex];
    const lightboxImage = lightboxOverlay.querySelector('.lightbox-image');
    
    // Set image source and alt text
    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt || 'Image';
    
    // Update navigation visibility
    updateNavigation();
    
    // Update counter
    updateCounter();
    
    // Show lightbox
    lightboxOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Focus on close button for accessibility
    lightboxOverlay.querySelector('.lightbox-close').focus();
  }

  /**
   * Close lightbox
   */
  function closeLightbox() {
    lightboxOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  /**
   * Show previous image
   */
  function showPrevious() {
    if (currentImages.length <= 1) return;
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    updateLightboxImage();
  }

  /**
   * Show next image
   */
  function showNext() {
    if (currentImages.length <= 1) return;
    currentIndex = (currentIndex + 1) % currentImages.length;
    updateLightboxImage();
  }

  /**
   * Update lightbox image and navigation
   */
  function updateLightboxImage() {
    const img = currentImages[currentIndex];
    const lightboxImage = lightboxOverlay.querySelector('.lightbox-image');
    
    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt || 'Image';
    
    updateNavigation();
    updateCounter();
  }

  /**
   * Update navigation button visibility
   */
  function updateNavigation() {
    const prevBtn = lightboxOverlay.querySelector('.lightbox-prev');
    const nextBtn = lightboxOverlay.querySelector('.lightbox-next');
    
    if (currentImages.length <= 1) {
      prevBtn.style.display = 'none';
      nextBtn.style.display = 'none';
    } else {
      prevBtn.style.display = 'block';
      nextBtn.style.display = 'block';
    }
  }

  /**
   * Update image counter
   */
  function updateCounter() {
    const counter = lightboxOverlay.querySelector('.lightbox-counter');
    if (currentImages.length > 1) {
      counter.textContent = `${currentIndex + 1} / ${currentImages.length}`;
      counter.style.display = 'block';
    } else {
      counter.style.display = 'none';
    }
  }

  /**
   * Handle responsive image loading
   */
  function handleImageLoad() {
    const lightboxImage = lightboxOverlay.querySelector('.lightbox-image');
    
    lightboxImage.addEventListener('load', function() {
      // Image loaded successfully
      this.style.opacity = '1';
    });
    
    lightboxImage.addEventListener('error', function() {
      // Handle image load error
      this.alt = 'Image failed to load';
      console.warn('Lightbox: Failed to load image:', this.src);
    });
  }

  /**
   * Initialize terminal output styling
   */
  function initTerminalStyling() {
    // Ensure terminal-output styling is applied
    const terminalElements = document.querySelectorAll('.terminal-output');
    terminalElements.forEach(function(element) {
      // Force apply styles in case CSS specificity is an issue
      element.style.cssText = `
        background-color: #1e1e1e !important;
        color: #ffffff !important;
        font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace !important;
        padding: 1rem !important;
        border-radius: 4px !important;
        margin: 1rem 0 !important;
        white-space: pre-wrap !important;
        overflow-x: auto !important;
        font-size: 0.9rem !important;
        line-height: 1.4 !important;
      `;
      
      // Apply symbol styling
      const symbols = element.querySelectorAll('.symbol-info');
      symbols.forEach(function(symbol) {
        symbol.style.color = '#339af0 !important';
      });
    });
  }

  /**
   * Initialize when DOM is ready
   */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initLightbox();
      initTerminalStyling();
    });
  } else {
    initLightbox();
    initTerminalStyling();
  }

})();