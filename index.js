

let data= await fetch('https://6381eefa9842ca8d3c9d0014.mockapi.io/foodiis')
console.log(data)
let res=await data.json()
console.log(res)

async function displayItems(){
    var biryani= document.getElementById('biryani');
    var paneer=  document.getElementById('paneer');;
    var chicken=  document.getElementById('chicken');
    var vegetable=  document.getElementById('vegetable');
    var chinese=  document.getElementById('chinese');
    var southIndian=  document.getElementById('south-indian');
    var kolhapurSpeciale =document.getElementById('kolhapur')

    let data= await fetch('https://6381eefa9842ca8d3c9d0014.mockapi.io/foodiis')
    console.log(data)
    let ress=await data.json()
    console.log(ress)

    const biryaniData= res.filter((item)=>item.category=='biryani');
    const chickenData= res.filter((item)=>item.category=='chicken');
    const PaneerData= res.filter((item)=>item.category=='paneer');
    const vegetableData= res.filter((item)=>item.category=='vegetable');
    const chineseData= res.filter((item)=>item.category=='chinese');
    const southData= res.filter((item)=>item.category=='south-indian');
    const kolhapuriSpecialeData= ress.filter((item)=>item.category=='Kolhapuri_Speciale');


    biryaniData.map(item=>{
        
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var cart= document.createElement('i');
        cart.setAttribute('class','fa fa-shopping-cart add-to-cart');
        cart.setAttribute('id',item.id)

        var heart= document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o add-to-wish');
        heart.setAttribute('id',item.id1)

       

        cardTop.appendChild(star);
        cardTop.appendChild(cart);
        cardTop.appendChild(heart);
       


        var img= document.createElement('img');
        img.src=item.image;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price :' + item.price +' RS/-';

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        biryani.appendChild(itemCard);
        
    })

    chickenData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var cart= document.createElement('i');
        cart.setAttribute('class','fa fa-shopping-cart add-to-cart');
        cart.setAttribute('id',item.id)

        var heart= document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o add-to-wish');
        heart.setAttribute('id',item.id)

       

        cardTop.appendChild(star);
        cardTop.appendChild(cart);
        cardTop.appendChild(heart);


        var img= document.createElement('img');
        img.src=item.image;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price :' + item.price +' RS/-';

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);
        
        chicken.appendChild(itemCard)

    })

    PaneerData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var cart= document.createElement('i');
        cart.setAttribute('class','fa fa-shopping-cart add-to-cart');
        cart.setAttribute('id',item.id)

        var heart= document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o add-to-wish');
        heart.setAttribute('id',item.id)

       

        cardTop.appendChild(star);
        cardTop.appendChild(cart);
        cardTop.appendChild(heart);


        var img= document.createElement('img');
        img.src=item.image;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price :' + item.price +' RS/-';

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);
        
        paneer.appendChild(itemCard)

    })

    vegetableData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var cart= document.createElement('i');
        cart.setAttribute('class','fa fa-shopping-cart add-to-cart');
        cart.setAttribute('id',item.id)

        var heart= document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o add-to-wish');
        heart.setAttribute('id',item.id)

       

        cardTop.appendChild(star);
        cardTop.appendChild(cart);
        cardTop.appendChild(heart);


        var img= document.createElement('img');
        img.src=item.image;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price :' + item.price +' RS/-';

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        
        vegetable.appendChild(itemCard)
    
    })

    chineseData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var cart= document.createElement('i');
        cart.setAttribute('class','fa fa-shopping-cart add-to-cart');
        cart.setAttribute('id',item.id)

        var heart= document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o add-to-wish');
        heart.setAttribute('id',item.id)

       

        cardTop.appendChild(star);
        cardTop.appendChild(cart);
        cardTop.appendChild(heart);


        var img= document.createElement('img');
        img.src=item.image;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price :' + item.price +' RS/-';

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        
        chinese.appendChild(itemCard)
        
    })

    southData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var cart= document.createElement('i');
        cart.setAttribute('class','fa fa-shopping-cart add-to-cart');
        cart.setAttribute('id',item.id)

        var heart= document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o add-to-wish');
        heart.setAttribute('id',item.id)

       

        cardTop.appendChild(star);
        cardTop.appendChild(cart);
        cardTop.appendChild(heart);


        var img= document.createElement('img');
        img.src=item.image;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price :' + item.price +' RS/-';

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        southIndian.appendChild(itemCard)

    })

    kolhapuriSpecialeData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var cart= document.createElement('i');
        cart.setAttribute('class','fa fa-shopping-cart add-to-cart');
        cart.setAttribute('id',item.id)

        var heart= document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o add-to-wish');
        heart.setAttribute('id',item.id1)

       

        cardTop.appendChild(star);
        cardTop.appendChild(cart);
        cardTop.appendChild(heart);


        var img= document.createElement('img');
        img.src=item.image;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price :' + item.price +' RS/-';

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);
        
        kolhapurSpeciale.appendChild(itemCard)

    })
}
displayItems();


