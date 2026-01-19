# Daily News Admin Panel

## Overview
The Daily News Admin Panel is a comprehensive content management system built into your website. It provides administrators with tools to manage posts, categories, comments, users, and site settings.

## Features

### 🔐 Authentication & Security
- Secure login system with password protection
- Session-based authentication
- Remember me functionality
- Default credentials for initial login

### 📝 Post Management
- Create, edit, and delete posts
- Rich text editor with formatting tools
- Featured image upload
- Post categories and tags
- Draft and scheduled publishing
- SEO optimization (meta descriptions, keywords)
- Word count and reading time statistics
- Preview mode before publishing
- Social sharing settings
- Comment moderation settings

### 🎨 Content Editor Features
- **Text Formatting**: Bold, Italic, Underline
- **Block Elements**: Headings, Lists, Blockquotes, Code blocks
- **Media**: Insert images directly into content
- **Links**: Add hyperlinks with URL
- **Word Count**: Real-time statistics
- **Preview Mode**: See how your post will look before publishing

### 📊 Dashboard
- Overview statistics (posts, views, comments, subscribers)
- Recent posts list
- Monthly views chart
- Quick actions

### 📂 Category Management
- Create and manage post categories
- View post count per category
- Delete categories

### 💬 Comment Moderation
- View all comments
- Approve pending comments
- Reject spam comments
- Reply to comments
- Delete comments

### 👥 User Management
- Manage admin users
- Create new users with different roles
- Administrator and Editor roles
- View user activity

### ⚙️ Site Settings
- General site settings (title, description, posts per page)
- Enable/disable comments
- Change admin password
- Account security settings

## Access the Admin Panel

### From the Website
1. Open the Daily News website
2. Click on **Admin** link in the navigation menu (top right)
3. You'll be redirected to the admin login page

### Direct URL
```
/admin/login.html
```

## Default Credentials

**Initial login credentials:**
- **Username**: `admin`
- **Password**: `password123`

⚠️ **IMPORTANT**: Change the password immediately after first login!

## How to Use

### Logging In
1. Navigate to `/admin/login.html`
2. Enter the default username and password
3. Check "Remember me" if you want to auto-fill username on next visit
4. Click "Login"

### Creating a New Post
1. Go to **Dashboard → Posts**
2. Click the **"New Post"** button
3. Or navigate to `/admin/editor.html` directly
4. Fill in the post details:
   - **Title**: Enter a compelling title
   - **Content**: Write your article content
   - **Category**: Select from available categories
   - **Tags**: Add relevant tags (comma-separated)
   - **Featured Image**: Upload a header image
   - **Settings**: Configure publication options

### Publishing a Post
1. Complete the post content and details
2. In the sidebar, set:
   - **Status**: Select "Published" or "Draft"
   - **Publish Date**: Choose when to publish
3. Click **"Publish"** to make it live
4. Or click **"Save Draft"** to save for later

### Managing Posts
1. Go to **Dashboard → Posts**
2. View all your posts in the table
3. Use action buttons to:
   - Edit: Modify post content
   - View: See how it looks on the website
   - Delete: Remove the post

### Post Editor Features

#### Text Formatting Toolbar
- **Bold**: Make text bold
- **Italic**: Make text italic
- **Underline**: Underline text
- **Heading**: Create section headings
- **Lists**: Create bullet lists
- **Quote**: Add blockquotes
- **Images**: Insert images
- **Links**: Add hyperlinks
- **Code**: Insert code blocks
- **Undo/Redo**: Navigate your edits

#### SEO Settings
- **Meta Description**: Summary for search engines (160 chars max)
- **Meta Keywords**: Relevant keywords for SEO

#### Publishing Options
- **Enable Comments**: Allow readers to comment
- **Show Share Buttons**: Display social sharing options
- **Feature This Post**: Highlight on homepage
- **Allow Sharing**: Enable social media sharing

#### Statistics
- Real-time word count
- Character count
- Estimated reading time

### Managing Categories
1. Go to **Dashboard → Categories**
2. View all categories
3. Create a new category with the **"New Category"** button
4. Edit or delete existing categories

### Moderating Comments
1. Go to **Dashboard → Comments**
2. View pending and approved comments
3. Actions available:
   - **Approve**: Publish a pending comment
   - **Reject**: Reject spam comments
   - **Reply**: Respond to comments
   - **Delete**: Remove a comment

### Managing Users
1. Go to **Dashboard → Users**
2. View all admin users
3. Create a new user with **"New User"** button
4. Edit user roles and permissions
5. Delete users if needed

### Site Settings
1. Go to **Dashboard → Settings**
2. Configure general site settings
3. Update your admin password
4. Click "Save Changes"

## Tips & Best Practices

### Content Tips
- ✅ Use descriptive titles (60-70 characters)
- ✅ Write compelling meta descriptions (150-160 characters)
- ✅ Use relevant tags and categories
- ✅ Include high-quality featured images
- ✅ Format content with headings and paragraphs
- ✅ Enable comments for reader engagement

### SEO Best Practices
- Include target keywords in title and meta description
- Use headings (H2, H3) to structure content
- Add alt text to images
- Create descriptive URLs
- Link to related posts
- Use internal and external links appropriately

### Security Tips
- Change password regularly
- Don't share login credentials
- Logout when done
- Use strong passwords
- Review admin access logs

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| Alt + L | Logout |
| Esc | Close modal/dialog |
| Ctrl + B | Bold |
| Ctrl + I | Italic |
| Ctrl + U | Underline |
| Ctrl + Z | Undo |
| Ctrl + Y | Redo |

## File Locations

```
admin/
├── login.html          # Login page
├── dashboard.html      # Main admin dashboard
└── editor.html         # Post editor

assets/
├── css/
│   └── admin-style.css # Admin panel styles
└── js/
    ├── admin-script.js # Admin functionality
    └── editor.js       # Post editor functionality
```

## Data Storage

- **Draft Posts**: Saved in browser localStorage
- **Published Posts**: Can be saved to localStorage or backend
- **Admin Session**: Stored in sessionStorage
- **User Preferences**: Stored in localStorage

## Technical Details

### Technologies Used
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Storage**: Browser localStorage & sessionStorage
- **Editor**: ContentEditable with custom formatting
- **Icons**: Font Awesome 6.4.0
- **Responsive**: Fully responsive design

### Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

### Can't Login
- Ensure you're using correct credentials: `admin` / `password123`
- Clear browser cache and try again
- Check if JavaScript is enabled

### Draft Not Saving
- Check browser storage quota
- Clear old drafts from storage
- Try a different browser

### Images Not Uploading
- Check file size (keep under 5MB)
- Use supported formats (JPG, PNG, GIF, WebP)
- Check browser console for errors

### Content Not Formatting
- Ensure you have text selected before applying formatting
- Try using keyboard shortcuts instead
- Refresh the editor page

## Support & Documentation

For more information about features, visit:
- Main Website: `index.html`
- About Us: `pages/about.html`
- Contact: `pages/contact.html`

## License

The Daily News Admin Panel is part of the Daily News website project.

---

**Version**: 1.0.0  
**Last Updated**: January 2026  
**Created by**: Daily News Development Team
