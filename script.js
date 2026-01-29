// script.js - Ultra Advanced Animation & Interaction Engine
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 INITIALIZING ARESTOPRANAV_.0P SHOP v2.0');
    
    // Initialize all systems with performance monitoring
    const initStartTime = performance.now();
    
    // Core Systems Initialization
    initAdvancedStarfield();
    initParallaxSystem();
    initProductMatrix();
    initQuantumNavigation();
    initOrderQuantumSystem();
    initCinematicAnimations();
    initMobileQuantumMenu();
    initPerformanceMonitor();
    initScrollMagic();
    initParticleAccelerator();
    initAudioFeedback();
    
    const initEndTime = performance.now();
    console.log(`⚡ Systems initialized in ${(initEndTime - initStartTime).toFixed(2)}ms`);
});

// ==================== ADVANCED STARFIELD ENGINE ====================
function initAdvancedStarfield() {
    const starfield = document.getElementById('starfield');
    const layers = 3;
    const starsPerLayer = [50, 100, 200]; // Different densities per layer
    
    // Create multiple parallax layers
    for (let layer = 0; layer < layers; layer++) {
        const starLayer = document.createElement('div');
        starLayer.className = 'star-layer';
        starLayer.dataset.depth = (layer + 1) * 0.5;
        starLayer.style.zIndex = -3 - layer;
        
        for (let i = 0; i < starsPerLayer[layer]; i++) {
            const star = createQuantumStar(layer);
            starLayer.appendChild(star);
        }
        
        starfield.appendChild(starLayer);
    }
    
    // Add shooting stars
    initShootingStars();
    
    // Create pulsar effects
    initPulsars();
    
    // Initialize galaxy rotation
    initGalaxyRotation();
}

function createQuantumStar(layer) {
    const star = document.createElement('div');
    const size = Math.random() * (3 - layer) + 0.5;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = Math.random() * 15 + 5;
    const delay = Math.random() * 10;
    const brightness = Math.random() * 0.7 + 0.3;
    
    // Quantum properties
    const starType = Math.random();
    let color, animation;
    
    if (starType < 0.7) {
        // Normal stars
        color = `rgba(255, 255, 255, ${brightness})`;
        animation = `starTwinkle ${duration}s infinite ${delay}s`;
    } else if (starType < 0.9) {
        // Blue stars
        color = `rgba(0, 217, 255, ${brightness})`;
        animation = `bluePulse ${duration * 0.7}s infinite ${delay}s`;
    } else {
        // Red giant stars
        color = `rgba(255, 42, 109, ${brightness * 0.8})`;
        animation = `redGiantPulse ${duration * 1.5}s infinite ${delay}s`;
    }
    
    Object.assign(star.style, {
        position: 'absolute',
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        borderRadius: '50%',
        left: `${x}%`,
        top: `${y}%`,
        boxShadow: `0 0 ${size * 3}px ${color}`,
        animation: animation,
        willChange: 'transform, opacity',
        transform: `translateZ(${layer * -100}px)`
    });
    
    // Add quantum fluctuation
    if (Math.random() > 0.8) {
        star.classList.add('quantum-fluctuate');
    }
    
    return star;
}

