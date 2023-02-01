<template>
    <ul  class="mainContentSlider-ul">
        <li v-for="item in data" >
            <NuxtLink :to="'/products/'+item.id">
                <form class="mainContentSlider-form">
                    <img class="mainContentSlider-img" :src="item.ımg"/>
                    <h1 class="mainContentSlider-h1">${{ item.price }}</h1>
                </form>
            </NuxtLink>
        </li>
    </ul>
</template>


<script lang="ts" setup>
const {data} = await useFetch('/api/sliderData');
</script>

<style>
    .mainContentSlider-h1{
        padding: 0px;
        margin: 0px;
        font-size: 16px;
        font-family: "Market Sans", Arial, sans-serif;
    }

    .mainContentSlider-ul{
        overflow-x: auto;
        overflow-y: hidden;
        scroll-behavior: smooth;
        transition: 0.5s;
        display: flex;
        width: 1250px;
        margin-bottom: 40px;
    }
    .mainContentSlider-img{
        width: 200px;
        height: 200px;
        text-align: center;
        margin: 5px;
    }
    .mainContentSlider-form{
        width: 210px;
        height: 240px;
        background-color: whitesmoke;
    }
</style>
