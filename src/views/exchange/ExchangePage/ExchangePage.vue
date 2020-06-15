<template>
<div class='b-exchanges-main'>
    <h1>
        Exchange page
    </h1>
    <div class='b-exchanges-main__table'>
        {{ exchangeData }}
    </div>
</div>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { ExchangeApi } from '../../../api/exchange/ExchangeApi';
import { ExchangeType } from '../../../types/Exchanges';

@Component
export default class ExchangePage extends Vue {
    exchangeData: ExchangeType | null = null;
    async getExchangeData() {
        const { data } = await ExchangeApi.fetchExchangeData(this.$router.currentRoute.params.id);
        this.exchangeData = data.data;
    }
    created() {
        this.getExchangeData();
    }
}
</script>
<style lang='sass'>

</style>
