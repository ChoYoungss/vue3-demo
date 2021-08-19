import { createApp } from "vue";
import App from "./App.vue";
import "normalize.css/normalize.css"; // A modern alternative to CSS resets
import "./style/common.css";
import router from "./router/index";
import store from "./store/index";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";

// 等宽字体
import "vfonts/FiraCode.css";

// icon组件
import vIcon from "./components/vIcon/index.vue";

createApp(App)
  .use(router)
  .use(store)
  .use(ElementPlus)
  .component("vIcon", vIcon)
  .mount("#app");
