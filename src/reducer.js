export const initailstate = {
	user: null,
	playlists: [],
	playing: false,
	item: null,

	// TODO:REMOVE AFETR DEVELOPING
	// token:
	// 	'BQDxydZnwq0Xuu-_l4LrlqZXrU3Ht-imUuEgYoIPw-Im-Fgq4sFGmjJTjrzx4m__6ahg90ZOAwttntf0dNKCnMZqOEljwb7mNjr-rdRCk5msAM4IhBftm0Z0zZeeoG_JNctrty59R-s2p2j_y2tbx-GKM3tjjsgNlbnP8A_0uqAXKMBb',
};

const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case 'SET_USER':
			return {
				...state,
				user: action.payload,
			};
		case 'SET_TOKEN':
			return {
				...state,
				token: action.payload,
			};
		case 'SET_PLAYLISTS':
			return {
				...state,
				playlists: action.payload,
			};

		case 'SET_DISCOVER_WEEKLY':
			return {
				...state,
				discover_weekly: action.payload,
			};
		default: {
			return state;
		}
	}
};

export default reducer;
