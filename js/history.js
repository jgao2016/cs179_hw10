var ctx = document.getElementById('myPieChart').getContext('2d');
var chart = new Chart(ctx, {
    // the type of chart we want to create
    type: 'doughnut',
    // the data for our dataset
    data: {
        labels: ["Dining", "Twitter", "Facebook", "Instagram", "Voice mail", "Messenger", "Chat", "Phone calls"],
        datasets: [{
            label: "Time distribution",
            backgroundColor: ["#F44336", "#E91E63", "#9C27B0", "#8BC34A", "#FFEB3B", "#FF5722", "#00BCD4", "#FF9800"],
            data: [30, 20, 20, 6, 5, 5, 10, 4],
        }]
    },
    // configuration options go here
    options: {}
});

var ctx = document.getElementById('myLineChart').getContext('2d');
var chart = new Chart(ctx, {
    // the type of chart we want to create
    type: 'line',
    // the data for our dataset
    data: {
        labels: ["Dining", "Twitter", "Facebook", "Instagram", "Voice mail", "Messenger", "Chat", "Phone calls"],
        datasets: [{
            label: "Time distribution",
            backgroundColor: "#F44336",
            data: [30, 20, 20, 6, 5, 5, 10, 4],
        }]
    },
    // configuration options go here
    options: {}
});

let btn = document.querySelector('#pie-btn');
btn.addEventListener("click", function() {
    this.classList.add("active");
    document.querySelector('#line-btn').classList.remove('active');
    
    document.querySelector('.piechart').style.display='block';
    document.querySelector('.linechart').style.display='none';
}); 

btn = document.querySelector('#line-btn');
btn.addEventListener("click", function() {
    this.classList.add("active");
    document.querySelector('#pie-btn').classList.remove('active');
        
    document.querySelector('.piechart').style.display='none';
    document.querySelector('.linechart').style.display='block';
}); 

