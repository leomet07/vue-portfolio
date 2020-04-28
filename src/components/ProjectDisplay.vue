<template>
    <div>
        <div id="container" ref="container">
            <h3>First</h3>
            <h3>Second</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: "NavBar",
    props: ["reverse"],
    mounted() {
        // eslint-disable-next-line no-console
        console.log("The props are also available in JS:", this.reverse);

        if (this.reverse == "true") {
            console.log("Reverse the css order");
            this.$refs.container.style["flex-flow"] = "row-reverse";
            this.$refs.container.style["-webkit-flex-flow"] = "row-reverse";
        } else if (this.reverse == "false") {
            console.log("Make the css order normal left to right");
            this.$refs.container.style["flex-flow"] = "row";
            this.$refs.container.style["-webkit-flex-flow"] = "row";
        }
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#container {
    /* Setup Flexbox */
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    justify-content: space-between;

    /* Reverse Column Order */

    max-width: 200px;

    border: 1px solid black;

    padding-right: 1%;
    padding-left: 1%;
}
</style>
