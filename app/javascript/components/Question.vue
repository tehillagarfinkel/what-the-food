<template>
  <div class="question">
    <h1>{{ query }}</h1>
    <div class="m/c" v-if="this.questionFormatId === 1 || 3">
      <form action="">
        <div v-for="option in options">
          <input type="radio" name="answer" :value="option" :id="`${option}`" />
          {{ option }}
        </div>
      </form>
    </div>
    <div class="slider" v-if="questionFormatId === 2">
      <div>
        <input v-model="rangeValue" type="range" min="1" max="5" />
        <p>{{ options[rangeValue - 1] }}</p>
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
export default {
  data: function() {
    return {
      questionFormatId: 3,
      counter: 1,
      query: "What is your name?",
      options: ["Adam", "Tehilla", "Kayla", "Tom", "Dan"],
      option: "",
      rangeValue: 3
    };
  },
  mounted: function() {
    loadQuestion();
  },
  methods: {
    loadQuestion: function() {
      // gather data from backend about randomly chosen question
      this.questionFormatId = 2;
    },
    handleChange(e) {
      console.log(e.target.value, this.rangeValue);
    }
  }
};
</script>
