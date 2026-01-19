# Daily News - Modern News Website

A fully responsive, feature-rich news website built with HTML5, CSS3, and JavaScript. Inspired by modern news platforms like WordPress, with all essential features for a professional news outlet.

## 🌟 Features

### Core Features
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, contemporary design with smooth animations and transitions
- **Fast Loading**: Optimized performance with minimal external dependencies

### Content Management
- **Featured Stories Section**: Highlight important news articles
- **Latest News Grid**: Display multiple articles in an organized grid layout
- **Category System**: Organized content by categories (Technology, Business, Sports, Health, Entertainment, World)
- **Individual Article Pages**: Full article display with rich formatting

### Social Media Integration
- **Header Social Icons**: Quick access to social media profiles in the header
- **Footer Social Links**: Social icons in the footer for easy access
- **Facebook Share**: Direct Facebook sharing of articles
- **WhatsApp Share**: Share articles directly to WhatsApp contacts
- **Twitter/X Share**: Tweet articles with automatic formatting
- **Copy Link**: Quick copy-to-clipboard functionality

### Interactive Features
- **Floating WhatsApp Chat Button**: Fixed chat button in the bottom right corner for easy customer contact
- **Share Modal**: Beautiful modal dialog for sharing articles
- **Newsletter Signup**: Email subscription form to build your audience
- **Search Functionality**: Built-in search bar (ready for integration)
- **Mobile Menu**: Hamburger menu for mobile navigation

### Additional Pages
- **About Us Page**: Information about the news organization with team section
- **Contact Us Page**: Multiple contact methods and contact form
- **FAQ Section**: Frequently asked questions with answers

## 📁 File Structure

```
Daily-News/
├── index.html                 # Homepage
├── assets/
│   ├── css/
│   │   └── style.css         # All styling (responsive)
│   ├── js/
│   │   └── script.js         # JavaScript functionality
│   └── images/               # Image assets directory
├── pages/
│   ├── about.html            # About Us page
│   ├── contact.html          # Contact Us page
│   └── post.html             # Individual article page
└── README.md                 # This file
```

## 🔧 Installation & Setup

1. **Extract Files**: Extract the website files to your desired location
2. **Local Server** (Recommended): Use a local server to run the website
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js (http-server)
   npm install -g http-server
   http-server
   ```
3. **Open in Browser**: Navigate to `http://localhost:8000` (or your server port)

## 🌐 Social Media Links

All social media links are configurable in the HTML files. Update these URLs:

- **Facebook**: `https://www.facebook.com/share/1DAqbgWgGS/`
- **TikTok**: `https://www.tiktok.com/@music.lovers395?_r=1&_t=ZM`
- **WhatsApp**: `https://wa.me/255717007449`
- **Email**: `mailto:lingendea@gmail.com`

To customize:
1. Find the social media links in HTML files
2. Replace URLs with your own social media profiles
3. Update the WhatsApp number and email address

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px
- **Small Mobile**: 480px and below

## 🎨 Color Scheme

- **Primary**: #1a1a2e (Dark Navy)
- **Secondary**: #16213e (Deep Blue)
- **Accent**: #0f3460 (Ocean Blue)
- **Highlight**: #e94560 (Coral Red)
- **Text**: #333 (Dark Gray)
- **Light Background**: #f5f5f5 (Light Gray)

## 🚀 Key JavaScript Features

### Mobile Menu Toggle
The hamburger menu automatically toggles on mobile devices and closes when a link is clicked.

### Share Functionality
Multiple sharing options:
- **Facebook Share**: Opens Facebook sharing dialog
- **WhatsApp Share**: Creates shareable WhatsApp message
- **Twitter Share**: Opens Twitter share intent
- **Copy Link**: Copies article URL to clipboard

### Newsletter Subscription
Email subscription form with success feedback message.

### Scroll Animations
Posts animate in when they come into view using Intersection Observer API.

### Active Navigation
Automatically highlights the current page in the navigation menu.

## 📧 Contact Methods

The website includes three contact methods:
1. **Email Form** (Contact page)
2. **WhatsApp Chat** (Floating button + links)
3. **Social Media** (Header & Footer icons)

## 🔄 Share Buttons on Posts

Each article has two types of share buttons:
1. **Generic Share Button**: Opens share modal with multiple options
2. **WhatsApp Share**: Direct WhatsApp sharing

## 🌍 Browser Support

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📈 SEO Optimization

- Semantic HTML5 structure
- Meta descriptions for all pages
- Proper heading hierarchy
- Image alt text
- Mobile-friendly design
- Fast loading times

## 🔒 Security Considerations

- All external links use `target="_blank"` and `rel="noopener noreferrer"` for security
- No sensitive data stored locally
- Form data handled securely (can be integrated with backend)

## 🚀 Future Enhancements

- Add backend for dynamic content management
- Implement user authentication
- Add comments system
- Create admin dashboard
- Add search functionality with filtering
- Implement infinite scroll or pagination
- Add dark mode toggle
- Integrate with news API for real-time content
- Add multimedia support (videos, podcasts)
- Implement user accounts and bookmarking

## 📝 License

This website design is original work. Feel free to use and customize for your news organization or project.

## 💡 Tips for Customization

1. **Colors**: Edit CSS variables in `:root` section of style.css
2. **Logo**: Replace the newspaper icon with your logo or text
3. **Content**: Edit HTML files to add your articles and information
4. **Images**: Replace placeholder images with your own
5. **Font**: Change the font-family in CSS for different typography
6. **Social Links**: Update all social media URLs to yours

## 📞 Support

For help with customization or integration:
1. Check the inline HTML/CSS comments
2. Review JavaScript functions in script.js
3. Refer to the file structure guide above
4. Contact via the website's contact form

---

**Created with ❤️ for modern news delivery**

Version 1.0 | January 2026 
