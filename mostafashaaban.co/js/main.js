/* 
    JAVASCRIPT FILE - main.js
    This file controls all interactive functionality
    - Slideshow
    - Tab switching
    - Product rendering
    - Modal windows
    - Form handling
    
    TO EDIT PRODUCT INFO: Look in the product arrays below
    TO CHANGE TIMINGS: Look for numbers (like 4000 = 4 seconds)
*/

// ============================================
// HERO SLIDESHOW CONFIGURATION
// ============================================

// Array of hero background image paths
// EDIT THIS: Add or change hero images here
const heroImages = [
    'assets/images/hero/hero1.jpg',
    'assets/images/hero/hero2.jpg',
    'assets/images/hero/hero3.jpg'
];

// Current slide index (starts at 0)
let currentSlide = 0;

// Get all hero background elements
const slides = document.querySelectorAll('.hero-bg');

// Change slide every 4 seconds (4000 milliseconds)
setInterval(() => {
    // Remove active class from current slide
    slides[currentSlide].classList.remove('active');
    
    // Move to next slide (loop back to 0 if at end)
    currentSlide = (currentSlide + 1) % slides.length;
    
    // Add active class to new slide
    slides[currentSlide].classList.add('active');
}, 4000);  // EDIT THIS: Change number for different speed (1000 = 1 second)

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

// Listen for scroll events
window.addEventListener('scroll', () => {
    // Get navbar element
    const navbar = document.getElementById('navbar');
    
    // If scrolled more than 50 pixels
    if (window.scrollY > 50) {
        // Add scrolled class (changes background)
        navbar.classList.add('scrolled');
    } else {
        // Remove scrolled class
        navbar.classList.remove('scrolled');
    }
});

// ============================================
// MODERN FURNITURE DATA
// EDIT THIS: Add, remove, or modify modern products
// ============================================

