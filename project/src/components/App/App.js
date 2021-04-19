// Styled components:
import { Wrapper } from './AppStyled';
// Central, single CSS file:
import './../../index.css';
// Components:
import Card from '../Card/card.js';
import Footer from '../Footer/footer.js';

const App = () => {
	return (
		<div>
			<Wrapper>
				<Card></Card>
			</Wrapper>
			<Footer text={'Dante Mogrim - Yrgo 2021'}></Footer>
		</div>
	);
};

export default App;
