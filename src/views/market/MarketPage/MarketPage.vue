<template>
<div class='b-exchanges-main'>
    <h1>
        Market Page
    </h1>
    <div class='b-exchanges-main__table'>
        {{ marketData }}
    </div>
</div>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { MarketApi } from '../../../api/market/MarketApi';
import { MarketType } from '../../../types/Markets';

@Component
export default class MarketPage extends Vue {
    marketData: MarketType | null = null;
    async getExchangesData() {
        const { data } = await MarketApi.fetchMarketData(this.$router.currentRoute.params.id);
        this.marketData = data.data;
    }
    created() {
        this.getExchangesData();
    }
}
</script>
<style lang='sass'>
</style>
