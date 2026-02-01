/* MEMBERS DATA (sirf yahi edit karna future me) */
const members = [
 {name:"Arushkumar_Kumar",rank:"OVER LORD",level:35,amount:"5,100,000 $"},
 {name:"Sheikh_Himanshu",rank:"LORD",level:7,amount:"2,786,998 $"},
 {name:"Robert_Roxx (Online)",rank:"LORD",level:20,amount:"1,547,999 $"},
 {name:"Darwinn_Boltt",rank:"LEADER",level:4,amount:"0 $"},
 {name:"Deshawn_Fougner",rank:"LEADER",level:4,amount:"570,000 $"},
 {name:"Ujjwal_Echno",rank:"LEADER",level:19,amount:"0 $"},
 {name:"Mannu_Mehra",rank:"LEADER",level:22,amount:"0 $"},
 {name:"Lambahaimadam_Lamba",rank:"LEADER",level:14,amount:"116,101 $"},
 {name:"Rohit_Mnp",rank:"FW LEADER",level:9,amount:"0 $"},
 {name:"Ansley_Atack",rank:"FW LEADER",level:7,amount:"400,000 $"},
 {name:"Rahul_Kamboj",rank:"DON",level:8,amount:"168,044 $"},
 {name:"Jatoi_Jan",rank:"DON",level:6,amount:"0 $"}
];

const vipRanks = ["FW LEADER","LEADER","LORD","OVER LORD"];

/* LOGIN */
function login(){
 const name=document.getElementById("nameInput").value.trim();
 const pass=document.getElementById("passwordInput").value;
 const user=members.find(m=>m.name.toLowerCase()===name.toLowerCase());
 if(!user){ err("Member not found"); return;}
 const isVip=vipRanks.includes(user.rank);
 if((!isVip && pass!=="ghost") || (isVip && pass!=="mastervip")){
   err("Wrong password"); return;
 }
 localStorage.setItem("user",JSON.stringify(user));
 document.getElementById("loginBox").classList.add("hidden");
 document.getElementById("loading").classList.remove("hidden");
 setTimeout(showDash,1200);
}

function showDash(){
 document.getElementById("loading").classList.add("hidden");
 document.getElementById("dashboard").classList.remove("hidden");
 const u=JSON.parse(localStorage.getItem("user"));
 document.getElementById("welcome").innerText=
   `Welcome ${u.name} | ${u.rank} | Lvl ${u.level}`;
 if(vipRanks.includes(u.rank)){
   document.getElementById("vipBtn").classList.remove("hidden");
 }
}

function logout(){
 localStorage.clear();
 location.reload();
}

function err(t){
 document.getElementById("error").innerText=t;
}

/* NAVIGATION */
function openPage(p){
 document.getElementById("dashboard").classList.add("hidden");
 document.getElementById("page").classList.remove("hidden");
 const c=document.getElementById("pageContent");

 if(p==="members"){
   let h="<h2>Members List</h2><table><tr><th>#</th><th>Name</th><th>Rank</th><th>Level</th><th>Contribution</th></tr>";
   members.forEach((m,i)=>{
     const on=m.name.includes("(Online)")?"class='online'":"";
     h+=`<tr ${on}><td>${i+1}</td><td>${m.name}</td><td>${m.rank}</td><td>${m.level}</td><td>${m.amount}</td></tr>`;
   });
   h+="</table>";
   c.innerHTML=h;
 }

 if(p==="rules") c.innerHTML="<h2>Family Rules</h2><p>Add rules here</p>";
 if(p==="ranks") c.innerHTML="<h2>Ranks</h2><p>Ranks list here</p>";
 if(p==="blacklist") c.innerHTML="<h2>Blacklist</h2><p>No members</p>";
 if(p==="senior") c.innerHTML="<h2>Senior Staff</h2><p>VIP only area</p>";
}

function back(){
 document.getElementById("page").classList.add("hidden");
 document.getElementById("dashboard").classList.remove("hidden");
}

/* AUTO LOGIN */
if(localStorage.getItem("user")){
 document.getElementById("loginBox").classList.add("hidden");
 showDash();
}