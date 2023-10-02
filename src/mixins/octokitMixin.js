import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";

export const octokitMixin = {
  methods: {
    createOctokitClient() {
      return new Octokit({
        auth: process.env.VUE_APP_GITHUB_TOKEN
      });
    }
  }
}