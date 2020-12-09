import axios,{AxiosResponse,AxiosError}from "../../node_modules/axios/index"

interface IMirror{
  temperature:number;
  humidity:number;
  dateTime:Date; //I know , Marcell, I am also mad about this. Bit it has to be capital T
}

interface Imain{
    main: any;
}

let sensorPage:HTMLElement=document.getElementById("logPage");
let aboutPage:HTMLElement=document.getElementById("aboutPage");
let settingsPage:HTMLElement=document.getElementById("settingsPage");
let dataTable:HTMLElement=document.getElementById("dataTable");

document.addEventListener("onload",switchToSensor); //someone please find the  page loaded or loading event

let sensorButton:HTMLElement=document.getElementById("sensorButton");
sensorButton.addEventListener("click",switchToSensor)
let aboutButton:HTMLElement=document.getElementById("aboutButton");
aboutButton.addEventListener("click",switchToAbout)
let settingsButton:HTMLElement=document.getElementById("settingsButton");
settingsButton.addEventListener("click",switchToSettings)



let uri:string="https://mirroculousweb.azurewebsites.net/mirror";


function switchToSensor():void{
    sensorPage.hidden = false;
    aboutPage.hidden = true;
    aboutPage.style.display = "none"; //workaround because you can't gide grids for some reason
    settingsPage.hidden = true;
    showAllData();
}

function switchToAbout():void{
    sensorPage.hidden = true;
    aboutPage.hidden = false;
    aboutPage.style.display = "grid";
    settingsPage.hidden = true;
}

function switchToSettings():void{
    sensorPage.hidden = true;
    aboutPage.hidden = true;
    aboutPage.style.display = "none";
    settingsPage.hidden = false;
}

function showAllData():void{
    axios.get<Imain>("http://api.openweathermap.org/data/2.5/weather?q=Roskilde&units=metric&appid=4647031774fd7ac91dfad95fb1011dd4")
    .then(function(response:AxiosResponse<Imain>):void{
        console.log(response.data.main.temp+" "+response.data.main.humidity)
    }).catch(function(error:AxiosError):void{
        console.log(error.message);
    });

    ClearTable();
    axios.get<IMirror[]>(uri).then(function(response:AxiosResponse<IMirror[]>):void
    {
        response.data.forEach((mirror:IMirror)=>
        {
        console.log(mirror.temperature+mirror.humidity+mirror.dateTime.toString());
        let row:HTMLTableRowElement=document.createElement("tr");
        let temperature:HTMLTableCellElement=document.createElement("td");
        let humidity:HTMLTableCellElement=document.createElement("td");
        let timestamp:HTMLTableCellElement=document.createElement("td");
        temperature.append(mirror.temperature.toString()+"ºC");
        humidity.append(mirror.humidity.toString()+"%");
        let tt:String[]=mirror.dateTime.toString().split('T')
        timestamp.append(tt[0]+" "+tt[1]); //it really doesn't like toDateString()
        row.appendChild(temperature);
        row.appendChild(humidity);
        row.appendChild(timestamp);
        dataTable.appendChild(row);
        })
    }).catch(function(error:AxiosError):void{
    console.log(error.message);
  });
}

function ClearTable():void
{
    while(dataTable.childElementCount>1)
    {
        dataTable.removeChild(dataTable.lastChild);
    }
}