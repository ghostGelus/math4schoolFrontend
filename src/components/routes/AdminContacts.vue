<template>
	<div class='admin_contacts' ref='scrollElement'>
		<h1 class='admin_contacts__header'>Обратная связь</h1>
		<scroll-load
			class='category_widget__box'
			@loadNext='fetchData'
			:loading='loading'
			query-selector='.admin_contacts'
			:padding-bottom='100'
		>
			<table>

				<tr>
					<th>
						Имя
					</th>
					<th>
						Фамилия
					</th>
					<th>
						Отчество
					</th>
					<th>
						Время отправки
					</th>
					<th>
						Просмотр
					</th>
					<th>
						Удаление
					</th>
				</tr>
				<tr v-for='contact in contacts' :key='"contact-row" + contact.username'>

					<td class='admin_contacts__contact_column'>
						{{contact.name | shortenContent}}
					</td>
					<td>{{contact.lastname | shortenContent}}</td>
					<td>{{contact.patronym | shortenContent}}</td>
					<td>{{contact.createdAt | formatDate}}</td>
					<td><router-link :to="'/admin/contacts/' + contact.id" class="button group_create">
						Открыть
						</router-link>
					</td>
					<td><form @submit.prevent='deleteContact(contact.id)'>
						<loading-button :loading='loading'>Удалить</loading-button>
						</form>
					</td>
				</tr>
			</table>

			<transition name='fade' mode='out-in'>
				<loading-message key='loading' v-if='loading'></loading-message>
				<div class='overlay_message' v-if='!loading && !contacts.length'>
					Ничего не найдено
				</div>
			</transition>
		</scroll-load>
	</div>
</template>

<script>
	import LoadingMessage from '../LoadingMessage';
	import ScrollLoad from '../ScrollLoad';
	import LoadingButton from '../LoadingButton';

	import throttle from 'lodash.throttle';
	import AjaxErrorHandler from '../../assets/js/errorHandler';

	export default {
		name: 'AdminUsers',
		components: {
			LoadingMessage,
			ScrollLoad,
			LoadingButton
		},
		data () {
			return {
				search: '',
				contacts: [],

				loading: true,
				offset: 0,
				showMessage: false,
				limit: 15,

				roleOptions: [
					{ name: 'Admins', value: 'admin' },
					{ name: 'Users', value: 'user' }
				],
				roleSelected: ['admin', 'user'],

				tableSort: {
					column: 'username',
					sort: 'desc'
				}
			}
		},
		methods: {
			fetchData () {
				if(this.offset === null) return;

				let url = `http://localhost:3000/api/v1/contact?
					&order=${this.tableSort.sort}
					&offset=${this.offset}
				`;

				this.loading = true;
				this.axios
					.get(url)
					.then(res => {
						this.contacts.push(...res.data);
						this.loading = /*loading =*/ false;

						//If returned data is less than the limit
						//then there must be no more pages to paginate
						if(res.data.length < this.limit) {
							this.offset = null;
						} else {
							this.offset+= this.limit;
						}
					})
					.catch(e => {
						AjaxErrorHandler(this.$store)(e);
						this.loading = /*loading =*/ false;
					});
			},
			deleteContact (contactId) {
				this.loading = true;
				this.axios
					.post(`/api/v1/contact/delete/${contactId}`)
					.then(() => {
						this.contacts = this.contacts.filter(
          contact => contact.id !== contactId
		);
		this.loading = false;
					})
					.catch(e => {
						this.loading = false
						AjaxErrorHandler(this.$store)(e)
					})

			},
			resetFetchData () {
				this.offset = 0;
				this.contacts = [];
				this.fetchData();
			}
		},
		mounted () {
			this.fetchData();
		},
		watch: {
			tableSort: 'resetFetchData',
			roleSelected: 'resetFetchData',
			search: throttle(function () {
				this.resetFetchData();
			}, 200)
		}
	}
</script>

<style lang='scss' scoped>
	@import '../../assets/scss/variables.scss';

	.admin_contacts {
		padding: 1rem 2rem;

		@at-root #{&}__header {
			margin: 0.5rem 0 1rem 0;
		}

		@at-root #{&}__filters {
			margin-bottom: 0.5rem;

			.select_filter {
				margin-right: 0.5rem;
			}
		}

		table {
			border-collapse: collapse;
			width: 100%;

			th {
				border-bottom: 0.125rem solid $color__gray--darker;
				padding: 0.5rem 0.75rem;
				text-align: left;
			}

			tr {
				cursor: default;

				&:first-child {
					background-color: #fff;
				}
				&:nth-child(odd) {
					background-color: lighten($color__gray--primary, 20%);
				}
				&:nth-child(even) {
					background-color: $color__gray--primary;
				}
			}

			td {
				padding: 0.75rem;
			}
		}
		@at-root #{&}__user_column {
			display: flex;
			align-items: center;

			a {
				margin: 0 0.25rem;
			}
		}

		.overlay_message {
			padding-top: 2rem;
			padding-bottom: 1rem;
		}
	}
</style>
