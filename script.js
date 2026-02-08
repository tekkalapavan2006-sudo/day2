/* -------------------- GF IMAGES -------------------- */
const gfPics = [];
for (let i = 1; i <= 30; i++) {
  gfPics.push(`assets/gf/pic${i}.jpeg`);
}
let gfIndex = 0;

/* -------------------- FULL SONG LYRICS (ONE STRING) -------------------- */
const fullLyrics = `
Samayama
Bhale Saayam Cheshaavamma
Ottuga Ottuga

Kanulake
Thana Roopannandhinchave
Guttuga

Ho Idhi Saripodha?

Sare Sare Thondarapadako
Thadhupari Katha Yetuko
Yetumari Thana Nadako?
Chivariki Yevarenako

Samayama
Bhale Saayam Cheshaavamma
Ottuga Ottuga

Kanulake
Thana Roopannandhinchave
Guttuga

Ho Thanu Evare?

Nadiche Thara Thalukula Dhara
Thanu Chusthunte Radhe Niddhura
Palike Yerra Kunuke Aura
Alalai Ponge Andham Aadhi Thana Pera

Aakashanne Thagesindhe
Thana Kannullo Neelam
Choopullone Yedho Indhrajaalam
Bangaaru Vaanallo Ninda Munche Kaalam
Chusthamanukoledhe Naalaantollam

Bhoogolanne Thippese
Aa Bunga Mothi Vainam
Choopisthundhe Thanalo Inko Konam
Changavi Chempallo Chengumantu Mounam
Chusthu Chusthu Thisthu Undhe Praanam

Thanu Cherina Prathi Chotila
Chala Chitrangunnadhe
Thanatho Illa Prathi Gynapakam
Chaya Chitram Aayinaadhe

Sare Sare Thondarapadako
Thadhupari Katha Yetuko
Yetumari Thana Nadako?
Chivariki Yevarenako

Samayama
Bhale Saayam Cheshaavamma
Ottuga

Kanulake
Thana Roopannandhinchave
Guttuga

Ho Idhi Saripodha?

Samayama
`;

/* -------------------- LOVE LANGUAGES -------------------- */
const loveLanguages = [
  "I love you ❤️",
  "Nenu ninnu premistunnanu 💕",
  "Je t’aime 💖",
  "Te amo 💘",
  "Ich liebe dich 💓",
  "Saranghae 💗",
  "Aishiteru 💞",
  "Ti amo 💝",
  "Main tumse pyaar karta hoon 💖",
  "Ana behibek 💕"
];

/* -------------------- PROPOSAL -------------------- */
const proposalText = `
oii sreemathigauh edhi seyyaneeki masthu kastapadda hamma devudaa damn nak intha efforts pettadam chala nacchindhi damn wow uwmah anthe ga mari intha andhamaina ammai kosam aah matram padali andhamaina devatha garu dorikindhi na life lo hehe so i dont wanna use full stop in our journey damn appude 1 year ayyindhi oi aww nak endho cancer occhinattu nak time lennattundhi tbf unna efforts anni pettestha damn idk oi im having 0.00000001% hope oi my 1st proposal sorry simple ga endho endho sesaa so hehe chorry

I LOVE YOU ARSHIYA CAN I BE YOUR POMMY FOREVER PLEAZZZ

ig forever avvadh anatav atleast i wanna be yous for 4 years endho emo chinna hope tho unna chala chinna hope idk i got totally obsessed to you damn oi i love you power infinityyyy uwmahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh babylu

I LOVE YOU SREEMATHIGARU
`;

/* -------------------- NORMAL SLIDES -------------------- */
function nextSlide() {
  document.getElementById("mainImage").src = "assets/img2.png";
  document.getElementById("text").innerText = "chusthara?";
  document.getElementById("buttons").innerHTML = `
    <button class="big-btn" onclick="slideThree()">chusthaaa</button>
    <button class="no-btn" id="noBtn">chudanu</button>
  `;

  const noBtn = document.getElementById("noBtn");
  noBtn.addEventListener("mouseover", () => {
    noBtn.style.transform =
      `translate(${Math.random() * 300 - 150}px, ${Math.random() * 120 - 60}px)`;
  });
}

function slideThree() {
  document.getElementById("mainImage").src = "assets/img3.png";
  document.getElementById("text").innerText =
    "i know you kiraah nik inko option ledhu love cheyyalsindhe hehe 😌";
  document.getElementById("buttons").innerHTML = `
    <button class="corner-btn left" onclick="slideFour()">sare love you infinity</button>
    <button class="corner-btn right" onclick="slideFour()">sare love you 2</button>
  `;
}

function slideFour() {
  document.getElementById("mainImage").src = "assets/img4.png";
  document.getElementById("text").innerText = "hammaya uwmah 😘";
  document.getElementById("buttons").innerHTML =
    `<button class="big-btn" onclick="slideFive()">inthaki enti?</button>`;
}

function slideFive() {
  document.getElementById("mainImage").src = "assets/img5.png";
  document.getElementById("text").innerText = "";
  document.getElementById("buttons").innerHTML =
    `<button class="big-btn" onclick="startGallery()">click cheyyandi sreemathigaruh 🎁</button>`;
}

/* -------------------- GALLERY + MUSIC -------------------- */
function startGallery() {
  const gallery = document.getElementById("gallery");
  const img = document.getElementById("gfImage");
  const lyricsEl = document.getElementById("lyricsText");
  const loveEl = document.getElementById("loveText");
  const music = document.getElementById("bgMusic");

  gallery.classList.add("show");

  music.volume = 0.7;
  music.play();

  let loveIndex = 0;
  let lyricCharIndex = 0;

  /* Image + love language */
  const imageInterval = setInterval(() => {
    gfIndex = (gfIndex + 1) % gfPics.length;
    img.src = gfPics[gfIndex];
    loveEl.innerText = loveLanguages[loveIndex % loveLanguages.length];
    loveIndex++;
  }, 2000);

  /* FULL SONG TYPING */
  const lyricsInterval = setInterval(() => {
    lyricsEl.innerText += fullLyrics.charAt(lyricCharIndex);
    lyricCharIndex++;
  }, 80);

  /* After 1 minute */
  setTimeout(() => {
    clearInterval(imageInterval);
    clearInterval(lyricsInterval);
    gallery.classList.remove("show");
    startFinalProposal();
  }, 60000);
}

/* -------------------- FINAL PROPOSAL -------------------- */
function startFinalProposal() {
  const slide = document.getElementById("finalSlide");
  const textEl = document.getElementById("typingText");

  slide.classList.add("show");

  let i = 0;
  const interval = setInterval(() => {
    textEl.innerText += proposalText.charAt(i);
    i++;
    if (i >= proposalText.length) clearInterval(interval);
  }, 45);
}
