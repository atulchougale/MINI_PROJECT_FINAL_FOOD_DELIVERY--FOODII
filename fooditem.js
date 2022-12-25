const foodItem= [
    {
      name: "Ambur Biryani",
      category: "biryani",
      rating: 4.2,
      price: 300,
      img: "https://i.ibb.co/gwzcwf1/Ambur-Chicken-Biryani.jpg",
      quantity :1,    
 
      id: 1
    },
    {
      name: "Hyderabadi Biryani",
      category: "biryani",
      rating: 4.4,
      price: 350,
      img: "https://i.ibb.co/ZxdjQc6/Chicken-Biryani-hyd.jpg",
      quantity: 1,
  
      id: 2
    },
    {
      name: "Egg Biryani",
      category: "biryani",
      rating: 4.1,
      price: 250,
      img: "https://i.ibb.co/sJgLQdv/egg-biryani.jpg",
      quantity: 1,     
      id: 3
    },
    {
      name: "Goan Fish Biryani",
      category: "biryani",
      rating: 4.1,
      price: 260,
      img: "https://i.ibb.co/hm0RTZ2/goan-fish-biryani.jpg",
      quantity: 1,      
      id:4
    },
    {
      name: "Mutton Biryani",
      category: "biryani",
      rating: 3.6,
      price: 280,
      img: "https://i.ibb.co/YfQMLV7/hyd-Mutton-Biryani.jpg",
      quantity: 1,      
      id:5
    },
    {
      name: "Kamrupi Biryani",
      category: "biryani",
      rating: 4.2,
      price: 272,
      img: "https://i.ibb.co/Wp8WFL7/kamrupi-biryani.jpg",
      quantity: 1,      
      id:6
    },
    {
      name: "Kashmiri Biryani",
      category: "biryani",
      rating: 3.3,
      price: 330,
      img: "https://i.ibb.co/Z68fzhk/kashmiri-pulao.jpg",
      quantity: 1,      
      id:7
    },
    {
      name: "Memoni Biryani",
      category: "biryani",
      rating: 4.3,
      price: 267,
      img: "https://i.ibb.co/6FcmkB2/memonibiryani.png",
      quantity: 1,      
      id:8
    },
    {
      name: "Chicken Roast",
      category: "chicken",
      rating: 3.5,
      price: 164,
      img: "https://i.ibb.co/0GbVd4m/Chicken-roast.jpg",
      quantity: 1,      
      id:9
    },
    {
      name: "Mughlai Biryani",
      category: "biryani",
      rating: 3.8,
      price: 280,
      img: "https://i.ibb.co/HtSfLxC/mughlai-biryani.jpg",
      quantity: 1,      
      id: 10
    },
    {
      name: "Chicken Curry",
      category: "chicken",
      rating: 3.2,
      price: 238,
      img: "https://i.ibb.co/qFrrhrx/Chicken-Curry.jpg",
      quantity: 1,      
      id: 11
    },
    {
      name: "Chicken Do Pyaza",
      category: "chicken",
      rating: 3.6,
      price: 212,
      img: "https://i.ibb.co/yyYSKmC/Chicken-do-Pyaza.jpg",
      quantity: 1,      
      id: 12
    },
    {
      name: "Chicken Masala",
      category: "chicken",
      rating: 4.5,
      price: 350,
      img: "https://i.ibb.co/7Ys1v0w/Chicken-Masala.jpg",
      quantity: 1,      
      id: 13
    },
    {
      name: "Handi Chicken",
      category: "chicken",
      rating: 4.8,
      price: 350,
      img: "https://i.ibb.co/nCp4zG9/Handi-chicken.jpg",
      quantity: 1,   

      id: 14
    },
    {
      name: "Murgh Musallam",
      category: "chicken",
      rating: 3.6,
      price: 180,
      img: "https://i.ibb.co/NtJq0ym/Murgh-Musallam.jpg",
      quantity: 1,      
      id: 15
    },
    {
      name: "Matar Paneer",
      category: "paneer",
      rating: 3.8,
      price: 174,
      img: "https://i.ibb.co/F88wVL4/Matar-Paneer.jpg",
      quantity: 1,      
      id: 16
    },
    {
      name: "Palak Paneer",
      category: "paneer",
      rating: 3.9,
      price: 258,
      img: "https://i.ibb.co/VwJpSwR/palak-paneer.jpg",
      quantity: 1,      
      id: 17
    },
    {
      name: "Paneer Butter Masala",
      category: "paneer",
      rating: 4.7,
      price: 224,
      img: "https://i.ibb.co/88vPKyk/paneer-butter-masala.jpg",
      quantity: 1,
  
      id: 18
    },
    {
      name: "Paneer Do Pyaza",
      category: "paneer",
      rating: 4.4,
      price: 218,
      img: "https://i.ibb.co/qrnGvXt/Paneer-Do-Pyaza.jpg",
      quantity: 1,      
      id: 19
    },
    {
      name: "Hyderabadi Paneer",
      category: "paneer",
      rating: 3.8,
      price: 173,
      img: "https://i.ibb.co/3WjD7s2/Paneer-Hyderabadi.jpg",
      quantity: 1,      
      id: 20
    },
    {
      name: "Paneer Lababdar",
      category: "paneer",
      rating: 3.1,
      price: 131,
      img: "https://i.ibb.co/Z11snpj/paneer-lababdar.jpg",
      quantity: 1,    
      id: 21
    },
    {
      name: "Shahi Paneer",
      category: "paneer",
      rating: 3.4,
      price: 177,
      img: "https://i.ibb.co/MhvC4x1/shahi-paneer.jpg",
      quantity: 1,      
      id: 22
    },
    {
      name: "Navratan Korma",
      category: "vegetable",
      rating: 3.2,
      price: 150,
      img: "https://i.ibb.co/z5TVz0T/navratan-korma-vegetable.png",
      quantity: 1,      
      id: 23
    },
    {
      name: "Veg Jalfrezi",
      category: "vegetable",
      rating: 4.4,
      price: 156,
      img: "https://i.ibb.co/QCLnhcr/VEG-JALFREZI.jpg",
      quantity: 1,     
      id: 24
    },
    {
      name: "Veg Biryani",
      category: "vegetable",
      rating: 4.3,
      price: 230,
      img: "https://i.ibb.co/s2J2B1D/vegetable-biryani.jpg",
      quantity: 1,
  
      id: 25
    },
    {
      name: "Veg Curry",
      category: "vegetable",
      rating: 3.8,
      price: 217,
      img: "https://i.ibb.co/L9q3gtk/vegetable-curry.jpg",
      quantity: 1,      
      id: 26
    },
    {
      name: "Veg Kolhapur",
      category: "vegetable",
      rating: 3.5,
      price: 219,
      img: "https://i.ibb.co/NmnCbT2/vegetable-kolhapuri.jpg",
      quantity: 1,      
      id: 27
    },
    {
      name: "Veg Masala",
      category: "vegetable",
      rating: 3.4,
      price: 195,
      img: "https://i.ibb.co/yX8fS8r/vegetable-masala.jpg",
      quantity: 1,      
      id: 28
    },
    {
      name: "Veg Pakora",
      category: "vegetable",
      rating: 3.5,
      price: 229,
      img: "https://i.ibb.co/khhHdCs/vegetable-pakora.jpg",
      quantity: 1,      
      id: 29
    },
    {
      name: "Momos",
      category: "chinese",
      rating: 3.6,
      price: 133,
      img: "https://i.ibb.co/NLkhKqp/cabbage-momos.jpg",
      quantity: 1,      
      id: 30
    },
    {
      name: "Chili Chicken",
      category: "chinese",
      rating: 3.5,
      price: 70,
      img: "https://i.ibb.co/DK862MD/Chili-Chicken.jpg",
      quantity: 1,      
      id: 31
    },
    {
      name: "Chicken Manchurian",
      category: "chinese",
      rating: 3.9,
      price: 60,
      img: "https://i.ibb.co/DCpbFsg/Chicken-Manchurian.jpg",
      quantity: 1,      
      id: 32
    },
    {
      name: "Chowmein",
      category: "chinese",
      rating: 3.3,
      price: 130,
      img: "https://i.ibb.co/9hbrRYK/chowmin.jpg",
      quantity: 1,      
      id: 33
    },
    {
      name: "Spring Roll",
      category: "chinese",
      rating: 2.9,
      price: 80,
      img: "https://i.ibb.co/3WCzt4z/spring-rolls.jpg",
      quantity: 1,      
      id: 34
    },
    {
      name: "Szechuan Chicken",
      category: "chinese",
      rating: 3.2,
      price: 90,
      img: "https://i.ibb.co/rHB3C1z/szechuan-chicken.jpg",
      quantity: 1,      
      id: 35
    },
    {
      name: "Fried Rice",
      category: "chinese",
      rating: 4.6,
      price: 60,
      img: "https://i.ibb.co/r2wycF3/veg-fried-rice.jpg",
      quantity: 1,      
      id: 36
    },
    {
      name: "Butter Masala Dosa",
      category: "south indian",
      rating: 3.7,
      price: 120,
      img: "https://i.ibb.co/Ns5xgbv/Butter-Masala-Dosa.png",
      quantity: 1,      
      id: 37
    },
    {
      name: "Idli",
      category: "south indian",
      rating: 3.9,
      price: 65,
      img: "https://i.ibb.co/C02rPKr/idli-with-rice-flour.jpg",
      quantity: 1,      
      id: 38
    },
    {
      name: "Masala Dosa",
      category: "south indian",
      rating: 3.6,
      price: 66,
      img: "https://i.ibb.co/1TNLMcW/masala-dosa.jpg",
      quantity: 1,      
      id: 39
    },
    {
      name: "Mysore Bonda",
      category: "south indian",
      rating: 3.4,
      price: 54,
      img: "https://i.ibb.co/CndymFV/mysore-bonda.jpg",
      quantity: 1,      
      id: 40
    },
    {
      name: "Onion Uttapam",
      category: "south indian",
      rating: 4.0,
      price: 70,
      img: "https://i.ibb.co/yF7s3Y8/onion-uttapam.jpg",
      quantity: 1,      
      id: 41
    },
    {
      name: "Plain Dosa",
      category: "south indian",
      rating: 3.7,
      price: 40,
      img: "https://i.ibb.co/M6fcM23/plain-dosa.jpg",
      quantity: 1,      
      id: 42
    },
    {
      name: "Rava Uttapam",
      category: "south indian",
      rating: 3.2,
      price: 56,
      img: "https://i.ibb.co/vBfgtDX/Rava-Uttapam.jpg",
      quantity: 1,      
      id: 43
    },
    {
      name: "Sambhar Vada",
      category: "south indian",
      rating: 4.2,
      price: 36,
      img: "https://i.ibb.co/Yhdk5pn/sambhar-vada.jpg",
      quantity: 1,      
      id: 44
    },
    {
      name: "Tambda Pandhara Rassa",
      category: "Kolhapuri-Speciale",
      rating: 4.8,
      price: 200,
      img: "https://i.ibb.co/54Mk9HP/kolhapuri-tambda-pandhara-rassa.webp",
      quantity: 1,      
      id: 45
    },
    {
      name: "Kolhapuri Mutton",
      category: "Kolhapuri-Speciale",
      rating: 4.5,
      price: 350,
      img: "https://i.ibb.co/0sP9JMg/kolhapuri-muttonthali.jpg",
      quantity: 1,      
      id: 46
    },
    {
      name: "Tambda Pandhra Thali",
      category: "Kolhapuri-Speciale",
      rating: 4.8,
      price: 350,
      img: "https://i.ibb.co/jWnsFby/Kolhapuri-Thali-tambda-pandhara.jpg",
      quantity: 1,
  
      id: 47
    },
    {
      name: "Kolhapuri Vegetarian",
      category: "Kolhapuri-Speciale",
      rating: 4.2,
      price: 260,
      img: "https://i.ibb.co/p0LphYt/kolhapuri-veg-thali.jpg",
      quantity: 1,      
      id: 48
    },
    {
      name: "Kolhapuri Misal Pav",
      category: "Kolhapuri-Speciale",
      rating: 4.1,
      price: 60,
      img: "https://i.ibb.co/QNrsc9D/kolhapur-misal-pav.jpg",
      quantity: 1,      
      id: 49
    },
    {
      name: "Kat Vada",
      category: "Kolhapuri-Speciale",
      rating: 4.0,
      price: 50,
      img: "https://i.ibb.co/tJMxRGh/kolhapuri-kat-wada.jpg",
      quantity: 1,      
      id: 50
    },
    {
      name: "Kolhapuri Vada Pav",
      category: "Kolhapuri-Speciale",
      rating: 4.5,
      price: 50,
      img: "https://i.ibb.co/HHyKXV8/kolhapur-vada-pav.jpg",
      quantity: 1,      
      id: 51
    },
    {
      name: "Pithal Bhakari",
      category: "Kolhapuri-Speciale",
      rating: 4.0,
      price: 70,
      img: "https://i.ibb.co/nffmgyw/pithal-bhakri.jpg",
      quantity: 1,      
      id: 52
    },
    {
      name: "Kolhapuri Bhel",
      category: "Kolhapuri-Speciale",
      rating: 4.5,
      price: 64,
      img: "https://i.ibb.co/jrcdLys/kolhapuri-bhel-1.jpg",
      quantity: 1,      
      id: 53
    }
  ]

export {foodItem};