
<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view /> -->
  <Header />
  <Sidebar />
  <Body />
  
</template>

<script>
import Header from "./components/Header"
import Body from './components/Body'
import Sidebar from './components/Sidebar'





export default {
  components: {
    Header,
    Sidebar,
    Body,
    


  },
};
</script>
<style lang="scss" scoped>
@import "./style/header.css";
@import "./style/style.css";
@import "./style/sidebar.css";
@import "/style/footer.css";
</style>
