<template>

    <headerDiv/>
    <hr />
    <headerTable/>
    <hr/>
    <mainContent/>
    <mainContentimgVue/>
    <mainContentText/>
    <mainContentSlider/>
    <mainContentCategoriesText/>
    <mainContentGrid/>
    <mainContentBrandsText/>
    <mainContentBrands/>
    <mainContentDailySliderText/>
    <mainContentDailySlider/>
    <mainContentimgVue/>
    <hr class="app-hr"/>
    <ebayFooter/>
    
</template>

<script>
import headerDiv from "./components/headerDiv.vue"
import headerTable from "./components/headerTable.vue"
import mainContent from "./components/mainContent.vue"
import mainContentimgVue from "./components/mainContentimg.vue"
import mainContentSlider from "./components/mainContentSlider.vue"
import mainContentText from "./components/mainContentText.vue"
import mainContentGrid from "./components/mainContentGrid.vue"
import mainContentCategoriesText from "./components/mainContentCategoriesText.vue"
import mainContentBrands from "./components/mainContentBrands.vue"
import mainContentBrandsText from "./components/mainContentBrandsText.vue"
import mainContentDailySlider from "./components/mainContentDailySlider.vue"
import mainContentDailySliderText from "./components/mainContentDailySliderText.vue"
import ebayFooter from "./components/ebayFooter.vue"
export default{
  components:{
    headerDiv,
    headerTable,
    mainContent,
    mainContentimgVue,
    mainContentSlider,
    mainContentText,
    mainContentGrid,
    mainContentCategoriesText,
    mainContentBrands,
    mainContentBrandsText,
    mainContentDailySlider,
    mainContentDailySliderText,
    ebayFooter,
  },
}

</script>

<style>
hr{
margin-left:-100px;
}

.app-hr{
  margin-top: 80px;
}
</style>
