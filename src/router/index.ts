import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import { ExchangesComponent } from '../components/common/ExchangesComponent/index';
import { MarketsComponent } from '../components/common/MarketsComponent/index';
import { ExchangePage } from '../views/exchange/ExchangePage/index';
import { MarketPage } from '../views/market/MarketPage/index';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/exchanges',
        alias: '/',
        name: 'ExchangesComponent',
        component: ExchangesComponent,
    },
    {
        path: `/exchanges/:id`,
        name: ExchangePage.name,
        component: ExchangePage,
    },
    {
        path: '/markets',
        name: 'ExchangesComponent',
        component: MarketsComponent,
    },
    {
        path: `/markets/:id`,
        name: MarketPage.name,
        component: MarketPage,
    },
];

const router = new VueRouter({
    routes,
});

export default router;
