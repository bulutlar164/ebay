import {defineStore} from 'pinia'
export const useTestStore = defineStore('test',{
   state : () =>({
    nesne:[
      {name:"Sneakers",img:"https://i.ebayimg.com/images/g/o7MAAOSw1y1hoQpM/s-l200.webp"},
      {name:"Korean beauty",img:"https://i.ebayimg.com/images/g/xR8AAOSwPVZfkEGQ/s-l200.webp"},
      {name:"Wristwatches",img:"https://i.ebayimg.com/images/g/ikgAAOSwWb5fkEGQ/s-l200.webp"},
      {name:"Fishing",img:"https://i.ebayimg.com/images/g/vJgAAOSwgYpfkEGQ/s-l200.webp"},
      {name:"Collectibles",img:"https://i.ebayimg.com/images/g/8Z0AAOSwik1fkEGQ/s-l200.webp"},
      {name:"Smartphone",img:"https://i.ebayimg.com/images/g/Y7UAAOSwewJfkEGQ/s-l200.webp"},
      {name:"Sell",img:"https://i.ebayimg.com/images/g/mTcAAOSwPzVf4xc4/s-l200.webp"}
    ],
    nesne2:[
      {name:"Apple",img:"https://i.ebayimg.com/images/g/T38AAOSwPGBeJrV1/s-l200.webp"},
      {name:"Samsung",img:"https://i.ebayimg.com/images/g/BkwAAOSwpfpeJrV0/s-l200.webp"},
      {name:"Sony",img:"https://i.ebayimg.com/images/g/uIAAAOSw7PNeJrV1/s-l200.webp"},
      {name:"Ugeen",img:"https://i.ebayimg.com/images/g/dLMAAOSwwS5eJrV0/s-l200.webp"},
      {name:"Xiomi",img:"https://i.ebayimg.com/images/g/pq0AAOSwOFFeJrV0/s-l200.webp"},
      {name:"Nike",img:"https://i.ebayimg.com/images/g/atoAAOSwZzVeJrV1/s-l200.webp"},
      {name:"Born Preety",img:"https://i.ebayimg.com/images/g/j-MAAOSwaBJeJrV1/s-l200.webp"},

    ]
   })
})