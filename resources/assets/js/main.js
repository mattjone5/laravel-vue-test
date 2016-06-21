var Vue = require('vue')

import Greeter from './components/Greeter.vue'
import Second from './components/Second.vue'

new Vue({
    el: '#app',

    components: { Greeter, Second },

    ready() {
        alert('Vue and Vueify all set to go!')
    }
});
