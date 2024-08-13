let orderContainer = document.querySelector('.Order');

let orderBtn = document.querySelector('#Order-now');

let burger = document.querySelector('#burger');
let fries = document.querySelector('#fries');
let drinks = document.querySelector('#drinks');
let orderProducts = document.querySelector('.Order-Product');

let isLoaded = false;
let str = "";

orderBtn.addEventListener('click', ()=>{
  isLoaded = true
  str = isLoaded ? " Order is Loading..." : "";
  orderProducts.innerHTML = `<span>${str}</span>`;
  setTimeout(function(){
  
    if(burger.checked && fries.checked && drinks.checked){
    
      let Product = `<img src="https://static.skipthedishes.com/c1c31b68-a2f9-47b4-b792-98af79f56c7a-item-image-1533767012097." width="350px" height="350px" class ="burger"/>;<br>
      <p class = "orderID">
       <b>Order ID - </b>181</p>
        <p>Order is Sucessfully </p>`;
      
      orderProducts.innerHTML = Product;
      isLoaded = false;
    }
    else if(burger.checked && fries.checked){
      let Product = `<img src="https://cdn.vox-cdn.com/thumbor/DWf_eoA5KRtR3nX4Txh8mBfz6ww=/0x0:3780x2516/1200x800/filters:focal(1588x956:2192x1560)/cdn.vox-cdn.com/uploads/chorus_image/image/63692118/1134335296.jpg.0.jpg" width="350px" height="350px"  class ="burger"/>
      <p class = "orderID"><b>Order ID - </b>186</p>`;
      orderProducts.innerHTML = Product;
    }
    else if(burger.checked && drinks.checked){
      let Product = `<img src="https://tse4.mm.bing.net/th?id=OIP.JwUA-A-U9WwhPGxal-eorwHaHP&pid=Api&P=0&h=180" width="350px" height="350px"  class ="burger"/>
      <p class = "orderID"><b>Order ID - </b>125</p>`;
      orderProducts.innerHTML = Product;
    }
    else if(fries.checked && drinks.checked){
      let Product = `
      <img src="https://thumbs.dreamstime.com/b/fresh-french-fries-served-cold-drink-old-wooden-table-40714348.jpg" width="350px" height="350px"  class ="burger"/>
      <p class = "orderID"><b>Order ID - </b>139</p>`;
      orderProducts.innerHTML = Product;
    }
    else if(fries.checked){
      let Product = `<img src="https://st.depositphotos.com/1428014/1258/i/450/depositphotos_12580349-stock-photo-french-fries-and-beer.jpg"  width="350px" height="350px"  class ="burger"/>
      <p class = "orderID"><b>Order ID - </b>158</p>`;
      orderProducts.innerHTML = Product;
    }
    else if(drinks.checked){
      let Product = `<img src="https://tse1.mm.bing.net/th?id=OIP.u73DiuKkSYCayLpmU1j0qQHaEo&pid=Api&P=0&h=180"  width="350px" height="350px"/>
      <p class = "orderID"  class ="burger"><b>Order ID - </b>185</p>`;
      orderProducts.innerHTML = Product;
    }
   
    else if(burger.checked){
      let Product = `<img src="https://www.gannett-cdn.com/-mm-/e4fa68202b8f269604164535cb0ae95032f89a32/c=0-587-2700-2112/local/-/media/2018/01/18/USATODAY/USATODAY/636518629737073874-02568-4-DQPK-PR-Image-CR2.jpg?width=2700&height=1525&fit=crop&format=pjpg&auto=webp"  width="350px" height="350px"  class ="burger"/>;
      <p class = "orderID"><b>Order ID - </b>182</p>`;

      orderProducts.innerHTML = Product;
    }
    else{
      orderProducts.innerHTML = '';
    }
  },3000);
})