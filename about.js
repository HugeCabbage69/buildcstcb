document.addEventListener("DOMContentLoaded", () => {
  const teamContainer = document.getElementById("team-container");

  const teamMembers = [
    {
      name: "Suyash Singh Gusain",
      title: "Head of BUILDSTORM",
      desc: "Plays games for fun, stays for the tech behind them.<br><br><br>",
      img: "Images/LeadsSuyash.png"
    },
    {
      name: "Ritvik Kumar",
      title: "Head of Programming",
      desc: "Leads the programming division. Works with C# in unity and makes games as long as there is a deadline (See projects)<br><br><br>",
      img: "Images/LeadsRitvik.png"
    },
    {
      name: "Sushant Kumar",
      title: "Head of Design",
      desc: "Handles design and aesthetics. If it looks good, he did it. If it doesn’t, he’s ‘still working on it’.<br><br><br>",
      img: "Images/LeadsSushant.png"
    },
    {
      name: "Pratyush Kumar",
      title: "Head of Writing",
      desc: "Leads the writing division. Writes webnovels, only to abandon them and start a new project. Loves Harry Potter btw (not the movies).<br><br><br>",
      img: "Images/LeadGS.png"
    },
    {
      name: "Sunil Kumar Swami",
      title: "Head of Music & Audio",
      desc: "Leads music design. Keeps things in tune, even when nothing else is. <br><br><br>",
      img: "Images/LeadsSunil.png"
    },
    {
      name: "Amulya Gaur",
      title: "Playtester",
      desc: "Our one and only playtester who has a weird sixth sense that finds bugs.<br><br><br>",
      img: "Images/LeadsAmog.png"
    }
  ];

  teamContainer.innerHTML = "";

  teamMembers.forEach((member) => {
    const card = document.createElement("div");
    card.classList.add("team-card");

    card.innerHTML = `
      <div class="team-info">
        <h3>${member.title}</h3>
        <p>${member.desc}</p>
        <p style="margin-top:0.6rem; font-weight:700; color:#f0f0f0;">— ${member.name}</p>
      </div>
      <img src="${member.img}" alt="${member.name}" class="team-photo">
    `;

    teamContainer.appendChild(card);
  });
});
