<template>
    <div>
      <div id="grid">
        <div id="item1">
          <ul class="ul2">
            <li>
              <span>
                Hi! 
               <a class="" href="#">Sign in</a>
               or
               <a id="#grid-li-a" href="#">register</a>
              </span>
            </li>
            <li>
              <a href="#">Daily Deals</a>
            </li>
            <li>
              <a href="#">Help & Contact</a>
            </li>
          </ul>
        </div>
        <div id="item2">
          <ul class="ul2">
            <li>
              <button>Ship to</button>
            </li>
            <li>
              <button>Sell</button>
            </li>
            <li>
              <div class="dropdown">
                <button class="dropbtn">Watchlist</button>
                <diV class="dropdown-content">
                  <h2>Please sign in to view items you are watching</h2>
                </diV>
              </div>
            </li>
            <li>
              <div class="dropdown">
                <button class="dropbtn">My eBay</button>
                <diV class="dropdown-content2">
                  <ul class="ul3">
                    <li>
                      <a >Summary</a>
                    </li>
                    <li>
                      <a>Recently Viewed</a>
                    </li>
                    <li>
                      <a>Bids/Offers</a>
                    </li>
                    <li>
                      <a>Purchase History</a>
                    </li>
                    <li>
                      <a>Buy Again</a>
                    </li>
                    <li>
                      <a>Selling</a>
                    </li>
                    <li>
                      <a>Saved Searches</a>
                    </li>
                    <li>
                      <a>Saved Sellers</a>
                    </li>
                    <li>
                      <a>Messages</a>
                    </li>
                  </ul>
                </diV>
              </div>
            </li>
            <li>
              <div class="dropdown">
                <button class="dropbtn">Dropdown</button>
                <div class="dropdown-content3">
                  <h3>Please sign in to view items you are watching</h3>
              </div>
            </div>
            </li>
          </ul>
        </div>
      </div>
    
    </div>
    
    </template>
    
    <script>
      export default{
        data(){
          return{
    
          };
        },
        methods:{
          
        },
      }
    </script>
    
    <style>
    
    body{
      margin-left: 100px;
      margin-right: 40px;
      width: 1350px;
      padding: 0px;
      margin-top: 2px;
      height: 31px;
    }
    
    #grid{
      margin: 10px;
      padding: 0;
      display: grid;
      height: 25px;
      grid-template-columns: repeat(6,1f);
      grid-template-columns: 400px;
      
    }
    
    #item1{
      background-color: white;
      grid-column: 1;
      height: 24px;
      
    }
    
    #item2{
      background-color: white;
      grid-column:  span 8/25;
    }
    
    li{
      text-decoration: none;
      list-style: none;
      font-size: 14px;
      margin: 5px;
    }
    
   
    ul{
      margin: 10px;
      list-style: none;
      margin: 10px;
      padding:0;
      
    }
    
    .ul2{
      margin: 0px;
      list-style: none;
      display: flex;
    }
  
    .ul3{
      list-style: none;
      display: flex;
      flex-direction: column;
      margin: 0px;
      padding: 0px;
    }
    
    button{
      position: relative;
      font-size: 12px;
      color: #333;
      border: none;
      background-color: white;
    }
  
    .dropbtn {
      background-color: white;
      color: black;
      padding: 0;
      font-size: 12px;
      border: none;
    }
    
    .dropdown {
      position: relative;
      display: inline-block;
    }
    
    .dropdown-content {
      display: none;
      position: absolute;
      background-color: white;
      right: 0px;
      width: 400px;
      height: 100px;
      z-index: 1;
      border: 1px solid #333;
    }
    
    .dropdown-content h2 {
      color: #333;
      padding: 0;
      margin-top: 20px;
      text-align: center;
      text-decoration: none;
      background-color: white;
    }
    
    .dropdown-content a:hover {background-color: #ddd;}
    
    .dropdown:hover .dropdown-content {display: block;}
    
    .dropdown:hover .dropbtn {background-color: white;}
    
    .dropdown:hover .dropdown-content2 {display: block;}
    
    .dropdown:hover .dropdown-content3 {display: block;}
    
    .dropdown-content2 {
      display: none;
      position: absolute;
      background-color: white;
      width: 150px;
      height: 330px;
      z-index: 1;
      border: 1px solid #333;
    }
    
    .dropdown-content3 {
      display: none;
      text-align: center;
      position: absolute;
      background-color: white;
      width: 350px;
      height: 200px;
      right: 0;
      z-index: 1;
      border: 1px solid #333;
    }
    
    </style>