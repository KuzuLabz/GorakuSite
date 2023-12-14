import { defineLoader } from "vitepress"
import { Octokit } from "@octokit/rest"
import type { GetResponseDataTypeFromEndpointMethod } from "@octokit/types"

const octokit = new Octokit()

type GitHubRelease = GetResponseDataTypeFromEndpointMethod<typeof octokit.repos.getLatestRelease>

export interface AppRelease {
	main: GitHubRelease
}

declare const data: AppRelease
export { data }

export default defineLoader({
	async load(): Promise<AppRelease> {
		const {data: main} = await octokit.repos.getLatestRelease({
			owner: "kuzulabz",
			repo: "goraku-site",
		})
		console.log('data:', main.author)
		return {main} 
	},
})