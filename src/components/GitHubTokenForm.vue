<template>
  <form @submit.prevent="saveToken">
    <div>
      <label for="token">GitHub Token</label>
      <br />
      <input type="text" id="token" v-model="token" />
    </div>

    <div>
      <input type="submit" value="Save Token" />

      <button type="button" @click="resetToken">Reset Token</button>
    </div>

  </form>
</template>

<script>
export default {
  name: "GitHubTokenForm",
  data() {
    return {
      token: "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"
    };
  },

  beforeMount() {
    this.token = localStorage.getItem("github-token");
  },

  methods: {
    saveToken() {
      localStorage.setItem("github-token", this.token);
    },

    resetToken() {
      localStorage.removeItem("github-token");
      this.token = "";
    }
  }

}
</script>