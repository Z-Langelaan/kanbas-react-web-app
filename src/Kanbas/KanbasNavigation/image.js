function displayImage(pic) { 
    let divLocation = document.getElementById("imgDiv"); 
    let imgElement = document.createElement("img"); 
    imgElement.src = pic 
    divLocation.append(imgElement); 
} 
  
Pic = 
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2V8BuW7n0uy8uY8krUGiY5bXk0LN8RZe4cw&usqp=CAU"  
  
displayImage(Pic);