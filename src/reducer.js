export const initialState = {
	user: null,
	playlist: [],
	playing: false,
	item: null,
	token:
		"BQBjgcTIJ-odBh1F3KL07sG-jnIDLBWHP_LdOZ_j9xDpvnAS0Q1zqCMIvsDJSb5XJwnB4ULx4RI8UCLOu__nYy1-j4UHDlCy886nsqX9QlXOBPfC15wlepeG-JPujCfgcZvjwCo5Col70DMYPAA5FdEhf-Lnasnhf8TQF_SKL434FL4V_eoI",
};

const reducer = (state, action) => {
	console.log(action);

	//Action -> type, [payload]
	switch (action.type) {
		case "SET_USER":
			return {
				...state,
				user: action.user,
			};

		case "SET_TOKEN":
			return {
				...state,
				token: action.token,
			};
		default:
			return state;
	}
};

export default reducer;
