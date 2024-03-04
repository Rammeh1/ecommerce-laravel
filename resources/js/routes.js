import Accueil from './components/accueil.vue';
import Viewarticles from "./components/articles/Viewarticles.vue"
//import Viewcategorie from "./components/categories/Viewcategorie.vue"
//import Addcategorie from "./components/categories/Addcategorie.vue"


export const routes = [
    {
        name: 'accueil',
        path: '/',
        component: Accueil
    },
   /* {
        name: "Viewcategorie",
        path: "/listcat",
        component: Viewcategorie
    },
    {
        name: "Addcategorie",
        path: "/addcategorie",
        component: Addcategorie
    },*/
    {
        name: "Viewarticles",
        path: "/listart",
        component: Viewarticles
    },
   /* {
        name: "Addarticle",
        path: "/addarticle",
        compponent: Addarticle
    }*/
];  