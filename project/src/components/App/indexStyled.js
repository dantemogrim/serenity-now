import styled from 'styled-components';

export const Author = styled.p`
	font-size: 20px;
	color: rebeccapurple;
`;

export const Quote = styled.p`
	font-size: 20px;
	color: black;
`;

export const QuoteBox = styled.div`
	background-color: white;
	border-radius: 10px;
	padding: 10px;
	width: 350px;
	height: 450px;
	margin: 5%;
`;

export const SeasonEpisode = styled.p`
	font-size: 18px;
	color: #dc0921;
	font-style: italic;
`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-around;
	width: 500px;
	height: 400px;
	background-clip: padding-box;
	border-radius: 10px;
	backdrop-filter: blur(40px);
	box-shadow: 10px 10px 10px rgba(46, 54, 68, 0, 03);
	border: solid 2px transparent;
	padding: 2%;
`;
