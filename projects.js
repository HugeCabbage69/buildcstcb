const projects = [
    {
    title: "Draining",
    description: "Came 2nd in IITD GameJam with this",
    image: "Images/project7.png",
    link: "https://huge-cabbage.itch.io/draining"
  },
  {
    title: "Prismire",
    description: "The colors we loved so much.",
    image: "Images/project1.png",
    link: "https://huge-cabbage.itch.io/prismire"
  },
  {
    title: "Escape Hall",
    description: "A looping escape-room puzzle game!",
    image: "Images/project2.png",
    link: "https://huge-cabbage.itch.io/escape-hall"
  },
  {
    title: "Density",
    description: "Alone in a solar system.",
    image: "Images/project3.png",
    link: "https://huge-cabbage.itch.io/density"
  },
  {
    title: "Crushing Blood",
    description: "Escape from a bleeding storehouse.",
    image: "Images/project4.png",
    link: "https://huge-cabbage.itch.io/crushing-blood"
  },
  {
    title: "Orange",
    description: "Horror Pacman 3D",
    image: "Images/project5.png",
    link: "https://sharter29.itch.io/orange"
  },
  {
    title: "Blood Crazy",
    description: "Crazy for blood",
    image: "Images/project6.png",
    link: "https://sharter29.itch.io/blood-crazy"
  }
];

const container = document.getElementById("projects-container");

projects.forEach(project => {
  const card = document.createElement("div");
  card.classList.add("project-card");
  card.onclick = () => window.location.href = project.link;

  card.innerHTML = `
    <div class="project-image" style="background-image: url('${project.image}');"></div>
    <div class="project-content">
      <h2>${project.title}</h2>
      <p>${project.description}</p>
    </div>
  `;

  container.appendChild(card);
});
