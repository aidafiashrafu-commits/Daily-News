// ===========================
// ADMIN PANEL JAVASCRIPT
// =========================== 

// ===========================
// LOGIN PAGE FUNCTIONALITY
// ===========================

if (document.getElementById('loginForm')) {
    const loginForm = document.getElementById('loginForm');
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('errorMessage');

    // Toggle password visibility
    if (togglePassword) {
        togglePassword.addEventListener('click', (e) => {
            e.preventDefault();
            const icon = togglePassword.querySelector('i');
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                passwordInput.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    }

    // Handle login form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const remember = document.getElementById('remember').checked;

        // Validate credentials (Default: admin / password123)
        if (username === 'admin' && password === 'password123') {
            // Store login info if remember me is checked
            if (remember) {
                localStorage.setItem('adminUser', username);
            }

            // Store session
            sessionStorage.setItem('adminLoggedIn', 'true');
            sessionStorage.setItem('adminUser', username);

            // Redirect to dashboard
            window.location.href = 'dashboard.html';
        } else {
            // Show error
            errorMessage.textContent = 'Invalid username or password. Try admin / password123';
            errorMessage.classList.add('show');
            setTimeout(() => {
                errorMessage.classList.remove('show');
            }, 5000);
        }
    });

    // Check if user is remembered
    window.addEventListener('load', () => {
        const rememberedUser = localStorage.getItem('adminUser');
        if (rememberedUser) {
            document.getElementById('username').value = rememberedUser;
            document.getElementById('username').focus();
        }
    });
}

// ===========================
// DASHBOARD PAGE FUNCTIONALITY
// ===========================

// Check if user is logged in
function checkAdminAuth() {
    if (!sessionStorage.getItem('adminLoggedIn')) {
        window.location.href = 'login.html';
    }
}

// Check auth on dashboard
if (document.querySelector('.admin-body')) {
    checkAdminAuth();
}

// Sidebar and Navigation
const sidebarToggle = document.getElementById('sidebarToggle');
const adminSidebar = document.querySelector('.admin-sidebar');
const navLinks = document.querySelectorAll('.nav-link');
const logoutBtn = document.getElementById('logoutBtn');

// Toggle sidebar on mobile
if (sidebarToggle) {
    sidebarToggle.addEventListener('click', () => {
        adminSidebar.classList.toggle('active');
    });
}

// Close sidebar when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));
        // Add active class to clicked link
        link.classList.add('active');

        // Get tab name
        const tabName = link.getAttribute('data-tab');

        // Hide all tab content
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.classList.add('hidden');
        });

        // Show selected tab
        const tabElement = document.getElementById(tabName + '-tab');
        if (tabElement) {
            tabElement.classList.remove('hidden');
        }

        // Close sidebar on mobile
        if (window.innerWidth <= 768) {
            adminSidebar.classList.remove('active');
        }
    });
});

// Logout functionality
if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (confirm('Are you sure you want to logout?')) {
            sessionStorage.removeItem('adminLoggedIn');
            sessionStorage.removeItem('adminUser');
            localStorage.removeItem('adminUser');
            window.location.href = 'login.html';
        }
    });
}

// ===========================
// NEW POST MODAL
// ===========================

const newPostBtn = document.getElementById('newPostBtn');
const newPostModal = document.getElementById('newPostModal');
const closePostModal = document.getElementById('closePostModal');
const cancelPostBtn = document.getElementById('cancelPostBtn');
const postForm = document.getElementById('postForm');

if (newPostBtn) {
    newPostBtn.addEventListener('click', () => {
        newPostModal.classList.add('show');
    });
}

if (closePostModal) {
    closePostModal.addEventListener('click', () => {
        newPostModal.classList.remove('show');
    });
}

if (cancelPostBtn) {
    cancelPostBtn.addEventListener('click', () => {
        newPostModal.classList.remove('show');
    });
}

// Close modal when clicking outside
if (newPostModal) {
    window.addEventListener('click', (e) => {
        if (e.target === newPostModal) {
            newPostModal.classList.remove('show');
        }
    });
}

// Handle post form submission
if (postForm) {
    postForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(postForm);
        
        // Show success message
        alert('Post created successfully! (Demo)');
        
        // Reset form
        postForm.reset();
        
        // Close modal
        newPostModal.classList.remove('show');
    });
}

// ===========================
// POSTS TABLE ACTIONS
// ===========================

document.querySelectorAll('.posts-table .btn-icon').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const row = e.target.closest('tr');
        const postTitle = row.querySelector('strong').textContent;

        if (btn.classList.contains('danger')) {
            // Delete action
            if (confirm(`Delete post "${postTitle}"?`)) {
                row.remove();
                alert('Post deleted successfully! (Demo)');
            }
        } else if (btn.querySelector('i').classList.contains('fa-edit')) {
            // Edit action
            alert(`Edit post: "${postTitle}" (Demo)`);
        } else if (btn.querySelector('i').classList.contains('fa-eye')) {
            // View action
            alert(`View post: "${postTitle}" (Demo)`);
        }
    });
});

// ===========================
// CATEGORIES MANAGEMENT
// ===========================

const newCategoryBtn = document.getElementById('newCategoryBtn');

if (newCategoryBtn) {
    newCategoryBtn.addEventListener('click', () => {
        const categoryName = prompt('Enter category name:');
        if (categoryName) {
            alert(`Category "${categoryName}" created! (Demo)`);
        }
    });
}

// Category card actions
document.querySelectorAll('.category-card .btn-small').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const card = e.target.closest('.category-card');
        const categoryName = card.querySelector('h3').textContent;

        if (btn.classList.contains('danger')) {
            if (confirm(`Delete category "${categoryName}"?`)) {
                card.remove();
                alert('Category deleted! (Demo)');
            }
        } else {
            alert(`Edit category: "${categoryName}" (Demo)`);
        }
    });
});

