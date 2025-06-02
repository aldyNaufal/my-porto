// DataScienceData.js
export const WebMobileProjects = [
  {
    id: 1, // untuk key di map()
    title: "Inventory Management Website", // untuk Card.Title
    description: "This project is a web-based inventory management application developed to support the operational needs of the internship company. The system is designed to streamline item tracking and stock control processes through an intuitive and responsive user interface. Key features of the website include transaction recording, item restocking management, and detailed logging of item mutations. The platform allows staff to easily monitor stock movements in real-time and ensures data accuracy across departments. It is fully customized based on the company's workflow and continuously updated to meet evolving operational requirements.Additionally, the system is currently under ongoing development to integrate a machine learning-based feature. This feature is designed to automatically analyze stock data and provide early warnings when inventory levels are running low, helping the company take proactive restocking actions and avoid stockouts.", // untuk Card.Text
    
    // Status dan Category untuk Badge
    status: "Ongoing", // atau "Ongoing" - untuk filter dan badge
    category: "Web Development", // untuk badge category
    
    // Tanggal dan Durasi
    startDate: "May 2025", // untuk periode
    endDate: "Now", // untuk periode  
    duration: "2 months", // untuk durasi
    isPrivate: true,
    
    // Technologies untuk badges
    technologies: [
      "Python",
      "Flask", 
      "Scikit-learn",
      "Matplotlib",
      "Pandas",
      "React js",
      "Tailwind",
      "Docker",
      "Postgresql",
    ],
    
    // Responsibilities untuk modal detail
    responsibilities: [
      "Designed and prototyped the website interface using Figma to align with company workflow",
      "Developed a responsive web application using React.js and Tailwind CSS for inventory tracking",
      "Implemented backend services with Flask to manage transactions, restocking, and item mutations",
      "Built and integrated a machine learning model using Scikit-learn to predict low stock levels",
      "Visualized inventory trends and prediction outputs using Matplotlib and Pandas for better insights",
      "Containerized the application with Docker for streamlined deployment and scalability"
    ],
    figmaLink:null,
    // Optional: Links untuk modal (bisa ada atau tidak)
    githubLink: "https://github.com/username/project-name", // optional
  },
  {
    id: 2,
    title: "Day of Art Website",
    description: "This project is a web application designed to support our client, Day of Art, in managing participant registrations and organizing data more efficiently. The website is built with a responsive design and fully tailored to the client's requests. Its key features include displaying a list of events organized by the client, allowing participants to register directly through the platform. Additionally, the website is regularly updated to showcase the latest information about upcoming and past events. We also provide a calendar feature to help users view the schedule of events hosted by the client.",
    category: "Web Development",
    status: "Completed",
    startDate: "May 2024",
    endDate: "June 2024",
    duration: "2 months",
    technologies: ["Tailwind", "php", "Laravel", "mysql", "JavaScript"],
    responsibilities: [
      "Designed and developed a responsive user interface using Tailwind CSS to ensure mobile-first experience",
      "Built dynamic event listing and registration pages tailored to client needs",
      "Integrated Laravel Blade templates with frontend components for seamless data rendering",
      "Implemented calendar view and real-time event updates to enhance user engagement",
      "Led project planning and task delegation using agile methodology",
      "Coordinated directly with the client to gather requirements and present deliverables",
      "Managed communication between frontend and backend teams to ensure technical alignment",
      "Oversaw development progress and conducted testing to ensure timely and high-quality delivery"
    ],
    githubLink: "https://github.com/aldyNaufal/DayOfArt.git",
    figmaLink: "https://www.figma.com/proto/mddtZK93RFqUzltzGiSdBF/Day-of-Art-UI?page-id=5%3A3&node-id=91-3232&starting-point-node-id=91%3A3587&t=Vfe6kuYWbwcDziqo-1",
    isPrivate: false
  },
  {
    id: 3,
    title: "Mini Instagram",
    description: "This project is a mini Instagram-like simulation where users can upload personal photos and add captions, similar to the Locket app. Users can follow each other, view posts, and engage in real-time chat within the app. The application is built using Jetpack Compose, showcasing a modern and intuitive UI experience tailored for Android devices.",
    category: "Mobile Development",
    status: "Completed",
    startDate: "November 2024",
    endDate: "November 2024",
    duration: "2 weeks",
    technologies: [
      "Jetpack Compose",
      "Kotlin",
      "Firebase Authentication",
      "Firebase Firestore",
      "Google Sign-In",
      "Camera x",
    ],
    responsibilities: [
      "Designed and developed the user interface using Jetpack Compose for a smooth and modern Android experience",
      "Implemented photo upload and caption features to allow users to share moments, similar to the Locket app",
      "Built a real-time chat feature using Firebase Firestore to enable user interaction",
      "Developed user authentication and follow system using Firebase Authentication and Firestore",
      "Integrated Firebase Storage for efficient handling and display of uploaded images",
      "Implemented Google Sign-In to simplify user login and improve onboarding experience",
      "Tested and optimized the app to ensure responsiveness, performance, and usability across Android devices"
    ],

    githubLink: "https://github.com/aldyNaufal/projectpam.git",
    figmaLink: null,
    isPrivate: false
  },
  {
    id: 4,
    title: "Travel Lupa mobile",
    description: "I developed a simple Android application that provides information about natural tourist attractions in Indonesia. The app showcases the scenery of the tourist spots, their names, locations, and user comments about their experiences. This application aims to make it easier for users to explore the natural beauty of Indonesia",
    category: "Mobile Development",
    status: "Completed",
    startDate: "December 2024",
    endDate: "December 2024",
    duration: "1 week",
    technologies: [
      "Jetpack Compose",
      "Kotlin",
      "Firebase Firestore", 
      "Room Database"
    ],
    responsibilities: [
      "Designed and developed a clean and intuitive UI using Jetpack Compose for Android",
      "Displayed lists of tourist attractions with images, names, and locations",
      "Implemented user comment features to allow sharing of personal travel experiences",
      "Integrated data storage for tourist attraction details using Firebase Firestore",
      "Handled image loading and display from cloud storage or local resources",
      "Tested app performance and fixed UI bugs to ensure a smooth user experience"
    ],

    githubLink: "https://github.com/aldyNaufal/TravelLupa-Project.git",
    figmaLink: null,
    isPrivate: false
  },
  {
    id: 5,
    title: "Daily Task Manager App with Jetpack Compose",
    description: "A simple yet functional to-do list Android application built using Jetpack Compose. This app allows users to manage daily tasks by adding, updating, and deleting them. Tasks are marked as completed once users provide proof via an uploaded or captured photo using CameraX. The app uses Coroutines for efficient asynchronous processing, ensuring smooth and responsive user interactions.",
    category: "Mobile Development",
    status: "Completed",
    startDate: "November 2024",
    endDate: "December 2024",
    duration: "1 month",
    technologies: [
      "Jetpack Compose",
      "CameraX",
      "Kotlin",
      "Android",
      "Coroutines",
      "Room Database",
      "MVVM Architecture"
    ],
    responsibilities: [
      "Designed and implemented the UI using Jetpack Compose",
      "Integrated CameraX to allow users to capture proof of task completion",
      "Implemented full CRUD operations for task management with Room Database",
      "Utilized Kotlin Coroutines to handle asynchronous operations and improve app responsiveness",
      "Followed MVVM architecture to maintain clean separation of concerns",
      "Tested and debugged the app to ensure smooth performance and user experience"
    ],
    githubLink: "https://github.com/aldyNaufal/final_project_papb.git",
    figmaLink: null,
    isPrivate: false
  },

  {
    id: 6,
    title: "Flappy Brone – UB-Themed Flappy Bird Game",
    description: "Flappy Brone is a game inspired by the classic Flappy Bird, uniquely themed around Universitas Brawijaya. Built using Python and Pygame, it incorporates custom-designed visuals representing the university, delivering a fun and interactive experience while showcasing UB's identity through casual, addictive gameplay.",
    category: "Game Development",
    status: "Completed",
    startDate: "May 2024",
    endDate: "June 2024",
    duration: "1 month",
    technologies: [
      "Python",
      "Pygame",
      "2D Game Development",
      "Photoshop/Illustrator"
    ],
    responsibilities: [
      "Developed a Flappy Bird clone using Python and Pygame tailored with Universitas Brawijaya’s branding and visual theme",
      "Designed custom sprites and backgrounds using Photoshop/Illustrator to represent UB elements",
      "Implemented core gameplay mechanics including gravity, jumping, collision detection, and score tracking",
      "Optimized user input handling via keyboard for smooth gameplay",
      "Conducted testing to ensure bug-free experience and stable performance across systems",
      "Packaged the game for local desktop play and web deployment using pygbag"
    ],
    githubLink: "https://github.com/aldyNaufal/flappy-brone.git",
    figmaLink: null,
    isPrivate: false
  }

];
