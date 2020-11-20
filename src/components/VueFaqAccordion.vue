<template>
  <v-row justify="center">
    <v-expansion-panels accordion>
      <v-expansion-panel>
        <v-expansion-panel-header>Чем мы лучше других?</v-expansion-panel-header>
        <v-expansion-panel-content >
          Наше преимущество в том, что вся команда работает целенаправленно по направлениям базовая и профильная математика. Мы прикладываем все усилия, чтобы Вы остались довольны полученным результатом. Также мы используем уникальный электронный курс, составленный нашими разработчиками специально для подготовки наших абитуриентов к сдаче ЕГЭ.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-expansion-panels accordion>
      <v-expansion-panel>
        <v-expansion-panel-header>Есть ли поддержка преподавателей?</v-expansion-panel-header>
        <v-expansion-panel-content>
          В любой момент можно задать преподавателю любые вопросы касательно домашней работы, пройденного материала или поступления в ВУЗ – Ваш преподаватель всегда рядом и готов оказать любую необходимую помощь.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>
<style lang="scss">
.v-expansion-panel {
  border-radius: 10px;
      box-shadow: 0 15px 50px rgba(89,69,230,.12);
}
.v-expansion-panel-header {
  transition: all .4s ease-in-out;
  border: none;
    text-align: left;
    padding: 20px 30px;
    position: relative;
    overflow-wrap: break-word;
    white-space: normal;
    font-size: 18px;
    font-weight: 500;
    background: #fff;
    cursor: pointer;
}
.v-expansion-panel-header--active {
  height: 54px;
}
.v-expansion-panel-content {
  color: #7E7E7E;
  text-align: left;
}
.v-expansion-panel-content__wrap {
}
.v-expansion-panel-header__icon {
  content-visibility: hidden;
}
.v-expansion-panel:before {
    border-radius: inherit;
    bottom: 0;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
     top: 0;
     z-index: -1;
      transition: box-shadow .28s cubic-bezier(.4,0,.2,1);
       will-change: box-shadow;
        box-shadow: none;
}
.v-item-group {
  &:focus{
    outline:gray;
  }
}

</style>
