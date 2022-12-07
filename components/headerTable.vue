<template>
    <div class="headerbody">
        <ul id="uls">
            <li class="ebay">
                Ebay
            </li>
            <li class="li_witdh">
                <div class="dropdown">
                  <button class="dropbtn">
                    <p>Shop by category</p>
                  </button>
                  <div class="dropdown-content4">
                    <form>
                        <div class="grid-container">
                            <div class="grid-item">
                                <ul class=".grid-item-ul">
                                    <li><a href="#">Collectibles & art</a></li>
                                    <li>Collectibles</li>
                                    <li>Antiques</li>
                                    <li>Sports memorabilia</li>
                                    <li>Art</li>
                                </ul>
                            </div>
                            <div class="grid-item">
                                <ul class=".grid-item-ul">
                                    <li><a href="#">Collectibles & art</a></li>
                                    <li>Collectibles</li>
                                    <li>Antiques</li>
                                    <li>Sports memorabilia</li>
                                    <li>Art</li>
                                </ul>
                            </div>
                            <div class="grid-item">
                                <ul class=".grid-item-ul">
                                    <li><a href="#">Collectibles & art</a></li>
                                    <li>Collectibles</li>
                                    <li>Antiques</li>
                                    <li>Sports memorabilia</li>
                                    <li>Art</li>
                                </ul>
                            </div>  
                            <div class="grid-item">
                                <ul class=".grid-item-ul">
                                    <li><a href="#">Collectibles & art</a></li>
                                    <li>Collectibles</li>
                                    <li>Antiques</li>
                                    <li>Sports memorabilia</li>
                                    <li>Art</li>
                                </ul>
                            </div>
                            <div class="grid-item">
                                <ul class=".grid-item-ul">
                                    <li><a href="#">Collectibles & art</a></li>
                                    <li>Collectibles</li>
                                    <li>Antiques</li>
                                    <li>Sports memorabilia</li>
                                    <li>Art</li>
                                </ul>
                            </div>
                            <div class="grid-item">
                                <ul class=".grid-item-ul">
                                    <li><a href="#">Collectibles & art</a></li>
                                    <li>Collectibles</li>
                                    <li>Antiques</li>
                                    <li>Sports memorabilia</li>
                                    <li>Art</li>
                                </ul>
                            </div>  
                            <div class="grid-item">
                                <ul class=".grid-item-ul">
                                    <li><a href="#">Collectibles & art</a></li>
                                    <li>Collectibles</li>
                                    <li>Antiques</li>
                                    <li>Sports memorabilia</li>
                                    <li>Art</li>
                                </ul>
                            </div>
                            <div class="grid-item">
                                <ul class=".grid-item-ul">
                                    <li><a href="#">Collectibles & art</a></li>
                                    <li>Collectibles</li>
                                    <li>Antiques</li>
                                    <li>Sports memorabilia</li>
                                    <li>Art</li>
                                </ul>
                            </div>
                            <div class="grid-item">
                                <ul class=".grid-item-ul">
                                    <li><a href="#">Collectibles & art</a></li>
                                    <li>Collectibles</li>
                                    <li>Antiques</li>
                                    <li>Sports memorabilia</li>
                                    <li>Art</li>
                                </ul>
                            </div>  
                        </div>
                    </form>
                    </div>
                </div>   
            </li>
            <li>
                <form class="grid-form">
                    <button class="grid-from-icon">Icon</button>
                    <input class="grid-form-input" placeholder="Search for anything"/>
                    <div class="dropdown">
                        <button class="grid-form-allcategories">All Categories</button>
                        <div class="dropdown-content5">
                        <ul class="grid-form-allcategories-context">
                            <li >
                                All Categories
                            </li>
                            <li>
                                All Categories
                            </li>
                            <li>
                                All Categories
                            </li>
                        </ul>
                        </div>
                    </div>
                </form>
            </li>
            <li>
                <button class="button-search">
                    Search
                </button>
            </li>
            <li>
                <button class="button_Advanced" href="#">Advanced</button>
            </li>
        </ul>
    </div>
    
    </template>
    
    <script>
        
    
    </script>
    
    <style>
    
    .button_Advanced{
        text-align:end;
        display: block;
        color: #767676;
        width: 20px;
        height: 43px;
        font-size: 11px;
    }
    
    .button-search{
        background-color: #3665f3 ;
        width: 185px;
        height: 46px;
        text-align: center;
        text-emphasis-color: white;
        color: white;
        font-size: 14px;
    }
    
    .grid-form{
        border: 2px solid black;
        height: 42px;
        width: 750px;
    }
    
    .grid-form-input{
        text-align: left;
        height: 42px;
        width: 590px;
        margin: 0px;
        padding: 0px;
        border: none;
        border-right: 1px solid rgb(98, 97, 97);
       
    }
    
    .grid-from-icon{
        border: none;
        width: 50px;
    }
    
    .grid-form-allcategories{
        border: none;
    }
    
    .grid-form-allcategories-context{
        list-style: none;
        display: flex;
        flex-direction: column;
        margin: 0px;
        padding: 0px;
      
    }
    
    .grid-form-allcategories-context li{
        margin: 0px;
        margin-left: 20px;
    }
    
    .grid-container {
      display: grid;
      grid-template-columns: auto auto auto;
      background-color: white;
      border-color: #333;
      padding: 10px;
    }
    
    .grid-item {
      background-color:white;
      padding: 20px;
      font-size: 30px;
      text-align: left;
    }
    
    p{
        font-size: 14px;
        margin: 0;
        padding: 0;
        width: 70px;
        color: #767676;
        word-break: normal;
    }
    
    .headerbody{
        height: 56px;
    }
    
    #uls{
        list-style: none;
        margin: 0px;
        padding: 0px;
        display: flex;
    }
    
    .li_width{
        width: 55px;
        margin: 0;
        padding: 0;
    }
    
    .ebay{
        width: 117px;
    }
    
    .dropdown {
        position: relative;
        display: inline-block;
    }
    
    .dropdown-content4 {
        display: none;
        position: absolute;
        background-color: white;
        left: 0;
        width: 600px;
        height: 600px;
        z-index: 1;
        border: 1px solid #333;
    }
    
      .dropdown-content5 {
        display: none;
        position: absolute;
        background-color: white;
        left: 0;
        width: 200px;
        height: 200px;
        z-index: 1;
        border: 1px solid #333;
      }
    
      
      
      .dropdown-content4 a:hover {background-color: #ddd;}
      
      .dropdown:hover .dropdown-content4 {display: block;}
    
      .dropdown:hover .dropdown-content5{display: block;}
      
      .dropdown:hover .dropbtn {background-color: white;}
    </style>