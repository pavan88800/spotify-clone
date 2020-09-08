import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';
const spotify = new SpotifyWebApi();

function App() {
	const [{ user, token }, dispatch] = useDataLayerValue();
	useEffect(() => {
		const hash = getTokenFromUrl();
		window.location.hash = '';

		const _token = hash.access_token;

		if (_token) {
			dispatch({
				type: 'SET_TOKEN',
				payload: _token,
			});
			spotify.setAccessToken(_token);
			spotify.getMe().then((user) => {
				dispatch({
					type: 'SET_USER',
					payload: user,
				});
				// let users = localStorage.getItem('user');
				// if (users) {
				// 	JSON.parse(users);
				// } else {
				// 	localStorage.setItem('user', JSON.stringify(user));
				// }
			});

			spotify.getUserPlaylists().then((playlists) => {
				dispatch({
					type: 'SET_PLAYLISTS',
					payload: playlists,
				});
				console.log(playlists);
			});

			spotify
				.getPlaylist('4nRDM69vmrfaqCKqi1aQmc')
				.then((res) => {
					dispatch({
						type: 'SET_DISCOVER_WEEKLY',
						payload: res,
					});

					console.log(res);
				})
				.catch((err) => console.log(err));
		}
	}, []);

	return (
		//
		<div className="app">{token ? <Player spotify={spotify} /> : <Login />}</div>
	);
}

export default App;
