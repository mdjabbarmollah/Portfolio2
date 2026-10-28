export const projects = [
  {
    slug: "bazar-dor",
    name: "BazarDor",
    summary: "A web app to check daily market prices of essential goods at a glance.",
    description:
      "BazarDor is a daily market price tracker for essential goods such as rice, lentils, oil, vegetables, fish, meat, eggs and spices. Users can see live price changes, daily price increases and decreases, and sign in to the app.",
    image: "/Screenshot%20(71).png",         
    liveLink: "https://assignment-7-mu-ebon.vercel.app",
    githubLink: "https://github.com/mdjabbarmollah/Assignment-7",
    tech: [
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "Better Auth",
      "MongoDB",
      "react-hot-toast",
    ],
    features: [
      "Live price ticker: a non-stop scrolling strip with product name, price and up/down change",
      "Price increase and decrease section showing the biggest gainers and losers of the day",
      "Category-based listing and sorting, with prices shown in Bangla numerals",
      "Market-wise prices: lowest, highest and average price for each product",
      "User authentication with email and password, Google and GitHub login, protected routes and profile update",
    ],
    challenges:
      "Keeping the live ticker smooth while the product list updates, and setting up email/password, Google and GitHub sign-in together with Better Auth and MongoDB.",
    future:
      "Add price history charts for each product, market-wise comparison pages, and price-change alerts for logged-in users.",
  },
  {
    slug: "devstack",
    name: "DevStack",
    summary: "Pick technologies and build your own dev stack with live feedback.",
    description:
      "DevStack lets users browse a list of technologies and add them to their own stack. A live panel shows what has been selected, and every add or remove action gives instant feedback, so the user always knows the state of their stack.",
    image: "/Screenshot%20(70).png",         
    liveLink: "https://zesty-lamington-0bb583.netlify.app/",
    githubLink: "https://github.com/mdjabbarmollah/Project-5",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "React-Toastify", "JSON", "Vite"],
    features: [
      "Duplicate add protection: once a technology is added, its button is disabled and reads \"added\"",
      "Live selection counter: the \"Your Stack\" panel always shows how many technologies are selected, with no refresh",
      "Real-time toast notifications for adding, removing or clearing the stack (react-toastify)",
    ],
    challenges:
      "Loading the technology data from JSON with useEffect without extra re-renders, and keeping the stack, the disabled buttons and the counter in sync using React state.",
    future:
      "Save the stack in local storage, add search and category filters, and let users share or export their stack.",
  },
  {
    slug: "fitlog",
    name: "FitLog",
    summary: "A dark, no-nonsense gym companion to browse lifts and build your daily plan.",
    description:
      "FitLog is a workout library app with twelve lifts covering every major muscle group. Users can browse exercises, lock them into today's plan, save favourites, and see the week's work add up.",
    image: "/Screenshot%20(72).png",
    liveLink: "https://workout-project-chi.vercel.app/",
    githubLink: "https://github.com/mdjabbarmollah/Workout-Project-",
    tech: ["Next.js (App Router)", "Tailwind CSS", "DaisyUI"],
    features: [
      "Workout library of twelve lifts, each card showing muscle groups, equipment, duration, calories and rating",
      "My Plan: add exercises to today's plan with a live counter in the navbar",
      "Saved list: keep favourite workouts with a separate counter",
      "Dark, clean interface with a bold hero section",
    ],
    challenges:
      "Managing the Plan and Saved lists together across pages and keeping the navbar counters in sync with every change.",
    future:
      "Add set and rep logging, weekly progress charts, and the ability to create custom workouts.",
  },
];