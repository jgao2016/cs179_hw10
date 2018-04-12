document.querySelector(".add-friend").addEventListener("click",function(){
 var FriendName = prompt("Enter your Friends Name","Name");
 var row = document.createElement("tr");
 row.innerHTML = `
 <th scope="row">5</th>
 <td>${FriendName}</td>
 <td>
     <div class="progress">
         <div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
     </div>
 </td>`
 document.querySelector(".friends-list").appendChild(row);
});
