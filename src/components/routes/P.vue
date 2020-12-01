<template>
	<div class='route_container'>
	</div>
</template>

<script>
	import AjaxErrorHandler from '../../assets/js/errorHandler'
	import { baseUrl } from '@/utils/helpers'
	
	export default {
		name: 'P',
		methods: {
			redirect () {
				let id = this.$route.params.id

				this.axios
					.get(baseUrl + '/api/v1/post/' + id)
					.then((res) => {
						this.$router.push(
							`/thread/${res.data.Thread.slug}/${res.data.Thread.id}/${res.data.postNumber}`
						)
					})
					.catch(AjaxErrorHandler(this.$store))
			}
		},
		beforeRouteEnter (to, from, next) {
			next(vm => vm.redirect())
		}
	}
</script>