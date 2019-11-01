<template>
  <div class="Home">
    <img src="" alt="" />
    <input type="text" v-model="zip" />
    <router-link v-on:click="start()" to="Question">WTF am I hungy for?!</router-link>
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