function initShootingStars() {
    const starfield = document.getElementById('starfield');
    
    // Create shooting star container
    const shootingStarContainer = document.createElement('div');
    shootingStarContainer.className = 'shooting-stars';
    shootingStarContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -2;
    `;
    
    starfield.appendChild(shootingStarContainer);
    
    // Generate shooting stars periodically
    setInterval(() => {
        if (Math.random() > 0.7) {
            createShootingStar(shootingStarContainer);
        }
    }, 3000);
}

function createShootingStar(container) {
    const star = document.createElement('div');
    const startX = Math.random() * 100;
    const startY = Math.random() * 50;
    const length = Math.random() * 100 + 50;
    const angle = Math.random() * 60 - 30;
    const duration = Math.random() * 1 + 0.5;
    
    Object.assign(star.style, {
        position: 'absolute',
        width: `${length}px`,
        height: '2px',
        background: 'linear-gradient(90deg, transparent, #00d9ff, #9d4edd)',
        left: `${startX}%`,
        top: `${startY}%`,
        transform: `rotate(${angle}deg)`,
        transformOrigin: 'left center',
        opacity: '0',
        filter: 'blur(1px)',
        animation: `shootingStar ${duration}s ease-out`
    });
    
    container.appendChild(star);
    
    // Clean up after animation
    setTimeout(() => {
        star.remove();
    }, duration * 1000);
}

function initPulsars() {
    const nebula = document.getElementById('nebula');
    
    for (let i = 0; i < 3; i++) {
        const pulsar = document.createElement('div');
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 100 + 50;
        
        Object.assign(pulsar.style, {
            position: 'absolute',
            width: `${size}px`,
            height: `${size}px`,
            background: 'radial-gradient(circle, rgba(0, 217, 255, 0.3), transparent 70%)',
            borderRadius: '50%',
            left: `${x}%`,
            top: `${y}%`,
            animation: `pulsar ${Math.random() * 10 + 5}s ease-in-out infinite ${Math.random() * 5}s`,
            filter: 'blur(20px)',
            opacity: '0.5'
        });
        
        nebula.appendChild(pulsar);
    }
}

function initGalaxyRotation() {
    const nebula = document.getElementById('nebula');
    let rotation = 0;
    
    function rotateGalaxy() {
        rotation = (rotation + 0.01) % 360;
        nebula.style.transform = `translateZ(-100px) rotate(${rotation}deg)`;
        requestAnimationFrame(rotateGalaxy);
    }
    
    rotateGalaxy();
}

// ==================== QUANTUM PARALLAX SYSTEM ====================
function initParallaxSystem() {
    const layers = document.querySelectorAll('.star-layer, .floating-planet, .floating-telescope');
    let mouseX = 0, mouseY = 0;
    let scrollY = 0;
    
    // Mouse movement parallax
    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
        updateParallax();
    });
    
    // Scroll parallax
    let scrollTimeout;
    document.addEventListener('scroll', () => {
        scrollY = window.scrollY;
        
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            updateParallax();
        }, 10);
    });
    
    // Device orientation parallax (for mobile)
    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', (e) => {
            const gamma = e.gamma / 90; // -1 to 1
            const beta = e.beta / 90; // -1 to 1
            
            if (gamma && beta) {
                mouseX = gamma;
                mouseY = beta;
                updateParallax();
            }
        });
    }
    
    function updateParallax() {
        layers.forEach(layer => {
            const depth = parseFloat(layer.dataset.depth) || 1;
            const speed = 0.05 * depth;
            
            const translateX = mouseX * 30 * speed;
            const translateY = (mouseY * 30 + scrollY * 0.1) * speed;
            
            layer.style.transform = `translate(${translateX}px, ${translateY}px) translateZ(${depth * -100}px)`;
        });
    }
    
    // Initialize
    updateParallax();
}

// ==================== PRODUCT MATRIX WITH 3D TRANSFORMS ====================
const quantumProducts = [
    {
        id: 1,
        name: "Quantum NASA Apollo Tee",
        price: "₹899",
        description: "Holographic NASA Apollo mission design with quantum particle effects",
        category: "t-shirts",
        icon: "fas fa-user-astronaut",
        imageColor: "#1a237e",
        glowColor: "#00d9ff",
        features: ["Holographic Print", "Quantum Threads", "Self-Cleaning"],
        rating: 4.9,
        stock: 42
    },
    {
        id: 2,
        name: "Nebula Matrix Hoodie",
        price: "₹1,799",
        description: "Dynamic nebula pattern that changes with temperature and movement",
        category: "t-shirts",
        icon: "fas fa-galaxy",
        imageColor: "#4a148c",
        glowColor: "#9d4edd",
        features: ["Thermochromic Ink", "LED Accents", "Noise Cancelling"],
        rating: 4.8,
        stock: 28
    },
    {
        id: 3,
        name: "Celestron Quantum 70EQ",
        price: "₹14,999",
        description: "AI-assisted telescope with quantum computing enhanced star tracking",
        category: "telescopes",
        icon: "fas fa-satellite",
        imageColor: "#01579b",
        glowColor: "#00d9ff",
        features: ["AI Star Tracking", "4K Quantum Sensor", "Auto-Focus"],
        rating: 5.0,
        stock: 15
    },
    {
        id: 4,
        name: "Orion Black Hole XT10",
        price: "₹29,999",
        description: "10-inch aperture with gravitational lens simulation technology",
        category: "telescopes",
        icon: "fas fa-eye",
        imageColor: "#004d40",
        glowColor: "#ff2a6d",
        features: ["Gravitational Lens Sim", "Neural Network AI", "Zero-G Balance"],
        rating: 4.9,
        stock: 8
    },
    {
        id: 5,
        name: "Quantum Star Chart Pro",
        price: "₹699",
        description: "Augmented Reality star chart with real-time constellation mapping",
        category: "accessories",
        icon: "fas fa-star-chart",
        imageColor: "#33691e",
        glowColor: "#25D366",
        features: ["AR Projection", "Real-time Updates", "Voice Control"],
        rating: 4.7,
        stock: 56
    },
    {
        id: 6,
        name: "Solar Flare Glasses VR",
        price: "₹499",
        description: "Smart solar glasses with VR overlay and UV intensity display",
        category: "accessories",
        icon: "fas fa-glasses",
        imageColor: "#bf360c",
        glowColor: "#ff9800",
        features: ["VR Overlay", "UV Sensor", "Auto-Dimming"],
        rating: 4.6,
        stock: 94
    },
    {
        id: 7,
        name: "Mars Colony Quantum Tee",
        price: "₹999",
        description: "Phase-shifting design that reveals hidden patterns under different light",
        category: "t-shirts",
        icon: "fas fa-rocket",
        imageColor: "#b71c1c",
        glowColor: "#ff2a6d",
        features: ["Phase-Shift Ink", "Solar Reactive", "Anti-Gravity Weave"],
        rating: 4.8,
        stock: 37
    },
    {
        id: 8,
        name: "Meade Quantum Infinity 90mm",
        price: "₹12,999",
        description: "Portable telescope with quantum entanglement enhanced light capture",
        category: "telescopes",
        icon: "fas fa-binoculars",
        imageColor: "#263238",
        glowColor: "#00d9ff",
        features: ["Quantum Light Capture", "Foldable Design", "Smartphone Sync"],
        rating: 4.7,
        stock: 22
    }
];

function initProductMatrix() {
    const container = document.getElementById('products-container');
    container.innerHTML = '';
    
    quantumProducts.forEach((product, index) => {
        const productCard = createQuantumProductCard(product, index);
        container.appendChild(productCard);
    });
    
    // Initialize product interactions
    initProductInteractions();
}

function createQuantumProductCard(product, index) {
    const card = document.createElement('div');
    card.className = 'product-card glass-card';
    card.setAttribute('data-category', product.category);
    card.setAttribute('data-id', product.id);
    card.style.setProperty('--i', index);
    
    // Create rating stars
    const stars = createRatingStars(product.rating);
    
    // Create feature badges
    const features = product.features.map(feature => 
        `<span class="product-badge">${feature}</span>`
    ).join('');
    
    card.innerHTML = `
        <div class="product-category">${product.category.toUpperCase()}</div>
        <div class="product-image" style="--glow-color: ${product.glowColor}">
            <i class="${product.icon}"></i>
            <div class="product-hologram"></div>
            <div class="product-stock">
                <span class="stock-indicator ${product.stock < 10 ? 'low' : product.stock < 30 ? 'medium' : 'high'}"></span>
                ${product.stock} in quantum stock
            </div>
        </div>
        <h3 class="product-title">${product.name}</h3>
        <div class="product-rating">
            ${stars}
            <span class="rating-value">${product.rating}</span>
        </div>
        <div class="product-price">${product.price}</div>
        <div class="product-features">${features}</div>
        <p class="product-desc">${product.description}</p>
        <button class="order-btn quantum-btn" data-product='${JSON.stringify(product)}'>
            <span class="btn-text">ORDER NOW</span>
            <span class="btn-glow"></span>
            <span class="btn-particles"></span>
        </button>
    `;
    
    return card;
}

function createRatingStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

function initProductInteractions() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        const image = card.querySelector('.product-image');
        const hologram = card.querySelector('.product-hologram');
        const orderBtn = card.querySelector('.order-btn');
        const product = JSON.parse(orderBtn.dataset.product);
        
        // Hover effects
        card.addEventListener('mouseenter', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // 3D tilt effect
            const tiltX = (y - rect.height / 2) / 20;
            const tiltY = (rect.width / 2 - x) / 20;
            
            card.style.transform = `
                perspective(1000px) 
                rotateX(${tiltX}deg) 
                rotateY(${tiltY}deg) 
                translateZ(50px)
            `;
            
            // Hologram activation
            hologram.style.opacity = '0.3';
            hologram.style.animation = 'hologramFloat 3s ease-in-out infinite';
            
            // Particle effect
            createHoverParticles(card, x, y);
        });
        
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Dynamic glow follow
            const glowX = (x / rect.width) * 100;
            const glowY = (y / rect.height) * 100;
            
            image.style.setProperty('--glow-x', `${glowX}%`);
            image.style.setProperty('--glow-y', `${glowY}%`);
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
            hologram.style.opacity = '0';
            hologram.style.animation = 'none';
        });
        
        // Order button quantum effect
        orderBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            createQuantumRipple(e, orderBtn);
            setTimeout(() => openOrderModal(product), 300);
        });
        
        // Click effect
        card.addEventListener('click', () => {
            createCardPulse(card);
        });
    });
}

// ==================== QUANTUM NAVIGATION SYSTEM ====================
function initQuantumNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    const nav = document.querySelector('.glass-nav');
    
    // Active section tracking with intersection observer
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -50% 0px'
    };
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                
                // Update navigation
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                        createNavPulse(link);
                    }
                });
                
                // Animate section entry
                if (entry.intersectionRatio > 0.5) {
                    animateSectionEntry(entry.target);
                }
            }
        });
    }, observerOptions);
    
    sections.forEach(section => sectionObserver.observe(section));
    
    // Smooth scroll with physics
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Add quantum teleport effect
                createTeleportEffect(link);
                
                // Smooth scroll with easing
                smoothScrollTo(targetSection, 1000, 'easeInOutCubic');
                
                // Update active state
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });
    
    // Navbar scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        const scrollDelta = currentScroll - lastScroll;
        
        if (scrollDelta > 5 && currentScroll > 100) {
            // Scrolling down
            nav.style.transform = 'translateX(-50%) translateY(-100%)';
            nav.style.opacity = '0';
        } else if (scrollDelta < -5) {
            // Scrolling up
            nav.style.transform = 'translateX(-50%) translateY(0)';
            nav.style.opacity = '1';
        }
        
        // Parallax effect on nav
        const parallax = currentScroll * 0.1;
        nav.style.backgroundPositionY = `${parallax}px`;
        
        lastScroll = currentScroll;
    });
    
    // Initialize section animations
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        section.style.transitionDelay = `${index * 0.1}s`;
    });
}

function animateSectionEntry(section) {
    section.style.opacity = '1';
    section.style.transform = 'translateY(0)';
    
    // Animate children
    const children = section.querySelectorAll('.glass-card, .section-title, .section-subtitle');
    children.forEach((child, index) => {
        child.style.opacity = '0';
        child.style.transform = 'translateY(30px)';
        child.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        child.style.transitionDelay = `${0.2 + index * 0.1}s`;
        
        setTimeout(() => {
            child.style.opacity = '1';
            child.style.transform = 'translateY(0)';
        }, 100);
    });
}

function smoothScrollTo(target, duration, easing) {
    const start = window.pageYOffset;
    const targetTop = target.getBoundingClientRect().top + start;
    const distance = targetTop - start;
    let startTime = null;
    
    const easingFunctions = {
        easeInOutCubic: t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
        easeOutCubic: t => 1 - Math.pow(1 - t, 3)
    };
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easingFunctions[easing](progress);
        
        window.scrollTo(0, start + distance * ease);
        
        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }
    
    requestAnimationFrame(animation);
}

// ==================== QUANTUM ORDER SYSTEM ====================
let currentProduct = null;
const quantumOrderState = {
    isProcessing: false,
    animationFrame: null
};

function initOrderQuantumSystem() {
    const modal = document.getElementById('orderModal');
    const closeBtn = document.querySelector('.close-modal');
    const orderForm = document.getElementById('orderForm');
    
    // Quantum modal animations
    closeBtn.addEventListener('click', () => {
        quantumCloseModal(modal);
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            quantumCloseModal(modal);
        }
    });
    
    // Form quantum validation
    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!quantumOrderState.isProcessing) {
            quantumOrderState.isProcessing = true;
            processQuantumOrder(orderForm);
        }
    });
    
    // Form field animations
    const formFields = orderForm.querySelectorAll('input, textarea, select');
    formFields.forEach(field => {
        field.addEventListener('focus', () => {
            field.parentElement.classList.add('quantum-focus');
            createFieldParticles(field);
        });
        
        field.addEventListener('blur', () => {
            field.parentElement.classList.remove('quantum-focus');
            validateQuantumField(field);
        });
        
        field.addEventListener('input', () => {
            animateFieldInput(field);
        });
    });
    
    // Initialize quantum form effects
    initFormQuantumEffects(orderForm);
}

function openOrderModal(product) {
    currentProduct = product;
    const modal = document.getElementById('orderModal');
    const productField = document.getElementById('orderProduct');
    
    // Set product info with animation
    productField.value = product.name;
    productField.style.color = product.glowColor;
    
    // Animate modal opening
    modal.style.display = 'flex';
    modal.style.opacity = '0';
    modal.style.transform = 'scale(0.8) rotateX(-30deg)';
    
    // Quantum entrance effect
    createModalEntrance(modal);
    
    // Reset form with animation
    quantumResetForm();
    
    // Start background animation
    startModalBackgroundAnimation(modal);
}

function quantumCloseModal(modal) {
    // Create exit animation
    modal.style.animation = 'modalExit 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards';
    
    setTimeout(() => {
        modal.style.display = 'none';
        modal.style.animation = '';
        modal.style.opacity = '1';
        modal.style.transform = 'scale(1) rotateX(0)';
        
        // Stop background animation
        if (quantumOrderState.animationFrame) {
            cancelAnimationFrame(quantumOrderState.animationFrame);
        }
    }, 600);
}

function processQuantumOrder(form) {
    const formData = new FormData(form);
    const orderData = Object.fromEntries(formData);
    
    // Validate quantum fields
    if (!validateQuantumOrder(orderData)) {
        quantumOrderState.isProcessing = false;
        return;
    }
    
    // Create quantum processing animation
    const submitBtn = form.querySelector('.submit-order');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = `
        <div class="quantum-processor">
            <div class="quantum-spinner"></div>
            <span>PROCESSING QUANTUM ORDER...</span>
        </div>
    `;
    submitBtn.disabled = true;
    
    // Simulate quantum processing
    let progress = 0;
    const processor = submitBtn.querySelector('.quantum-spinner');
    
    function animateProcessing() {
        progress += 2;
        processor.style.transform = `rotate(${progress * 3.6}deg)`;
        
        if (progress < 100) {
            requestAnimationFrame(animateProcessing);
        } else {
            completeQuantumOrder(orderData);
        }
    }
    
    animateProcessing();
}

function validateQuantumOrder(data) {
    let isValid = true;
    const errors = [];
    
    // Quantum name validation (allow any characters for cosmic names)
    if (!data.orderName.trim() || data.orderName.length < 2) {
        errors.push('Please enter your cosmic name');
        isValid = false;
    }
    
    // Quantum mobile validation (Indian format)
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(data.orderMobile)) {
        errors.push('Please enter a valid quantum communication number');
        isValid = false;
    }
    
    // Quantum address validation
    if (!data.orderAddress.trim() || data.orderAddress.length < 10) {
        errors.push('Please provide a valid landing coordinates');
        isValid = false;
    }
    
    if (!isValid) {
        showQuantumErrors(errors);
    }
    
    return isValid;
}

function completeQuantumOrder(orderData) {
    const modal = document.getElementById('orderModal');
    const submitBtn = modal.querySelector('.submit-order');
    
    // Create completion animation
    submitBtn.innerHTML = `
        <div class="quantum-success">
            <i class="fas fa-check-circle"></i>
            <span>ORDER TRANSMITTED!</span>
        </div>
    `;
    
    // Generate quantum message
    const message = createQuantumMessage(orderData);
    
    // Animate success
    createSuccessParticles(submitBtn);
    
    // Redirect to WhatsApp after animation
    setTimeout(() => {
        const whatsappURL = `https://wa.me/919957811508?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
        
        // Reset form and close modal
        setTimeout(() => {
            quantumResetForm();
            quantumCloseModal(modal);
            quantumOrderState.isProcessing = false;
            submitBtn.innerHTML = `
                <i class="fab fa-whatsapp"></i>
                TRANSMIT ORDER VIA WHATSAPP
            `;
            submitBtn.disabled = false;
        }, 1000);
    }, 1500);
}

