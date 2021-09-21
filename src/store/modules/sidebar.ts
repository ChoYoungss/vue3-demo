const state = {
	opened: false,
	active: 1,
};

const mutations = {
	TOGGLE_SIDEBAR: (state: any) => {
		state.opened = !state.opened;
	},
};

const actions = {
	toggleSideBar(content: any) {
		content.commit("TOGGLE_SIDEBAR");
	},
};

export default {
	namespace: true,
	state,
	mutations,
	actions,
};
