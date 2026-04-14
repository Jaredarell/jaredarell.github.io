const ctx1 = document.getElementById("myChart").getContext('2d');
const printCharts = () => {
    renderModelChart()
}

const renderModelChart = () => {
    const data = {
        labels: ["13:00", "15:00", "17:00", '19:00', '21:00'],
        datasets: [{
            label: "Dioxido de carbonmo (ppm)",
            data: [395,390,400, 420, 435]

        }]
    }
    const humity = {
        labels: ["13:00", "15:00", "17:00", '19:00', '21:00'],
        datasets: [{
            label: "Niveles de humedad",
            data: [78,76,74, 73, 75]

        }]
    }
    new Chart('modelschart', {type: 'line', data})
    new Chart('modelschartTwo', {type: 'line', humity})
}

printCharts()

const area = ["13:00", "15:00", "17:00", '19:00', '21:00']
const temperature = [26, 31, 27, 22, 20]

const myChart = new Chart(ctx1, {
    type: "line",
    data: {
        labels: ["13:00", "15:00", "17:00", '19:00', '21:00'],
        datasets: [{
            label: "Temperatura",
            data: temperature,
            backgroundColor:[
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
            ],
            borderColor:[
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
            ]

        }],
        borderWidth: 1.5
    }
})
