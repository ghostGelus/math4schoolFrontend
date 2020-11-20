<template>
  <div id="app">
    <nav
      class="navbar header-area text-white navbar-light navbar-expand-xl is-sticky"
    >
      <div class="container-fluid container-fluid--cp-150">
        <a
          href="/branding"
          class="navbar-brand navbar-brand logo-light"
          target="_self"
          ><img src="/img/light-logo.d076693f.png" alt="logo"
        /></a>
        <div
          href="/"
          style="    padding: 30px 15px;"
          class="navbar-brand navbar-brand logo-dark"
        >
          Математика с Факультетом безопасности
        </div>
        <div
          id="nav_collapse"
          class="default-nav justify-content-center navbar-collapse "
          style="display: none;"
        ></div>
      </div>
    </nav>
    <div class="main-container">
      <!---->
      <div
        id="home"
        class="payment-hero__slider bg-cover"
        style="background-image: url('https://i.imgur.com/HeF1LrN.jpg');"
      >
        <div
          class="fill-height"
          style="justify-contet:center; text-align:center"
        >
          <div class="slider-text text-center">
            <h1>ГОТОВИМ К ЕГЭ НА 85+ БАЛЛОВ</h1>
            <p>Помогаем улучшить оценки и подготовиться к ЕГЭ</p>
          </div>
        </div>
      </div>
      <div id="about" class=" section-space--pb_60"></div>
      <div class="container">
        <div
          class="section-title-wrapper text-center section-space--mb_60 wow move-up .font__family-montserrat"
          style="visibility: visible;"
        >
          <h2 class="section-title mb-15">НАШИ ПРЕИМУЩЕСТВА</h2>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="icon-process-wrapper">
              <div
                class="icon-process-single wow move-up"
                style="visibility: visible;"
              >
                <div class="icon-process-single__line">
                  <div class="dot dot-1"></div>
                  <div class="dot dot-2"></div>
                  <div class="dot dot-3"></div>
                  <div class="dot dot-4"></div>
                  <div class="dot dot-5"></div>
                  <div class="dot dot-4"></div>
                  <div class="dot dot-3"></div>
                  <div class="dot dot-2"></div>
                  <div class="dot dot-1"></div>
                </div>
                <div class="icon-process-single__content-wrap">
                  <div class="icon-process-single__media">
                    <font-awesome-icon :icon="['fa', 'fire']" />
                  </div>
                  <h5 class="icon-process-single__title">Направления</h5>
                  <div class="icon-process-single__text">
                    Работаем в направлениях как базовой, так и профильной
                    математики.
                  </div>
                </div>
              </div>
              <div
                class="icon-process-single wow move-up"
                style="visibility: visible;"
              >
                <div class="icon-process-single__line">
                  <div class="dot dot-1"></div>
                  <div class="dot dot-2"></div>
                  <div class="dot dot-3"></div>
                  <div class="dot dot-4"></div>
                  <div class="dot dot-5"></div>
                  <div class="dot dot-4"></div>
                  <div class="dot dot-3"></div>
                  <div class="dot dot-2"></div>
                  <div class="dot dot-1"></div>
                </div>
                <div class="icon-process-single__content-wrap">
                  <div class="icon-process-single__media">
                    <font-awesome-icon :icon="['fa', 'users']" />
                  </div>
                  <h5 class="icon-process-single__title">
                    Уникальный электронный ресурс
                  </h5>
                  <div class="icon-process-single__text">
                    При обучении используется уникальный электронный курс,
                    разработанный нашей командой. Каждое задание в нём
                    генерируется индивидуально, что гарантирует отсутствие
                    повторяющихся данных при изучении материала – Вам не
                    придётся решать множество скучных однообразных примеров.
                  </div>
                </div>
              </div>
              <div
                class="icon-process-single wow move-up"
                style="visibility: visible;"
              >
                <div class="icon-process-single__line">
                  <div class="dot dot-1"></div>
                  <div class="dot dot-2"></div>
                  <div class="dot dot-3"></div>
                  <div class="dot dot-4"></div>
                  <div class="dot dot-5"></div>
                  <div class="dot dot-4"></div>
                  <div class="dot dot-3"></div>
                  <div class="dot dot-2"></div>
                  <div class="dot dot-1"></div>
                </div>
                <div class="icon-process-single__content-wrap">
                  <div class="icon-process-single__media">
                    <font-awesome-icon :icon="['fa', 'chart-line']" />
                  </div>
                  <h5 class="icon-process-single__title">Обратная связь</h5>
                  <div class="icon-process-single__text">
                    Все задания оснащены гибкой системой интеллектуальной
                    обратной связи, имитирующей общение с преподавателем, что
                    позволяет Вам получать подробные отзывы на каждый введённый
                    ответ, верный или неверный, подобно тому, как это происходит
                    во время занятий с репетитором. Это обеспечивает более
                    тщательную подготовку к экзаменам и, что также важно,
                    углубляет понимание предмета в общем.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="faq"
        class="software-accordion-wrapper section-space--pb_60 gray-gradient"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div
                class="section-title-wrapper text-center section-space--mb_30"
              >
                <h2
                  class="section-title font-weight--light mb-10 wow move-up"
                  style="visibility: visible;"
                >
                  Вопросы и ответы
                </h2>
                <span
                  class="section-text wow move-up"
                  style="visibility: visible;"
                  >Мы рады ответить на любые ваши вопросы</span
                >
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="faq-wrapper">
                <div
                  class="accordion-faq wow move-up"
                  style="visibility: visible;"
                >
                  <vue-faq-accordion :contents="contents"></vue-faq-accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="saas-feature section-space--ptb_90 bg-gray gray-gradient"
        id="service"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title text-center section-space--mb_60">
                <h2
                  class="font-weight--light mb-15 wow move-up"
                  style="visibility: visible;"
                >
                  Награды
                </h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div
              class="col-lg-4 col-md-6 wow move-up"
              style="visibility: visible;"
            >
              <div class="service-grid">
                <div class="ht-service-box--one style-03">
                  <a href="/" class="">
                    <div class="image__media">
                      <img
                        src="https://i.imgur.com/9iCLsPq.png"
                        class="img-fluid"
                      />
                    </div>
                    <div class="content">
                      <h6 class="heading">Конкурс "Умник"</h6>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              class="col-lg-4 col-md-6 wow move-up"
              style="visibility: visible;"
            >
              <div class="service-grid">
                <div class="ht-service-box--one style-03">
                  <a href="/" class="">
                    <div class="image__media">
                      <img
                        src="https://i.imgur.com/9iCLsPq.png"
                        class="img-fluid"
                      />
                    </div>
                    <div class="content">
                      <h6 class="heading">
                        Фонд В. Потанина «Математика в тишине»
                      </h6>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              class="col-lg-4 col-md-6 wow move-up"
              style="visibility: visible;"
            >
              <div class="service-grid">
                <div class="ht-service-box--one style-03">
                  <a href="/" class="">
                    <div class="image__media">
                      <img
                        src="https://i.imgur.com/9iCLsPq.png"
                        class="img-fluid"
                      />
                    </div>
                    <div class="content">
                      <h6 class="heading">Конкурс "Мой первый Startup"</h6>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" class="contact-form-section section-space--ptb_60">
        <div class="container">
          <div class="row">
            <div class="col-lg-7 order-2 order-lg-1">
              <div class="section-title text-left section-space--mb_60">
                <h2
                  class="font-weight--bold mb-15 wow move-up"
                  style="visibility: visible;"
                >
                  Есть вопросы?
                </h2>
                <span
                  class="section-text_left wow move-up"
                  style="visibility: visible;"
                  >Свяжитесь с нами</span
                >
              </div>
              <div
                class="contact-from-wrapper wow move-up"
                style="visibility: visible;"
              >
                <form
                  id="contact-form"
                  method="post"
                  @submit.prevent="postContact"
                >
                  <div class="contact-page-form">
                    <div class="contact-input">
                      <div class="contact-inner">
                        <input
                          v-model="contact.lastname"
                          name="con_name"
                          type="text"
                          placeholder="Фамилия *"
                          maxlength="100"
                        />
                      </div>
                      <div class="contact-inner">
                        <input
                          v-model="contact.name"
                          name="con_name"
                          type="text"
                          placeholder="Имя *"
                          maxlength="100"
                        />
                      </div>
                      <div class="contact-inner">
                        <input
                          v-model="contact.patronym"
                          name="con_name"
                          type="text"
                          placeholder="Отчество *"
                          maxlength="100"
                        />
                      </div>
                      <div class="contact-inner">
                        <input
                          v-model="contact.email"
                          name="con_email"
                          type="email"
                          placeholder="Электронная почта *"
                          maxlength="100"
                        />
                      </div>
                    </div>
                    <div class="contact-inner contact-message">
                      <textarea
                        v-model="contact.message"
                        name="con_message"
                        placeholder="Сообщение *"
                        maxlength="800"
                      ></textarea>
                    </div>
                    <div class="contact-submit-btn">
                      <button type="submit" class="ht-btn ht-btn-md">
                        Отправить сообщение
                      </button>
                      <p class="form-messege"></p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-5 order-1 order-lg-2">
              <div class="peatures_image-wrap section-space--mb_40">
                <div
                  class="image text-center wow move-up"
                  style="visibility: visible;"
                >
                  <img
                    src="https://i.imgur.com/QwAPA0s.png"
                    alt="contact thumb"
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="testimonial"
        class="testimonial-slider-area section-space--ptb_60 bg-gray"
      >
        <div class="container">
          <div class="section-title text-center section-space--mb_60">
            <h2
              class="section-title font-weight--light wow move-up"
              style="visibility: visible;"
            >
              Наша команда
            </h2>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="testimonial-slider">
                <div class="swiper-container testimonial-slider__container">
                  <vue-agile :options="options2">
                    <div
                      v-for="author in authors"
                      :key="author.name"
                      @click="$refs.thumbnails.goTo(index)"
                    >
                      <div
                        class="swiper-slide swiper-slide-active"
                        data-swiper-slide-index="0"
                        style=" margin-right: 30px;"
                      >
                        <div
                          class="grid-item wow move-up"
                          style="visibility: visible;"
                        >
                          <div class="ht-team-member text-center">
                            <div class="ht-team-member--inner">
                              <div class="team-image">
                                <img
                                  :src="author.image"
                                  alt="avatar 01"
                                  class="img-developers"
                                />
                              </div>
                              <div class="team-info text-center">
                                <h5 class="name">{{ author.name }}</h5>
                                <div class="position">
                                  {{ author.description }}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </vue-agile>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-area-wrapper reveal-footer default-bg ">
        <div class="footer-area  section-space--pt_120 section-space--pb_40">
          <div class="container">
            <div class="row footer-widget-wrapper">
              <div class="col-lg-12">
                <div class="app-showcase_footer text-center">
                  <h3 class="heading text-white">
                    Собери свою формулу знаний — получи высокий балл!
                  </h3>
                  <h6 class="sub-title text-white">
                    Высокие результаты, профессиональная команда, индивидуальный
                    подход.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="footer-copyright-area section-space--pt_60 section-space--pb_120"
        >
          <div class="container">
            <div class="row aling-items-center">
              <div class="col-md-12">
                <div class="horizontal-list text-center">
                  <ul>
                    <li>Томск, Красноармейская 146 УЛК</li>
                    <li>kdv@keva.tusur.ru</li>
                  </ul>
                  <ul>
                    <li>© 2020 ТУСУР</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueFaqAccordion from "../VueFaqAccordion";
