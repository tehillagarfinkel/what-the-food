<template>
  <div class="result">
    <div v-if="showLess">
      <div v-for="restaurant in restaurants.slice(0, 5)">
        <img :src="`${restaurant.image_url}`" />
        <h1>{{ restaurant.name }}</h1>
        <h4>Price: {{ restaurant.price }}</h4>
        <h5>Yelp Rating: {{ restaurant.rating }}</h5>
        <h5>Address: {{ restaurant.location.address1 }}</h5>
        <h5>Phone: {{ restaurant.phone }}</h5>
      </div>
    </div>
    <div v-else>
      <div v-for="restaurant in restaurants">
        <img :src="`${restaurant.image_url}`" />
        <h1>{{ restaurant.name }}</h1>
        <h4>Price: {{ restaurant.price }}</h4>
        <h5>Yelp Rating: {{ restaurant.rating }}</h5>
        <h5>Address: {{ restaurant.location.address1 }}</h5>
        <h5>Phone: {{ restaurant.phone }}</h5>
      </div>
    </div>

    <router-link to="Question">Not what you're looking for? Try again.</router-link>
    <button @click="showLess = false">See more results.</button>
  </div>
</template>

<style>
img {
  height: 300px;
  width: 300px;
}
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      restaurants: [],
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
    axios.get("/api/results/").then(response => {
      this.restaurants = response.data;
      console.log(response.data);
    });
  }
};
</script>