const vegData= [...new Map(res.map(item=> [item['category'],item])).values()];
console.log(vegData);

function selectTaste(){
    var categoryList= document.getElementById('category-list');

    vegData.map(item=>{
        console.log(item)
        var listCard= document.createElement('div');
        listCard.setAttribute('class','list-card');
    
        var listImg= document.createElement('img');
        listImg.src= item.image;
    
        var listName= document.createElement('a');
        listName.setAttribute('class','list-name');
        listName.innerText= item.category;
        listName.setAttribute('href','#'+item.category)
    
        listCard.appendChild(listImg);
        listCard.appendChild(listName);

        var cloneListCard= listCard.cloneNode(true);
        categoryList.appendChild(listCard);
        document.querySelector('.category-header').appendChild(cloneListCard)
    })
}
selectTaste();


document.querySelectorAll('.add-to-cart').forEach(item=>{
    item.addEventListener('click',addToCart)
    
})


var cartData= [];
function addToCart(){
    
    var itemToAdd= this.parentNode.nextSibling.nextSibling.innerText;
    var itemObj= res.find(element=>element.name==itemToAdd);

    var index= cartData.indexOf(itemObj);
    if(index=== -1){
        document.getElementById(itemObj.id).classList.add('toggle-cart');
        cartData= [...cartData,itemObj];
    }
    else if(index > -1){
        alert("Added to cart!");
    }
    
    document.getElementById('cart-plus').innerText=
    ' ' + cartData.length + ' Items';
  
    document.getElementById('m-cart-plus').innerText=
    ' ' + cartData.length;
    totalAmount();
    cartItems();
    
}


function cartItems(){
    var tableBody=  document.getElementById('table-body');
    tableBody.innerHTML= '';

    cartData.map(item=> {
        var tableRow= document.createElement('tr');
        
        var rowData1= document.createElement('td');
        var img= document.createElement('img');
        img.src= item.image;
        rowData1.appendChild(img);
    
        var rowData2= document.createElement('td');
        rowData2.innerText= item.name;
        
        var rowData3= document.createElement('td');
        var btn1= document.createElement('button');
        btn1.setAttribute('class','decrease-item');
        btn1.innerText= '-';
        var span= document.createElement('span');
        span.innerText= Number(item.quantity);
        var btn2= document.createElement('button');
        btn2.setAttribute('class','increase-item');
        btn2.innerText= '+';
        
        rowData3.appendChild(btn1);
        rowData3.appendChild(span);
        rowData3.appendChild(btn2);
    
        var rowData4= document.createElement('td');
        rowData4.innerText= Number(item.price);
    
        tableRow.appendChild(rowData1);
        tableRow.appendChild(rowData2);
        tableRow.appendChild(rowData3);
        tableRow.appendChild(rowData4);
    
        tableBody.appendChild(tableRow);
    })
    document.querySelectorAll('.increase-item').forEach(item=>{
        item.addEventListener('click',incrementItem)
    })

    document.querySelectorAll('.decrease-item').forEach(item=>{
        item.addEventListener('click',decrementItem)
    })
}


function incrementItem(){
    let itemToInc= this.parentNode.previousSibling.innerText;
    console.log(itemToInc)
    var incObj= cartData.find(element=>element.name==itemToInc);
    incObj.quantity=Number(incObj.quantity)+1;
    
    currPrice= (Number(incObj.price)*incObj.quantity - Number(incObj.price)*(incObj.quantity-1))/(incObj.quantity-1);
    incObj.price= currPrice*incObj.quantity;
    totalAmount()
    cartItems();
}

