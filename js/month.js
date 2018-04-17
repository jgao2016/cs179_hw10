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
            data: [20, 10, 5, 5, 15, 15, 11, 9],
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
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
        datasets: [{
            label: "Time distribution in hours (past 30 days *month)",
            backgroundColor: "#66CCCC",
            data: [5, 9, 13, 2, 5, 5, 10, 4, 4, 10, 9, 8, 3, 1, 3, 7, 3, 4, 9, 2, 5, 12, 10, 9, 8, 7, 4, 8, 9, 12],
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