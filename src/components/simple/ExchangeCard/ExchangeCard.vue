<template>
<tr class='b-table-row'>
    <td>
        {{ exchange.rank }}
    </td><td>
        {{ exchange.name }}
    </td><td class=''>
        <span>
            {{ exchange.tradingPairs }}
        </span>
    </td><td>
        <span>
            {{ exchange.volumeUsd ? getFixedNumber(exchange.volumeUsd) : '-' }}
        </span>
    </td><td>
        <span>
            {{ exchange.percentTotalVolume ? getFixedNumber(exchange.percentTotalVolume) : '-' }}
        </span>
    </td>
    <td>
        <router-link
            class='b-table-row__button'
            :to='exchangeUrl'>
            Show info
        </router-link>
    </td>
</tr>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { ExchangeType } from '../../../types/Exchanges';
import { ExchangePage } from '../../../views/exchange/ExchangePage/index';

@Component
export default class ExchangeCard extends Vue {
    @Prop({ type: Object, default: null }) readonly exchange!: ExchangeType;

    get exchangeUrl(): { name: string, params: { id: string } } {
        return {
            name: ExchangePage.name,
            params: {
                id: this.exchange.exchangeId,
            },
        };
    }
    getFixedNumber(value: string) {
        return parseFloat(value).toFixed(2);
    }
}
</script>

<style lang='sass'>
  .b-table-row
      margin: 5px 0
      &__button
        text-decoration: none
        color: #31c2a7
        font-weight: 500
</style>
