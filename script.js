const members = [
  {name:"Robert", full:"Robert_Roxx", rank:"LORD", level:20, contribution:"1,547,999 $", password:"GMFAM-X9P2"},
  {name:"Sheikh", full:"Sheikh_Himanshu", rank:"LORD", level:7, contribution:"2,786,998 $", password:"GMFAM-Q7A1"},
  {name:"Darwinn", full:"Darwinn_Boltt", rank:"LEADER", level:4, contribution:"0 $", password:"GMFAM-L8Z3"},
  {name:"Deshawn", full:"Deshawn_Fougner", rank:"LEADER", level:4, contribution:"570,000 $", password:"GMFAM-W2M9"},
  {name:"Ujjwal", full:"Ujjwal_Echno", rank:"LEADER", level:19, contribution:"0 $", password:"GMFAM-R5T8"},
  {name:"Mannu", full:"Mannu_Mehra", rank:"LEADER", level:22, contribution:"0 $", password:"GMFAM-A1B6"},
  {name:"Lamba", full:"Lambahaimadam_Lamba", rank:"LEADER", level:14, contribution:"116,101 $", password:"GMFAM-C4V7"},
  {name:"Rohit", full:"Rohit_Mnp", rank:"FW LEADER", level:9, contribution:"0 $", password:"GMFAM-J9K2"},
  {name:"Ansley", full:"Ansley_Atack", rank:"FW LEADER", level:7, contribution:"400,000 $", password:"GMFAM-H6F3"},
  {name:"Rahul", full:"Rahul_Kamboj", rank:"DON", level:8, contribution:"168,044 $", password:"GMFAM-S8D4"},
  {name:"Jatoi", full:"Jatoi_Jan", rank:"DON", level:6, contribution:"0 $", password:"GMFAM-P0E7"},
  {name:"Ray", full:"Ray_Lokesh", rank:"THUG", level:6, contribution:"0 $", password:"GMFAM-M2N5"}
];

let currentUser = null;

function login() {
  const name = document.getElementById("loginName").value.trim();
  const pass = document.getElementById("loginPassword").value.trim();
  const error = document.getElementById("loginError");

  const user = members.find(
    m => m.name.toLowerCase() === name.toLowerCase() && m.password === pass
  );

  if (!user) {
    error.innerText = "Wrong name or password";
    return;
  }

  currentUser = user;
  document.getElementById("loginPage").classList.add("hidden");
  document.getElementById("membersPage").classList.remove("hidden");

  loadMembers();
}

function loadMembers() {
  const list = document.getElementById("membersList");
  list.innerHTML = "";

  members.forEach(m => {
    const card = document.createElement("div");
    card.className = "memberCard";
    card.innerHTML = `
      <h3>${m.name}</h3>
      <span class="rank">${m.rank}</span>
    `;
    card.onclick = () => openProfile(m);
    list.appendChild(card);
  });
}

function openProfile(m) {
  document.getElementById("membersPage").classList.add("hidden");
  document.getElementById("profilePage").classList.remove("hidden");

  document.getElementById("pName").innerText = m.full;
  document.getElementById("pRank").innerText = m.rank;
  document.getElementById("pLevel").innerText = m.level;
  document.getElementById("pContribution").innerText = m.contribution;
}

function backToMembers() {
  document.getElementById("profilePage").classList.add("hidden");
  document.getElementById("membersPage").classList.remove("hidden");
}
