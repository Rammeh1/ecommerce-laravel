import Accueil from './components/accueil.vue';
import ViewArticles from "./components/articles/ViewArticles.vue"
import AddArticle from "./components/articles/AddArticle.vue"
//import Viewcategorie from "./components/categories/Viewcategorie.vue"
//import Addcategorie from "./components/categories/Addcategorie.vue"


export const routes = [
    {
        name: 'accueil',
        path: '/',
        component: Accueil
    },
    {
        name: "ViewArticles",
        path: "/listart",
        component: ViewArticles
    },
    {
        name: "AddArticle",
        path: "/AddArticle",
        component: AddArticle
    }
    /* ,{
         name: "Viewcategorie",
         path: "/listcat",
         component: Viewcategorie
     },
     {
         name: "Addcategorie",
         path: "/addcategorie",
         component: Addcategorie
     },*/
];  