var currPrice= 0;
function decrementItem(){
    let itemToInc= this.parentNode.previousSibling.innerText;
    let decObj= cartData.find(element=>element.name==itemToInc);
    let ind= cartData.indexOf(decObj);
    if(decObj.quantity >1){
        currPrice= (decObj.price*decObj.quantity - decObj.price*(decObj.quantity-1))/(decObj.quantity);
        decObj.quantity-= 1;
        decObj.price= currPrice*decObj.quantity;
    }
    else{
        document.getElementById(decObj.id).classList.remove('toggle-cart')
        cartData.splice(ind,1);
        document.getElementById('cart-plus').innerText= ' ' + cartData.length + ' Items';
        // document.getElementById('wishList').innerText= ' ' + cartData1.length + ' Wishlist';
        document.getElementById('m-cart-plus').innerText= ' ' + cartData.length;
        if(cartData.length < 1 && flag){
            document.getElementById('food-items').classList.toggle('food-items');
            document.getElementById('category-list').classList.toggle('food-items');
            document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle')
            document.getElementById('cart-page').classList.toggle('cart-toggle');
            // document.getElementById('wishlist-page').classList.toggle('heart-toggle');
            document.getElementById('category-header').classList.toggle('toggle-category');
            document.getElementById('checkout').classList.toggle('cart-toggle');
            flag= false;
            alert("Currently no item in cart!");
            console.log(flag)
        }
    }
    
    totalAmount()
    cartItems()
   
}

function totalAmount(){
    var sum=0;
    cartData.map(item=>{
        sum+=Number(item.price);
    })
    var sum1=0;
    cartData1.map(item=>{
        sum1+= item.price;
    })

    document.getElementById('total-item').innerText= 'Total Item : ' + cartData.length;
    document.getElementById('total-price').innerText= 'Total Price :'+ sum + ' RS/-' ;
    document.getElementById('total-item1').innerText= 'Total Item : ' + cartData1.length;
    document.getElementById('total-price1').innerText= 'Total Price :'+ sum1 + ' RS/-' ;
    document.getElementById('m-total-amount').innerText= 'Total Price :'+ sum + ' RS/-' ;
}

document.getElementById('cart-plus').addEventListener('click',cartToggle);

document.getElementById('m-cart-plus').addEventListener('click',cartToggle);
// document.getElementById('wishList').addEventListener('click',cartToggle);

var flag= false;
function cartToggle(){
    if(cartData.length > 0){
        document.getElementById('food-items').classList.toggle('food-items');
        document.getElementById('category-list').classList.toggle('food-items');
        document.getElementById('category-header').classList.toggle('toggle-category');
        document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle')
        document.getElementById('cart-page').classList.toggle('cart-toggle');
       
        document.getElementById('checkout').classList.toggle('cart-toggle');
        flag= true;
        console.log(flag)
    }
    else{
        alert("Currently no item in cart!");
    }
}


  


// document.querySelectorAll('.add-to-cart').forEach(item=>{
//     item.addEventListener('click',checkToCart)
    
// })


// var cartData2= [];
// function checkToCart(){
    
//     var itemToAdd= this.parentNode.nextSibling.nextSibling.innerText;
//     var itemObj= res.find(element=>element.name==itemToAdd);

//     var index= cartData2.indexOf(itemObj);
//     if(index=== -1){
//         document.getElementById(itemObj.id).classList.add('toggle-cart');
//         cartData2= [...cartData2,itemObj];
//     }
//     else if(index > -1){
//         alert("Added to cart!");
//     }
    
//     document.getElementById('check_btn').innerText=
//     ' ' + cartData2.length + ' Ckeckout';
 
   
    
    
//     checkItems();
// }


// function checkItems(){
//     var tableBody2=  document.getElementById('table-body2');
//     tableBody2.innerHTML= '';

//     cartData2.map(item=> {
//         var tableRow1= document.createElement('tr');
        
//         var rowData12= document.createElement('td');
//         var img= document.createElement('img');
//         img.src= item.img;
//         rowData12.appendChild(img);
    
//         var rowData23= document.createElement('td');
//         rowData23.innerText= item.name;
        
//         var rowData34= document.createElement('td');
        
//         var span= document.createElement('span');
//         span.innerText= item.quantity;
       
        
        
//         rowData34.appendChild(span);
       
    
//         var rowData45= document.createElement('td');
//         rowData45.innerText= item.price;
    
