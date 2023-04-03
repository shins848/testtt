fetch("info7.json")
.then(function(response){
   return response.json();
})
.then(function(items){
   let placeholder = document.querySelector("#data-output");
   let out = "";
   for(let item of items){
      out += `
         <tr>
            <td>${item.Title}</td>
            <td>${item.Artist}</td>
            <td> ${item.Date}</td>
            <td><img src='${item.Cover}'> </td>
         </tr>
      `;
   }
 
   placeholder.innerHTML = out;
});