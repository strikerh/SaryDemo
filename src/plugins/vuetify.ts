import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    rtl: false,
/*    icons: {
        iconfont: 'mdi' , // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    },*/
    theme: {
        dark: false,
        options: { customProperties: true },
        themes: {
            dark: {
                primary: '#d5185a',
                accent: '#FF4081',
                secondary: '#ffe18d',
                success: '#4CAF50',
                info: '#2196F3',
                warning: '#FB8C00',
                error: '#FF5252',
            },
            light: {
                primary: '#00cdbd',
                accent: '#e91e63',
                secondary: '#30b1dc',
                success: '#4CAF50',
                info: '#2196F3',
                warning: '#FB8C00',
                error: '#ae351c',
            },
        },
    },
});
