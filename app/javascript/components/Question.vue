<template>
  <div class="question">
    <div class="jumbotron text-center opaque" style="min-height: 500px;">
      <h1 class="logo sz2">Question {{ counter }}:</h1>
      <h1 class="lead sz3">
        {{ query }}
      </h1>

      <hr />

      <div class="options">
        <div class="m/c form-check opensans sz" v-if="this.questionFormatId === 1 || 3">
          <form action="">
            <div v-for="option in answers">
              <input
                class="form-check btn-block btn-light"
                type="button"
                :value="option.option"
                id="option-input"
                name="answer"
                for="option-input"
              />
              <br />

              <!-- <div class="form-check"> -->
              <!-- <input class="form-check-input" type="radio" name="answer" :value="option.id" id="option-input" />
                <label class="form-check-label" for="option-input">
                  {{ option.option }}
                </label> -->
              <!-- </div> -->
            </div>
          </form>
        </div>

        <form>
          <div class="form-group opensans sz" v-if="questionFormatId === 2">
            <label for="formControlRange">{{ option.option }}</label>
            <input v-model="rangeValue" min="1" max="5" type="range" class="form-control-range" id="formControlRange" />
            <p class="sz">{{ answers[rangeValue - 1] }}</p>
          </div>
        </form>
      </div>

      <hr />

      <div class="next">
        <div v-if="counter < 3">
          <button class="logo btn-lg" v-on:click="submit()">Next Question...</button>
        </div>
        <div class="logo btn-lg" v-if="counter >= 3">
          <button @click="sendSelectedAnswerIds()">Show My Results</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.opensans {
  font-family: "Open Sans", sans-serif;
}

.logo {
  font-family: "Permanent Marker", cursive;
}

.sz {
  font-size: 1.25em;
}

.sz2 {
  font-size: 4em;
}

.sz3 {
  font-size: 2em;
}
.options {
  padding-top: 20px;
  padding-bottom: 20px;
}

.next {
  padding-top: 15px;
}

.opaque {
  opacity: 0.9;
}
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      questionFormatId: "",
      counter: 0,
      query: "",
      answers: [],
      exclusions: [27, 33, 37, 38, 42, 49, 73],
      option: "",
      rangeValue: 3,
      searchFilterId: "",
      selectedAnswerIds: []
    };
  },
  mounted: function() {
    this.loadQuestion();
    var zip = localStorage.getItem("zip");
  },

  methods: {
    submit: function() {
      var ele = document.getElementsByName("answer");
      for (var i = 0; i < ele.length; i++) ele[i].checked = false;
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
      let number = Math.floor(Math.random() * 96) + 1;

      while (this.exclusions.includes(number)) {
        number = Math.floor(Math.random() * 96) + 1;
      }

      var params = {
        number: number
      };

      axios.get("/api/questions/" + params["number"]).then(response => {
        this.query = response.data.query;
        this.answers = response.data.answers;
      });
      this.counter += 1;
      this.exclusions.push(number);
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

      // var occurrences = {};
      // for (var i = 0, j = this.selectedAnswerIds.length; i < j; i++) {
      //   occurrences[this.selectedAnswerIds[i]] = (occurrences[this.selectedAnswerIds[i]] || 0) + 1;
      // }
      // console.log(occurrences);

      let params = {
        answerIds: this.selectedAnswerIds,
        location: localStorage.getItem("zip")
      };
      axios.post("/api/results", params).then(response => {
        console.log(response.data);
        this.$router.push({
          name: "results",
          params: { restaurants: response.data }
        });
      });
    }
  }
};
</script>
