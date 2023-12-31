const { createGlobalStyle } = require("styled-components");

const GlobalStyles = createGlobalStyle`
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	html{
		&::-webkit-scrollbar{
			width: 0.5rem;
		}
		&::-webkit-scrollbar-thumb{
			background-color: darkgray;
		}
	}
	body{
		font-family: 'Montserrat', sans-serif;
		width: 100%;
	}
	h2{
		font-size: 3rem;
		font-family: 'Abril Fatface', cursive;
		font-weight: lighter;
		color: #ff7676
	}
	h3{
		font-size: 1.3 rem;
		color: #333;
		padding: 1.5rem 0rem;
	}
	p{
		font-size: 1.2 rem;
		line-height: 200%;
		color: #696969
	}
	a{
		text-decoration: none;
		color: #333;
	}
	img{
		display: block;
	}
	input{
		font-weight: bold;
    font-family: "Montserrat", sans-serif;
	}
	button{
		font-size: 1.5rem;
		border: none;
		padding: 0.5rem 2rem;
		cursor: pointer;
		background: #ff7676;
		color: white;
	}
`;

export default GlobalStyles;
