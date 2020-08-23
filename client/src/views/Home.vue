<template>
	<div id="home">
		<h1>Homepage</h1>
		<div id="projects" ref="projects" :key="dir">
			<ProjectDisplay
				v-for="project in projects"
				v-bind:key="project._id"
				class="project"
				:description="project.description"
				:url="project.images"
				:reverse="get_boolean()"
				:direction="dir"
			/>

			<h3>Inspired by Fireship</h3>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import ProjectDisplay from "@/components/ProjectDisplay.vue";

let bool = true;

export default {
	name: "Home",
	components: { NavBar, ProjectDisplay },

	data: function () {
		return {
			dir: "row",
			get_boolean() {
				bool = !bool;
				return String(bool);
			},
			projects: [],
		};
	},
	async created() {
		const req = await fetch(window.BASE_URL + "/api/get_projects");
		const json = await req.json();
		console.log(json);
		this.projects = json;
	},
	mounted() {
		window.onload = () => {
			this.dir = window.innerWidth > 900 ? "row" : "column";
		};
		window.onresize = () => {
			this.dir = window.innerWidth > 900 ? "row" : "column";
		};
	},
};
</script>

<style scoped>
body {
	color: black;
}
h1 {
	text-align: center;
}
#projects {
	text-align: center;
}

.project {
	margin-left: auto;
	margin-right: auto;
	width: 50%;
}

@media only screen and (max-width: 1200px) {
	.project {
		width: 90%;
	}
}
</style>
