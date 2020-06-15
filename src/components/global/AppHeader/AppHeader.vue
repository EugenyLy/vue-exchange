<template>
<div class='b-app-header__wrapper'>
    <div class='b-app-header__inner'>
        <router-link
            to='/'
            class='b-app-header__logo-wrapper
            b-app-header__aside-part'>
            <img :src='requireImage("logo.png")'>
        </router-link>
        <router-link
            to='/exchanges'
            class='b-app-header__inner--link'>
            Exchanges
        </router-link>
        <router-link
            to='/markets'
            class='b-app-header__inner--link'>
            Markets
        </router-link>
    </div>
</div>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class AppHeader extends Vue {
}
</script>

<style lang='sass'>
.b-app-header
  &__wrapper
    height: 70px
  &__logo-wrapper
    position: absolute
    left: 20px
    img
      width: 40px
  &__inner
    height: 100%
    display: flex
    flex-flow: row nowrap
    justify-content: center
    align-items: center
    &--link
      min-width: 150px
      text-decoration: none
      color: #2c3e50
      margin: 0 20px
.router-link-active
  color: #31c2a7
  font-weight: 500
  font-size: 18px
</style>
