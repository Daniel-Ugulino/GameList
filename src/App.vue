<template>
    <Navbar></Navbar>
    <router-view />
</template>

<script>
import Navbar from "./components/navbar.vue";
export default {
  name: 'CreateView',
  data: () => ({
    //
  }),
  components: { Navbar }
}</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #2c3e50;
}
</style>
