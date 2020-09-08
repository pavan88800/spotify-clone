import React from 'react';
import './footer.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Slider, Grid } from '@material-ui/core';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__left">
				<img
					src="https://4.bp.blogspot.com/-LmPJap5GZvE/XVV5mQejB7I/AAAAAAAAgYY/XRPRkHV3O4AAhAOF2T_hLLpbTlbKrjuJACK4BGAYYCw/s640/maxresdefault.jpg"
					alt=""
					className="footer__albumLogo"
				/>
				<div className="footer__SongInfo">
					<h4>Yeah !</h4>
					<p>Usher</p>
				</div>
			</div>
			<div className="footer__center">
				<ShuffleIcon className="footer__green" />
				<SkipPreviousIcon className="footer__icon" />
				<PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
				<SkipNextIcon className="footer__icon" />
				<RepeatIcon className="footer__green" />
			</div>
			<div className="footer__right">
				<Grid container spacing={2}>
					<Grid item>
						<PlaylistPlayIcon />
					</Grid>
					<Grid item>
						<VolumeDownIcon />
					</Grid>
					<Grid item xs>
						<Slider aria-labelledby="continuous-slider" />
					</Grid>
				</Grid>
			</div>
		</div>
	);
};

export default Footer;
