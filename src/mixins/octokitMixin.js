import { Octokit } from '@octokit/rest';

export const octokitMixin = {
  methods: {
    createOctokitClient() {
      return new Octokit({
        auth: process.env.VUE_APP_GITHUB_TOKEN
      });
    }
  }
}