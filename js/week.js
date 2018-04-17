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
            data: [13, 7, 20, 11, 9, 20, 17, 3],
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
        labels: ["1", "2", "3", "4", "5", "6", "7"],
        datasets: [{
            label: "Time distribution in hours (past 7 days *week)",
            backgroundColor: "#66CCCC",
            data: [15, 10, 20, 6, 5, 5, 10],
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