import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
// import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#fda47e',
                secondary: '#f2efdb',
                accent: '#c78283',
                success: '#3d3737'
            }
        }
    }
});
