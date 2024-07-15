
const ctx = document.getElementById('attendanceChart').getContext('2d');

const Avg = [80, 85, 90, 80, 75, 80];
const Atd = [65, 70, 100, 85, 90, 70];


function Color(value) {
    return value < 75 ? 'rgba(255, 0, 0, 0.6)' : 'rgba(165, 42, 42, 1)';
}

function BorderColor(value) {
    return value < 75 ? 'rgba(255, 0, 0, 0.6)' : 'rgb(0, 128, 0)';
}

const attendanceChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['CELR11', 'CELR12', 'CAMI13', 'CAMI14', 'CEPC11', 'MEOC102'],
        datasets: [
            {
                label: 'Class average',
                data: Avg,
                backgroundColor: 'rgba(128, 128, 128, 0.6)', 
                borderColor: 'rgba(128, 128, 128, 1)',
                borderWidth: 1
            },
            {
                label: 'Your attendance',
                data: Atd,
                backgroundColor: Atd.map(Color),
                borderColor: Atd.map(BorderColor),
                
                borderWidth: 3
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        },
        plugins: {
            legend: {
                position: 'top',
            }
        }
    }
});
