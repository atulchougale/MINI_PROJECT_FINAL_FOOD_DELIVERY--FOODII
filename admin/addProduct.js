
// get food Data 

async function getData()
{
    let data= await fetch("https://6381eefa9842ca8d3c9d0014.mockapi.io/foodiis");
    let foodData=await data.json();
    console.log(foodData);
   
    createfood(foodData);
}
 getData();


 // Create food

tmpData= document.getElementById("tbData"); 

function createfood(a){
     console.log(a)
     tmpData.innerHTML=``
     a.forEach(food =>{ 
        tmpData.innerHTML +=` 
            <tr>
            <td>${food.id}</td>
            <td>${food.name}</td>;
            <td>${food.category}</td>;
            <td>${food.rating}</td>;
            <td>${food.price}</td>;
            <td>${food.image}</td>;
            <td>${food.quantity}</td>;
            <td>${food.most}</td>;
   
            <td><button class='btn btn-primary'  data-toggle="modal" data-target="#editModal" onclick='editModal(${food.id})'>Edit</button></td>;
          
            <td><button class='btn btn-danger' onclick='deletefood(${food.id})'>Delete</button></td>;
            </tr>
   `
   })
 
}


// Delete food Data
async function  deletefood(id)
{
 let data= await fetch(`https://6381eefa9842ca8d3c9d0014.mockapi.io/foodiis/${id}`,
                {method:"delete"
                 })
 let food= await data.json();
  console.log(food)
  getData();
}


// Add food Data

async function addfood()
{
  name=document.querySelector("#name").value;
  category=document.querySelector("#category").value;
  rating=document.querySelector("#rating").value;
  price=document.querySelector("#price").value;
  image=document.querySelector("#image").value;
  quantity=document.querySelector("#quantity").value;
  most=document.querySelector("#most").value;

  
  console.log(name,category,rating,price,image,quantity,most);
  post=await fetch("https://6381eefa9842ca8d3c9d0014.mockapi.io/foodiis",
 {
   method:"post",
    headers:{
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({
      
        name,
        category,
        rating,
        price,
        image,
        quantity,
        most
       
    })
  })
  data=await post.json();
  getData();
  document.querySelector("#name").value='';
  document.querySelector("#category").value='';
  document.querySelector("#rating").value='';
  document.querySelector("#price").value='';
  document.querySelector("#image").value='';
  document.querySelector("#quantity").value='';
  document.querySelector("#most").value='';
}

// Edit Modal

let Uid
async function editModal(id)
{
  let data= await fetch(`https://6381eefa9842ca8d3c9d0014.mockapi.io/foodiis/${id}`);
  food=await data.json()

  name1=document.querySelector("#name1");
  category=document.querySelector("#category1");
  rating=document.querySelector("#rating1");
  price=document.querySelector("#price1");
  image=document.querySelector("#image1");
  quantity=document.querySelector("#quantity1");
  most=document.querySelector("#most1");

   Uid=food.id;

   name1.value=food.name;
   category.value=food.category;
   rating.value=food.rating;
   price.value=food.price;
   image.value=food.image;
   quantity.value=food.quantity;
   most.value=food.most;

  console.log(food)
}


// Edit food

async function editfood()
{
  name=document.querySelector("#name1").value;
  category=document.querySelector("#category1").value;
  rating=document.querySelector("#rating1").value;
  price=document.querySelector("#price1").value;
  image=document.querySelector("#image1").value;
  quantity=document.querySelector("#quantity1").value;
  most=document.querySelector("#most1").value;

  console.log(name,category,rating,price,image,quantity,most);

   put=await fetch(`https://6381eefa9842ca8d3c9d0014.mockapi.io/foodiis/${Uid}`,
 {
   method:"put",
    headers:{
      'Content-Type': 'application/json'
    },
    body:JSON.stringify({
        name:name,
        category,
        rating,
        price,
        image,
        quantity,
        most
    })
  })
  console.log(put)
  getData();
}
   
