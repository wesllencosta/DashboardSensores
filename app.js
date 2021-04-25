const displayDIVtemp = document.querySelector('#Display_de_temperatura')
const displayDIVkwt = document.querySelector('#Display_de_kWh')

const sensorsMensury = [
{id: 0, name:'Quarto 1', actualTempMensury:25,actualKWHMensury:7,tempMensuryLastHours:[25,26,27,25,28,32,30,26,25,25],consumptionLastHours:[8,7,7,6,5,4,7,5,4,7]},
{id: 1, name:'Quarto 2', actualTempMensury:27,actualKWHMensury:6,tempMensuryLastHours:[30,29,26,25,28,32,31,26,25,27],consumptionLastHours:[5,6,7,8,6,4,7,5,4,6]},
{id: 2, name:'Cozinha', actualTempMensury:30,actualKWHMensury:5,tempMensuryLastHours:[27,26,28,29,30,32,31,29,30,31],consumptionLastHours:[4,3,6,7,6,4,7,4,3,5]},
{id: 3, name:'Sala', actualTempMensury:31,actualKWHMensury:8,tempMensuryLastHours:[28,27,26,25,28,32,30,25,26,27],consumptionLastHours:[4,5,6,8,5,5,7,6,7,8]},

    
]
const label =  ['7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm']


const addSensorsMensury = sensor =>{
    const chartColorTemp = '#50a55e'
    const chartColorEnergy = '#6abdee'
    const div1 = document.createElement('div')
    const div2 = document.createElement('div')

    div1.classList.add('roomDisplayTemp')
    div2.classList.add('roomDisplayTemp')
   
    div1.innerHTML = `
    <div class="roomDisplayTemp">
            <p class="nameRoomTemperature">${sensor.name}</p>
            <span>Temperatura atual: </span>
            <p class="tempMensure">${sensor.actualTempMensury} °C</p>
            <canvas id="ChartTemp${sensor.id}"></canvas>
        </div>
    `
    div2.innerHTML = `
    <div class="roomDisplaykwh">
            <p class="nameRoomEnergy">${sensor.name}</p>
            <span>Consumo de energia atual: </span>
            <p class="energyMensure">${sensor.actualKWHMensury} kWh</p>
            <div> <canvas id="ChartEn${sensor.id}"> </div>
        </div>
    `
displayDIVtemp.append(div1)
displayDIVkwt.append(div2)

dataTemp = sensor.tempMensuryLastHours;
dataEn = sensor.consumptionLastHours;

renderChart(dataTemp, label,"Temp"+sensor.id,chartColorTemp);
renderChart(dataEn, label,"En"+sensor.id,chartColorEnergy);
    
}

function renderChart(data, labels, id, color) {
    var ctx = document.getElementById("Chart"+id)
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'This week',
                data: data,
                borderWidth: 6,
                borderColor: color
            }]
        },
    });
}


const init = () =>{
    sensorsMensury.forEach(addSensorsMensury)
}
init()

