<template>
    <div id="home">
        <h1>Homepage</h1>
        <div id="projects" ref="projects" :key="dir">
            <ProjectDisplay
                class="project"
                description="This very website
            you're now watching. I wanted something fast and with good SEO for
            my portfolio, so a static website generator like Gatsby seemed like
            the best fit. It reads data from markdown files, so it's super easy
            for me to keep adding Portfolio items as I keep developing stuff. It
            also has a cool dark mode switch since I couldn't decide between a
            dark or light design."
                v-bind:url="[
                    '/img/logo.png',
                    'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/s75-c-fbw=1/photo.jpg',
                ]"
                :reverse="get_boolean()"
                :direction="dir"
            />
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

    data: function() {
        return {
            test: "true",
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
            console.log(this.dir);
        };
        window.onresize = () => {
            this.dir = window.innerWidth > 900 ? "row" : "column";
            console.log(this.dir);
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
    width: 70%;
}

@media only screen and (max-width: 1200px) {
    .project {
        width: 90%;
    }
}
</style>