//         tableRow1.appendChild(rowData12);
//         tableRow1.appendChild(rowData23);
//         tableRow1.appendChild(rowData34);
//         tableRow1.appendChild(rowData45);
    
//         tableBody2.appendChild(tableRow1);
//     })
//   console.log(tableBody2);
// }




// document.getElementById('check_btn').addEventListener('click',checkToggle);


// var flag3= false;
// function checkToggle(){
//     if(cartData2.length > 0){
//         document.getElementById('food-items').classList.toggle('food-items');
//         document.getElementById('category-list').classList.toggle('food-items');
//         document.getElementById('category-header').classList.toggle('toggle-category');
//         document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle')
//         document.getElementById('checkout-page').classList.toggle('checkout-toggle');
       
       
//         flag3= true;
//         console.log(flag3)
//     }
//     else{
//         alert("Currently no item in Checkout!");
//     }
// }









document.querySelectorAll('.add-to-wish').forEach(item=>{
    item.addEventListener('click',wishList)
    
})


var cartData1= [];
function wishList(){
    
    
    var itemToAdd1= this.parentNode.nextSibling.nextSibling.innerText;
    var itemObj1= res.find(element=>element.name==itemToAdd1);

    var index= cartData1.indexOf(itemObj1);
    if(index=== -1){
        document.getElementById(itemObj1.id1).classList.add('toggle-heart');
        cartData1= [...cartData1,itemObj1];
    }
    else if(index > -1){
        alert("Added to Wishlist!");
    }
    
   
    document.getElementById('wishList').innerText=
    ' ' + cartData1.length + ' Wishlist';
  
    totalAmount()
    wishItems();
}


function wishItems(){
    var tableBody1=  document.getElementById('table-body1');
    tableBody1.innerHTML= '';

    cartData1.map(item=> {
        var tableRows= document.createElement('tr');
        
        var rowData11= document.createElement('td');
        var img= document.createElement('img');
        img.src= item.img;
        rowData11.appendChild(img);
    
        var rowData22= document.createElement('td');
        rowData22.innerText= item.name;
        
        var rowData33= document.createElement('td');
        var btn11= document.createElement('button');
        btn11.setAttribute('class','decrease-item');
        btn11.innerText= '-';
        // var span1= document.createElement('span');
        // span1.innerText= item.quantity;
        // var btn22= document.createElement('button');
        // btn22.setAttribute('class','increase-item');
        // btn22.innerText= '+';
        
        rowData33.appendChild(btn11);
        // rowData33.appendChild(span1);
        // rowData33.appendChild(btn22);
    
        var rowData44= document.createElement('td');
        rowData44.innerText= item.price;
    
        tableRows.appendChild(rowData11);
        tableRows.appendChild(rowData22);
        tableRows.appendChild(rowData33);
        tableRows.appendChild(rowData44);
    
        tableBody1.appendChild(tableRows);
    })


    document.querySelectorAll('.increase-item').forEach(item=>{
        item.addEventListener('click',incrementItem1)
    })

    document.querySelectorAll('.decrease-item').forEach(item=>{
        item.addEventListener('click',decrementItem1)
    })
} 


function incrementItem1(){
    let itemToInc1= this.parentNode.previousSibling.innerText;
    console.log(itemToInc1)
    var incObj1= cartData1.find(element=>element.name==itemToInc1);
    incObj1.quantity+=1;
    
    currPrice1= (incObj1.price*incObj1.quantity - incObj1.price*(incObj1.quantity-1))/(incObj1.quantity-1);
    incObj1.price= currPrice1*incObj1.quantity;
    totalAmount()
    wishList()
}

