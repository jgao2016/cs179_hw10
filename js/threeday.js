var ctx = document.getElementById('myPieChart').getContext('2d');
var chart = new Chart(ctx, {
    // the type of chart we want to create
    type: 'doughnut',
    // the data for our dataset
    data: {
        labels: ["Dining", "Twitter", "Facebook", "Instagram", "Voice mail", "Messenger", "Chat", "Phone calls"],
        datasets: [{
            label: "Time distribution",
            backgroundColor: ["#53868B", "#66CCCC", "#AEEEEE", "#37FDFC", "#00CDCD", "#E0FFFF", "#63D1F4", "#0EBFE9"],
            data: [10, 5, 32, 3, 15, 10, 18, 7],
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
        labels: ["1", "2", "3"],
        datasets: [{
            label: "Time distribution in hours (past 3 days)",
            backgroundColor: "#66CCCC",
            data: [1, 3, 4],
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