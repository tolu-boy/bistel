<template>
  <div id="app">
    <!-- the app header is the navbar link -->
    <app-header></app-header>
<transition mode="out-in"
enter-active-class="animate__animated animate__fadeIn"
leave-active-class="animate__animated animate__fadeOut"
>
  <router-view></router-view>
</transition>

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
  },
  methods:{
    john(){
      console.log('hiii');
    }
  }
}
</script>

<style>
   
 

</style>
