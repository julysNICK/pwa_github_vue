<template>
  <div>
    <h1>GitHub App</h1>
    <GitHubTokenForm />
    <UserComponent />
    <ReposUser />
  </div>
</template>

<script>
import GitHubTokenForm from './components/GitHubTokenForm.vue';
import ReposUser from './components/Repos.vue';
import UserComponent from './components/User.vue';

export default {
  name: 'App',
  components: {
    GitHubTokenForm,
    ReposUser,
    UserComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