const modernProducts = [
    {
        id: 1,  // Unique ID number
        name: "Industrial Living Room Unit",  // Product name
        mainImage: "assets/images/products/modern/modern-1.jpg",  // Main photo path
        gallery: ["assets/images/products/modern/modern-1.jpg"],  // Gallery photos (array)
        description: "Stunning industrial-style living room featuring a black metal frame shelving unit with integrated LED lighting. The design includes a modern ethanol fireplace with marble base, perfect for contemporary open-concept spaces.",  // Full description
        specs: [  // Specifications list (array of strings)
            "Material: Powder-coated steel, Carrara marble",
            "Dimensions: 300cm x 80cm x 250cm",
            "Features: LED lighting, ethanol fireplace",
            "Finish: Matte black with white marble"
        ]
    },
    {
        id: 2,
        name: "Contemporary Dining Set",
        mainImage: "assets/images/products/modern/modern-2.jpg",
        gallery: ["assets/images/products/modern/modern-2.jpg"],
        description: "Elegant dining area featuring a round glass-top table with solid wood base and luxurious navy blue velvet chairs. The built-in oak wall unit provides ample storage while maintaining a sleek, minimalist aesthetic.",
        specs: [
            "Material: Tempered glass, solid oak, velvet upholstery",
            "Table: 140cm diameter",
            "Chairs: 6 pieces with brass accents",
            "Wall unit: Custom fitted with LED strips"
        ]
    },
    {
        id: 3,
        name: "Modern Master Bedroom",
        mainImage: "assets/images/products/modern/modern-3.jpg",
        gallery: ["assets/images/products/modern/modern-3.jpg"],
        description: "Sophisticated bedroom design with floor-to-ceiling wood paneling, integrated nightstands, and hidden storage. The grey upholstered bed features a tall headboard with built-in shelving and ambient lighting.",
        specs: [
            "Material: American walnut, linen fabric",
            "Bed: King size with storage base",
            "Features: Hidden TV mount, ambient lighting",
            "Wardrobe: Full-height mirrored doors"
        ]
    },
    {
        id: 4,
        name: "Minimalist TV Lounge",
        mainImage: "assets/images/products/modern/modern-4.jpg",
        gallery: ["assets/images/products/modern/modern-4.jpg"],
        description: "Clean-lined entertainment wall featuring vertical wood slat paneling, floating TV mount, and symmetrical metal shelving units. The design creates a focal point while maintaining minimalist elegance.",
        specs: [
            "Material: Oak veneer, black steel",
            "TV Mount: 65-inch compatible",
            "Shelving: 4 floating units with LED",
            "Finish: Natural oak with black accents"
        ]
    },
    {
        id: 5,
        name: "Smart Bedroom Cabinet",
        mainImage: "assets/images/products/modern/modern-5.jpg",
        gallery: ["assets/images/products/modern/modern-5.jpg"],
        description: "Innovative bedroom solution featuring a rotating TV cabinet that conceals the screen when not in use. Includes integrated vanity desk and sliding door system leading to the en-suite bathroom.",
        specs: [
            "Material: White oak, black glass",
            "Mechanism: 360-degree rotation",
            "Storage: 4 drawers + vanity compartment",
            "Mirror: Backlit LED vanity mirror"
        ]
    },
    {
        id: 6,
        name: "Luxury Master Bathroom",
        mainImage: "assets/images/products/modern/modern-6.jpg",
        gallery: ["assets/images/products/modern/modern-6.jpg"],
        description: "Spa-like bathroom featuring book-matched marble walls, double vanity with dark wood cabinets, and frameless glass shower enclosure. The design emphasizes natural light and premium materials.",
        specs: [
            "Material: Calacatta marble, walnut",
            "Vanity: 240cm double sink",
            "Shower: Rainfall + handheld system",
            "Flooring: Heated marble tiles"
        ]
    },
    {
        id: 7,
        name: "Designer Kitchen Island",
        mainImage: "assets/images/products/modern/modern-7.jpg",
        gallery: ["assets/images/products/modern/modern-7.jpg"],
        description: "Contemporary kitchen featuring a massive marble island with waterfall edges, integrated appliances, and custom cabinetry. The circular mirror and pendant lighting add artistic elements to the functional space.",
        specs: [
            "Material: Carrara marble, lacquered wood",
            "Island: 300cm x 120cm",
            "Features: Built-in cooktop, wine fridge",
            "Lighting: 3 designer pendant lights"
        ]
    },
    {
        id: 8,
        name: "Contemporary Guest Bathroom",
        mainImage: "assets/images/products/modern/modern-8.jpg",
        gallery: ["assets/images/products/modern/modern-8.jpg"],
        description: "Compact yet luxurious bathroom featuring vertical wood slat walls, backlit mirror, and floating vanity. The glass shower enclosure maximizes space while maintaining an open feel.",
        specs: [
            "Material: Porcelain tiles, teak wood",
            "Vanity: Wall-mounted with vessel sink",
            "Shower: Frameless glass enclosure",
            "Lighting: Recessed ceiling + mirror LED"
        ]
    },
    {
        id: 9,
        name: "Modern Media Wall",
        mainImage: "assets/images/products/modern/modern-9.jpg",
        gallery: ["assets/images/products/modern/modern-9.jpg"],
        description: "Striking TV wall design featuring vertical wood slat paneling, textured stone backdrop, and asymmetrical shelving with integrated lighting. The low-profile media console provides hidden storage.",
        specs: [
            "Material: Walnut slats, engineered stone",
            "TV Size: Up to 75 inches",
            "Shelving: 3 open compartments with LED",
            "Console: 4 soft-close drawers"
        ]
    },
    {
        id: 10,
        name: "Brass & Wood Coffee Table",
        mainImage: "assets/images/products/modern/modern-10.jpg",
        gallery: ["assets/images/products/modern/modern-10.jpg"],
        description: "Artisan coffee table featuring a two-tier design with natural wood top and brushed brass lower shelf. The geometric form creates visual interest while providing functional display space.",
        specs: [
            "Material: Solid walnut, brushed brass",
            "Dimensions: 120cm x 60cm x 45cm",
            "Finish: Natural oil + clear lacquer",
            "Weight: 35kg"
        ]
    }
];

// ============================================
// CLASSICAL FURNITURE DATA
// EDIT THIS: Add, remove, or modify classical products
// ============================================

