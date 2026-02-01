const members=[
 {name:"Arushkumar_Kumar",rank:10,level:35},
 {name:"Sheikh_Himanshu",rank:9,level:7},
 {name:"Robert_Roxx",rank:9,level:20},
 {name:"Darwinn_Boltt",rank:8,level:4},
 {name:"Deshawn_Fougner",rank:8,level:4},
 {name:"Ujjwal_Echno",rank:8,level:19},
 {name:"Mannu_Mehra",rank:8,level:22},
 {name:"Lambahaimadam_Lamba",rank:8,level:14},
 {name:"Rohit_Mnp",rank:7,level:9},
 {name:"Ansley_Atack",rank:7,level:7},
 {name:"Rahul_Kamboj",rank:6,level:8},
 {name:"Jatoi_Jan",rank:6,level:6}
];

function login(){
  const name=document.getElementById("name").value.trim();
  const pass=document.getElementById("password").value.trim();
  const user=members.find(m=>m.name===name);

  if(!user){
    error("Name not found");
    return;
  }

  if(user.rank<=6 && pass!=="ghost"){
    error("Wrong password");
    return;
  }

  if(user.rank>=7 && pass!=="mastervip"){
    error("Wrong password");
    return;
  }

  document.getElementById("loginBox").classList.add("hide");
  document.getElementById("panel").classList.remove("hide");

  document.getElementById("welcome").innerHTML=
    `Welcome ${user.name} | Rank ${user.rank} | Level ${user.level}`;

  if(user.rank>=7){
    document.getElementById("seniorBtn").classList.remove("hide");
  }
}

function error(msg){
  document.getElementById("error").innerHTML=msg;
}

function openPage(p){
  const c=document.getElementById("content");
  if(p==="rules"){
    c.innerHTML="<h3>Family Rules</h3><p>Respect • No Leak • Loyalty</p>";
  }
  if(p==="ranks"){
    c.innerHTML="<h3>Ranks</h3><p>1 Thug → 10 Over Lord</p>";
  }
  if(p==="members"){
    c.innerHTML="<h3>Members list loaded</h3>";
  }
  if(p==="senior"){
    c.innerHTML="<h3>Senior Staff Channel</h3>";
  }
}
