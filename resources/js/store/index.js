import { createStore } from 'vuex'
import Articlestore from './module/articleFeauture.js'
import createPersistedState from 'vuex-persistedstate';
export default createStore({
    modules: {
        Articlestore
    },
    plugins: [createPersistedState()],
})