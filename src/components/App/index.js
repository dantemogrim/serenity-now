import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './../../index.css';
// Styled components:
import { Wrapper, QuoteBox, Quote, Author, SeasonEpisode } from './indexStyled';
// Components:
import Footer from '../Footer/';
import Header from '../Header/';
import Button from '../Button/';

const App = () => {
	const [quote, setQuote] = useState('');
	const [author, setAuthor] = useState('');
	const [season, setSeason] = useState('');
	const [episode, setEpisode] = useState('');

	function handleQuotes() {
		let url = `https://seinfeld-quotes.herokuapp.com/random`;
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setQuote(data.quote);
				setAuthor(data.author);
				setSeason(data.season);
				setEpisode(data.episode);
			});
	}

	return (
		<div>
			<Header text="Serenity Now!"></Header>
			<Wrapper>
				<QuoteBox>
					<Quote>{quote}</Quote>
					<Author> - {author}</Author>
					<SeasonEpisode>
						Season: {season} ~ Episode: {episode}
					</SeasonEpisode>
				</QuoteBox>
				<Button handleClick={() => handleQuotes()} text="Generate"></Button>
			</Wrapper>

			<Footer text={'Dante Mogrim - Yrgo 2021'}></Footer>
		</div>
	);
};

App.propTypes = {
	author: PropTypes.string,
	episode: PropTypes.number,
	handleClick: PropTypes.func,
	quote: PropTypes.string,
	season: PropTypes.number,
	url: PropTypes.string,
};

export default App;
