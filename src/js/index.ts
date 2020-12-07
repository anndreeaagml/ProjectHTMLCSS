import axios,{AxiosResponse,AxiosError}from "../../node_modules/axios/index"

interface IMirror{
  temperature:number;
  humidity:number;
  datetime:Date;
}

let sensorButton:HTMLElement=document.getElementById("sensorButton");
sensorButton.addEventListener("click",showAllData)
let uri:string="https://mirroculousweb.azurewebsites.net/mirror";
let dataTable:HTMLElement=document.getElementById("datatable");

function showAllData():void{
  ClearTable();
  axios.get<IMirror[]>(uri).then(function(response:AxiosResponse<IMirror[]>):void{
    response.data.forEach((mirror:IMirror)=>{
      console.log(mirror.temperature+mirror.humidity+mirror.datetime.toDateString());
      let row:HTMLTableRowElement=document.createElement("tr");
      let temperature:HTMLTableCellElement=document.createElement("td");
      let humidity:HTMLTableCellElement=document.createElement("td");
      let timestamp:HTMLTableCellElement=document.createElement("td");
      temperature.append(mirror.temperature.toString());
      humidity.append(mirror.humidity.toString());
      timestamp.append(mirror.datetime.toDateString());
      row.appendChild(temperature);
      row.appendChild(humidity);
      row.appendChild(timestamp);
      dataTable.appendChild(row);
    })
  }).catch(function(error:AxiosError):void{
    console.log(error.message);
  });
}

function ClearTable():void{
  while(dataTable.firstChild!=dataTable.lastChild){
    dataTable.removeChild(dataTable.lastChild);
  }
}