import { VueAgile } from "vue-agile";

export default {
  mounted() {
    window.scrollTo(0, 0);
  },
  components: {
    VueFaqAccordion,
    VueAgile
  },
  data() {
    return {
      contact: { name: "", lastname: "", patronym: "", email: "", message: "" },
      options2: {
        autoplay: true,
        dots: false,
        navButtons: false,
        slidesToShow: 1,
        responsive: [
          {
            breakpoint: 1000,
            settings: {
              navButtons: false,
              dots: true,
              slidesToShow: 4
            }
          }
        ]
      },
      authors: [
        {
          name: "Дмитрий Кручинин",
          description: "Руководитель",
          image: "https://i.imgur.com/Oj90YWZ.png"
        },
        {
          name: "Анастасия Кравцова",
          description: "Руководитель",
          image: "https://i.imgur.com/AMkZcXP.png"
        },
        {
          name: "Екатерина Грохотова",
          description: "Разработчик",
          image: "https://i.imgur.com/QiQYCTj.png"
        },
        {
          name: "Вадим Полюга",
          description: "Разработчик",
          image: "https://i.imgur.com/6IaGSJW.png"
        },
        {
          name: "Данияр Нугманов",
          description: "Разработчик",
          image: "https://i.imgur.com/PkVWpoi.png"
        },
        {
          name: "Кюнней Васильева",
          description: "Разработчик",
          image: "https://i.imgur.com/pSyj7Ah.png"
        },
        {
          name: "Андрей Репкин",
          description: "Разработчик",
          image: "https://i.imgur.com/WBCYaTe.png"
        },
        {
          name: "Наталья Репьюк",
          description: "Разработчик",
          image: "https://i.imgur.com/az0XK5Z.png"
        },
        {
          name: "Александра Жаргалова",
          description: "Разработчик",
          image: "https://i.imgur.com/BFabOJy.png"
        },
        {
          name: "Владимир Морозов",
          description: "Разработчик",
          image: "https://i.imgur.com/XXNdyQU.png"
        }
      ]
    };
  },
  methods: {
    postContact() {
      if (
        !this.contact.name ||
        !this.contact.lastname ||
        !this.contact.patronym ||
        !this.contact.email ||
        !this.contact.message
      ) {
        this.$toast.warning("Заполните все поля!");
        return;
      }
      if (
        this.contact.name > 100 ||
        this.contact.lastname > 100 ||
        this.contact.patronym > 100 ||
        this.contact.email > 100 ||
        this.contact.message > 800
      ) {
        this.$toast.warning("Слишком большое количество символов!");
        return;
      }
      let postParams = {
        name: this.contact.name,
        lastname: this.contact.lastname,
        patronym: this.contact.patronym,
        email: this.contact.email,
        message: this.contact.message
      };
      this.axios
        .post("/api/v1/contact", postParams)
        .then(
          (this.contact.name = ""),
          (this.contact.lastname = ""),
          (this.contact.patronym = ""),
          (this.contact.email = ""),
          (this.contact.message = ""),
          this.$toast.success("Контактная форма отправлена. Ожидайте ответ!")
        );
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/scss/home.scss";
</style>