function createQuantumMessage(orderData) {
    const productName = currentProduct?.name || orderData.orderProduct;
    const timestamp = new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour12: true
    });
    
    return `🚀 *QUANTUM ORDER TRANSMISSION*
    
📡 *Transmission Time:* ${timestamp}
    
👨‍🚀 *Astronaut:* ${orderData.orderName}
📱 *Quantum Link:* ${orderData.orderMobile}
📍 *Landing Coordinates:* ${orderData.orderAddress}
    
🛸 *Quantum Product:* ${productName}
🔢 *Fleet Size:* ${orderData.orderQuantity} Unit(s)
💰 *Energy Required:* ${currentProduct?.price || ''}
    
⚡ *Transmission ID:* ${generateQuantumId()}
🌌 *Order Status:* PENDING_CONFIRMATION
    
_This is a quantum transmission from arestopranav_.0p SHOP_`;
}

function generateQuantumId() {
    const chars = '0123456789ABCDEF';
    let id = 'QT-';
    for (let i = 0; i < 8; i++) {
        id += chars[Math.floor(Math.random() * chars.length)];
    }
    return id;
}

// ==================== CINEMATIC ANIMATIONS ENGINE ====================
function initCinematicAnimations() {
    // Initialize GSAP-like animation system
    initCustomAnimationEngine();
    
    // Animate hero elements
    animateHeroSection();
    
    // Animate floating elements
    animateFloatingElements();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize hover animations
    initHoverAnimations();
    
    // Initialize click animations
    initClickAnimations();
}

