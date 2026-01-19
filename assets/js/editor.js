// ===========================
// POST EDITOR FUNCTIONALITY
// =========================== 

// Check admin auth
if (!sessionStorage.getItem('adminLoggedIn')) {
    window.location.href = 'login.html';
}

// ===========================
// Editor Elements
// ===========================

const postTitle = document.getElementById('postTitle');
const postContent = document.getElementById('postContent');
const postCategory = document.getElementById('postCategory');
const postStatus = document.getElementById('postStatus');
const publishDate = document.getElementById('publishDate');
const tagsInput = document.getElementById('tagsInput');
const metaDescription = document.getElementById('metaDescription');
const metaKeywords = document.getElementById('metaKeywords');
const enableComments = document.getElementById('enableComments');
const enableSharing = document.getElementById('enableSharing');
const featured = document.getElementById('featured');

const saveDraftBtn = document.getElementById('saveDraftBtn');
const publishBtn = document.getElementById('publishBtn');
const insertImageBtn = document.getElementById('insertImageBtn');
const uploadImageBtn = document.getElementById('uploadImageBtn');
const featuredImage = document.getElementById('featuredImage');
const imagePreview = document.getElementById('imagePreview');

const wordCount = document.getElementById('wordCount');
const charCountTotal = document.getElementById('charCountTotal');
const readTime = document.getElementById('readTime');
const charCount = document.getElementById('charCount');

const previewTabs = document.querySelectorAll('.preview-tab');
const previewDiv = document.getElementById('preview');
const toolbarBtns = document.querySelectorAll('.toolbar-btn');

let tags = [];

// ===========================
// Image Upload
// ===========================

uploadImageBtn.addEventListener('click', (e) => {
    e.preventDefault();
    featuredImage.click();
});

featuredImage.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            imagePreview.innerHTML = `
                <div style="position: relative; margin-top: 15px;">
                    <img src="${event.target.result}" style="width: 100%; border-radius: 8px; margin-bottom: 10px;">
                    <button type="button" class="btn btn-secondary" style="width: 100%; font-size: 12px;">
                        <i class="fas fa-times"></i> Remove Image
                    </button>
                </div>
            `;
            
            imagePreview.querySelector('button').addEventListener('click', (e) => {
                e.preventDefault();
                imagePreview.innerHTML = '';
                featuredImage.value = '';
            });
        };
        reader.readAsDataURL(file);
    }
});

// ===========================
// Text Formatting
// ===========================

toolbarBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const format = btn.getAttribute('data-format');
        
        switch(format) {
            case 'bold':
                document.execCommand('bold', false, null);
                break;
            case 'italic':
                document.execCommand('italic', false, null);
                break;
            case 'underline':
                document.execCommand('underline', false, null);
                break;
            case 'heading':
                document.execCommand('formatBlock', false, '<h2>');
                break;
            case 'list':
                document.execCommand('insertUnorderedList', false, null);
                break;
            case 'quote':
                document.execCommand('formatBlock', false, '<blockquote>');
                break;
            case 'link':
                const url = prompt('Enter URL:');
                if (url) {
                    document.execCommand('createLink', false, url);
                }
                break;
            case 'code':
                document.execCommand('formatBlock', false, '<pre>');
                break;
            case 'undo':
                document.execCommand('undo', false, null);
                break;
            case 'redo':
                document.execCommand('redo', false, null);
                break;
        }
        
        postContent.focus();
    });
});

// ===========================
// Insert Image into Content
// ===========================

insertImageBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const hiddenInput = document.getElementById('hiddenFileInput');
    hiddenInput.click();
    
    hiddenInput.onchange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.style.maxWidth = '100%';
                img.style.marginTop = '10px';
                img.style.marginBottom = '10px';
                img.style.borderRadius = '8px';
                postContent.appendChild(img);
                postContent.focus();
            };
            reader.readAsDataURL(file);
        }
    };
});

// ===========================
// Tags Management
// ===========================

tagsInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.key === ',') {
        e.preventDefault();
        const tag = tagsInput.value.trim().replace(/,/g, '');
        
        if (tag && !tags.includes(tag)) {
            tags.push(tag);
            renderTags();
            tagsInput.value = '';
        }
    }
});

function renderTags() {
    const tagsList = document.getElementById('tagsList');
    tagsList.innerHTML = '';
    
    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.className = 'tag';
        tagEl.innerHTML = `
            ${tag}
            <button type="button" class="tag-remove" data-tag="${tag}">
                <i class="fas fa-times"></i>
            </button>
        `;
        tagsList.appendChild(tagEl);
        
        tagEl.querySelector('.tag-remove').addEventListener('click', (e) => {
            e.preventDefault();
            tags = tags.filter(t => t !== tag);
            renderTags();
        });
    });
}

// ===========================
// Word Count & Statistics
// ===========================

