<template>
  <div id="app" class="bg">
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light static-top mb-5 shadow opaque">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/login" class="nav-link">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/signup" class="nav-link">Signup</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Page Content -->
    <div class="container opaque">
      <div class="card border-0 shadow my-5">
        <div class="card-body p-5">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      message: "What The Food?!"
    };
  }
};
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
.bg {
  background: url("https://images.unsplash.com/photo-1550949987-33f716ccc232?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2808&q=80")
    no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
  min-height: 900px;
}

.opaque {
  opacity: 0.9;
}
</style>
