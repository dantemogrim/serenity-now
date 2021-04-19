// Styled components:
import { FooterStyled, FooterLinkStyled } from './indexStyled.js';

const Footer = ({ text }) => {
	return (
		<FooterStyled>
			<FooterLinkStyled href="https://github.com/dantemogrim">
				<h4>{text}</h4>
			</FooterLinkStyled>
		</FooterStyled>
	);
};

export default Footer;