function updateStats() {
    const text = postContent.innerText || '';
    const words = text.trim().split(/\s+/).filter(w => w.length > 0).length;
    const characters = text.length;
    const readingTime = Math.ceil(words / 200); // Average 200 words per minute
    
    wordCount.textContent = words;
    charCountTotal.textContent = characters;
    readTime.textContent = readingTime + ' min';
}

postContent.addEventListener('input', updateStats);
postContent.addEventListener('keyup', updateStats);

// ===========================
// Meta Description Counter
// ===========================

metaDescription.addEventListener('input', (e) => {
    const length = e.target.value.length;
    charCount.textContent = length + '/160';
    
    if (length > 160) {
        metaDescription.style.borderColor = '#ef4444';
    } else {
        metaDescription.style.borderColor = '#e2e8f0';
    }
});

// ===========================
// Preview Mode
// ===========================

previewTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        e.preventDefault();
        const tabName = tab.getAttribute('data-tab');
        
        previewTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        if (tabName === 'preview') {
            generatePreview();
            postContent.style.display = 'none';
            previewDiv.classList.remove('hidden');
        } else {
            postContent.style.display = 'block';
            previewDiv.classList.add('hidden');
        }
    });
});

function generatePreview() {
    const title = postTitle.value || 'Untitled Post';
    const category = postCategory.value || 'News';
    const content = postContent.innerHTML;
    const author = sessionStorage.getItem('adminUser') || 'Admin';
    const date = new Date().toLocaleDateString();
    
    previewDiv.innerHTML = `
        <article class="post-preview">
            <div class="preview-meta">
                <span class="category-badge">${category}</span>
                <span class="preview-date">${date} by ${author}</span>
            </div>
            <h1 class="preview-title">${title}</h1>
            <div class="preview-content">
                ${content}
            </div>
        </article>
    `;
}

// ===========================
// Save Draft
// ===========================

saveDraftBtn.addEventListener('click', () => {
    const postData = {
        title: postTitle.value,
        content: postContent.innerHTML,
        category: postCategory.value,
        tags: tags,
        status: 'draft',
        metaDescription: metaDescription.value,
        metaKeywords: metaKeywords.value,
        enableComments: enableComments.checked,
        enableSharing: enableSharing.checked,
        featured: featured.checked,
        savedAt: new Date().toISOString()
    };
    
    // Save to localStorage
    localStorage.setItem('postDraft', JSON.stringify(postData));
    
    // Show success message
    alert('Draft saved successfully!');
});

// ===========================
// Publish Post
// ===========================

publishBtn.addEventListener('click', () => {
    if (!postTitle.value.trim()) {
        alert('Please enter a post title');
        return;
    }
    
    if (!postContent.innerText.trim()) {
        alert('Please write some content');
        return;
    }
    
    if (!postCategory.value) {
        alert('Please select a category');
        return;
    }
    
    const postData = {
        title: postTitle.value,
        content: postContent.innerHTML,
        category: postCategory.value,
        tags: tags,
        status: postStatus.value,
        publishDate: publishDate.value || new Date().toISOString(),
        metaDescription: metaDescription.value,
        metaKeywords: metaKeywords.value,
        enableComments: enableComments.checked,
        enableSharing: enableSharing.checked,
        featured: featured.checked,
        author: sessionStorage.getItem('adminUser'),
        publishedAt: new Date().toISOString()
    };
    
    // Save post
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(postData);
    localStorage.setItem('posts', JSON.stringify(posts));
    
    // Show success message
    alert('Post published successfully!');
    
    // Redirect to posts list
    setTimeout(() => {
        window.location.href = 'dashboard.html';
    }, 1500);
});

// ===========================
// Load Draft on Page Load
// ===========================

window.addEventListener('load', () => {
    const savedDraft = localStorage.getItem('postDraft');
    
    if (savedDraft) {
        const draft = JSON.parse(savedDraft);
        postTitle.value = draft.title || '';
        postContent.innerHTML = draft.content || '';
        postCategory.value = draft.category || '';
        metaDescription.value = draft.metaDescription || '';
        metaKeywords.value = draft.metaKeywords || '';
        enableComments.checked = draft.enableComments !== false;
        enableSharing.checked = draft.enableSharing !== false;
        featured.checked = draft.featured || false;
        tags = draft.tags || [];
        renderTags();
        updateStats();
    }
    
    // Set current date/time
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    publishDate.value = now.toISOString().slice(0, 16);
});

// ===========================
// Sidebar Navigation
// ===========================

const sidebarToggle = document.getElementById('sidebarToggle');
const adminSidebar = document.querySelector('.admin-sidebar');
const logoutBtn = document.getElementById('logoutBtn');

if (sidebarToggle) {
    sidebarToggle.addEventListener('click', () => {
        adminSidebar.classList.toggle('active');
    });
}

if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (confirm('Are you sure you want to logout?')) {
            sessionStorage.removeItem('adminLoggedIn');
            window.location.href = 'login.html';
        }
    });
}

console.log('Post Editor Loaded Successfully ✓');
