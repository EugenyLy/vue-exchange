import axios from 'axios';
import WebApi from '../WebApi';

class MarketApi extends WebApi {
    async fetchMarketsData() {
        return axios.get(`${this.urlPrefix}/markets`);
    }
    async fetchMarketData(id: string) {
        return axios.get(`${this.urlPrefix}/markets`);
    }
}

const marketApio = new MarketApi();

export {
    marketApio as MarketApi,
};
