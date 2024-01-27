const daysElement=document.querySelector(".days")
const hourElement=document.querySelector(".hours")
const minuteElement=document.querySelector(".minutes")
const secondElement=document.querySelector(".seconds")
const heading=document.querySelector("h1");
const counterTimer=document.querySelector(".counterTimer");





const second=1000;
const minute=60*1000;
const hour=60*minute;
const day=24*hour;

function TimerFunction(){
    let now=new Date(),
     dd=String(now.getDate()).padStart(2,"0"),
     mm=String(now.getMonth()+1).padStart(2,"0"),
     yyyy=now.getFullYear();
    const enteredDay=prompt("Enter Day").padStart(2,"0");
    const enteredMonth=prompt("Enter Month").padStart(2,"0");
    now=`${mm}/${dd}/${yyyy}`;
    let targetDate=`${enteredMonth}/${enteredDay}/${yyyy}`;
    if(now>targetDate)
    {
         targetDate=`${enteredMonth}/${enteredDay}/${yyyy+1}`;

    }
  const intervalID= setInterval(() => {
    const timer= new Date(targetDate).getTime();
    const today=new Date().getTime();
    const difference=timer-today;
    daysElement.innerHTML=Math.floor(difference/ day);
    hourElement.innerHTML=Math.floor((difference%day)/ hour); 
    minuteElement.innerHTML=Math.floor((difference%hour)/ minute); 
    secondElement.innerHTML=Math.floor((difference%minute)/ second);
    
    if(difference<0)
    {
        counterTimer.style.display="none";
        heading.innerText="Time's Up";
        clearInterval(intervalID);
    }
    
   }, 0);


}
TimerFunction();