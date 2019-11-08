<template>
  <div class="question">
    <h1>{{ query }}</h1>
    <div class="m/c" v-if="this.questionFormatId === 1 || 3">
      <form action="">
        <div v-for="option in answers">
          <input type="radio" name="answer" :value="option" :id="`${option}`" />
          {{ option.option }}
        </div>
      </form>
    </div>
    <div class="slider" v-if="questionFormatId === 2">
      <div>
        <input v-model="rangeValue" type="range" min="1" max="5" />
        <p>{{ answers[rangeValue - 1] }}</p>
      </div>
    </div>

    <div v-if="counter < 20">
      <button v-on:click="loadQuestion()">Next Question...</button>
    </div>
    <div v-if="counter >= 20">
      <router-link to="Results">Show My Results</router-link>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      questionFormatId: "",
      counter: 0,
      query: "",
      answers: [],
      option: "",
      rangeValue: 3,
      searchFilterId: ""
    };
  },
  mounted: function() {
    this.loadQuestion();
    var zip = localStorage.getItem("zip");
    console.log(zip);
    console.log(this.counter);
  },

  methods: {
    loadQuestion: function() {
      var params = {
        number: Math.floor(Math.random() * 96) + 1
      };
      axios.get("/api/questions/" + params["number"]).then(response => {
        this.query = response.data.query;
        this.answers = response.data.answers;
      });
      this.counter += 1;
      console.log(this.counter);
    }
  }
};
</script>
