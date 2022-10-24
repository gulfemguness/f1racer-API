// http://ergast.com/mrd/methods/standings/

async function doAPICall(year, round){
    let result = await axios.get(`http://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
    console.log(result)
    result=result.data

    let tbody = document.getElementsByTagName("tbody")['driverStandings'];

    let thead= document.getElementById('thead');
    th.scope="col";
    th.innerHTML=result.data;
    tbody.appendChild(th)

    let th= document.createElement('th');
    td.innerText=result.data;
    thead.appendChild(th);

    th= document.createElement('th');
    td.innerText=result.data["Driver"]["givenName"];
    thead.appendChild(th);

    th= document.createElement('th');
    td.innerText=result.data["Driver"]["familyName"];
    thead.appendChild(th);

    th= document.createElement('th');
    td.innerText=result.data["Driver"]["dateOfBirth"];
    thead.appendChild(th);

    th= document.createElement('th');
    td.innerText=result.data["DriverStandings"]["position"];
    thead.appendChild(th);

    th= document.createElement('th');
    td.innerText=result.data["DriverStandings"]["wins"];
    thead.appendChild(th);

    th= document.createElement('th');
    td.innerText=result.data["Constructors"]["nationality"];
    thead.appendChild(th);

    th= document.createElement('th');
    td.innerText=result.data["Constructors"]["constructorId"];
    thead.appendChild(th);
}

function handleSubmit(event){
    event.stopPropagation();
    event.preventDefault();
    console.log("Form was submitted")
    const season=document.getElementsByName("season")[0].value
    const round=document.getElementsByName("round")[0].value
    console.log(season, round);
    doAPICall(season, round);
}

const search = document.getElementById("Search");
search.addEventListener("click", (event)=>handleSubmit(event))

// doesnt't work
// main.js:formatted:59 Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')
//at main.js:formatted:59:8