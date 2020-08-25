<template>
	<div>
		<div id="container" ref="container">
			<h4 id="text">{{ description }}</h4>
			<div id="display">
				<button v-if="url.length > 1" id="previous" @click="previmg">&lt;</button>
				<img :src="url[index]" />
				<button v-if="url.length > 1" id="next" @click="nextimg">&gt;</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "NavBar",
	props: ["reverse", "url", "description", "direction"],
	mounted() {
		// eslint-disable-next-line no-console
		console.log("The props are also available in JS:", this.url);
		let dir = this.direction;
		console.log("The props are also available in JS:", dir);
		console.log(this.url);
		if (dir == "row") {
			if (this.reverse == "true") {
				console.log("Reverse the css order");
				this.$refs.container.className = "row-reverse horizantal";
			} else if (this.reverse == "false") {
				console.log("Make the css order normal left to right");

				this.$refs.container.className = "row horizantal";
			}
		} else if (dir == "column") {
			this.$refs.container.className = "column";
		}

		this.curr_url = this.url[this.index];
	},
	data: function () {
		return {
			curr_url: "",
			index: 0,
		};
	},
	methods: {
		nextimg: function () {
			this.index += 1;
			if (this.index >= this.url.length) {
				this.index = 0;
			}
			//console.log(this.url[this.index]);
		},
		previmg: function () {
			this.index -= 1;
			if (this.index < 0) {
				this.index = this.url.length - 1;
			}

			//console.log(this.url[this.index]);
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#display {
	position: relative;
}

#previous {
	position: absolute;
	left: 7%;

	top: 50%;
}

#next {
	position: absolute;
	left: 78%;

	top: 50%;
}
#container {
	/* Setup Flexbox */
	display: -webkit-box;
	display: -moz-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;

	/* border: 1px solid black; */

	padding-right: 2%;
	padding-left: 2%;

	margin-bottom: 5px;
}

.horizantal {
	width: 100%;
	justify-content: space-around;
}

.horizantal img {
	/*width: 400px;*/
	height: 250px;
	margin-top: 4px;
}
.horizantal #text {
	width: 300px;
	margin-right: 25px;
	margin-left: 25px;
}
.row {
	flex-flow: row;
	-webkit-flex-flow: row;
}

.row-reverse {
	flex-flow: row-reverse;
	-webkit-flex-flow: row-reverse;
}

.column {
	width: 95%;
	flex-flow: column;
	-webkit-flex-flow: column;
}

.column img {
	width: 100%;
}

button {
	margin-top: auto;
	margin-bottom: auto;
	height: 20px;
}
</style>
