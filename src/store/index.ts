import { createStore } from "vuex";
import getters from "./getters";
import sidebar from "./modules/sidebar";

// Create a new store instance.
export default createStore({
	modules: {
		sidebar,
	},

	getters,
});
