// Styled components:
import { HeaderStyled } from './headerStyled.js';

const Header = ({ text }) => {
	return (
		<HeaderStyled>
			<div>
				<h1>{text}</h1>
			</div>
		</HeaderStyled>
	);
};

export default Header;
