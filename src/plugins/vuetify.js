import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'font-awesome/css/font-awesome.min.css' 
import Vue from "vue";
import Vuetify from "vuetify/lib";


Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: ['md','fa'],
      },
});
