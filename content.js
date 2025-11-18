const welcomeText = `Hello, creator! It seems you have stumbled upon the game-dev hub of CSTC. BuildStorm.

Creative games are fun. And BuildStorm is a wasteland of creativity. Whether you already have some experience in design, code, drawing, writing or if you are a complete noob at this, as long as you have even a spark of interest in making games, you can apply to join us.

Roles you can apply for:

Programmers
Artists (Both 2D and 3D)
Writers
Designers
Musicians

If you are willing to contribute, we want you here. Just head over to the Apply tab and fill it out.

And once again, Welcome to BuildStorm`;

const notices = [
  "Interview dates to be announced soon",
  "Application process has closed.",
  "Application deadline: November 13th",
  "New project updates available",
];

document.getElementById("welcome-text").textContent = welcomeText;

const noticeList = document.getElementById("notices");
notices.forEach(notice => {
  const li = document.createElement("li");
  li.textContent = notice;
  noticeList.appendChild(li);
});
