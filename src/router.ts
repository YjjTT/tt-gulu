import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import SwitchDemo from "./components/SwitchDemo.vue";
import ButtonDemo from "./components/ButtonDemo.vue";
import DialogDemo from "./components/DialogDemo.vue";
import TabsDemo from "./components/TabsDemo.vue";
import InputDemo from "./components/InputDemo.vue";
import RadioDemo from "./components/RadioDemo.vue";

import { h } from 'vue';
import Markdown from './components/Markdown.vue';
import intro from './markdown/intro.md'
import getStarted from './markdown/get-started.md'
import install from './markdown/install.md'
import unfinished from './markdown/unfinished.md'
import blog from './markdown/blog.md'
import canvas from './markdown/canvas.md'
import potato from './markdown/potato.md'
import reactUi from './markdown/react-ui.md'

const history = createWebHashHistory();
const md = string => h(Markdown, { content: string, key: string })
export const router = createRouter({
    history: history,
    routes: [
        { path: "/", component: Home },
        {
            path: "/doc",
            component: Doc,
            children: [
                { path: "", redirect: '/doc/intro' },
                { path: "intro", component: md(intro) },
                { path: "get-started", component: md(getStarted) },
                { path: "install", component: md(install) },
                { path: "unfinished", component: md(unfinished) },
                { path: "blog", component: md(blog) },
                { path: "canvas", component: md(canvas) },
                { path: "potato", component: md(potato) },
                { path: "react-ui", component: md(reactUi) },
                { path: "switch", component: SwitchDemo },
                { path: "button", component: ButtonDemo },
                { path: "dialog", component: DialogDemo },
                { path: "tabs", component: TabsDemo },
                { path: "input", component: InputDemo },
                { path: "radio", component: RadioDemo },
            ],
        },
    ],
});
router.afterEach(() => {
    console.log("路由切换了");
});
