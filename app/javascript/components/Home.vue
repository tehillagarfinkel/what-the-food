<template>
  <div class="Home">
    <img src="" alt="" />
    <input type="text" v-model="zip" />
    <router-link to="Question">
      <button v-on:click="start()">WTF am I hungry for?!</button>
    </router-link>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      zip: "Enter ZIP code"
    };
  },
  methods: {
    start: function() {
      localStorage.setItem("counter", "hello");
      localStorage.setItem("zip", this.zip);
    }
  }
};
</script>

<style scoped></style>
