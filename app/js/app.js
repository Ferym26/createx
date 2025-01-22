import Tabs from "bootstrap/js/dist/tab.js";
import Collapse from "bootstrap/js/dist/collapse.js";
import Modal from "bootstrap/js/dist/modal.js";

import { header } from "../components/header/header.js";
import { hero } from "../components/section-hero/section-hero.js";
import { youtube } from "../components/section-promo/section-promo.js";

document.addEventListener("DOMContentLoaded", () => {
  header();
  hero.init();
  youtube();
});
