import React from 'react';
import './player.css';
import SideBar from './SideBar';
import Body from './Body';
import Footer from './Footer';
const Player = ({ spotify }) => {
	return (
		<div className="player">
			<div className="palyer__body">
				<SideBar />
				<Body spotify={spotify} />
				<Footer />
				{/* {} */}
				{/* {} */}
			</div>
		</div>
	);
};

export default Player;
