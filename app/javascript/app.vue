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
              <a class="nav-link" data-toggle="modal" data-target="#loginModal">
                Login
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="modal" data-target="#signUpModal">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Modals ------------------------------------------------------------------------>

    <!-- SIGN UP ---------->
    <div
      class="modal fade"
      id="signUpModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="signUpModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="signUpModalLabel">Sign Up</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="signup">
              <div class="container">
                <form v-on:submit.prevent="submit()">
                  <h1>Signup</h1>
                  <ul>
                    <li class="text-danger" v-for="error in errors">{{ error }}</li>
                  </ul>
                  <div class="form-group">
                    <label>Name:</label>
                    <input type="text" class="form-control" v-model="name" />
                  </div>
                  <div class="form-group">
                    <label>Email:</label>
                    <input type="email" class="form-control" v-model="email" />
                  </div>
                  <div class="form-group">
                    <label>Password:</label>
                    <input type="password" class="form-control" v-model="password" />
                  </div>
                  <div class="form-group">
                    <label>Password confirmation:</label>
                    <input type="password" class="form-control" v-model="passwordConfirmation" />
                  </div>
                  <input type="submit" class="btn btn-primary" value="Submit" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- LOGIN ---------->

    <div
      class="modal fade"
      id="loginModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="loginModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="loginModalLabel">Login Info</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="login">
              <div class="container">
                <form v-on:submit.prevent="submit()">
                  <h1>Login</h1>
                  <ul>
                    <li class="text-danger" v-for="error in errors">{{ error }}</li>
                  </ul>
                  <div class="form-group">
                    <label>Email:</label>
                    <input type="email" class="form-control" v-model="email" />
                  </div>
                  <div class="form-group">
                    <label>Password:</label>
                    <input type="password" class="form-control" v-model="password" />
                  </div>
                  <input type="submit" class="btn btn-primary" value="Submit" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Page Content -->
    <div class="container opaque">
      <div class="card border-0 shadow my-5">
        <div class="card-body p-5">
          <router-view></router-view>
        </div>
      </div>
    </div>

    <footer></footer>
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
