// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start();
require("@rails/activestorage").start();
require("channels");
require("turbolinks");

import Vue from "vue/dist/vue.esm";
import App from "../app.vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Login from "../components/Login";
import Signup from "../components/Signup";
import Home from "../components/Home";
import Question from "../components/Question";

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/signup", component: Signup },
  { path: "/question", component: Question }
];

const router = new VueRouter({ routes });

document.addEventListener("DOMContentLoaded", () => {
  const app = new Vue({
    router,
    el: "#vue-app",
    template: `<App />`,
    components: { App }
  });
});

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
