// ===========================
// DOM Elements
// ===========================
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const shareModal = document.getElementById('shareModal');
const closeModal = document.querySelector('.close');
const shareButtons = document.querySelectorAll('.share-btn');
const whatsappShareButtons = document.querySelectorAll('.whatsapp-share-btn');
const newsletterForm = document.getElementById('newsletterForm');
const navLinks = document.querySelectorAll('.nav-menu a');

// ===========================
// Mobile Menu Toggle
// ===========================
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ===========================
// Share Modal Functionality
// ===========================
let currentPostData = {
    title: '',
    url: window.location.href
};

shareButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const postId = btn.getAttribute('data-post');
        const postElement = btn.closest('.post');
        const postTitle = postElement.querySelector('h3 a').textContent;
        
        currentPostData = {
            title: postTitle,
            url: window.location.href + '?post=' + postId,
            postId: postId
        };
        
        shareModal.style.display = 'block';
    });
});

closeModal.addEventListener('click', () => {
    shareModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === shareModal) {
        shareModal.style.display = 'none';
    }
});

// ===========================
// Share Options
// ===========================
document.getElementById('shareFacebook').addEventListener('click', () => {
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentPostData.url)}&quote=${encodeURIComponent(currentPostData.title)}`;
    window.open(facebookShareUrl, 'facebook-share-dialog', 'width=800,height=600');
    shareModal.style.display = 'none';
});

document.getElementById('shareWhatsapp').addEventListener('click', () => {
    const whatsappMessage = `${currentPostData.title} - ${currentPostData.url}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    shareModal.style.display = 'none';
});

document.getElementById('shareTwitter').addEventListener('click', () => {
    const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(currentPostData.title)}&url=${encodeURIComponent(currentPostData.url)}`;
    window.open(twitterShareUrl, 'twitter-share-dialog', 'width=800,height=600');
    shareModal.style.display = 'none';
});

document.getElementById('shareCopy').addEventListener('click', () => {
    navigator.clipboard.writeText(currentPostData.url).then(() => {
        const copyBtn = document.getElementById('shareCopy');
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fas fa-check"></i><span>Copied!</span>';
        
        setTimeout(() => {
            copyBtn.innerHTML = originalText;
        }, 2000);
    }).catch(() => {
        alert('Failed to copy link');
    });
});

// ===========================
// WhatsApp Direct Share Buttons
// ===========================
whatsappShareButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const postTitle = btn.getAttribute('data-title');
        const postId = btn.getAttribute('data-post');
        const postUrl = window.location.href.split('?')[0] + '?post=' + postId;
        const message = `📰 ${postTitle}\n\n${postUrl}`;
        
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    });
});

// ===========================
// Newsletter Form
// ===========================
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input[type="email"]').value;
    
    // Simulate newsletter subscription
    console.log('Newsletter subscription:', email);
    
    // Show success message
    const button = newsletterForm.querySelector('button');
    const originalText = button.textContent;
    button.textContent = '✓ Subscribed!';
    button.style.backgroundColor = '#27ae60';
    
    // Reset after 3 seconds
    setTimeout(() => {
        button.textContent = originalText;
        button.style.backgroundColor = '';
        newsletterForm.reset();
    }, 3000);
});

// ===========================
// Search Functionality (Optional)
// ===========================
const searchButton = document.querySelector('.search-bar button');
const searchInput = document.querySelector('.search-bar input');

if (searchButton && searchInput) {
    searchButton.addEventListener('click', () => {
        const searchQuery = searchInput.value.trim();
        if (searchQuery) {
            console.log('Search for:', searchQuery);
            // You can add actual search functionality here
            alert('Search for: ' + searchQuery);
        }
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchButton.click();
        }
    });
}

// ===========================
// Active Navigation Link
// ===========================
function setActiveNavLink() {
    const currentLocation = window.location.href;
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.href === currentLocation) {
            link.classList.add('active');
        }
    });
}

setActiveNavLink();

// ===========================
// Smooth Scrolling for Anchor Links
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const element = document.querySelector(href);
            element.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Animation on Scroll
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all posts for scroll animation
document.querySelectorAll('.post').forEach(post => {
    post.style.opacity = '0';
    observer.observe(post);
});

// ===========================
// Page Load Animation
// ===========================
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ===========================
// Utility: Format Date
// ===========================
function formatDate(date) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// ===========================
// Utility: Calculate Read Time
// ===========================
function calculateReadTime(text) {
    const wordsPerMinute = 200;
    const wordCount = text.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);
    return readTime;
}

// ===========================
// Social Share Counter (Optional)
// ===========================
function trackShare(platform, postId) {
    const key = `${platform}_${postId}`;
    const currentCount = localStorage.getItem(key) || 0;
    localStorage.setItem(key, parseInt(currentCount) + 1);
    console.log(`Share tracked: ${platform} - ${postId}`);
}

// ===========================
// Initialize
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    console.log('Daily News website loaded successfully!');
});
