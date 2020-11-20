<template>
	<div id='app'>
		<router-view></router-view>
	</div>
</template>

<style lang='scss'>
	// @import url('https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700');
	@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
	// @import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
	@import './assets/scss/variables.scss';
	@import './assets/scss/elementStyles.scss';
	@import './assets/scss/nprogress.scss';
	@import './assets/css/bootstrap.css';

	html, body {
		font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Montserrat, "Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    // font-family: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;

		color: $color__text--primary;
		@include text;
	}

	* {
		box-sizing: border-box;
	}

	.route_container {
		width: 80%;
		max-width: 1250px;
		margin: 0 auto;
		margin-top: 2rem;
		padding-bottom: 2rem;
	}

	#app {
		height: 100%;
	}
	a {
		text-decoration: none
	}

</style>
