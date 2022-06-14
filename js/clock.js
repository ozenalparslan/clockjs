
///////////// İSİM KISMI //////////
let username = prompt("Username:")
let myName = document.querySelector("#myName")
myName.innerHTML=`${myName.innerHTML} ${username}`





// SAAT/////////////////
let clock = () => {
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    

    const weekday = ['Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi','Pazar']
    const d = new Date();
    let day = weekday[d.getDay()]; 

    hrs = hrs < 10 ? "0" + hrs : hrs;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;
  
    let time = `${hrs}:${mins}:${secs} ${day}`;
    document.getElementById("myClock").innerText = time;
    setTimeout(clock, 1000);
  };
  
  clock();
  