import Vue from 'vue';


Vue.filter('currency', (value) => {
    if (typeof value !== "number") {
        return value;
    }

    value = "₹ " + value.toFixed(2)
    return value;
})