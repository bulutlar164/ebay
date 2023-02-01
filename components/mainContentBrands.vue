<template>
    <div>
        <ul class="mainContentGrid-ul">
            <li class="mainContentGrid-li" v-for="item in data.nesne2">
                <form class="mainContentGrid-form">
                    <img class="mainContentGrid-img" :src="item.img">
                    <h1 class="mainContentGrid-h1">{{ item.name }}</h1>
                </form>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { useTestStore } from '~~/store/store';
const data = useTestStore();
</script>

<style>
    .mainContentGrid-li{
        margin-left: 0px;
        margin-right: 0px;
        margin-top: 0px;
    }
    .mainContentGrid-ul{
        display: flex;
        margin-top: 0px;
    }

    .mainContentGrid-img{
        width: 150px;
        height: 150px;
        margin-left: 15px;
    }

    .mainContentGrid-form{
        height: 200px;
        width: 175px;
    }
    .mainContentGrid-h1{
        text-align: center;
        font-size: 16px;
        font-family: "Market Sans", Arial, sans-serif;
        color: #333;
    }
</style>