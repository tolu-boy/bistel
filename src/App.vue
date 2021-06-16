<template>
  <div id="app">
    <!-- the app header is the navbar link -->
    <app-header v-if="!$route.meta.isAdmin"></app-header>
    <admin-header v-if="$route.meta.isAdmin"></admin-header>

<transition mode="out-in"
enter-active-class="animate__animated animate__fadeIn"
leave-active-class="animate__animated animate__fadeOut"
>
  <router-view></router-view>
</transition>

<!-- the app footer is for all footers -->
<app-footer v-if="!$route.meta.isAdmin"></app-footer>
  </div>
</template>

<script>
import header from './components/header.vue'
import footer from './components/footer.vue'
import adminHeader from './components/admin/adminHeader'




export default {
  name: 'App',
  components: {
    // Home
    'app-header':header,
    'app-footer':footer,
    'admin-header':adminHeader
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
