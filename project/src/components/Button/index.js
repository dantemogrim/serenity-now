// import React from 'react';
import PropTypes from 'prop-types';
// Styled components:
import { ButtonStyled } from './indexStyled.js';

const Button = ({ text, handleClick }) => {
	return (
		<div>
			<ButtonStyled onClick={handleClick}>{text}</ButtonStyled>
		</div>
	);
};

Button.propTypes = {
	text: PropTypes.string,
	handleClick: PropTypes.func,
};

export default Button;
