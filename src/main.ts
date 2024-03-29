import "./assets/main.scss";

import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

import VueGtag from "vue-gtag";
import { MotionPlugin } from "@vueuse/motion";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faEnvelope,
  faPhone,
  faHouse,
  faScrewdriver,
  faDesktop,
  faGlobe,
  faLanguage,
  faCodePullRequest,
  faCode,
  faArrowUp,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faVuejs,
  faReact,
  faAngular,
} from "@fortawesome/free-brands-svg-icons";
import { createHead } from "@vueuse/head";

library.add(
  faEnvelope,
  faGithub,
  faLinkedin,
  faPhone,
  faHouse,
  faScrewdriver,
  faDesktop,
  faGlobe,
  faLanguage,
  faCodePullRequest,
  faCode,
  faBars,
  faVuejs,
  faReact,
  faAngular,
  faArrowUp
);

const app = createApp(App);

app.use(MotionPlugin);
app.use(router);
app.use(createHead());

if (import.meta.env.VITE_ENV === "production") {
  app.use(VueGtag, {
    appName: "My Portefolio",
    pageTrackerScreenviewEnabled: true,
    config: { id: import.meta.env.VITE_MEASUREMENT_ID },
  });
}

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
