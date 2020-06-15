<template>
<div id='app'>
    <RouterWrapper></RouterWrapper>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { RouterWrapper } from '@/components/global/RouterWrapper/index';

@Component({
    components: {
        RouterWrapper,
    },
})
export default class App extends Vue {}
</script>

<style>
  body {
    margin: 0;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

</style>
