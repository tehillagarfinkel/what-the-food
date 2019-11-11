<template>
  <div class="Home">
    <div class="jumbotron text-center">
      <h1 class="display-4">What the Food?!</h1>
      <p class="lead">
        You're hungry. We're here to help.
      </p>
      <p>(Because decisions are hard.)</p>
      <hr class="my-4" />
      <img src="" alt="" />
      <input type="text" v-model="zip" />
      <router-link to="Question">
        <button class="btn btn-primary btn" v-on:click="start()">WTF am I hungry for?!</button>
      </router-link>
    </div>
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
      localStorage.setItem("counter", 0);
      localStorage.setItem("zip", this.zip);
    }
  }
};
</script>

<style scoped></style>
