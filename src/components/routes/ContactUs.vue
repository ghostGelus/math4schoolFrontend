<template id="">
  <div id="contact" class="contact-form-section section-space--ptb_120">
    <div class="container">
      <div class="row">
        <div class="col-lg-7 order-2 order-lg-1">
          <div class="section-title text-left section-space--mb_60">
            <h2
              class="font-weight--bold mb-15 wow move-up"
              style="visibility: visible;"
            >
              Нужно больше информации?
            </h2>
            <span
              class="section-text_left wow move-up"
              style="visibility: visible;"
              >Свяжитесь с нами.</span
            >
          </div>
          <div
            class="contact-from-wrapper wow move-up"
            style="visibility: visible;"
          >
            <form
              id="contact-form"
              action="http://hasthemes.com/file/mail.php"
              method="post"
            >
              <div class="contact-page-form">
                <div class="contact-input">
                  <div class="contact-inner">
                    <input name="con_name" type="text" placeholder="Фамилия *" />
                  </div>
                  <div class="contact-inner">
                    <input name="con_name" type="text" placeholder="Имя *" />
                  </div>
                  <div class="contact-inner">
                    <input name="con_name" type="text" placeholder="Отчество" />
                  </div>
                  <div class="contact-inner">
                    <input
                      name="con_email"
                      type="Почта"
                      placeholder="Email *"
                    />
                  </div>
                </div>
                <div class="contact-inner">
                  <input
                    name="con_subject"
                    type="text"
                    placeholder="Тема *"
                  />
                </div>
                <div class="contact-inner contact-message">
                  <textarea
                    name="con_message"
                    placeholder="Содержание *"
                  ></textarea>
                </div>
                <div class="contact-submit-btn">
                  <button type="submit" class="ht-btn ht-btn-md">
                    Send message
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
                src="https://aeroland.vuedemo.hasthemes.com/img/aeroland-contact-form-image-01.ba77be66.png"
                alt="contact thumb"
                class="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style media="screen">

body{
    line-height:1.74;
    font-size:15px;
    font-style:normal;
    font-weight:400;
    visibility:visible;
    font-family:'Montserrat', Helvetica,Arial,sans-serif;
    color:#7e7e7e;
    position:relative;
    background-color:#fff
}
.contact-input{
    margin:0 -10px
}
.contact-input .contact-inner{
    float:left;
    margin:0 0 20px;
    padding:0 10px;
    width:50%
}
@media only screen and (max-width:575px){
    .contact-input .contact-inner{
        width:100%
    }
}
.contact-inner{
    margin:0 0 20px
}
.contact-inner input,.contact-inner textarea{
    color:#ababab;
    background-color:#f8f8f8;
    font-size:15px;
    font-weight:400;
    letter-spacing:0;
    border:none;
    width:100%;
    outline:none;
    border:1px solid #eee;
    border-radius:5px;
    padding:3px 20px;
    height:56px
}
.contact-inner textarea{
    height:150px;
    padding:15px
}

