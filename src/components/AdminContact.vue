<template>
  <div class="admin_contacts" ref="scrollElement">
    <h1 class="admin_contacts__header">Обратная связь</h1>
    <div class="category_widget__text">
      <div data-v-668dbf35="">
        <div class="h3 h3--margin_top">
          ФИО пользователя
        </div>
        <p class="p--condensed">
          {{ contact.lastname }}
          <br />
          {{ contact.name }}
          <br />
          {{ contact.patronym }}
        </p>
        <div class="h3 h3--margin_top">
          Почта пользователя
        </div>
        <p class="p--condensed">
          {{ contact.email }}
        </p>
        <div class="h3 h3--margin_top">
          Сообщение
        </div>
        <p class="p--condensed">
          {{ contact.message }}
        </p>
        <div class="h3 h3--margin_top">
          Дата отправки
        </div>
        <p class="p--condensed">
          {{ contact.createdAt }}
        </p>
      </div>
    </div>
	<button
              @click.stop.prevent="$router.go(-1)"
              class="button group_create"
            >Назад</button>
  </div>
</template>

<script>
import throttle from "lodash.throttle";
import AjaxErrorHandler from "../assets/js/errorHandler";
import { baseUrl } from '@/utils/helpers'

export default {
  name: "AdminUsers",
  components: {},
  data() {
    return {
      search: "",
      contact: [],

      loading: true
    };
  },
  methods: {
    fetchData() {
      let url = baseUrl + `/api/v1/contact/${this.$route.params.id}`;

      this.loading = true;
      this.axios
        .get(url)
        .then(res => {
          this.contact.push(...res.data);
          console.log(res.data);
          this.loading = /*loading =*/ false;

          //If returned data is less than the limit
          //then there must be no more pages to paginate
          console.log(this.contact);
          if (res.data.length < this.limit) {
            this.offset = null;
          } else {
            this.offset += this.limit;
          }
        })
        .catch(e => {
          AjaxErrorHandler(this.$store)(e);
          this.loading = /*loading =*/ false;
        });
    },
    resetFetchData() {
      this.offset = 0;
      this.contact = [];

      this.fetchData();
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.fetchData();
    next();
  },
  created() {
    this.axios
      .get(baseUrl + `/api/v1/contact/${this.$route.params.id}`)
      .then(res => (this.contact = res.data))
      .catch(e => {
        let invalidId = e.response.data.errors.find(error => {
          return error.name === "accountDoesNotExist";
        });

        if (invalidId) {
          this.$store.commit("set404Page", true);
        } else {
          AjaxErrorHandler(this.$store)(e);
        }
      });
  },
  mounted () {
    this.$store.dispatch('setTitle', 'Панель администратора');
  },
  watch: {
    tableSort: "resetFetchData",
    roleSelected: "resetFetchData",
    search: throttle(function() {
      this.resetFetchData();
    }, 200)
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

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