function initCustomAnimationEngine() {
    // Create animation frame scheduler
    const animatedElements = new Set();
    
    function animate() {
        animatedElements.forEach(element => {
            const animations = element.dataset.animations
                ? JSON.parse(element.dataset.animations)
                : [];
            
            animations.forEach(anim => {
                updateAnimation(element, anim);
            });
        });
        
        requestAnimationFrame(animate);
    }
    
    requestAnimationFrame(animate);
    
    // Expose animation API
    window.quantumAnimate = (element, properties, options = {}) => {
        const animId = Date.now() + Math.random();
        const animation = {
            id: animId,
            properties,
            startTime: performance.now(),
            duration: options.duration || 1000,
            easing: options.easing || 'easeOutCubic',
            onComplete: options.onComplete
        };
        
        let animations = [];
        if (element.dataset.animations) {
            animations = JSON.parse(element.dataset.animations);
        }
        
        animations.push(animation);
        element.dataset.animations = JSON.stringify(animations);
        animatedElements.add(element);
        
        return {
            stop: () => {
                animations = animations.filter(a => a.id !== animId);
                element.dataset.animations = JSON.stringify(animations);
                if (animations.length === 0) {
                    animatedElements.delete(element);
                }
            }
        };
    };
}

function animateHeroSection() {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const ctaButton = document.querySelector('.cta-button');
    
    // Animate title letters
    const titleText = heroTitle.textContent;
    heroTitle.innerHTML = '';
    
    titleText.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? ' ' : char;
        span.className = 'title-char';
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        span.style.transform = 'translateY(50px) rotateX(90deg)';
        span.style.transition = `all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 0.05}s`;
        
        heroTitle.appendChild(span);
        
        setTimeout(() => {
            span.style.opacity = '1';
            span.style.transform = 'translateY(0) rotateX(0)';
        }, 100);
    });
    
    // Animate subtitle
    setTimeout(() => {
        heroSubtitle.style.opacity = '1';
        heroSubtitle.style.transform = 'translateX(0)';
    }, 1000);
    
    // Animate CTA button
    setTimeout(() => {
        ctaButton.style.opacity = '1';
        ctaButton.style.transform = 'translateY(0) scale(1)';
    }, 1200);
}

