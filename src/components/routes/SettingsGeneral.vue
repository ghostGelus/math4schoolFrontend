<template>
	<div class='route_container'>
		<confirm-modal
			v-model='picture.showRemoveProfilePictureModal'
			@confirm='removeProfilePicture'
			color='red'
			text='Да, удалить'
		>
			Вы уверены, что хотите удалить фотографию в профиле?
		</confirm-modal>

		<modal-window
			v-model='picture.showProfilePictureModal'
			:loading='picture.loading'
			width='25rem'
			@input='hideProflePictureModal'
		>
			<div
				slot='main'
				class='profile_picture_modal'
				:class='{ "profile_picture_modal--picture.dragging": picture.dragging  }'
				@dragover='handleDragOver'
				@drkagend='picture.dragging = false'
				@drkgleave='picture.dragging = false'
				@drop='handleFileDrop'
			>
				<div class='h3'>Добавление изображение профиля</div>
				<p class='p--condensed'>
					Перетащите изображение или
					<label class='button profile_picture_modal__upload_button'>
						<input type='file' accept='image/*' @change='processImage($event.target.files[0])'>
						Загрузите файл
					</label>
				</p>
				<div class='profile_picture_modal__drag_area'>
					<span
						v-if='!picture.dataURL'
						class='profile_picture_modal__drag_area__icon'
						:class='{ "profile_picture_modal__drag_area__icon--picture.dragging": picture.dragging }' 
					>
						<font-awesome-icon :icon='["fa", "cloud-upload-alt"]' />
					</span>
					<div
						class='profile_picture_modal__drag_area__image picture_circle'
						:style='{ "background-image": "url(" + picture.dataURL + ")" }'
						v-else
					></div>
				</div>
			</div>
			<div class='profile_picture_modal__buttons' slot='footer'>
				<button
					class='button button--modal button--green'
					:class='{ "button--disabled": !picture.dataURL }'
					@click='uploadProfilePicture'
				>
					Загрузить изображение
				</button>
				<button class='button button--modal' @click='hideProflePictureModal'>Отмена</button>
			</div>
		</modal-window>

		<div class='h1'>Основные настройки</div>
		<div>
			<div class='h3'>Информация</div>
			<p class='p--condensed'>
				Напишите что-нибудь о себе
			</p>
			<fancy-textarea
				placeholder='About me description'
				v-model='description.value'
				:error='description.error'
				type='password'
			></fancy-textarea>
			<loading-button
				class='button button--green'
				:loading='description.loading'
				@click='saveDescription'
			>
				Сохранить описание
			</loading-button>
		</div>
		<div>
			<div class='h3'>Изображение профиля</div>
			<p class='p--condensed'>
				Это будет отображаться в вашем профиле
			</p>
			<p
				class='p--condensed profile_picture_preview picture_circle'
				:style='{ "background-image": "url(" + picture.current + ")" }'
				v-if='picture.current'
			></p>
			<button class='button' @click='picture.showProfilePictureModal = true'>
				{{picture.current ? "Изменить" : "Добавить" }} изображение профиля
			</button>
			<button
				v-if='picture.current'
				class='button'
				style='margin-left: 0.5rem;'
				@click='picture.showRemoveProfilePictureModal = true'
			>
				Удалить
			</button>
		</div>
	</div>
</template>

