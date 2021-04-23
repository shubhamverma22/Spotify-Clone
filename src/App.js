import React, { useEffect, useState } from "react";
import { getTokenFromResponse } from "./spotify";
import "./App.css";
import Login from "./components/Login";
import Player from "./components/Player";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
	const [token, setToken] = useState(null);
	const [{ user }, dispatch] = useDataLayerValue();
	//Run code based on a given condition
	useEffect(() => {
		const hash = getTokenFromResponse();
		window.location.hash = "";
		const _token = hash.access_token;
		if (_token) {
			setToken(_token);

			spotify.setAccessToken(_token);
			spotify.getMe().then((user) => {
				dispatch({
					type: "SET_USER",
					user: user,
				});
			});
		}
		console.log("I have token -->", token);
	}, []);

	console.log("User is:-", user);

	return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;