function animateFloatingElements() {
    const planets = document.querySelectorAll('.floating-planet');
    const telescope = document.querySelector('.floating-telescope');
    
    planets.forEach((planet, index) => {
        // Random floating animation
        const duration = 6 + Math.random() * 4;
        const delay = index * 0.5;
        
        planet.style.animation = `
            planetFloat ${duration}s ease-in-out infinite ${delay}s,
            planetRotate ${duration * 2}s linear infinite ${delay}s,
            planetGlow ${duration * 0.5}s ease-in-out infinite alternate ${delay}s
        `;
    });
    
    // Telescope animation
    telescope.style.animation = `
        telescopeOrbit 20s linear infinite,
        telescopePulse 3s ease-in-out infinite alternate,
        telescopeScan 10s linear infinite
    `;
}

// ==================== PARTICLE ACCELERATOR ====================
function initParticleAccelerator() {
    // Create particle canvas
    const canvas = document.createElement('canvas');
    canvas.id = 'quantum-particles';
    canvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
    `;
    
    document.body.appendChild(canvas);
    
    // Initialize particle system
    const ctx = canvas.getContext('2d');
    const particles = [];
    const particleCount = 100;
    
    // Resize canvas
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 0.5,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5,
            color: `rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, 255, ${Math.random() * 0.3 + 0.1})`,
            orbit: Math.random() * Math.PI * 2,
            orbitRadius: Math.random() * 2 + 0.5,
            orbitSpeed: Math.random() * 0.02 + 0.01
        });
    }
    
    // Particle animation
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            // Update position with orbit
            particle.orbit += particle.orbitSpeed;
            particle.x += particle.speedX + Math.cos(particle.orbit) * particle.orbitRadius;
            particle.y += particle.speedY + Math.sin(particle.orbit) * particle.orbitRadius;
            
            // Wrap around edges
            if (particle.x > canvas.width) particle.x = 0;
            if (particle.x < 0) particle.x = canvas.width;
            if (particle.y > canvas.height) particle.y = 0;
            if (particle.y < 0) particle.y = canvas.height;
            
            // Draw particle
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
            
            // Draw glow
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
            const gradient = ctx.createRadialGradient(
                particle.x, particle.y, 0,
                particle.x, particle.y, particle.size * 3
            );
            gradient.addColorStop(0, particle.color);
            gradient.addColorStop(1, 'transparent');
            ctx.fillStyle = gradient;
            ctx.fill();
        });
        
        requestAnimationFrame(animateParticles);
    }
    
    animateParticles();
    
    // Interactive particles on mouse move
    let mouseX = 0, mouseY = 0;
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Create ripple effect
        createParticleRipple(mouseX, mouseY);
    });
    
    // Create particle ripple
    function createParticleRipple(x, y) {
        for (let i = 0; i < 5; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 3 + 1;
            const life = 60; // frames
            
            particles.push({
                x: x,
                y: y,
                size: Math.random() * 1.5 + 0.5,
                speedX: Math.cos(angle) * speed,
                speedY: Math.sin(angle) * speed,
                color: 'rgba(0, 217, 255, 0.8)',
                life: life,
                maxLife: life
            });
        }
        
        // Limit particle count
        if (particles.length > 500) {
            particles.splice(0, 100);
        }
    }
}

// ==================== SCROLL MAGIC ====================
function initScrollMagic() {
    const sections = document.querySelectorAll('section');
    let ticking = false;
    
    function updateScrollAnimations() {
        const scrollY = window.pageYOffset;
        const windowHeight = window.innerHeight;
        
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const sectionTop = rect.top + scrollY;
            const progress = 1 - Math.max(0, Math.min(1, (rect.top + windowHeight / 2) / windowHeight));
            
            // Parallax effect
            const parallax = section.querySelectorAll('[data-parallax]');
            parallax.forEach(element => {
                const speed = parseFloat(element.dataset.parallax) || 0.5;
                const offset = scrollY * speed;
                element.style.transform = `translateY(${offset}px)`;
            });
            
            // Fade in/out based on scroll
            if (rect.top < windowHeight * 0.75 && rect.bottom > 0) {
                section.style.opacity = progress;
                section.style.transform = `translateY(${(1 - progress) * 50}px)`;
                
                // Animate children
                const children = section.querySelectorAll('.glass-card, .section-title');
                children.forEach((child, index) => {
                    child.style.opacity = progress;
                    child.style.transform = `translateY(${(1 - progress) * 30}px) scale(${0.9 + progress * 0.1})`;
                    child.style.transitionDelay = `${index * 0.1}s`;
                });
            }
        });
        
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateScrollAnimations);
            ticking = true;
        }
    });
    
    // Initial update
    updateScrollAnimations();
}

// ==================== AUDIO FEEDBACK SYSTEM ====================
function initAudioFeedback() {
    // Create audio context for sound effects
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    
    const audioContext = new AudioContext();
    let isAudioEnabled = false;
    
    // Enable audio on first interaction
    function enableAudio() {
        if (!isAudioEnabled && audioContext.state === 'suspended') {
            audioContext.resume();
            isAudioEnabled = true;
            console.log('🔊 Quantum audio system activated');
        }
    }
    
    document.addEventListener('click', enableAudio);
    document.addEventListener('keydown', enableAudio);
    
    // Sound effects
    const sounds = {
        click: createSound(800, 0.1, 'sine'),
        hover: createSound(1200, 0.05, 'sine'),
        success: createChord([800, 1200, 1600], 0.3),
        error: createChord([200, 300, 400], 0.3),
        quantum: createQuantumSound()
    };
    
    // Attach sounds to interactions
    document.querySelectorAll('button, .nav-link, .order-btn').forEach(element => {
        element.addEventListener('mouseenter', () => {
            if (isAudioEnabled) sounds.hover.play();
        });
        
        element.addEventListener('click', () => {
            if (isAudioEnabled) sounds.click.play();
        });
    });
    
    // Form submission sound
    const orderForm = document.getElementById('orderForm');
    if (orderForm) {
        orderForm.addEventListener('submit', () => {
            if (isAudioEnabled) sounds.success.play();
        });
    }
}

function createSound(frequency, duration, type) {
    return {
        play: () => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = frequency;
            oscillator.type = type;
            
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
            
            oscillator.start();
            oscillator.stop(audioContext.currentTime + duration);
        }
    };
}

// ==================== PERFORMANCE MONITOR ====================
function initPerformanceMonitor() {
    const monitor = document.createElement('div');
    monitor.id = 'quantum-monitor';
    monitor.style.cssText = `
        position: fixed;
        bottom: 10px;
        right: 10px;
        background: rgba(0, 0, 0, 0.8);
        color: #00d9ff;
        padding: 10px;
        font-family: monospace;
        font-size: 12px;
        border-radius: 5px;
        z-index: 9999;
        display: none;
    `;
    
    document.body.appendChild(monitor);
    
    let frameCount = 0;
    let lastTime = performance.now();
    let fps = 60;
    
    function updateMonitor() {
        frameCount++;
        const currentTime = performance.now();
        
        if (currentTime - lastTime >= 1000) {
            fps = frameCount;
            frameCount = 0;
            lastTime = currentTime;
            
            const memory = performance.memory ? 
                ` | Memory: ${Math.round(performance.memory.usedJSHeapSize / 1048576)}MB` : '';
            
            monitor.textContent = `FPS: ${fps}${memory}`;
            
            // Color code based on performance
            if (fps < 30) {
                monitor.style.color = '#ff2a6d';
            } else if (fps < 50) {
                monitor.style.color = '#ff9800';
            } else {
                monitor.style.color = '#25D366';
            }
        }
        
        requestAnimationFrame(updateMonitor);
    }
    
    // Toggle monitor with Ctrl+Shift+M
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.shiftKey && e.key === 'M') {
            monitor.style.display = monitor.style.display === 'none' ? 'block' : 'none';
            if (monitor.style.display === 'block') {
                updateMonitor();
            }
        }
    });
}

// ==================== MOBILE QUANTUM MENU ====================
function initMobileQuantumMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const nav = document.querySelector('.glass-nav');
    
    if (!menuBtn || !navLinks) return;
    
    let isOpen = false;
    
    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        isOpen = !isOpen;
        
        if (isOpen) {
            openQuantumMenu();
        } else {
            closeQuantumMenu();
        }
    });
    
    function openQuantumMenu() {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = 'calc(100% + 10px)';
        navLinks.style.right = '0';
        navLinks.style.background = 'rgba(10, 10, 18, 0.95)';
        navLinks.style.backdropFilter = 'blur(20px)';
        navLinks.style.padding = '30px';
        navLinks.style.borderRadius = '20px';
        navLinks.style.border = '1px solid rgba(0, 217, 255, 0.3)';
        navLinks.style.gap = '20px';
        navLinks.style.width = '250px';
        navLinks.style.zIndex = '1001';
        navLinks.style.opacity = '0';
        navLinks.style.transform = 'translateY(-20px) scale(0.95)';
        
        // Animate menu items
        const links = navLinks.querySelectorAll('.nav-link');
        links.forEach((link, index) => {
            link.style.opacity = '0';
            link.style.transform = 'translateX(30px)';
            link.style.transition = `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 0.05}s`;
            
            setTimeout(() => {
                link.style.opacity = '1';
                link.style.transform = 'translateX(0)';
            }, 10);
        });
        
        // Animate menu container
        setTimeout(() => {
            navLinks.style.opacity = '1';
            navLinks.style.transform = 'translateY(0) scale(1)';
        }, 50);
        
        // Animate menu button
        menuBtn.style.transform = 'rotate(90deg)';
        menuBtn.innerHTML = '<i class="fas fa-times"></i>';
    }
    
    function closeQuantumMenu() {
        const links = navLinks.querySelectorAll('.nav-link');
        links.forEach((link, index) => {
            link.style.opacity = '0';
            link.style.transform = 'translateX(30px)';
            link.style.transitionDelay = `${(links.length - index - 1) * 0.05}s`;
        });
        
        navLinks.style.opacity = '0';
        navLinks.style.transform = 'translateY(-20px) scale(0.95)';
        
        setTimeout(() => {
            navLinks.style.display = 'none';
            menuBtn.style.transform = 'rotate(0)';
            menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            isOpen = false;
        }, 400);
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (isOpen && !nav.contains(e.target) && !navLinks.contains(e.target)) {
            closeQuantumMenu();
        }
    });
    
    // Close menu when clicking a link
    navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            closeQuantumMenu();
        });
    });
    
    // Adjust on resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.style.display = 'flex';
            navLinks.style.position = 'static';
            navLinks.style.background = 'transparent';
            navLinks.style.padding = '0';
            navLinks.style.border = 'none';
            navLinks.style.flexDirection = 'row';
            navLinks.style.width = 'auto';
            navLinks.style.opacity = '1';
            navLinks.style.transform = 'none';
            menuBtn.style.transform = 'rotate(0)';
            menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            isOpen = false;
        } else if (!isOpen) {
            navLinks.style.display = 'none';
        }
    });
}

// ==================== QUANTUM EFFECT GENERATORS ====================
function createQuantumRipple(event, element) {
    const ripple = document.createElement('div');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    Object.assign(ripple.style, {
        position: 'absolute',
        width: `${size}px`,
        height: `${size}px`,
        background: 'radial-gradient(circle, rgba(0, 217, 255, 0.3), transparent 70%)',
        borderRadius: '50%',
        left: `${x}px`,
        top: `${y}px`,
        transform: 'scale(0)',
        animation: 'quantumRipple 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
    });
    
    element.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
}

function createHoverParticles(element, x, y) {
    const particleCount = 8;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        const angle = (Math.PI * 2 * i) / particleCount;
        const distance = 50 + Math.random() * 50;
        
        Object.assign(particle.style, {
            position: 'absolute',
            width: '4px',
            height: '4px',
            background: 'rgba(0, 217, 255, 0.8)',
            borderRadius: '50%',
            left: `${x}px`,
            top: `${y}px`,
            transform: 'translate(-50%, -50%)',
            animation: `particleEmit 0.8s ease-out forwards ${i * 0.1}s`
        });
        
        particle.dataset.angle = angle;
        particle.dataset.distance = distance;
        
        element.appendChild(particle);
        
        setTimeout(() => particle.remove(), 800);
    }
}

function createCardPulse(card) {
    const pulse = document.createElement('div');
    const rect = card.getBoundingClientRect();
    
    Object.assign(pulse.style, {
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at center, rgba(0, 217, 255, 0.1), transparent 70%)',
        borderRadius: '20px',
        top: '0',
        left: '0',
        transform: 'scale(0.8)',
        opacity: '0',
        animation: 'cardPulse 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
    });
    
    card.appendChild(pulse);
    
    setTimeout(() => pulse.remove(), 600);
}

function createNavPulse(link) {
    const pulse = document.createElement('div');
    const rect = link.getBoundingClientRect();
    
    Object.assign(pulse.style, {
        position: 'fixed',
        width: `${rect.width}px`,
        height: '2px',
        background: 'linear-gradient(90deg, transparent, var(--neon-blue), transparent)',
        left: `${rect.left}px`,
        top: `${rect.bottom}px`,
        opacity: '0',
        animation: 'navPulse 1s ease-out'
    });
    
    document.body.appendChild(pulse);
    
    setTimeout(() => pulse.remove(), 1000);
}

function createTeleportEffect(element) {
    const teleport = document.createElement('div');
    const rect = element.getBoundingClientRect();
    
    Object.assign(teleport.style, {
        position: 'fixed',
        width: `${rect.width}px`,
        height: `${rect.height}px`,
        background: 'radial-gradient(circle, rgba(0, 217, 255, 0.3), transparent 70%)',
        borderRadius: '5px',
        left: `${rect.left}px`,
        top: `${rect.top}px`,
        pointerEvents: 'none',
        animation: 'teleport 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards'
    });
    
    document.body.appendChild(teleport);
    
    setTimeout(() => teleport.remove(), 600);
}

function createModalEntrance(modal) {
    const particles = 20;
    
    for (let i = 0; i < particles; i++) {
        const particle = document.createElement('div');
        const angle = (Math.PI * 2 * i) / particles;
        const distance = 200;
        
        Object.assign(particle.style, {
            position: 'absolute',
            width: '8px',
            height: '8px',
            background: 'var(--neon-blue)',
            borderRadius: '50%',
            left: '50%',
            top: '50%',
            transform: `translate(-50%, -50%) translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`,
            opacity: '0',
            animation: `modalParticle 0.8s ease-out forwards ${i * 0.05}s`
        });
        
        modal.appendChild(particle);
        
        setTimeout(() => particle.remove(), 800);
    }
    
    // Animate modal appearance
    setTimeout(() => {
        modal.style.opacity = '1';
        modal.style.transform = 'scale(1) rotateX(0)';
    }, 400);
}

function createSuccessParticles(element) {
    const particles = 30;
    const rect = element.getBoundingClientRect();
    
    for (let i = 0; i < particles; i++) {
        const particle = document.createElement('div');
        const angle = Math.random() * Math.PI * 2;
        const distance = 100 + Math.random() * 100;
        const size = 2 + Math.random() * 4;
        
        Object.assign(particle.style, {
            position: 'absolute',
            width: `${size}px`,
            height: `${size}px`,
            background: '#25D366',
            borderRadius: '50%',
            left: `${rect.left + rect.width / 2}px`,
            top: `${rect.top + rect.height / 2}px`,
            transform: `translate(-50%, -50%)`,
            animation: `successParticle 1s ease-out forwards ${i * 0.02}s`
        });
        
        particle.dataset.angle = angle;
        particle.dataset.distance = distance;
        
        document.body.appendChild(particle);
        
        setTimeout(() => particle.remove(), 1000);
    }
}

// ==================== ANIMATION STYLES INJECTION ====================
function injectAnimationStyles() {
    const styles = `
        @keyframes starTwinkle {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes bluePulse {
            0%, 100% { opacity: 0.3; box-shadow: 0 0 10px rgba(0, 217, 255, 0.5); }
            50% { opacity: 1; box-shadow: 0 0 30px rgba(0, 217, 255, 0.8); }
        }
        
        @keyframes redGiantPulse {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.3); }
        }
        
        @keyframes shootingStar {
            0% { opacity: 0; transform: rotate(${Math.random() * 60 - 30}deg) translateX(-100px); }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { opacity: 0; transform: rotate(${Math.random() * 60 - 30}deg) translateX(100px); }
        }
        
        @keyframes pulsar {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(1.5); }
        }
        
        @keyframes quantumRipple {
            0% { transform: scale(0); opacity: 1; }
            100% { transform: scale(2); opacity: 0; }
        }
        
        @keyframes particleEmit {
            0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
            100% { transform: translate(
                calc(-50% + cos(var(--angle)) * var(--distance) * 1px),
                calc(-50% + sin(var(--angle)) * var(--distance) * 1px)
            ) scale(1); opacity: 0; }
        }
        
        @keyframes cardPulse {
            0% { transform: scale(0.8); opacity: 0.5; }
            100% { transform: scale(1.2); opacity: 0; }
        }
        
        @keyframes navPulse {
            0% { transform: translateX(-50%) scaleX(0); opacity: 1; }
            50% { transform: translateX(0) scaleX(1); opacity: 0.5; }
            100% { transform: translateX(50%) scaleX(0); opacity: 0; }
        }
        
        @keyframes teleport {
            0% { transform: scale(1) rotate(0deg); opacity: 1; filter: blur(0); }
            100% { transform: scale(0) rotate(360deg); opacity: 0; filter: blur(20px); }
        }
        
        @keyframes modalParticle {
            0% { transform: translate(-50%, -50%) translate(var(--start-x), var(--start-y)); opacity: 0; }
            20% { opacity: 1; }
            100% { transform: translate(-50%, -50%); opacity: 0; }
        }
        
        @keyframes successParticle {
            0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
            100% { transform: translate(
                calc(-50% + cos(var(--angle)) * var(--distance) * 1px),
                calc(-50% + sin(var(--angle)) * var(--distance) * 1px)
            ) scale(1); opacity: 0; }
        }
        
        @keyframes hologramFloat {
            0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.2; }
            50% { transform: translateY(-20px) rotate(180deg); opacity: 0.4; }
        }
        
        @keyframes planetRotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        @keyframes telescopeOrbit {
            0% { transform: translate(-50%, -50%) rotate(0deg) translateX(150px) rotate(0deg); }
            100% { transform: translate(-50%, -50%) rotate(360deg) translateX(150px) rotate(-360deg); }
        }
        
        @keyframes telescopeScan {
            0%, 100% { filter: drop-shadow(0 0 30px rgba(0, 217, 255, 0.7)); }
            50% { filter: drop-shadow(0 0 60px rgba(0, 217, 255, 1)); }
        }
        
        @keyframes modalExit {
            0% { opacity: 1; transform: scale(1) rotateX(0); }
            100% { opacity: 0; transform: scale(0.8) rotateX(-30deg); }
        }
        
        .quantum-fluctuate {
            animation: quantumFluctuate 5s infinite alternate !important;
        }
        
        @keyframes quantumFluctuate {
            0%, 100% { transform: translateZ(0) scale(1); }
            50% { transform: translateZ(20px) scale(1.1); }
        }
        
        .product-hologram {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.05) 50%, transparent 70%);
            opacity: 0;
            border-radius: 15px;
            pointer-events: none;
        }
        
        .product-image {
            position: relative;
            overflow: hidden;
            --glow-x: 50%;
            --glow-y: 50%;
        }
        
        .product-image::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(
                circle at var(--glow-x) var(--glow-y),
                var(--glow-color, rgba(0, 217, 255, 0.3)) 0%,
                transparent 70%
            );
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
        }
        
        .product-card:hover .product-image::after {
            opacity: 0.5;
        }
        
        .product-stock {
            position: absolute;
            bottom: 10px;
            left: 10px;
            font-size: 0.8rem;
            color: rgba(255, 255, 255, 0.7);
            display: flex;
            align-items: center;
            gap: 5px;
        }
        
        .stock-indicator {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            display: inline-block;
        }
        
        .stock-indicator.low { background: #ff2a6d; animation: pulseRed 1s infinite alternate; }
        .stock-indicator.medium { background: #ff9800; animation: pulseOrange 1.5s infinite alternate; }
        .stock-indicator.high { background: #25D366; animation: pulseGreen 2s infinite alternate; }
        
        .product-rating {
            display: flex;
            align-items: center;
            gap: 5px;
            margin: 10px 0;
        }
        
        .product-rating i {
            color: #ff9800;
            font-size: 0.9rem;
        }
        
        .rating-value {
            margin-left: 5px;
            font-size: 0.9rem;
            color: rgba(255, 255, 255, 0.7);
        }
        
        .product-features {
            display: flex;
            flex-wrap: wrap;
            gap: 5px;
            margin: 10px 0;
        }
        
        .product-badge {
            background: rgba(0, 217, 255, 0.1);
            color: var(--neon-blue);
            padding: 3px 8px;
            border-radius: 12px;
            font-size: 0.7rem;
            border: 1px solid rgba(0, 217, 255, 0.2);
        }
        
        .quantum-btn {
            position: relative;
            overflow: visible !important;
        }
        
        .btn-glow {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle, var(--neon-blue), transparent 70%);
            transform: translate(-50%, -50%);
            opacity: 0;
            border-radius: inherit;
            pointer-events: none;
            animation: btnGlow 2s infinite alternate;
        }
        
        .quantum-btn:hover .btn-glow {
            opacity: 0.3;
        }
        
        .btn-particles {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            pointer-events: none;
            overflow: hidden;
            border-radius: inherit;
        }
        
        @keyframes pulseRed {
            0%, 100% { opacity: 0.5; box-shadow: 0 0 5px #ff2a6d; }
            50% { opacity: 1; box-shadow: 0 0 15px #ff2a6d; }
        }
        
        @keyframes pulseOrange {
            0%, 100% { opacity: 0.5; box-shadow: 0 0 5px #ff9800; }
            50% { opacity: 1; box-shadow: 0 0 10px #ff9800; }
        }
        
        @keyframes pulseGreen {
            0%, 100% { opacity: 0.5; box-shadow: 0 0 5px #25D366; }
            50% { opacity: 1; box-shadow: 0 0 10px #25D366; }
        }
        
        @keyframes btnGlow {
            0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.1; }
            100% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.3; }
        }
        
        .quantum-processor {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
        }
        
        .quantum-spinner {
            width: 20px;
            height: 20px;
            border: 2px solid rgba(255, 255, 255, 0.3);
            border-top-color: var(--neon-blue);
            border-radius: 50%;
            animation: quantumSpin 1s linear infinite;
        }
        
        .quantum-success {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            animation: quantumSuccess 0.6s ease-out;
        }
        
        .quantum-success i {
            color: #25D366;
            font-size: 1.2rem;
            animation: successIcon 1s ease-in-out;
        }
        
        @keyframes quantumSpin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        @keyframes quantumSuccess {
            0% { transform: scale(0.8); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
        }
        
        @keyframes successIcon {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.3); }
        }
        
        .quantum-focus {
            position: relative;
        }
        
        .quantum-focus::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: linear-gradient(45deg, var(--neon-blue), var(--neon-purple), var(--neon-blue));
            border-radius: inherit;
            z-index: -1;
            opacity: 0;
            animation: quantumFocus 2s linear infinite;
        }
        
        @keyframes quantumFocus {
            0% { opacity: 0; transform: scale(1); }
            50% { opacity: 0.3; }
            100% { opacity: 0; transform: scale(1.02); }
        }
        
        @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
}

// Initialize animation styles
injectAnimationStyles();

// ==================== FINAL INITIALIZATION ====================
console.log('🎯 Quantum Shop System Ready');
console.log('✨ Features Loaded:');
console.log('   • Advanced Starfield Engine');
console.log('   • Quantum Parallax System');
console.log('   • 3D Product Matrix');
console.log('   • Quantum Navigation');
console.log('   • Particle Accelerator');
console.log('   • Cinematic Animations');
console.log('   • Audio Feedback System');
console.log('   • Performance Monitor');

// Export global functions for debugging
window.quantumDebug = {
    reloadProducts: initProductMatrix,
    testAnimation: () => createQuantumRipple({ clientX: 100, clientY: 100 }, document.body),
    getPerformance: () => {
        const mem = performance.memory;
        return {
            fps: document.querySelector('#quantum-monitor')?.textContent || 'N/A',
            memory: mem ? `${Math.round(mem.usedJSHeapSize / 1048576)}MB` : 'N/A'
        };
    }
};
