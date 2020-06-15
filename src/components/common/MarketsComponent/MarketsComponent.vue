<template>
<div class='b-markets-main'>
    <h1>
        Markets
    </h1>
    <SpinLoader
        v-if='loading'
        :colors='["#27dbbd", "#27DBBD", "#27DBBD"]'
        class='h-flex-center loader'
        :isActive='loading'
        className='h-p-20'>
    </SpinLoader>
    <div v-else class='b-markets-main__table'>
        <table class='selectable single line sortable unstackable table'>
            <thead class=''>
                <tr>
                    <th colspan='1'>
                        Rank
                    </th><th colspan='1'>
                        Exchange id
                    </th><th colspan='1'>
                        Name
                    </th><th colspan='1'>
                        Price
                    </th><th colspan='1'>
                        Price Quote
                    </th><th colspan='1'>
                        Volume (24Hr)
                    </th>
                </tr>
            </thead><tbody>
                <MarketCard
                    v-for='(market, index) in marketsData'
                    :key='index'
                    :market='market'>
                </MarketCard>
            </tbody>
        </table>
    </div>
</div>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { MarketApi } from '../../../api/market/MarketApi';
import { MarketType } from '../../../types/Markets';
import { MarketCard } from '../../simple/MarketCard/index';
import { SpinLoader } from '../../simple/SpinLoader/index';

@Component({
    components: {
        MarketCard,
        SpinLoader,
    },
})
export default class MarketsComponent extends Vue {
    marketsData: Array<MarketType> | null = null;
    loading: boolean = true;
    async getMarketsData() {
        const { data } = await MarketApi.fetchMarketsData();
        this.marketsData = data.data;
        this.loading = false;
    }
    created() {
        this.getMarketsData();
    }
}
</script>
<style lang='sass'>
  .b-markets-main
    &__table
      width: 100%
      display: flex
      flex-flow: row nowrap
      justify-content: center
      align-items: center
      table
        border-collapse: separate
        border-spacing: 1em 1em
        width: 90%
        background: #fff
        margin: 1em 0
        border: 1px solid rgba(34,36,38,.15)
        -webkit-box-shadow: none
        box-shadow: none
        border-radius: .28571429rem
        text-align: left
        color: rgba(0,0,0,.87)
</style>