// ===========================
// COMMENTS MANAGEMENT
// ===========================

document.querySelectorAll('.comment-item .btn-small').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const comment = e.target.closest('.comment-item');
        const commentText = comment.querySelector('.comment-text').textContent;

        if (btn.textContent.includes('Approve')) {
            const badge = comment.querySelector('.badge');
            badge.classList.remove('badge-pending');
            badge.classList.add('badge-approved');
            badge.textContent = 'Approved';
            alert('Comment approved! (Demo)');
        } else if (btn.textContent.includes('Reject') || btn.textContent.includes('Delete')) {
            if (confirm('Delete this comment?')) {
                comment.remove();
                alert('Comment deleted! (Demo)');
            }
        } else if (btn.textContent.includes('Reply')) {
            const reply = prompt('Enter your reply:');
            if (reply) {
                alert(`Reply posted! (Demo)\n${reply}`);
            }
        }
    });
});

// ===========================
// USERS MANAGEMENT
// ===========================

const newUserBtn = document.getElementById('newUserBtn');

if (newUserBtn) {
    newUserBtn.addEventListener('click', () => {
        alert('Create new user form would open here (Demo)');
    });
}

// User table actions
document.querySelectorAll('.users-table .btn-icon').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const row = e.target.closest('tr');
        const userName = row.querySelector('strong').textContent;

        if (btn.classList.contains('danger')) {
            if (confirm(`Delete user "${userName}"?`)) {
                row.remove();
                alert('User deleted! (Demo)');
            }
        } else {
            alert(`Edit user: "${userName}" (Demo)`);
        }
    });
});

// ===========================
// SETTINGS FORMS
// ===========================

document.querySelectorAll('.settings-form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Settings updated successfully! (Demo)');
    });
});

// ===========================
// SEARCH FUNCTIONALITY
// ===========================

const searchInput = document.getElementById('searchInput');

if (searchInput) {
    searchInput.addEventListener('keyup', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        // Search in posts table
        document.querySelectorAll('.posts-table tbody tr').forEach(row => {
            const text = row.textContent.toLowerCase();
            row.style.display = text.includes(searchTerm) ? '' : 'none';
        });

        // Search in comments
        document.querySelectorAll('.comment-item').forEach(item => {
            const text = item.textContent.toLowerCase();
            item.style.display = text.includes(searchTerm) ? '' : 'none';
        });
    });
}

// ===========================
// NOTIFICATION BELL
// ===========================

const notificationBell = document.querySelector('.notification-bell');

if (notificationBell) {
    notificationBell.addEventListener('click', () => {
        alert('You have 3 new notifications:\n1. New comment on "Breaking News"\n2. New subscriber\n3. System update available');
    });
}

// ===========================
// USER PROFILE DROPDOWN
// ===========================

const userProfile = document.querySelector('.user-profile');

if (userProfile) {
    userProfile.addEventListener('click', () => {
        alert(`Admin: ${sessionStorage.getItem('adminUser') || 'Admin User'}`);
    });
}

// ===========================
// RESPONSIVE SIDEBAR TOGGLE
// ===========================

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        adminSidebar.classList.remove('active');
    }
});

// ===========================
// CHART PLACEHOLDER
// ===========================

// Create a simple chart placeholder
const chartCanvas = document.getElementById('viewsChart');
if (chartCanvas) {
    const ctx = chartCanvas.getContext('2d');
    
    // Simple bar chart
    const data = [150, 200, 180, 220, 240, 320, 280];
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
    
    const chartWidth = chartCanvas.width;
    const chartHeight = chartCanvas.height;
    const padding = 40;
    const graphWidth = chartWidth - (padding * 2);
    const graphHeight = chartHeight - (padding * 2);
    const barWidth = graphWidth / data.length * 0.8;
    const barSpacing = graphWidth / data.length;
    
    const maxValue = Math.max(...data);
    
    // Draw background
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(0, 0, chartWidth, chartHeight);
    
    // Draw bars
    ctx.fillStyle = '#2563eb';
    data.forEach((value, index) => {
        const barHeight = (value / maxValue) * graphHeight;
        const x = padding + (index * barSpacing) + (barSpacing - barWidth) / 2;
        const y = chartHeight - padding - barHeight;
        
        ctx.fillRect(x, y, barWidth, barHeight);
    });
    
    // Draw labels
    ctx.fillStyle = '#64748b';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    labels.forEach((label, index) => {
        const x = padding + (index * barSpacing) + barSpacing / 2;
        const y = chartHeight - padding + 20;
        ctx.fillText(label, x, y);
    });
}

// ===========================
// KEYBOARD SHORTCUTS
// ===========================

document.addEventListener('keydown', (e) => {
    // Alt + L for Logout
    if (e.altKey && e.key === 'l') {
        e.preventDefault();
        if (logoutBtn) logoutBtn.click();
    }

    // Escape to close modals
    if (e.key === 'Escape') {
        if (newPostModal) {
            newPostModal.classList.remove('show');
        }
    }
});

// ===========================
// LOCAL STORAGE FOR ADMIN DATA
// ===========================

// Initialize admin data if not exists
if (!localStorage.getItem('adminData')) {
    const adminData = {
        totalPosts: 24,
        totalViews: 1200,
        comments: 87,
        subscribers: 456
    };
    localStorage.setItem('adminData', JSON.stringify(adminData));
}

// Function to get admin data
function getAdminData() {
    return JSON.parse(localStorage.getItem('adminData')) || {};
}

// Function to save admin data
function saveAdminData(data) {
    localStorage.setItem('adminData', JSON.stringify(data));
}

console.log('Admin Panel Loaded Successfully ✓');
