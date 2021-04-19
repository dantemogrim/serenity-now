// Styled components:
import { CardStyled } from './cardStyled.js';
// Components:
import Button from './../Button/button';
import Header from './../Header/header';

const Card = () => {
	return (
		<div>
			<CardStyled>
				<Header text={'Serenity Now!'}></Header>
				<Button text={'Generate'}></Button>
			</CardStyled>
		</div>
	);
};

export default Card;
