import axios,{AxiosResponse,AxiosError}from "../../node_modules/axios/index"

interface IMirror{
  temperature:number;
  humidity:number;
  dateTime:Date; //I know , Marcell, I am also mad about this. Bit it has to be capital T
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
        temperature.append(mirror.temperature.toString());
        humidity.append(mirror.humidity.toString());
        timestamp.append(mirror.dateTime.toString()); //it really doesn't like toDateString()
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




