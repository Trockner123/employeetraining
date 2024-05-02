import { createWebHistory, createRouter } from "vue-router"
import HelloWorld from "./src/pages/dangerEverywherePage.vue"
import  test  from './src/pages/test.vue';
import defectsErrorAndDanger from "./src/pages/defectsErrosAndDangers.vue"
import addictiveSubstances from "./src/pages/addictiveSubstances.vue"
import effectsOfAlcohol from "/src/pages/effectOfAlcohol.vue"
import commutingAccident from "./src/pages/commutingAccident.vue";
import firstAidBook from "./src/pages/firstAidBook.vue";
import whatDoYouBelieve from "./src/pages/whatDoYouBelieve.vue";
import reportingObligation from "./src/pages/reportingObligation.vue";
const links = [
    {
        path: "/",
        name: "Home",
        component: HelloWorld,
    },
    {
        path: "/defects",
        name: "defects",
        component: defectsErrorAndDanger,
    },
    {
        path: "/addictiveSubstances",
        name: "addictiveSubstances",
        component: addictiveSubstances,
    },
    {
        path: "/effectsOfAlcohol",
        name: "effectsOfAlcohol",
        component: effectsOfAlcohol,
    },
    {
        path: "/commuting",
        name: "commutingAccident",
        component: commutingAccident,
    },
    {
        path: "/firstAid",
        name: "firstAid",
        component: firstAidBook,
    },
    {
        path: "/questioner",
        name: "questioner",
        component: whatDoYouBelieve,
    },
    {
        path: "/reporting",
        name: "reporting",
        component: reportingObligation,
    },


]


const router = createRouter({
    history: createWebHistory(),
    routes: links,
})

export default router
