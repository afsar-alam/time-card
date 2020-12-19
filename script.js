
const clock =setInterval(clocktiming,1000)

function clocktiming(){
const time =new Date();
const time1=time.toLocaleTimeString();
document.querySelector(".time-zone").innerHTML=time1;
// month
const month=new Date();
const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
document.querySelector(".month-zone").innerHTML=months[month.getMonth()];
// days
const day=new Date();
const days=['Sun','Mon','Tues','Wed','Thus','Fri','Sat'];
document.querySelector(".day-zone").innerHTML=days[day.getDay()];
const date=new Date();
document.querySelector(".date-zone").innerHTML=date.getDate();

navigator.getBattery().then(function(battery){

    function updateAllBatteryinfo(){
        updatelevelinfo();
    }
    updateAllBatteryinfo();

    battery.addEventListener('Levelchange',updatelevelinfo);
    function updatelevelinfo(){
        document.querySelector(".battery").innerHTML=Math.round(battery.level*100)+'%';
        if(battery.level<=0.2){
            document.querySelector('.battery').style.color="red";
        }
        else{
            document.querySelector(".battery").style.color=" #cec9c9";
        }

    }

});
 
}

   




