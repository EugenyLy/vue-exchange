import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class ExchangeGlobalMixin extends Vue {
    requireImage(path: string): any {
        let image = null;
        try {
            image = require(`@/static/images/${path}`);
        } catch (e) {
            console.log(e);
        }
        return image;
    }
};
