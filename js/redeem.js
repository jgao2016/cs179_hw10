var totalpoints = 900;

function updatePoints(newTotalPoints)
{
    document.querySelector(".pointsHeader").textContent = `You have ${newTotalPoints} points`;
}

updatePoints(920)


var buttons = document.querySelectorAll(".redeem");
buttons.forEach(function(button){
    button.addEventListener("click",function(event){
        console.log("test")
        
        this.setAttribute("data-target", "#exampleModal")

        if (this.textContent == "Show Rewards"){
            this.setAttribute("data-toggle", "modal")
            document.querySelector('#redeem-img').src = this.dataset.img;
        }else{
            this.textContent = "Show Rewards"
            event.preventDefault();
            totalpoints -= parseInt(this.dataset.point);
            if (totalpoints <= 0)
            {
                totalpoints = 0
            }
           
        }
        
        // console.log(this.dataset.img);
       
 
        updatePoints(totalpoints);
        console.log(this.dataset.point)
        
        return false
    });
});