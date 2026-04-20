# KGSSA - Kairuku-Goilala Student & Staff Association Website

A beautiful, modern website for the Kairuku-Goilala Student & Staff Association at PNG University of Technology.

## 🌟 Features

### Pages
- **Home** - Hero section with leadership showcase and key statistics
- **About** - Organization mission, vision, goals, and constitution
- **Events & Gallery** - Photo gallery organized by year (2021-2026) with event descriptions
- **Contact** - Contact form, social media links, and location information

### Design
- **Color Scheme**: Red and Yellow (primary), Green and Black (secondary)
- **Responsive**: Fully responsive design for mobile, tablet, and desktop
- **Modern UI**: Clean, professional layout with smooth animations
- **Accessibility**: Semantic HTML and accessible color contrasts

## 🚀 Getting Started

### Prerequisites
- Node.js v20 or higher
- npm v11 or higher

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open your browser and navigate to:
```
http://localhost:3000
```

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home page
│   ├── layout.tsx            # Root layout with Header & Footer
│   ├── globals.css           # Global styles
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── events/
│   │   └── page.tsx          # Events & Gallery page
│   └── contact/
│       └── page.tsx          # Contact page
├── components/
│   ├── Header.tsx            # Navigation header
│   └── Footer.tsx            # Footer with social links
public/
├── kai-goi_logo.jpeg         # KGSSA Logo
├── [Event Photos]            # Event gallery images (2021-2026)
└── PNG-UOT KGSSA 2ST CONSTITUTION DRAFT 2026.pdf
```

## 📸 Content

### Gallery Events
Events are organized by year with descriptions based on event names:

- **2021**: Carwash fundraising events
- **2022**: Awareness programs at Mainohana Secondary School
- **2023**: Multiple awareness program sessions and group photos
- **2024**: University games fundraising and orientation
- **2025**: Independence celebration and orientation events
- **2026**: Central graduation night and leadership showcase

## 🔗 Social Media Links

- **Facebook**: https://www.facebook.com/profile.php?id=61575377257618
- **Facebook Group**: https://facebook.com/groups/506427326771552/
- **Instagram**: https://www.instagram.com/_kgssa

## 📧 Contact Information

- **Email**: kgssa.pngut@gmail.com
- **Location**: PNG University of Technology, Lae, Morobe Province

## 🛠️ Technologies Used

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Library**: React 19
- **Icons**: Emojis and SVG

## 📝 Building & Deployment

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Linting
```bash
npm run lint
```

## 🎨 Customization

### Colors
Main colors can be customized in:
- `src/components/Header.tsx` - Red and Yellow theme
- `src/app/globals.css` - CSS custom properties
- Individual page files - Tailwind color classes

### Adding New Events
Edit `src/app/events/page.tsx` and add entries to the `events` object with year, image path, title, and description.

### Contact Email
Update the email address in:
- `src/components/Footer.tsx`
- `src/app/contact/page.tsx`

## 📚 Constitution

The KGSSA Constitution (2026) is available for download on the About page and stored in the `public` folder.

## 🤝 Contributing

To contribute to this website:
1. Make changes to the appropriate files
2. Test locally with `npm run dev`
3. Ensure the site looks good on mobile and desktop
4. Build and deploy

## 📄 License

All content and design are property of KGSSA (Kairuku-Goilala Student & Staff Association).

## 📞 Support

For website issues or updates, please contact: kgssa.pngut@gmail.com

---

**Last Updated**: April 2026
**Built with ❤️ for the KGSSA Community**
