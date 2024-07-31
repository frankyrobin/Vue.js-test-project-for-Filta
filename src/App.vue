<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/exercise1">Exercise 1</router-link> |
      <router-link to="/exercise2">Exercise 2</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
  color: #333;
}

nav {
  padding: 20px;
  background-color: #333;
  text-align: center;
}

nav a {
  margin: 0 15px;
  text-decoration: none;
  color: #fff;
  font-weight: 500;
}

nav a.router-link-exact-active {
  font-weight: 700;
}

#app {
  max-width: 1800px;
  margin: 0 auto;
  padding: 20px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