var currPrice1= 0;
function decrementItem1(){
    let itemToInc1= this.parentNode.previousSibling.innerText;
    let decObj= cartData1.find(element=>element.name==itemToInc1);
    let ind1= cartData1.indexOf(decObj);
    if(decObj.quantity >1){
        currPrice1= (decObj.price*decObj.quantity - decObj.price*(decObj.quantity-1))/(decObj.quantity);
        decObj.quantity-= 1;
        decObj.price= currPrice1*decObj.quantity;
    }
    else{
        document.getElementById(decObj.id1).classList.remove('toggle-heart')
        cartData1.splice(ind1,1);
        // document.getElementById('cart-plus').innerText= ' ' + cartData.length + ' Items';
        document.getElementById('wishList').innerText= ' ' + cartData1.length + ' Wishlist';
        // document.getElementById('m-cart-plus').innerText= ' ' + cartData.length;
        if(cartData1.length < 1 && flag1){
            document.getElementById('food-items').classList.toggle('food-items');
            document.getElementById('category-list').classList.toggle('food-items');
            document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle')
            // document.getElementById('cart-page').classList.toggle('cart-toggle');
            document.getElementById('wishlist-page').classList.toggle('heart-toggle');
            document.getElementById('category-header').classList.toggle('toggle-category');
            // document.getElementById('checkout').classList.toggle('cart-toggle');
            document.getElementById('checkout1').classList.toggle('heart-toggle');
            flag= false;
            alert("Currently no item in wishlist!");
            console.log(flag1)
        }
    }
    
    totalAmount()
    wishList();
}

document.getElementById('wishList').addEventListener('click',heartToggle);
var flag1= false;
function heartToggle(){
    if(cartData1.length > 0){
        document.getElementById('food-items').classList.toggle('food-items');
        document.getElementById('category-list').classList.toggle('food-items');
        document.getElementById('category-header').classList.toggle('toggle-category');
        document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle')
        // document.getElementById('cart-page').classList.toggle('cart-toggle');
        document.getElementById('wishlist-page').classList.toggle('heart-toggle');
        document.getElementById('checkout1').classList.toggle('heart-toggle');
        flag1= true;
        console.log(flag1)
    }
    else{
        alert("Currently no item in wishlist!");
    }
}


window.onresize= window.onload= function(){
    var size= window.screen.width;
    console.log(size)
    if(size<800){
        var cloneress= document.getElementById('food-items').cloneNode(true);
        var cloneCartPage= document.getElementById('cart-page').cloneNode(true);
        var cloneCartPage1= document.getElementById('wishlist-page').cloneNode(true);
        // var cloneCartPage2= document.getElementById('checkout-page').cloneNode(true);
        document.getElementById('food-items').remove();
        document.getElementById('cart-page').remove();
        document.getElementById('wishlist-page').remove();
        // document.getElementById('checkout-page').remove();
        document.getElementById('category-header').after(cloneress);
        document.getElementById('food-items').after(cloneCartPage);
         document.getElementById('food-items').after(cloneCartPage1);
        //  document.getElementById('food-items').after(cloneCartPage2);

        addEvents()
    }
    if(size>800){
        var cloneress= document.getElementById('food-items').cloneNode(true);
        document.getElementById('food-items').remove();
        document.getElementById('header').after(cloneress);

        var cloneCartPage= document.getElementById('cart-page').cloneNode(true);
        var cloneCartPage1= document.getElementById('wishlist-page').cloneNode(true);
        // var cloneCartPage2= document.getElementById('checkout-page').cloneNode(true);
        document.getElementById('cart-page').remove();
        document.getElementById('wishlist-page').remove();
        // document.getElementById('checkout-page').remove();
        document.getElementById('food-items').after(cloneCartPage);
        document.getElementById('food-items').after(cloneCartPage1);
        // document.getElementById('food-items').after(cloneCartPage2);
        addEvents()
    }
}

function addEvents(){
    document.querySelectorAll('.add-to-cart').forEach(item=>{
        item.addEventListener('click',addToCart)
    });
    document.querySelectorAll('.increase-item').forEach(item=>{
        item.addEventListener('click',incrementItem)
    })

    document.querySelectorAll('.decrease-item').forEach(item=>{
        item.addEventListener('click',decrementItem)
    })
    

    
    document.querySelectorAll('.add-to-wish').forEach(item=>{
        item.addEventListener('click',wishList)
        
        
    })
    document.querySelectorAll('.decrease-item').forEach(item=>{
        item.addEventListener('click',decrementItem1)
    })

    
    // document.querySelectorAll('.add-to-wish').forEach(item=>{
    //     item.addEventListener('click',checkToCart)
        
        
    // })
}

document.getElementById('add-address').addEventListener('click',addAddress);

document.getElementById('m-add-address').addEventListener('click',addAddress);

function addAddress(){
    var address= prompt('Enter your address','');
    if(address){
        document.getElementById('add-address').innerText= ' ' + address;
    }
    else{
        alert("Address not added")
    }
}


// -----------------palceorder and checkout---------------------

