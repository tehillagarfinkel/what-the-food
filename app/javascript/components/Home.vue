<template>
  <div class="Home">
    <div class="jumbotron text-center">
      <h1 class="display-4">What the Food?!</h1>
      <p class="lead">
        You're hungry. We're here to help.
      </p>
      <p>(Because decisions are hard.)</p>
      <hr class="my-4" />

      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Enter ZIP code"
          aria-describedby="button-addon2"
          v-model="zip"
        />
        <div class="input-group-append">
          <router-link to="Question">
            <button class="btn btn-outline-secondary" id="button-addon2" v-on:click="start()">
              WTF am I hungry for?!
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      zip: ""
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
