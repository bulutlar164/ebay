<template>
    <div>
        <headerDiv/>
        <hr />
        <headerTable/>
        <hr/>
      <slot/>
    </div>
  </template>
  
  <script setup lang="ts">
  import headerDiv from "/components/headerDiv.vue"
  import headerTable from "/components/headerTable.vue"
  </script>
  
  <style>
  hr{
  margin-left:-100px;
  }
  
  .app-hr{
    margin-top: 80px;
  }
  </style>
  