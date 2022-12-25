
// get User Data 

async function getData()
{
    let data= await fetch("https://6381eefa9842ca8d3c9d0014.mockapi.io/foodiis");
    let userData=await data.json();
    console.log(userData);
   
    createUser(userData);
}
 getData();


 // Create User

tmpData= document.getElementById("tbData"); 

function createUser(a){
     console.log(a)
     tmpData.innerHTML=``
     a.forEach(user =>{ 
        tmpData.innerHTML +=` 
            <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>;
            <td>${user.category}</td>;
            <td>${user.rating}</td>;
            <td>${user.price}</td>;
            <td>${user.image}</td>;
            <td>${user.quantity}</td>;
            <td>${user.most}</td>;
   
            <td><button class='btn btn-primary'  data-toggle="modal" data-target="#editModal" onclick='editModal(${user.id})'>Edit</button></td>;
          
            <td><button class='btn btn-danger' onclick='deleteUser(${user.id})'>Delete</button></td>;
            </tr>
   `
   })
 
}


// Delete User Data
async function  deleteUser(id)
{
 let data= await fetch(`https://6381eefa9842ca8d3c9d0014.mockapi.io/foodiis/${id}`,
                {method:"delete"
                 })
 let user= await data.json();
  console.log(user)
  getData();
}


// Add User Data

async function addUser()
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
  user=await data.json()

  name1=document.querySelector("#name1");
  category=document.querySelector("#category1");
  rating=document.querySelector("#rating1");
  price=document.querySelector("#price1");
  image=document.querySelector("#image1");
  quantity=document.querySelector("#quantity1");
  most=document.querySelector("#most1");

   Uid=user.id;

   name1.value=user.name;
   category.value=user.category;
   rating.value=user.rating;
   price.value=user.price;
   image.value=user.image;
   quantity.value=user.quantity;
   most.value=user.most;

  console.log(user)
}


// Edit User

async function editUser()
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