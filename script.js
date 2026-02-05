/* ===============================
   GHOST MASTER FAMILY – MEMBERS
   =============================== */

const members = [
  // OVER LORD
  { name: "Arushkumar", rank: 10, rankName: "OVER LORD", level: 35, contribution: "5,100,000 $", password: "GMFAM-X9Q7A" },

  // LORD
  { name: "Sheikh", rank: 9, rankName: "LORD", level: 7, contribution: "2,786,998 $", password: "GMFAM-L8M2R" },
  { name: "Robert", rank: 9, rankName: "LORD", level: 20, contribution: "1,547,999 $", password: "GMFAM-R5Z1K" },

  // LEADER
  { name: "Darwinn", rank: 8, rankName: "LEADER", level: 4, contribution: "0 $", password: "GMFAM-D4T9S" },
  { name: "Deshawn", rank: 8, rankName: "LEADER", level: 4, contribution: "570,000 $", password: "GMFAM-F6A8P" },
  { name: "Ujjwal", rank: 8, rankName: "LEADER", level: 19, contribution: "0 $", password: "GMFAM-U2W7E" },
  { name: "Mannu", rank: 8, rankName: "LEADER", level: 22, contribution: "0 $", password: "GMFAM-M9K4B" },
  { name: "Lambahaimadam", rank: 8, rankName: "LEADER", level: 14, contribution: "116,101 $", password: "GMFAM-L3H6Q" },

  // FW LEADER
  { name: "Rohit", rank: 7, rankName: "FW LEADER", level: 9, contribution: "0 $", password: "GMFAM-R8J2D" },
  { name: "Ansley", rank: 7, rankName: "FW LEADER", level: 7, contribution: "400,000 $", password: "GMFAM-A7F5Z" },

  // DON
  { name: "Rahul", rank: 6, rankName: "DON", level: 8, contribution: "168,044 $", password: "GMFAM-R6N8X" },
  { name: "Jatoi", rank: 6, rankName: "DON", level: 6, contribution: "0 $", password: "GMFAM-J4P2M" },

  // THUG
  { name: "Ray", rank: 1, rankName: "THUG", level: 6, contribution: "0 $", password: "GMFAM-R1S7Q" },
  { name: "Phianne", rank: 1, rankName: "THUG", level: 7, contribution: "0 $", password: "GMFAM-P9D3A" },
  { name: "Jamdrick", rank: 1, rankName: "THUG", level: 11, contribution: "0 $", password: "GMFAM-J8W5L" },
  { name: "Pvt", rank: 1, rankName: "THUG", level: 3, contribution: "0 $", password: "GMFAM-P2X6R" },
  { name: "Toji", rank: 1, rankName: "THUG", level: 2, contribution: "0 $", password: "GMFAM-T4Q9M" },
  { name: "Ayana", rank: 1, rankName: "THUG", level: 1, contribution: "0 $", password: "GMFAM-A1L7D" },
  { name: "Aahil", rank: 1, rankName: "THUG", level: 2, contribution: "0 $", password: "GMFAM-A6Z8K" },
  { name: "Chirag", rank: 1, rankName: "THUG", level: 9, contribution: "0 $", password: "GMFAM-C5P4N" },
  { name: "Tayeson", rank: 1, rankName: "THUG", level: 7, contribution: "0 $", password: "GMFAM-T9R2W" }
];

/* ===============================
   LOGIN FUNCTION
   =============================== */

function login() {
  const name = document.getElementById("loginName").value.trim();
  const pass = document.getElementById("loginPass").value.trim();

  const user = members.find(
    m => m.name === name && m.password === pass
  );

  if (!user) {
    document.getElementById("errorMsg").innerText = "❌ Invalid Name or Password";
    return;
  }

  document.getElementById("loginPage").classList.add("hidden");
  document.getElementById("dashboard").classList.remove("hidden");

  document.getElementById("welcome").innerText =
    `Welcome ${user.name} | ${user.rankName} | Level ${user.level}`;

  loadMenu(user);
}

/* ===============================
   MENU ACCESS CONTROL
   =============================== */

function loadMenu(user) {
  const menu = document.getElementById("menu");
  menu.innerHTML = "";

  addBtn("Rules", showRules);
  addBtn("Members Information", showMembers);
  addBtn("Family Ranks", showRanks);

  // Rank 7–9 (Staff)
  if (user.rank >= 7 && user.rank <= 9) {
    addBtn("Staff Information", showStaff);
  }

  // Admin (Rank 10)
  if (user.rank === 10) {
    addBtn("War Manager", showWarManager);
    addBtn("War Timing", showWarTiming);
    addBtn("War Management", showWarRules);
  }
}

/* ===============================
   BUTTON HELPER
   =============================== */

function addBtn(text, action) {
  const btn = document.createElement("button");
  btn.innerText = text;
  btn.onclick = action;
  document.getElementById("menu").appendChild(btn);
}

/* ===============================
   CONTENT SECTIONS
   =============================== */

function showRules() {
  setContent(`
    <h2>📜 Family Rules</h2>
    <ul>
      <li>RP rules follow karna mandatory hai</li>
      <li>Senior ka order maanna zaruri hai</li>
      <li>Abuse / cheating = kick</li>
      <li>Family reputation maintain karo</li>
    </ul>
  `);
}

function showMembers() {
  let html = "<h2>👥 Members Information</h2>";
  members.forEach(m => {
    html += `
      <div class="card">
        <b>Name:</b> ${m.name}<br>
        <b>Rank:</b> ${m.rankName}<br>
        <b>Level:</b> ${m.level}<br>
        <b>Contribution:</b> ${m.contribution}
      </div><br>
    `;
  });
  setContent(html);
}

function showRanks() {
  setContent(`
    <h2>🏆 Family Ranks</h2>
    <ol>
      <li>1–6 : Members</li>
      <li>7 : FW Leader</li>
      <li>8 : Leader</li>
      <li>9 : Lord</li>
      <li>10 : Over Lord</li>
    </ol>
  `);
}

function showStaff() {
  setContent(`
    <h2>🧑‍💼 Staff Information</h2>
    <p>Sirf Rank 7 se 9 tak ke members ko access hai.</p>
  `);
}

function showWarManager() {
  setContent(`
    <h2>⚔️ War Manager</h2>
    <p>Status: <b>VACANT</b></p>
  `);
}

function showWarTiming() {
  setContent(`
    <h2>⏰ War Timing</h2>
    <p>12:30 – 12:45</p>
    <p>13:30 – 13:45</p>
    <p>14:30 – 14:45</p>
    <p>15:30 – 15:45</p>
    <p>16:30 – 16:45</p>
    <p>17:30 – 17:45</p>
    <p>18:30 – 18:45</p>
  `);
}

function showWarRules() {
  setContent(`
    <h2>📜 War Management Rules</h2>
    <ol>
      <li>Minimum 8 members compulsory</li>
      <li>Gun & medkits admin dega</li>
      <li>Task ke bina promotion nahi</li>
      <li>Rank 7–9 direct promotion banned</li>
      <li>War sirf official timing me</li>
      <li>Din me 2 war compulsory</li>
      <li>Sirf admin war manage karega</li>
      <li>Start & end screenshot mandatory</li>
      <li>Win par sabko 2000$</li>
      <li>Gun + 100 ammo + 2 medkits before war</li>
    </ol>
  `);
}

function setContent(html) {
  document.getElementById("content").innerHTML = html;
}
