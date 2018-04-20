function rand(min, max){
    return Math.floor(min+ Math.random() * (max-min))
}
function update(){
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
                data: [...Array(8).keys()].map(d=>rand(10,50)),
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
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [{
                label: "Time distribution in hours (past year *12 months)",
                backgroundColor: "#66CCCC",
                
                data: [...Array(12).keys()].map(d=>rand(10,50))//,.[30, 20, 20, 6, 5, 5, 10, 4, 7, 2, 12, 14],
            }]
        },
        // configuration options go here
        
        options: {maintainAspectRatio:false}
    });

}
update();
let filters = document.querySelectorAll('.filter');
filters.forEach(filter=>{
    filter.addEventListener('click', function(){
        update();
    });
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