const classicalProducts = [
    {
        id: 101,  // IDs should be unique, so start at 101 for classical
        name: "Heritage Wooden Door",
        mainImage: "assets/images/products/classical/classical-1.jpg",
        gallery: ["assets/images/products/classical/classical-1.jpg"],
        description: "Hand-carved solid mahogany door featuring raised panel design and intricate molding details. Finished with rich walnut stain and protected with premium lacquer for lasting beauty.",
        specs: [
            "Material: Solid mahogany",
            "Dimensions: 240cm x 120cm x 5cm",
            "Finish: Walnut stain with lacquer",
            "Hardware: Brass handle and lockset"
        ]
    },
    {
        id: 102,
        name: "Grand Marble Staircase",
        mainImage: "assets/images/products/classical/classical-2.jpg",
        gallery: ["assets/images/products/classical/classical-2.jpg"],
        description: "Magnificent staircase featuring Crema Marfil marble steps with black granite inlay borders. The wrought iron railing with scrollwork design and mahogany handrail adds timeless elegance.",
        specs: [
            "Material: Crema Marfil marble, wrought iron",
            "Steps: 15 custom-cut marble slabs",
            "Railing: Hand-forged iron with gold accents",
            "Handrail: Solid mahogany with carved details"
        ]
    },
    {
        id: 103,
        name: "Elegant Powder Room",
        mainImage: "assets/images/products/classical/classical-3.jpg",
        gallery: ["assets/images/products/classical/classical-3.jpg"],
        description: "Luxurious powder room featuring backlit onyx mirror surround, dark wood vanity with silver leaf details, and crystal vessel sink. The textured wall panels add depth and sophistication.",
        specs: [
            "Material: Onyx, mahogany, silver leaf",
            "Vanity: 120cm with 3 drawers",
            "Mirror: Full-height with LED backlighting",
            "Sink: Crystal vessel with gold faucet"
        ]
    },
    {
        id: 104,
        name: "Crystal Chandelier Living Room",
        mainImage: "assets/images/products/classical/classical-4.jpg",
        gallery: ["assets/images/products/classical/classical-4.jpg"],
        description: "Opulent living room featuring a grand crystal chandelier, traditional fireplace with marble surround, and classic furniture pieces. The herringbone parquet flooring and ornate moldings complete the luxurious atmosphere.",
        specs: [
            "Chandelier: Bohemian crystal, 24 arms",
            "Flooring: Oak parquet with walnut border",
            "Moldings: Plaster crown and baseboards",
            "Fireplace: Carrara marble mantel"
        ]
    },
    {
        id: 105,
        name: "Tapestry Bedroom Suite",
        mainImage: "assets/images/products/classical/classical-5.jpg",
        gallery: ["assets/images/products/classical/classical-5.jpg"],
        description: "Regal bedroom featuring an antique Aubusson tapestry as the focal point, upholstered settee with silk fabric, and crystal accessories. The traditional coffee table showcases fine woodworking craftsmanship.",
        specs: [
            "Tapestry: 18th century Aubusson reproduction",
            "Settee: Silk upholstery with fringe",
            "Coffee Table: Mahogany with glass top",
            "Accessories: Lead crystal collection"
        ]
    },
    {
        id: 106,
        name: "Grand Entry Hall",
        mainImage: "assets/images/products/classical/classical-6.jpg",
        gallery: ["assets/images/products/classical/classical-6.jpg"],
        description: "Impressive double-door entry with marble flooring featuring intricate inlay patterns. The coffered ceiling, wall sconces, and classic armchair create a welcoming yet formal reception area.",
        specs: [
            "Flooring: Botticino marble with black border",
            "Doors: Double solid oak with carved panels",
            "Ceiling: Coffered design with crown molding",
            "Lighting: Crystal wall sconces"
        ]
    },
    {
        id: 107,
        name: "Neoclassical Console Table",
        mainImage: "assets/images/products/classical/classical-7.jpg",
        gallery: ["assets/images/products/classical/classical-7.jpg"],
        description: "Hand-carved mahogany console table with cabriole legs and glass top display surface. Paired with an antique landscape painting in a gilded frame, perfect for entryways or formal living spaces.",
        specs: [
            "Material: Solid mahogany",
            "Dimensions: 140cm x 45cm x 90cm",
            "Top: Beveled glass",
            "Finish: Dark mahogany with gold trim"
        ]
    }
];

// ============================================
// TAB SWITCHING FUNCTION
// Switches between Modern and Classical sections
// ============================================

