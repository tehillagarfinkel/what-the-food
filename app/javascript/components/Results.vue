<template>
  <div class="container result">
    <div class="logo text-center">
      <h1>Everything you never knew you wanted:</h1>
    </div>
    <br />
    <br />

    <div v-if="showLess">
      <div class="card mb-3" v-for="restaurant in restaurants.slice(0, 5)">
        <div class="row no-gutters">
          <div class="col-md-8">
            <img :src="`${restaurant.image_url}`" class="card-img crop" alt="..." />
          </div>
          <div class="col-md-3 text-center">
            <div class="card-body">
              <h5 class="card-title logo rest">{{ restaurant.name }}</h5>
              <div class="opensans align-middle">
                <h5>Yelp Rating: {{ restaurant.rating }}</h5>
                <h5>Address: {{ restaurant.location.address1 }}</h5>
                <h5>Phone: {{ restaurant.phone }}</h5>
                <h5>Price: {{ restaurant.price }}</h5>
              </div>
            </div>
            <a :href="`${restaurant.url}`" class="btn btn-primary btn-dark logo">Order Now</a>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <div class="card mb-3" v-for="restaurant in restaurants">
        <div class="row no-gutters">
          <div class="col-md-8">
            <img :src="`${restaurant.image_url}`" class="card-img crop" alt="..." />
          </div>
          <div class="col-md-3 text-center">
            <div class="card-body">
              <h5 class="card-title logo rest">{{ restaurant.name }}</h5>
              <div class="opensans align-middle">
                <h5>Yelp Rating: {{ restaurant.rating }}</h5>
                <h5>Address: {{ restaurant.location.address1 }}</h5>
                <h5>Phone: {{ restaurant.phone }}</h5>
                <h5>Price: {{ restaurant.price }}</h5>
              </div>
            </div>
            <a :href="`${restaurant.url}`" class="btn btn-primary btn-dark logo">Order Now</a>
          </div>
        </div>
      </div>
    </div>

    <button class="btn btn-primary btn-dark logo btn-block" @click="showLess = false">See more results</button>

    <router-link to="Question" class="btn btn-primary btn-dark logo btn-block">
      Not what you're looking for? Try again.
    </router-link>
    <br />
    <br />
    <br />
    <br />
    <br />
    <footer class="logo">
      <p>Save your decision making for Netflix</p>
    </footer>
  </div>
</template>

<style>
img {
  height: 300px;
  width: 300px;
}

.rest {
  font-size: 2em;
  text-align: center;
}

.crop {
  width: 600px;
  height: 400px;
  object-fit: cover;
}

.opensans {
  font-family: "Open Sans", sans-serif;
}

.logo {
  font-family: "Permanent Marker", cursive;
}

p {
  font-size: 2em;
  text-align: center;
}
</style>

<script>
import axios from "axios";
export default {
  props: ["restaurants"],
  data: function() {
    return {
      // restaurants: [],
      restaurant: {},
      name: "",
      image_url: "",
      price: "",
      url: "",
      rating: "",
      phone: "",
      location: "",
      counter: 0,
      showLess: true,

      query: "",
      answers: [],
      option: "",
      searchFilterId: ""
    };
  },
  mounted: function() {
    console.log("RESULTS: ", this.restaurants);
    // axios.get("/api/results/").then(response => {
    //   this.restaurants = response.data;
    //   console.log(response.data);
    // });
  }
};
</script>
