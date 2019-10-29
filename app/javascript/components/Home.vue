<template>
  <div class="Home">
    <img src="" alt="" />
    <input type="text" v-model="this.zip" />
    <router-link to="Question">WTF am I hungy for?!</router-link>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      zip: "Enter ZIP code"
    };
  }
};
</script>

<style scoped></style>
