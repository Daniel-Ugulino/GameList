<template>
  <header>
    <img :src="require(`@/assets/imgs/gamelist.png`)" width="80" />
    <h2>Game List</h2>
  </header>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/create">Create</router-link>
  </nav>
</template>
    
<script>
// @ is an alias to /src
/* eslint-disable */
export default {
  name: 'navbar',
  components: {
  },
}
</script>
 
<style>
nav {
  margin: 0;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 1.1rem;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>