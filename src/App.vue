<template>
  <div class="main-wrapper">
    <Header />
    <SideMenu />
    <div>
      <router-view />
    </div>
    <Footer />
  </div>

</template>

 
<script>
import Header from "./components/layout/admin/headerComp.vue";
import SideMenu from "./components/layout/admin/sideComp.vue";
import Footer from "./components/layout/admin/footerComp.vue";


export default {
  name: 'App',
  components: {
    Header, Footer, SideMenu,
  },
}
</script>

<style>

</style>