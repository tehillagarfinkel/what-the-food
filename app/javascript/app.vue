<template>
  <div id="app">
    <nav class="nav">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/login" class="nav-link">Login</router-link>
      <router-link to="/signup" class="nav-link">Signup</router-link>
    </nav>

    <p>{{ message }}</p>
    <router-view></router-view>
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
</style>
