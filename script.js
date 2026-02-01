/* ===== MEMBERS DATA (edit only this) ===== */
const members = [
 {name:"Arushkumar_Kumar",rank:"OVER LORD",level:35,amount:"5,100,000 $"},
 {name:"Sheikh_Himanshu",rank:"LORD",level:7,amount:"2,786,998 $"},
 {name:"Robert_Roxx",rank:"LORD",level:20,amount:"1,547,999 $"},
 {name:"Darwinn_Boltt",rank:"LEADER",level:4,amount:"0 $"},
 {name:"Deshawn_Fougner",rank:"LEADER",level:4,amount:"570,000 $"},
 {name:"Ujjwal_Echno",rank:"LEADER",level:19,amount:"0 $"},
 {name:"Mannu_Mehra",rank:"LEADER",level:22,amount:"0 $"},
 {name:"Lambahaimadam_Lamba",rank:"LEADER",level:14,amount:"116,101 $"},
 {name:"Rohit_Mnp",rank:"FW LEADER",level:9,amount:"0 $"},
 {name:"Ansley_Atack",rank:"FW LEADER",level:7,amount:"400,000 $"},
 {name:"Rahul_Kamboj",rank:"DON",level:8,amount:"168,044 $"},
 {name:"Jatoi_Jan",rank:"DON",level:6,amount:"0 $"},
 {name:"Ray_Lokesh",rank:"THUG",level:6,amount:"0 $"},
 {name:"Phianne_Foxgrald",rank:"THUG",level:7,amount:"0 $"},
 {name:"Jamdrick_Mulpton",rank:"THUG",level:11,amount:"0 $"},
 {name:"Pvt_Raj",rank:"THUG",level:3,amount:"0 $"},
 {name:"Toji_Zenon",rank:"THUG",level:2,amount:"0 $"},
 {name:"Ayana_Isaia",rank:"THUG",level:1,amount:"0 $"},
 {name:"Aahil_Op",rank:"THUG",level:2,amount:"0 $"},
 {name:"Chirag_Shatriya",rank:"THUG",level:9,amount:"0 $"},
 {name:"Tayeson_Hammes",rank:"THUG",level:7,amount:"0 $"}
];

const vipRanks = ["FW LEADER","LEADER","LORD","OVER LORD"];

/* ===== LOGIN ===== */
function login(){
 const name=document.getElementById("loginName").value.trim();
 const pass=document.getElementById("loginPass").value;
 const user=members.find(m=>m.name.toLowerCase()===name.toLowerCase());

 if(!user){showErr("Member not found");return}

 const vip=vipRanks.includes(user.rank);
 if((!vip && pass!=="ghost")||(vip && pass!=="mastervip")){
   showErr("Wrong password");return
 }

 localStorage.setItem("gm_user",JSON.stringify(user));
 document.getElementById("login").classList.add("hidden");
 document.getElementById("loading").classList.remove("hidden");
 setTimeout(showDash,1000);
}

function showDash(){
 document.getElementById("loading").classList.add("hidden");
 document.getElementById("dashboard").classList.remove("hidden");
 const u=JSON.parse(localStorage.getItem("gm_user"));
 document.getElementById("userInfo").innerText=
   `${u.name} | ${u.rank} | Level ${u.level}`;
 if(vipRanks.includes(u.rank)){
   document.getElementById("vipBtn").classList.remove("hidden");
 }
}

function logout(){
 localStorage.removeItem("gm_user");
 location.reload();
}

function showErr(t){
 document.getElementById("loginError").innerText=t;
}

/* ===== PAGES ===== */
function openPage(p){
 document.getElementById("dashboard").classList.add("hidden");
 document.getElementById("page").classList.remove("hidden");
 const c=document.getElementById("pageContent");

 if(p==="rules"){
   c.innerHTML=`<h2>Family Rules</h2>
   <ol>
    <li>Respect all members.</li>
    <li>Follow chain of command.</li>
    <li>No toxicity or drama.</li>
    <li>No leaking information.</li>
    <li>English / Hindi only.</li>
   </ol>`;
 }

 if(p==="members"){
   let h="<h2>Members</h2><table><tr><th>#</th><th>Name</th><th>Rank</th><th>Level</th><th>Contribution</th></tr>";
   members.forEach((m,i)=>{
     h+=`<tr><td>${i+1}</td><td>${m.name}</td><td>${m.rank}</td><td>${m.level}</td><td>${m.amount}</td></tr>`;
   });
   h+="</table>";
   c.innerHTML=h;
 }

 if(p==="ranks"){
   c.innerHTML=`<h2>Rank Structure</h2>
   <table>
    <tr><th>#</th><th>Rank</th></tr>
    <tr><td>1</td><td>Thug</td></tr>
    <tr><td>2</td><td>Thief</td></tr>
    <tr><td>3</td><td>Rookie</td></tr>
    <tr><td>4</td><td>Badmas</td></tr>
    <tr><td>5</td><td>Khabri</td></tr>
    <tr><td>6</td><td>Don</td></tr>
    <tr><td>7</td><td>FW Leader</td></tr>
    <tr><td>8</td><td>Leader</td></tr>
    <tr><td>9</td><td>Lord</td></tr>
    <tr><td>10</td><td>Over Lord</td></tr>
   </table>`;
 }

 if(p==="blacklist"){
   c.innerHTML="<h2>Blacklist</h2><p>No blacklisted members.</p>";
 }

 if(p==="senior"){
   c.innerHTML="<h2>Senior Staff</h2><p>Access: Rank 7–10</p>";
 }
}

function goBack(){
 document.getElementById("page").classList.add("hidden");
 document.getElementById("dashboard").classList.remove("hidden");
}

/* auto login */
if(localStorage.getItem("gm_user")){
 document.getElementById("login").classList.add("hidden");
 showDash();
}
