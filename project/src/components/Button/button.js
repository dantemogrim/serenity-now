// import React from 'react';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// Styled components:
import {
	ButtonStyled,
	ApiWrapperStyled,
	SeasonEpisode,
	BodyStyled,
} from './buttonStyled.js';

const Button = ({ text, bgVariant, disabled }) => {
	const [quote, setQuote] = React.useState('');
	const [author, setAuthor] = React.useState('');
	const [season, setSeason] = React.useState('');
	const [episode, setEpisode] = React.useState('');

	function handleClick() {
		fetch('https://seinfeld-quotes.herokuapp.com/random')
			.then((response) => response.json())
			.then((data) => {
				setQuote(data.quote);
				setAuthor(data.author);
				setSeason(data.season);
				setEpisode(data.episode);
			});
	}

	// let msg = new SpeechSynthesisUtterance();
	// msg.text = `${api}`;
	// window.speechSynthesis.speak(msg);

	return (
		<div>
			<ApiWrapperStyled>
				{quote} {`- ${author}`}
				<SeasonEpisode>
					Season: {season} ~ Episode: {episode}
				</SeasonEpisode>
			</ApiWrapperStyled>
			<ButtonStyled onClick={handleClick} disabled={disabled}>
				{text}
			</ButtonStyled>
		</div>
	);
};

Button.propTypes = {
	text: PropTypes.string,
	handleClick: PropTypes.func,
};

export default Button;
