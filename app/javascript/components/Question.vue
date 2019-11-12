<template>
  <div class="question">
    <div class="jumbotron text-center">
      <h3 class="lead">
        {{ query }}
      </h3>
      <hr class="my-4" />
      <div class="m/c form-check" v-if="this.questionFormatId === 1 || 3">
        <form action="">
          <div v-for="option in answers">
            <input class="form-check-input" type="radio" name="answer" :value="option.id" id="option-input" />
            <label class="form-check-label" for="option-input">
              {{ option.option }}
            </label>
          </div>
        </form>
      </div>

      <form>
        <div class="form-group" v-if="questionFormatId === 2">
          <label for="formControlRange">Example Range input</label>
          <input v-model="rangeValue" min="1" max="5" type="range" class="form-control-range" id="formControlRange" />
          <p>{{ answers[rangeValue - 1] }}</p>
        </div>
      </form>

      <hr />
      <div v-if="counter < 3">
        <button v-on:click="submit()">Next Question...</button>
      </div>
      <div v-if="counter >= 3">
        <!-- <router-link to="Results"> -->
        <button @click="sendSelectedAnswerIds()">Show My Results</button>
        <!-- </router-link> -->
      </div>
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
      searchFilterId: "",
      selectedAnswerIds: []
    };
  },
  mounted: function() {
    this.loadQuestion();
    var zip = localStorage.getItem("zip");
    console.log(zip);
    console.log(this.counter);
  },

  methods: {
    submit: function() {
      let id;
      if (this.questionFormatId === 2) {
        const answer = this.answers[this.rangeValue - 1];
        id = answer.id;
      } else {
        const input = document.querySelector("#option-input");
        id = input.value;
      }
      this.selectedAnswerIds.push(id);
      console.log(this.selectedAnswerIds);
      this.loadQuestion();
    },
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
    },
    sendSelectedAnswerIds: function() {
      let id;
      if (this.questionFormatId === 2) {
        const answer = this.answers[this.rangeValue - 1];
        id = answer.id;
      } else {
        const input = document.querySelector("#option-input");
        id = input.value;
      }
      this.selectedAnswerIds.push(id);
      console.log(this.selectedAnswerIds);
      var occurrences = {};
      for (var i = 0, j = this.selectedAnswerIds.length; i < j; i++) {
        occurrences[this.selectedAnswerIds[i]] = (occurrences[this.selectedAnswerIds[i]] || 0) + 1;
      }
      console.log(occurrences);
      window.location.href = "/#/results";
      let params = { searchFilterIds: this.selectedAnswerIds };
      axios.post("/#/results").then(response => console.log(response.data));
    }
  }
};
</script>
