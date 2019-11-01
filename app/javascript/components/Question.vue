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

    <router-link to="Question" v-if="counter < 20">
      Next Question...
    </router-link>
    <router-link to="Results" v-else>Show My Results</router-link>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      questionFormatId: "",
      counter: 1,
      query: "",
      answers: [],
      option: "",
      rangeValue: 3,
      searchFilterId: ""
    };
  },
  mounted: function() {
    this.loadQuestion();
    var counter = localStorage.getItem("counter");
    var zip = localStorage.getItem("zip");
    console.log(counter);
    console.log(zip);
    console.log(localStorage);
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
      // this.questionFormatId = 2;
    }
    // handleChange(e) {
    //   console.log(e.target.value, this.rangeValue);
    // }
  }
};
</script>
