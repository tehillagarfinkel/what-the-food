<template>
  <div class="Home text-center">
    <img
      src="https://www.thoughtco.com/thmb/kvjQ3GOItmnivEhr0Hpx2X27h_A=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/Lol_interrobang-58bcad2e3df78c353c52e72c.png"
    />
    <h3 class="display-4 logo">What.The.Food?!</h3>
    <h4 class="opensans">
      You're hungry. We're here to help.
    </h4>
    <hr />

    <div class="input-group mb-3 opensans">
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

.opensans {
  font-family: "Open Sans", sans-serif;
}
</style>
