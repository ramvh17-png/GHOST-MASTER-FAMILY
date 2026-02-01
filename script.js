const members=[
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
 {name:"Jatoi_Jan",rank:"DON",level:6,amount:"0 $"}
];

const vipRanks=["FW LEADER","LEADER","LORD","OVER LORD"];

function login(){
 const name=document.getElementById("loginName").value.trim();
 const pass=document.getElementById("loginPass").value.trim();
 const user=members.find(m=>m.name.toLowerCase()===name.toLowerCase());

 if(!user){
   showError("Member not found");
   return;
 }

 // Auto fill
 document.getElementById("loginLevel").value=user.level+" lvl";
 document.getElementById("loginRank").value=user.rank;
 document.getElementById("loginContribution").value=user.amount;

 // Password check
if((user.rank==="FW LEADER"||user.rank==="LEADER"||user.rank==="LORD"||user.rank==="OVER LORD") && pass!=="mastervip"){
 showError("Wrong password for VIP rank");
 return;
}

if(!vipRanks.includes(user.rank) && pass!=="ghost"){
 showError("Wrong password");
 return;
}

// Success
document.getElementById("loginBox").classList.add("hidden");
document.getElementById("dashboard").classList.remove("hidden");
document.getElementById("userInfo").innerText=
 `${user.name} | ${user.rank} | Level ${user.level} | ${user.amount}`;
}

function showError(msg){
 document.getElementById("loginError").innerText=msg;
}

function logout(){
 location.reload();
}
