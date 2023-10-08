let hourE= document.getElementById('Hour');
let minE= document.getElementById('Min');
let secE=document.getElementById('Sec');
let ampmE = document.getElementById('ampm');

function update_Clock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s= new Date().getSeconds();


if(h>12){
    h-=12;
    ampm='PM';
}
h=h<10?'0'+h:h;
m=m<10?'0'+m:m;
s=s<10?'0'+s:s;

hourE.innerText=h;
minE.innerText=m;
secE.innerText=s;
ampmE.innerText=ampm;

setTimeout(()=>{
    update_Clock();
},1000);
}

update_Clock();