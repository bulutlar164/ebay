// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  modules:[
    '@pinia/nuxt',
    '@kevinmarrec/nuxt-pwa',
    'nuxt-vitest'
  ],
  pwa:{
    meta:{
      title:"Ebay",
      author:"Me"
    },
    manifest:{
      name:"ebay",
      short_name:"ebay",
      lang:"en",
      theme_color:"#ffffff"
    },
    workbox:{
      enabled:true
    }
    
  }
  
})
