<template>
	<div id="home">
		<h1>Homepage</h1>
		<div id="projects" ref="projects" :key="dir">
			<ProjectDisplay
				class="project"
				description="Momenta was born from my winning project at STUYhacks 2020 (Stuyvesant hackathon). It was my first introduction into the borwser's location api's. Momenta then evolved to be a full fledged social media system, with friending, mmultiple pages, and a premium feature. The payment system that currently implemented was my introduction to stripe and it's apis."
				v-bind:url="[
                    '/img/momenta/homepage.png',
                    '/img/momenta/contact.png',
                    
                ]"
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
		};
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