function switchTab(tab) {
    // Get section elements
    const modernSection = document.getElementById('modern-section');
    const classicalSection = document.getElementById('classical-section');
    const tabs = document.querySelectorAll('.tab-btn');
    
    // Remove active class from all tabs
    tabs.forEach(t => t.classList.remove('active'));
    
    // Show/hide appropriate section
    if (tab === 'modern') {
        modernSection.classList.add('active');      // Show modern
        classicalSection.classList.remove('active'); // Hide classical
        tabs[0].classList.add('active');            // Highlight modern tab
        renderProducts('modern');                    // Load modern products
    } else {
        modernSection.classList.remove('active');   // Hide modern
        classicalSection.classList.add('active');   // Show classical
        tabs[1].classList.add('active');            // Highlight classical tab
        renderProducts('classical');                // Load classical products
    }
}

// ============================================
// PRODUCT RENDERING FUNCTION
// Creates HTML for product cards and inserts into page
// ============================================

function renderProducts(type) {
    // Get correct grid element based on type
    const grid = type === 'modern' 
        ? document.getElementById('modern-grid') 
        : document.getElementById('classical-grid');
    
    // Get correct product array
    const products = type === 'modern' ? modernProducts : classicalProducts;
    
    // Generate HTML for each product
    grid.innerHTML = products.map(product => `
        <div class="product-card" onclick="openModal(${product.id}, '${type}')">
            <div class="product-image">
                <img src="${product.mainImage}" 
                     alt="${product.name}" 
                     onerror="this.src='https://via.placeholder.com/600x400?text=${encodeURIComponent(product.name)}'">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description.substring(0, 80)}...</p>
            </div>
        </div>
    `).join('');  // Join array into single string
}

// ============================================
// MODAL FUNCTIONS
// Controls product detail popup window
// ============================================

// Variables to track current state
let currentProduct = null;    // Currently viewed product
let currentImageIndex = 0;    // Currently shown image
let currentType = 'modern';   // Current section type

// Open modal with product details
function openModal(productId, type) {
    // Save current state
    currentType = type;
    const products = type === 'modern' ? modernProducts : classicalProducts;
    currentProduct = products.find(p => p.id === productId);
    currentImageIndex = 0;
    
    // Fill modal with product data
    document.getElementById('modalTitle').textContent = currentProduct.name;
    document.getElementById('modalDesc').textContent = currentProduct.description;
    document.getElementById('mainImg').src = currentProduct.gallery[0];
    
    // Fill specifications list
    const specsList = document.getElementById('modalSpecs');
    specsList.innerHTML = currentProduct.specs.map(spec => `<li>${spec}</li>`).join('');
    
    // Create thumbnail strip
    const thumbStrip = document.getElementById('thumbnailStrip');
    thumbStrip.innerHTML = currentProduct.gallery.map((img, idx) => `
        <div class="thumbnail ${idx === 0 ? 'active' : ''}" onclick="changeImage(${idx})">
            <img src="${img}" alt="View ${idx + 1}" 
                 onerror="this.src='https://via.placeholder.com/80?text=${idx + 1}'">
        </div>
    `).join('');
    
    // Show modal
    document.getElementById('productModal').classList.add('active');
    document.body.style.overflow = 'hidden';  // Prevent background scrolling
}

// Close modal
function closeModal() {
    document.getElementById('productModal').classList.remove('active');
    document.body.style.overflow = 'auto';  // Restore scrolling
}

// Change main image when thumbnail clicked
function changeImage(index) {
    currentImageIndex = index;
    document.getElementById('mainImg').src = currentProduct.gallery[index];
    
    // Update active thumbnail styling
    document.querySelectorAll('.thumbnail').forEach((thumb, idx) => {
        thumb.classList.toggle('active', idx === index);
    });
}

// Close modal when clicking outside content
document.getElementById('productModal').addEventListener('click', (e) => {
    // If clicked element is the overlay (not the content)
    if (e.target === e.currentTarget) {
        closeModal();
    }
});

// ============================================
// INITIALIZATION
// Runs when page loads
// ============================================

// Render modern products by default
renderProducts('modern');

// ============================================
// LOCAL STORAGE
// Saves edited text to browser memory
// ============================================

// Save content when user finishes editing (blur event)
document.querySelectorAll('[contenteditable]').forEach(el => {
    el.addEventListener('blur', function() {
        // Save to browser storage with element ID as key
        localStorage.setItem(this.id, this.innerHTML);
    });
});

// Load saved content when page loads
window.addEventListener('load', () => {
    document.querySelectorAll('[contenteditable]').forEach(el => {
        const saved = localStorage.getItem(el.id);
        if (saved) {
            el.innerHTML = saved;  // Restore saved content
        }
    });
});