
async function getData()
{
    let data= await fetch("https://6381eefa9842ca8d3c9d0014.mockapi.io/foodiis");
    let FoodData=await data.json();
    console.log(FoodData);
   
    displayItems();
}
 getData();






async function displayItems(){
    var biryani= document.getElementById('biryani');
    var paneer=  document.getElementById('paneer');;
    var chicken=  document.getElementById('chicken');
    var vegetable=  document.getElementById('vegetable');
    var chinese=  document.getElementById('chinese');
    var southIndian=  document.getElementById('south-indian');
    var kolhapuriSpeciale=  document.getElementById('kolhapur');



    
        let data= await fetch('https://6381eefa9842ca8d3c9d0014.mockapi.io/foodiis')
        console.log(data)
        let res=await data.json()
        console.log(res)
       
    

    const biryaniData= res.filter((item)=>item.category=='biryani');
    const chickenData= res.filter((item)=>item.category=='chicken');
    const PaneerData= res.filter((item)=>item.category=='paneer');
    const vegetableData= res.filter((item)=>item.category=='vegetable');
    const chineseData= res.filter((item)=>item.category=='chinese');
    const southData= res.filter((item)=>item.category=='south indian');
    const kolhapuriSpecialeData= res.filter((item)=>item.category=='Kolhapuri_Speciale');

    
    biryaniData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

       itemCard.innerHTML +=`
            <div id="card-top">
                <i class="fa fa-star" id="rating"> ${item.rating}</i>
                <i class="fa fa-edit edit" id=${item.id} data-toggle="modal" data-target="#editModal" onclick='editModal(${item.id})'></i>
                
                <i class="fa fa-trash-o delete" id=${item.id} onclick='deleteFood(${item.id})' ></i>
            </div>
            <img src="${item.image}">
            <p id="item-name">${item.name}</p>
            <p id="item-price">Price :${item.price} RS/-</p>
        `
        biryani.appendChild(itemCard);
    })


    chickenData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

       itemCard.innerHTML +=`
            <div id="card-top">
                <i class="fa fa-star" id="rating"> ${item.rating}</i>
                <i class="fa fa-edit edit" id=${item.id} data-toggle="modal" data-target="#editModal" onclick='editModal(${item.id})'></i>
                
                <i class="fa fa-trash-o delete" id=${item.id} onclick='deleteFood(${item.id})' ></i>
            
            </div>
            <img src="${item.image}">
            <p id="item-name">${item.name}</p>
            <p id="item-price">Price :${item.price} RS/-</p>
        `
        chicken.appendChild(itemCard);
    })


    PaneerData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

       itemCard.innerHTML +=`
            <div id="card-top">
                <i class="fa fa-star" id="rating"> ${item.rating}</i>
                <i class="fa fa-edit edit" id=${item.id} data-toggle="modal" data-target="#editModal" onclick='editModal(${item.id})'></i>
                
                <i class="fa fa-trash-o delete" id=${item.id} onclick='deleteFood(${item.id})' ></i>
            
            </div>
            <img src="${item.image}">
            <p id="item-name">${item.name}</p>
            <p id="item-price">Price :${item.price} RS/-</p>
        `
        paneer.appendChild(itemCard);
    })


    vegetableData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

       itemCard.innerHTML +=`
            <div id="card-top">
                <i class="fa fa-star" id="rating"> ${item.rating}</i>
                <i class="fa fa-edit edit" id=${item.id} data-toggle="modal" data-target="#editModal" onclick='editModal(${item.id})'></i>
                
                <i class="fa fa-trash-o delete" id=${item.id} onclick='deleteFood(${item.id})' ></i>
            
            </div>
            <img src="${item.image}">
            <p id="item-name">${item.name}</p>
            <p id="item-price">Price :${item.price} RS/-</p>
        `
        vegetable.appendChild(itemCard);
    })


  

    chineseData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

       itemCard.innerHTML +=`
            <div id="card-top">
                <i class="fa fa-star" id="rating"> ${item.rating}</i>
                <i class="fa fa-edit edit" id=${item.id} data-toggle="modal" data-target="#editModal" onclick='editModal(${item.id})'></i>
                
                <i class="fa fa-trash-o delete" id=${item.id} onclick='deleteFood(${item.id})' ></i>
            
            </div>
            <img src="${item.image}">
            <p id="item-name">${item.name}</p>
            <p id="item-price">Price :${item.price} RS/-</p>
        `
        chinese.appendChild(itemCard);
    })





    kolhapuriSpecialeData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

       itemCard.innerHTML +=`
            <div id="card-top">
                <i class="fa fa-star" id="rating"> ${item.rating}</i>
                <i class="fa fa-edit edit" id=${item.id} data-toggle="modal" data-target="#editModal" onclick='editModal(${item.id})'></i>
                
                <i class="fa fa-trash-o delete" id=${item.id} onclick='deleteFood(${item.id})' ></i>
            
            </div>
            <img src="${item.image}">
            <p id="item-name">${item.name}</p>
            <p id="item-price">Price :${item.price} RS/-</p>
        `
        kolhapuriSpeciale.appendChild(itemCard);
    })

    southData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

       itemCard.innerHTML +=`
            <div id="card-top">
                <i class="fa fa-star" id="rating"> ${item.rating}</i>
                <i class="fa fa-edit edit" id=${item.id} data-toggle="modal" data-target="#editModal" onclick='editModal(${item.id})'></i>
                
                <i class="fa fa-trash-o delete" id=${item.id} onclick='deleteFood(${item.id})' ></i>
            
            </div>
            <img src="${item.image}">
            <p id="item-name">${item.name}</p>
            <p id="item-price">Price :${item.price} RS/-</p>
        `
        southIndian.appendChild(itemCard);
    })
}






 // Delete Food Data
async function  deleteFood(id)
{
 let data= await fetch(`https://6381eefa9842ca8d3c9d0014.mockapi.io/foodiis/${id}`,
                {method:"delete"
                 })
 let item= await data.json();
  console.log(item)
  getData();
}

// Edit Modal

let Uid
async function editModal(id)
{
  let data= await fetch(`https://6381eefa9842ca8d3c9d0014.mockapi.io/foodiis/${id}`);
  item=await data.json()

  name1=document.querySelector("#name1");
  category=document.querySelector("#category1");
  rating=document.querySelector("#rating1");
  price=document.querySelector("#price1");
  image=document.querySelector("#image1");
  quantity=document.querySelector("#quantity1");
  most=document.querySelector("#most1");

   Uid=item.id;

   name1.value=item.name;
   category.value=item.category;
   rating.value=item.rating;
   price.value=item.price;
   image.value=item.image;
   quantity.value=item.quantity;
   most.value=item.most;

  console.log(item)
}


// Edit Food

async function editFood(Uid)
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