<template>
  <div id="app">
    <!-- the app header is the navbar link -->
    <app-header></app-header>
<router-view></router-view>


<!-- the app footer is for all footers -->
<app-footer></app-footer>
  </div>
</template>

<script>
import header from './components/header.vue'
import footer from './components/footer.vue'




export default {
  name: 'App',
  components: {
    // Home
    'app-header':header,
    'app-footer':footer
  }
}
</script>

<style>
   

</style>
