<template>
<transition :style='getTransitionStyle'
            name='spinner'>
    <div v-show='isActive'
         :style='getTransitionStyle'
         :class='getSpinnerClass'>
        <div
            :class='getSpinnerInnerClass'
            :style='getSpinnerInnerStyle'
            class='b-bouncing-loader'>
            <div v-for='(i, index) in 3'
                 :key='index'
                 :style='getCircleColor(i)'>
            </div>
        </div>
    </div>
</transition>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

  @Component
export default class SpinLoader extends Vue {
    @Prop(Boolean) readonly isActive!: boolean;
    @Prop({ type: Boolean, default: false }) readonly isAbsolute!: boolean;
    @Prop({ type: Boolean, default: false }) readonly addRelativeWrapper!: boolean;
    @Prop({ type: Boolean, default: false }) readonly smallPadding!: boolean;
    @Prop({ type: Number, default: 18 }) readonly size!: number;
    @Prop({ type: Number, default: 0 }) readonly delay!: number;
    @Prop({ type: Array, default: ['#F7D000', '#70b93f', '#EA2900'] }) readonly colors!: Array<string>;
    @Prop(String) readonly className!: string;

    get getTransitionStyle() {
        return {
            transitionDelay: this.isActive ? `${this.delay}s` : null,
            fontSize: `${this.size}px`,
        };
    }
    get getSpinnerInnerClass() {
        return [
            {
                'spinner-absolute': this.isAbsolute,
            },
            this.className,
        ];
    }
    get getSpinnerClass() {
        return {
            'b-spin-loader--small-padding': this.smallPadding,
            'b-bouncing-loader-wrapper': this.addRelativeWrapper,
        };
    }
    get getSpinnerInnerStyle() {
        return {
            bottom: this.isAbsoluteSpinnerWithOutWrapper ? 'auto' : '0',
        };
    }
    get isAbsoluteSpinnerWithOutWrapper() {
        return !this.addRelativeWrapper && this.isAbsolute;
    }

    getCircleColor(index: number) {
        return {
            backgroundColor: this.colors[index - 1],
        };
    }
};
</script>

<style lang='sass'>
  .spinner-enter-active
    transition: opacity .22s, transform .22s

  .spinner-leave-active
    transition: opacity 0s, transform 0s

  .spinner-enter
    opacity: 0
    transform: scale(0.8)

  .spinner-leave-to
    opacity: 0
    transform: scale(0.8)

  .spinner-absolute
    position: absolute
    left: 0
    right: 0
    text-align: center
    top: 0
    bottom: 0
    margin-left: auto
    margin-right: auto

  .b-bouncing-loader-wrapper
    position: relative
    height: 70px

  .b-bouncing-loader
    display: flex
    justify-content: center

    &:not(.spinner-absolute)
      padding-top: 20px

    & > div
      width: 1em
      height: 1em
      margin: 1em 0.3em 1em
      background: #70b93f
      border-radius: 50%
      animation: bouncing-loader 0.6s infinite alternate
      &:nth-child(2)
        animation-delay: 0.2s

      &:nth-child(3)
        animation-delay: 0.4s

  @keyframes bouncing-loader
    from
      opacity: 0.65
      transform: translateY(0)

    to
      opacity: 0.1
      transform: translateY(-0.9rem)
      @media(max-width: 767px)
        transform: translateY(-0.7rem)

  .b-spin-loader--small-padding
    .b-bouncing-loader
      display: flex
      justify-content: center

      & > div
        margin: 0.15rem 0.2rem
</style>

