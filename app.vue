<template>
  <div>
    <NuxtLayout>
        <NuxtLoadingIndicator/>
        <NuxtPage/>
        <template #nav>
          <nav>
            
          </nav>
        </template>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
</script>

<style>
hr{
margin-left:-100px;
}

.app-hr{
  margin-top: 80px;
}
</style>
