import Vue from 'vue'
const install = function () {
    Vue.prototype.ajax = function (){
        console.log('ajax');
    };
    Vue.prototype.add = function (){
        console.log('add');
    };
};

export default{
    install
}