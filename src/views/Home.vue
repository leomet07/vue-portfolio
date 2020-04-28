<template>
    <div>
        <h1>Homepage</h1>
        <div id="projects" ref="projects">
            <ProjectDisplay class="project" :reverse="get_boolean()" />
            <ProjectDisplay class="project" :reverse="get_boolean()" />
            <ProjectDisplay class="project" :reverse="get_boolean()" />
        </div>

        <p>test</p>
        <p>test</p>
    </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import ProjectDisplay from "@/components/ProjectDisplay.vue";

let bool = false;

export default {
    name: "Home",
    components: { NavBar, ProjectDisplay },
    mounted() {},
    data: function() {
        return {
            test: "true",
            get_boolean() {
                bool = !bool;
                return String(bool);
            },
        };
    },
};
</script>

<style scoped>
body {
    color: black;
}
</style>
