<template>
    <ul>
        <li v-for="item in data">
            <form v-if="item.id == id" class="products-form">
                <ul class="products-ul">
                    <img class="products-img" :src="item.ımg">
                    <ul class="products-ul-ul">
                        <li>
                            {{ item.name }}
                        </li>
                        <li>
                            Price : ${{ item.price }}
                        </li>
                        <li>
                            <button class="products-button" @click="addtoCart">Add to cart</button>
                        </li>
                    </ul>
                </ul> 
            </form>
        </li>
    </ul>
    
</template>

<script setup lang="ts">
import ProductsDizi from '~~/interfaces/ProductsDizi';
    const urun = ref(Array<ProductsDizi>)
    const {id} = useRoute().params
    const {data} = useFetch("/api/sliderData");

    
    //zeki olmak mükemmel bir detay
</script>

<style>
    .products-button{
        font-size: large;
        color: whitesmoke;
        background-color: rgb(52, 152, 202);
        border-radius: 10px;
    }
    .products-ul-ul{

    }

    .products-ul-ul li{
        font-size: 40px;
        font-family: "Skin-market-sans";
        color: rgb(51, 51, 51);
    }

    .products-ul{
        display: flex;
    }

    .products-img{
        height: 500px;
        width: 500px;
        padding: 0px;
       
    }

    .products-form{
        height: 500px;
        width: 1000px;
    }

    .products-form2{
        height: 200px;
        width: 200px;
    }
</style>