.section-space--ptb_120{
    padding-top:120px;
    padding-bottom:120px
}
@media only screen and (min-width:768px) and (max-width:991px){
    .section-space--ptb_120{
        padding-top:80px;
        padding-bottom:80px
    }
}
@media only screen and (max-width:767px){
    .section-space--ptb_120{
        padding-top:60px;
        padding-bottom:60px
    }
}
.section-space--pt_120{
    padding-top:120px
}
@media only screen and (min-width:768px) and (max-width:991px){
    .section-space--pt_120{
        padding-top:80px
    }
}
@media only screen and (max-width:767px){
    .section-space--pt_120{
        padding-top:60px
    }
}
.section-space--pb_120{
    padding-bottom:120px
}
@media only screen and (min-width:768px) and (max-width:991px){
    .section-space--pb_120{
        padding-bottom:80px
    }
}
@media only screen and (max-width:767px){
    .section-space--pb_120{
        padding-bottom:60px
    }
}
.section-space--ptb_100{
    padding-top:100px;
    padding-bottom:100px
}
@media only screen and (min-width:768px) and (max-width:991px){
    .section-space--ptb_100{
        padding-top:80px;
        padding-bottom:80px
    }
}
@media only screen and (max-width:767px){
    .section-space--ptb_100{
        padding-top:60px;
        padding-bottom:60px
    }
}
.section-space--pt_100{
    padding-top:100px
}
@media only screen and (min-width:768px) and (max-width:991px){
    .section-space--pt_100{
        padding-top:80px
    }
}
@media only screen and (max-width:767px){
    .section-space--pt_100{
        padding-top:60px
    }
}
.section-space--pb_100{
    padding-bottom:100px
}
@media only screen and (min-width:768px) and (max-width:991px){
    .section-space--pb_100{
        padding-bottom:80px
    }
}
@media only screen and (max-width:767px){
    .section-space--pb_100{
        padding-bottom:60px
    }
}
.section-space--ptb_90{
    padding-top:90px;
    padding-bottom:90px
}
@media only screen and (min-width:768px) and (max-width:991px){
    .section-space--ptb_90{
        padding-top:60px;
        padding-bottom:60px
    }
}
@media only screen and (max-width:767px){
    .section-space--ptb_90{
        padding-top:40px;
        padding-bottom:40px
    }
}
.section-space--pt_90{
    padding-top:90px
}
@media only screen and (min-width:768px) and (max-width:991px){
    .section-space--pt_90{
        padding-top:60px
    }
}
@media only screen and (max-width:767px){
    .section-space--pt_90{
        padding-top:40px
    }
}
.section-space--pb_90{
    padding-bottom:90px
}
@media only screen and (min-width:768px) and (max-width:991px){
    .section-space--pb_90{
        padding-bottom:60px
    }
}
@media only screen and (max-width:767px){
    .section-space--pb_90{
        padding-bottom:40px
    }
}
.section-space--ptb_70{
    padding-top:70px;
    padding-bottom:70px
}
@media only screen and (min-width:768px) and (max-width:991px){
    .section-space--ptb_70{
        padding-top:40px;
        padding-bottom:40px
    }
}
@media only screen and (max-width:767px){
    .section-space--ptb_70{
        padding-top:30px;
        padding-bottom:30px
    }
}
.section-space--pt_70{
    padding-top:70px
}
@media only screen and (min-width:768px) and (max-width:991px){
    .section-space--pt_70{
        padding-top:40px
    }
}
@media only screen and (max-width:767px){
    .section-space--pt_70{
        padding-top:30px
    }
}
.section-space--pb_70{
    padding-bottom:70px
}
@media only screen and (min-width:768px) and (max-width:991px){
    .section-space--pb_70{
        padding-bottom:40px
    }
}
@media only screen and (max-width:767px){
    .section-space--pb_70{
        padding-bottom:30px
    }
}
.section-space--ptb_60{
    padding-top:60px;
    padding-bottom:60px
}
@media only screen and (min-width:768px) and (max-width:991px){
    .section-space--ptb_60{
        padding-top:60px;
        padding-bottom:60px
    }
}
@media only screen and (max-width:767px){
    .section-space--ptb_60{
        padding-top:60px;
        padding-bottom:60px
    }
}
.section-space--pt_60{
    padding-top:60px
}
@media only screen and (min-width:768px) and (max-width:991px){
    .section-space--pt_60{
        padding-top:60px
    }
}
@media only screen and (max-width:767px){
    .section-space--pt_60{
        padding-top:60px
    }
}
.section-space--pb_60{
    padding-bottom:60px
}

.font-weight--bold{
    font-weight:500
}

body.no-overflow{
    overflow:hidden
}
h1,h2,h3,h4,h5,h6{
    color: #292b2c;
    font-family:Montserrat,Helvetica,Arial,sans-serif;
    font-weight:500;
    margin-top:0;
    margin-bottom:0;
    line-height:1.23
}
.h1,h1{
    font-size:56px
}
.mb-10{
    margin-bottom:10px
}
.mb-15{
    margin-bottom:15px
}
.mb-20{
    margin-bottom:20px
}
.mb-25{
    margin-bottom:25px
}
.mb-30{
    margin-bottom:30px
}
.mb-40{
    margin-bottom:40px
}
.mt-10{
    margin-top:10px
}
.mt-15{
    margin-top:15px
}
.mt-20{
    margin-top:20px
}
.mt-25{
    margin-top:25px
}
.mt-30{
    margin-top:30px
}
.mt-40{
    margin-top:40px
}
.mtn-30{
    margin-top:-30px
}
</style>
