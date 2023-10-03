
<template>
  <div>
    <h1>User info</h1>

    <ul>
      <li>
        <img id="avatar" :src="userData.avatar_url" />
      </li>

      <li>
        <strong>Username:</strong> {{ userData.login }}
      </li>

      <li>
        <strong>followers:</strong> {{ userData.followers }}
      </li>

      <li>
        <strong>plan:</strong> {{ userData.plan && userData.plan.name }}
      </li>
    </ul>
  </div>
</template>


<script>
import { octokitMixin } from '@/mixins/octokitMixin';
export default {
  name: "UserComponent",

  data() {
    return {
      userData: {}
    }
  },

  mixins: [octokitMixin],

  async mounted() {
    const octokit = this.createOctokitClient();

    const { data: userData } = await octokit.request('/user');

    this.userData = userData;

  },

  methods: {
    saveToken() { }
  },


}
</script>

<style scoped>
#avatar {
  width: 50px;
  height: 50px;
}
</style>
