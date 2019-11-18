<template>
  <div class="container result">
    <div class="logo text-center">Dinner is just a click away:</div>

    <div v-if="showLess">
      <div class="card mb-3" v-for="restaurant in restaurants.slice(0, 5)">
        <div class="row no-gutters">
          <div class="col-md-8">
            <img :src="`${restaurant.image_url}`" class="card-img crop" alt="..." />
          </div>
          <div class="col-md-3 text-center">
            <div class="card-body">
              <h5 class="card-title logo rest">{{ restaurant.name }}</h5>
              <div class="opensans">
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
      <div class="card mb-3" v-for="restaurant in restaurants.slice(0, 5)">
        <div class="row no-gutters">
          <div class="col-md-8">
            <img :src="`${restaurant.image_url}`" class="card-img crop" alt="..." />
          </div>
          <div class="col-md-3 text-center">
            <div class="card-body">
              <h5 class="card-title logo rest">{{ restaurant.name }}</h5>
              <div class="opensans">
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

    <router-link to="Question" class="btn btn-primary btn-dark logo">
      Not what you're looking for? Try again.
    </router-link>

    <button class="btn btn-primary btn-dark logo" @click="showLess = false">See more results</button>
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
