<template>
  <div class="Home text-center">
    <img
      src="https://www.thoughtco.com/thmb/kvjQ3GOItmnivEhr0Hpx2X27h_A=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/Lol_interrobang-58bcad2e3df78c353c52e72c.png"
    />
    <h3 class="display-4 logo">What.The.Food?!</h3>
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

<style scoped>
.logo {
  font-family: "Permanent Marker", cursive;
  /*font-family: 'Fredericka the Great', cursive;*/
}
</style>
