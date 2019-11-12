<template>
  <div id="app">
    <nav class="nav">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/login" class="nav-link">Login</router-link>
      <router-link to="/signup" class="nav-link">Signup</router-link>
    </nav>

    <body class="bg">
      <router-view></router-view>
    </body>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      message: "What The Food?!"
    };
  }
};
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}

body,
html {
  height: 100%;
}
.bg {
  background-image: url("https://images.unsplash.com/photo-1550949987-33f716ccc232?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2808&q=80");
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
