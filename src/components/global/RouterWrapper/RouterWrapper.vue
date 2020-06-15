<template>
<div class='b-route-wrapper'>
    <div class='b-main-panel-wrapper'>
        <AppHeader></AppHeader>
        <router-view></router-view>
    </div>
</div>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { AppHeader } from '../AppHeader/index';

@Component({
    components: {
        AppHeader,
    },
})
export default class RouterWrapper extends Vue {
}
</script>

<style lang='sass'>
.b-route-wrapper
    width: 100%
    min-height: 100vh
    position: relative
    display: flex

    &__back_arrow
        left: 100px
        top: 47px

.b-main-panel-wrapper
    width: 100%
    display: flex
    flex-direction: column
</style>
