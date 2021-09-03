const form=document.querySelector('form')
const input=document.querySelector('input')
const button=document.querySelector('button')
const section=document.getElementById('innerdata')
const body=document.getElementById('whole')
const h3=document.getElementById('h3')
const h2=document.getElementById('h2')
const h1=document.getElementById('h1')
const h0=document.getElementById('h0')
const h4=document.getElementById('h4')
const date=document.getElementById('date')

function giveData(){
    const days=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = ["January", "February", "March", "April", "May", "June",
     "July", "August", "September", "October", "November", "December"
    ];
    const today=new Date();
    const day=days[today.getDay()]
    const date=today.getDate()
    const month=monthNames[today.getMonth()];
    const year=today.getFullYear();
    return date+" "+month+" "+"("+day+")"+","+year;


}

function createData(data){
    h3.innerText=data.name
    h2.innerText=Math.round(data.main.temp-273.15)+" °C"
    h1.innerText=Math.round(data.main.temp_min-273.15)+"°C (min) / "+Math.round(data.main.temp_max-273.15)+"°C (max)"
    h0.innerText=data.weather[0].description
    h4.innerText=data.main.pressure+" mbar";
    
    date.innerText=giveData();
    const weather=data.weather[0].description
    body.style.transition="1s"
    if(weather.includes("clear")===true){
        console.log(weather.includes("clear"))
        console.log(weather)
        body.style.backgroundImage="url('https://images.unsplash.com/photo-1617142137869-325955e2d3cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80')"
        
    }
    else if(weather.includes("rain")===true){
        console.log(weather.includes("rain"))
        console.log(weather)
        body.style.backgroundImage="url('https://images.unsplash.com/photo-1558409057-bbe679023136?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=894&q=80')"
       
    }
    else if(weather.includes("clouds")===true){
        console.log(weather.includes("clouds"))
        console.log(weather)
        body.style.backgroundImage="url('https://images.unsplash.com/photo-1548266652-99cf27701ced?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=375&q=80')"
    }
    else if(weather.includes("storm")){
        console.log(weather.includes("storm"))
        console.log(weather)
        body.style.backgroundImage="url('https://images.unsplash.com/photo-1442213391790-7656f6e368b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80')"
        
    }
    else if(weather==="haze"){
        console.log(weather.includes("haze"))
        console.log(weather)
        body.style.backgroundImage="url('https://images.unsplash.com/photo-1502201684351-c156ded4d3c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1985&q=80')"
        
    }
    else if(weather.includes("snow")){
        console.log(weather.includes("sunny"))
        console.log(weather)
        body.style.backgroundImage="url('https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=783&q=80')"
       
    }
    else if(weather.includes("drizzle")){
        console.log(weather)
        console.log(weather.includes("drizzle"))
        body.style.backgroundImage="url('https://images.unsplash.com/photo-1541919329513-35f7af297129?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')"
        
    }
    else if(weather.includes("sunny")){
        console.log(weather.includes("sunny"))
        console.log(weather)
        body.style.backgroundImage="url('https://images.unsplash.com/photo-1447601932606-2b63e2e64331?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=327&q=80')"
        
    }
    else if(weather.includes("mist")){
        console.log(weather.includes("mist"))
        console.log(weather)
        body.style.backgroundImage="url('https://media.arubanetworks.com/blogs/GettyImages-1164051562.jpg')"
        
    }
    else{
        body.style.backgroundImage="url('https://images.unsplash.com/photo-1447601932606-2b63e2e64331?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=327&q=80')"
        body.style.backgroundSize="100% 100%"
        body.stylebackgroundRepeat="no-repeat"

    }
    body.style.backgroundSize="100% 100%"
    body.stylebackgroundRepeat="no-repeat"
    

}
function getData(city_name){
    let temp=0;
   fetch('https://api.openweathermap.org/data/2.5/weather?q='+city_name+'&appid=b8c34bc40a228bf7fa4d1501a3a355b8')
   .then((res)=>{
       if(res.status >= 200 && res.status <= 299){
            return res.json()}
        else {
            throw Error("invalid");
        }
   })
   .then((data)=>{
       temp=data.main.temp-273.15
       console.log(data.name)
       createData(data)
   })
   .catch((err)=>{
       alert("Enter valid city name")
       h3.innerText=""
       h2.innerText=""
       h1.innerText=""
       h0.innerText=""
       h4.innerText=""
       console.log(err)
   })     
}

form.addEventListener('submit',(e)=>{
    console.log('submitted')
    e.preventDefault()
    const searchText=form.elements[0].value
    console.log(searchText)
    getData(searchText)
    // form.elements[0].value=""
})
button.addEventListener('onclick',(e)=>{
    button.style.backgroundColor="blue"
})
