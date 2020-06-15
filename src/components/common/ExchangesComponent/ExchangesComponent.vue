<template>
<div class='b-exchanges-main'>
    <h1>
        Exchanges
    </h1>
    <SpinLoader
        v-if='loading'
        :colors='["#27dbbd", "#27DBBD", "#27DBBD"]'
        class='h-flex-center loader'
        :isActive='loading'
        className='h-p-20'>
    </SpinLoader>
    <div v-else class='b-exchanges-main__table'>
        <table>
            <thead>
                <tr>
                    <th>
                        Rank
                    </th><th>
                        Name
                    </th><th>
                        Trading Pairs
                    </th><th>
                        Volume (24Hr)
                    </th><th>
                        Total  (%)
                    </th><th>
                    </th>
                </tr>
            </thead><tbody>
                <ExchangeCard
                    v-for='(exchange, index) in exchangesData'
                    :key='index'
                    :exchange='exchange'>
                </ExchangeCard>
            </tbody>
        </table>
    </div>
</div>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { ExchangeApi } from '../../../api/exchange/ExchangeApi';
import { ExchangeType } from '../../../types/Exchanges';
import { ExchangeCard } from '../../simple/ExchangeCard/index';
import { SpinLoader } from '../../simple/SpinLoader/index';

@Component({
    components: {
        ExchangeCard,
        SpinLoader,
    },
})
export default class ExchangesComponent extends Vue {
    exchangesData: Array<ExchangeType> | null = null;
    loading: boolean = true;
    async getExchangesData() {
        const { data } = await ExchangeApi.fetchExchangesData();
        this.exchangesData = data.data;
        this.loading = false;
    }
    created() {
        this.getExchangesData();
    }
}
</script>
<style lang='sass'>
  .b-exchanges-main
    &__table
      width: 100%
      display: flex
      flex-flow: row nowrap
      justify-content: center
      align-items: center
      table
        width: 90%
        background: #fff
        margin: 1em 0
        border: 1px solid rgba(34,36,38,.15)
        -webkit-box-shadow: none
        box-shadow: none
        border-radius: .28571429rem
        text-align: left
        color: rgba(0,0,0,.87)
        border-collapse: separate
        border-spacing: 1em 1em
</style>