<script>
	import FancyTextarea from '../FancyTextarea'
	import LoadingButton from '../LoadingButton'
	import ModalWindow from '../ModalWindow'
	import ConfirmModal from '../ConfirmModal'

	import AjaxErrorHandler from '../../assets/js/errorHandler'
	import logger from '../../assets/js/logger'
	import { baseUrl } from '@/utils/helpers'

	export default {
		name: 'settingsGeneral',
		components: {
			FancyTextarea,
			LoadingButton,
			ModalWindow,
			ConfirmModal
		},
		data () {
			return {
				description: {
					value: '',
					loading: false,
					error: ''
				},

				picture: {
					current: null,
					showProfilePictureModal: false,
					showRemoveProfilePictureModal: false,
					dragging: false,
					dataURL: null,
					file: null,
					loading: false
				}
			}
		},
		computed: {},
		methods: {
			saveDescription () {
				this.description.error = ''
				this.description.loading = true

				this.axios
					.put(baseUrl + '/api/v1/user/' + this.$store.state.username, {
						description: this.description.value
					})
					.then(() => {
						this.description.loading = false
					})
					.catch(e => {
						this.description.loading = false

						AjaxErrorHandler(this.$store)(e, error => {
							this.description.error = error.message
						})
					})
			},
			uploadProfilePicture () {
				this.picture.loading = true

				let formData = new FormData()
				formData.append('picture', this.picture.file)

				this.axios
					.post(baseUrl + '/api/v1/user/' + this.$store.state.username + '/picture', formData, {
						headers: {
							'Content-Type': 'multipart/form-data'
						}
					})
					.then(res => {
						this.hideProflePictureModal()
						this.picture.current = res.data.picture
					})
					.catch(e => {
						this.picture.loading = false

						AjaxErrorHandler(this.$store)(e)
					})

			},
			removeProfilePicture () {
				this.axios
					.delete(baseUrl + '/api/v1/user/' + this.$store.state.username + '/picture')
					.then(() => {
						this.picture.current = null
					})
					.catch(AjaxErrorHandler(this.$store))
			},
			hideProflePictureModal () {
				this.picture.showProfilePictureModal = false
				
				//Wait for transition to complete
				setTimeout(() => {
					this.picture.dataURL = null
					this.picture.loading = false
				}, 200)
			},	
			handleDragOver (e) {
				e.preventDefault()
				this.picture.dragging = true
			},
			handleFileDrop (e) {
				e.preventDefault()
				this.picture.dragging = false
				
				if(e.dataTransfer && e.dataTransfer.items) {
					let file = e.dataTransfer.items[0]

					if(file.type.match('^image/')) {
						this.processImage(file.getAsFile())
					}
				}
			},
			processImage (file) {
				let reader = new FileReader()
				reader.readAsDataURL(file)

				this.picture.file = file

				reader.addEventListener('load', () => {
					this.picture.dataURL = reader.result
				})
			}
		},
		created () {
			this.$store.dispatch('setTitle', 'general settings')

			this.$nextTick(() => {
				this.axios
					.get(baseUrl + '/api/v1/user/' + this.$store.state.username)
					.then(res => {
						this.description.value = res.data.description || ''
						this.picture.current = res.data.picture
					})
					.catch(e => {
						AjaxErrorHandler(this.$store)(e)
					})
			})

			logger('settingsGeneral')
		}
	}
</script>

<style lang='scss' scoped>
	@import '../../assets/scss/variables.scss';

	.profile_picture_preview {
		height: 5rem;
		width: 5rem;
	}

	.profile_picture_modal {
		padding-top: 1rem;
		transition: all 0.2s;

		@at-root #{&}--picture .dragging {
			background-color: $color__lightgray--primary;
		}

		@at-root #{&}__overlay {
			@include loading-overlay(rgba(0, 0, 0, 0.5), 0.125rem);
		}

		@at-root #{&}__upload_button input[type="file"] {
			display: none;
		}

		@at-root #{&}__drag_area {
			padding: 1rem;
			text-align: center;

			@at-root #{&}__image {
				width: 5rem;
				height: 5rem;
				display: inline-block;
				margin-top: -1rem;
			}

			@at-root #{&}__icon {
				font-size: 6rem;
				color: $color__gray--darker;
				transition: all 0.2s;

				@at-root #{&}--picture.dragging {
					transform: translateY(-0.5rem) scale(1.1);
					color: $color__gray--darkest;
				}
			}
		}
	}

	@media (max-width: $breakpoint--tablet) {
		.h1 {
			display: none;
		}
	}
</style>