<template>
<tr class='b-table-row'>
    <td>
        {{ market.rank }}
    </td><td>
        {{ market.exchangeId }}
    </td><td>
        {{ market.baseSymbol }}
    </td><td>
        <span>
            {{ getFixedNumber(market.priceUsd) }}
        </span>
    </td><td>
        {{ getFixedNumber(market.priceQuote) }}
    </td><td>
        <span>
            {{ getFixedNumber(market.volumeUsd24Hr) }}
        </span>
    </td><td>
        <router-link
            class='b-table-row__button'
            :to='marketUrl'>
            Show info
        </router-link>
    </td>
</tr>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { MarketType } from '../../../types/Markets';
import { MarketPage } from '../../../views/market/MarketPage/index';

@Component
export default class MarketCard extends Vue {
    @Prop({ type: Object, default: null }) readonly market!: MarketType;

    get marketUrl(): { name: string, params: { id: string } } {
        return {
            name: MarketPage.name,
            params: {
                id: this.market.baseId,
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
