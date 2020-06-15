import axios from 'axios';
import WebApi from '../WebApi';

class ExchangeApi extends WebApi {
    async fetchExchangesData() {
        return axios.get(`${this.urlPrefix}/exchanges`);
    }
    async fetchExchangeData(id: string) {
        return axios.get(`${this.urlPrefix}/exchanges/${id}`);
    }
}

const exchangeApi = new ExchangeApi();

export {
    exchangeApi as ExchangeApi,
};
