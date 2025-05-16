let isModalOpen = false;
let contrastToggle = false;
document.body.classList += " dark-theme";
const scaleFactor = 1 / 20;
renderCards();
async function renderCards(filter) {
  console.log(filter);
  let projects = await getProjects();

  const projectWrapper = document.querySelector(".project__list");
  if (filter === "Full-Stack") {
    projects = projects.filter((project) => {
      return project.category === "Full-Stack";
    });
    console.log(projects);
  } else if (filter === "Java") {
    projects = projects.filter((project) => {
      return project.category === "Java";
    });
    console.log(projects);
  } else if (filter === "C") {
    projects = projects.filter((project) => {
      return project.category === "C";
    });
    console.log(projects);
  } else if (filter === "Scripts") {
    projects = projects.filter((project) => {
      return project.category === "Scripts";
    });
    console.log(projects);
  }

  var projectHTML = projects
    .map((project) => {
      return `
 <li class="project">
            <div class="project__wrapper">
              <img src= "${project.backgroundImg}" class="project__img" alt="">
              <div class="project__wrapper--bg"></div>
              <div class="project__description">
                <h3 class="project__description--title">
                  ${project.title}
                </h3>
                <h4 class="project__description--sub-title">
                  ${project.subtitle}
                </h4>
                <p class="project__description--para">
                  ${project.paragraph}
                </p>
                <div class="project__description--links">
                  <a href=${project.url} target="_blank" class="project__description--link">
                    <i class="fas fa-link"></i>
                  </a>
                  <a href=${project.github} target="_blank" class="project__description--link">
                    <i class="fab fa-github"></i>
                  </a>
                </div>       
                </div>
              </div>
          </li>
    `;
    })
    .join("");
  projectWrapper.innerHTML = projectHTML;
}
function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
        document.body.classList.remove("dark-theme");
  } else {
        document.body.classList += " dark-theme";
  }
}
function highlightButton(selectedButton) {
  document.querySelectorAll(".btn__projects").forEach((button) => {
    button.classList.remove("active");
  });

  selectedButton.classList.add("active");
}
function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${
      y * boolInt
    }px) rotate(${x * boolInt * 10}deg)`;
  }
}
function contact(event) {
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  event.preventDefault();
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_g3j9p0j",
      "template_ke2vtwg",
      event.target,
      "6GLvELKC4ZkyCPniU"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on bilalabdali1234@email.com"
      );
    });
}

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}

function getProjects() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          backgroundImg: "./assets/nbaSite.png",
          title: "NBA Trading Card Ecommerce Site",
          subtitle: "HTML, CSS, JavaScript, React, Node.js",
          paragraph:
            "Hoops Legacy Collectibles is an e-commerce platform crafted for NBA trading card enthusiasts, offering a responsive and secure environment for buying and selling authenticated cards. Built with React, the site boasts advanced filtering options, a streamlined shopping cart, and secure checkout powered by Stripe. A Node.js backend ensures reliable data management and a robust connection to the database. ",
          category: "Full-Stack",
          github: "https://github.com/Bilalabdali1/nba-trading-cards",
          url:"https://nba-trading-cards.vercel.app/",
        },
        {
          id: 2,
          backgroundImg: "./assets/api.png",
          title: "Cine Search",
          subtitle: "HTML, CSS, JavaScript, React",
          paragraph:
            "Google In-Store is a platform allowing Google retail employees to report any issues with their store products. Once an issue is reported, it is posted to an API which populates a separate platform's frontend - which is used by Google's vendors to fix the issue as soon as possible. I was the sole front-end developer of this application.",
          category: "Full-Stack",
           github: "https://github.com/Bilalabdali1/nba-trading-cards",
          url:"https://nba-trading-cards.vercel.app/",
        },
        {
          id: 3,
          backgroundImg: "./assets/TripShare.png",
          title: "TripShare",
          subtitle: "Java, XML, Firebase Auth, Realtime Database",
          paragraph:
            "TripShare is a travel-focused Android app that blends social networking with practical trip planning. Users engage with a community of travelers, discover local activities, and gain inspiration for new trips. The app supports itinerary sharing and collaborative planning, underpinned by Firebase for seamless data handling. Developed using Java and XML, TripShare connects adventure seekers and streamlines the travel experience.",
          category: "Java",
           github: "https://github.com/Bilalabdali1/TripShare",
          url:"https://github.com/Bilalabdali1/TripShare",
        },

        {
          id: 4,
          backgroundImg: "./assets/sneakerbot.webp",
          title: "Sneaker-Automation-Bot",
          subtitle: "Javascript,Node.js,Puppeteer",
          paragraph:
            "The Nike Sneaker Automation Bot is an automation tool designed to facilitate the online purchasing of limited-edition Nike sneakers. It efficiently handles the entire checkout process, supports multiple accounts, and utilizes proxies to enhance success rates in sneaker raffles using Node.js and Puppeteer.",
          category: "Scripts",
           github: "https://github.com/Bilalabdali1/Sneaker-Automation-Bot",
          url:"https://github.com/Bilalabdali1/Sneaker-Automation-Bot",
        },
        {
          id: 5,
          backgroundImg:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/MMU_principle_updated.png/325px-MMU_principle_updated.png",
          title: "Virtual Memory Management Unit (MMU) Simulator",
          subtitle: "C",
          paragraph:
            "The Virtual Memory Management Unit (MMU) Simulator is a advanced simulation tool that models address translation within a virtual memory system, employing a TLB and page table. It showcases demand paging, TLB FIFO management, and LRU page replacement within a 65,536-byte address space. The simulator serves as a powerful resource for delving into the mechanics of memory management.",
          category: "C",
           github: "https://github.com/Bilalabdali1/nba-trading-cards",
          url:"https://nba-trading-cards.vercel.app/",
        },
        {
          id: 6,
          backgroundImg: "./assets/Hospital.webp",
          title: "Virtual Hospital Management System",
          subtitle: "Java",
          paragraph:
            "The Virtual Hospital Management System is a sophisticated Java-based application designed to simulate real-world hospital operations. Utilizing object-oriented principles it efficiently manages physicians, administrators, volunteers, and patients. Key features include specialized physician management, volunteer coordination, and robust exception handling, ensuring a scalable and data-secure environment for virtual healthcare management.",
          category: "Java",
           github: "https://github.com/Bilalabdali1/nba-trading-cards",
          url:"https://nba-trading-cards.vercel.app/",
        },
        {
          id: 7,
          backgroundImg: "./assets/cpu.webp",
          title: "CPU Scheduling Algorithms Simulator",
          subtitle: "C",
          paragraph:
            "The CPU Scheduling Algorithms Simulator, developed in C, models CPU scheduler operations using algorithms like FCFS, SJF, and Round-Robin. It assigns tasks with priorities from 1 to 10 and executes them using a structured approach with linked lists and scheduling functions. This tool effectively demonstrates various scheduling strategies in operating systems, serving as a practical educational resource.",
          category: "C",
           github: "https://github.com/Bilalabdali1/nba-trading-cards",
          url:"https://nba-trading-cards.vercel.app/",
        },
        {
          id: 8,
          backgroundImg: "./assets/movieAPI.webp",
          title: "CinemaGraph API ",
          subtitle: "Java,Maven,Neo4j",
          paragraph:
            "CinemaGraph API utilizes the Neo4j graph database to uncover the intricate connections within the film industry, including the 'Six Degrees of Kevin Bacon,' enabling users to seamlessly add, query actors and movies, establish relationships, and compute the shortest paths within the cinematic network. The API follows RESTful principles and is built with Java, Neo4j, and Maven, featuring comprehensive tests for endpoint functionality and reliability.",
          category: "Java",
           github: "https://github.com/Bilalabdali1/nba-trading-cards",
          url:"https://nba-trading-cards.vercel.app/",
        },
      ]);
    });
  });
}
