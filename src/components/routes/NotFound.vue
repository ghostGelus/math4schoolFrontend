<template>
	<div class='route_container not_found'>
		<h1 class='not_found__title'>404 - страница не найдена</h1>

		<div class='not_found__box'>
			<p class='not_found__box--large_text'>
				Страница по адрецу <strong>{{$route.fullPath}}</strong> не найдена.
			</p>
			<p>
				<router-link to='/' class='button'>Нажмите на эту кнопку чтобы перейти на главную страницу</router-link>
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'NotFound',
	}
</script>

<style lang='scss' scoped>
	@import '../../assets/scss/variables.scss';
	@import '../../assets/scss/elementStyles.scss';

	.not_found {
		@at-root #{&}__title {
			font-family: $font--role-emphasis;
			font-size: 4rem;
			margin-top: 12rem;
			text-align: center;
		}

		@at-root #{&}__box {
			background-color: #fff;
			border-radius: 0.25rem;
			padding: 2rem;
			padding-top: 1rem;
			text-align: center;

			.button {
				margin-right: 0.5rem;
			}

			@at-root #{&}--large_text {
				font-size: 1.5rem;
			}
		}

		@at-root #{&}__search_box {
			display: inline-flex;
			margin-left: 0.5rem
		}
	}

	@media (max-width: 525px) {
		.not_found {
			@at-root #{&}__title {
				font-size: 2.5rem;
			}

			@at-root #{&}__box {
				word-wrap: break-word;

				p:nth-child(2) {
					display: flex;
					flex-direction: column;
					align-items: center;

					span {
						margin: 0.5rem 0;
					}
				}
			}
		}
	}
</style>
