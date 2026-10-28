# MD Jabbar Mollah: Personal Portfolio

A fully responsive personal portfolio built with **Next.js** (App Router). It showcases my projects, skills, background and contact details, with a light and dark theme.

🔗 **Live site:** https://YOUR-PORTFOLIO.vercel.app *(ডিপ্লয়ের পরে এই লিংক বদলাও)*

---

## ✨ Features

- **Responsive navbar** with a dropdown menu on mobile and tablet
- **Light / dark mode** toggle, remembered in the browser
- **Hero section** with designation, introduction, GitHub and LinkedIn buttons and a resume button
- **Projects** shown as cards, with a *Details* page for each project
- **Skills** grouped by category (Languages, Frontend, Backend, Database, Tools & AI) with icons
- **About Me** with my programming journey and interests
- **Resume** to view and download
- **Contact** section with email, phone, WhatsApp and social links
- **Social preview image** generated automatically when the link is shared

## 🛠️ Built With

- [Next.js](https://nextjs.org/) (App Router) and React
- JavaScript and plain CSS (CSS variables for the theme)
- [React Icons](https://react-icons.github.io/react-icons/)
- `next/font` with Plus Jakarta Sans and JetBrains Mono
- [Vercel](https://vercel.com/) for hosting

## 📂 Projects Included

| Project | Description | Live | Code |
|---|---|---|---|
| **BazarDor** | Daily market price tracker for essential goods, with a live price ticker and sign-in | [Live](https://assignment-7-mu-ebon.vercel.app) | [GitHub](https://github.com/mdjabbarmollah/Assignment-7) |
| **DevStack** | Build your own developer stack with live feedback | [Live](https://zesty-lamington-0bb583.netlify.app/) | [GitHub](https://github.com/mdjabbarmollah/Project-5) |
| **FitLog** | Dark-themed gym workout planner | [Live](https://workout-project-chi.vercel.app/) | [GitHub](https://github.com/mdjabbarmollah/Workout-Project-) |

## 🗂️ Project Structure

```
src/
├── app/
│   ├── layout.js                 # Fonts, metadata, navbar
│   ├── page.js                   # Home page and section order
│   ├── globals.css               # Theme colours and styles
│   ├── opengraph-image.js        # Social preview image
│   └── projects/[slug]/page.js   # Project detail page
├── components/                   # Navbar, Hero, Work, Skills, About, Resume, Contact
└── data/
    ├── profile.js                # Personal info, about text and skills
    └── projects.js               # Project list
public/                           # Photo, resume and project images
```

## 🚀 Run Locally

**Requirement:** Node.js 20.9 or newer

```bash
git clone https://github.com/mdjabbarmollah/Portfolio2.git
cd Portfolio2
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## ✏️ Customize

- **Personal details** (name, contact, social links, about text): `src/data/profile.js`
- **Projects:** `src/data/projects.js`. Add a new object to the array to add a project card.
- **Photo and images:** `public/`
- **Resume:** replace `public/resume.pdf`
- **Colours:** the variables at the top of `src/app/globals.css`

## 📦 Build & Deploy

```bash
npm run build
npm run start
```

To deploy on Vercel, push the repository to GitHub, open [vercel.com/new](https://vercel.com/new), import the repository and click **Deploy**. Vercel detects Next.js automatically.

## 📬 Contact

- ✉️ Email: mdjabbarmollah718@gmail.com
- 💼 LinkedIn: https://www.linkedin.com/in/mdjabbarmollah/
- 🐙 GitHub: https://github.com/mdjabbarmollah
