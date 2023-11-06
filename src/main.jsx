import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import store from "./redux/store.js";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { CSSReset, ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./scss/index.scss";

const theme = extendTheme({
	fonts: {
		heading: `"Montserrat", sans-serif`,
		body: `"Montserrat", sans-serif`,
	},
	styles: {
		global: {
			"*, *::before, *::after": {
				margin: "0",
				padding: "0",
				boxSizing: "border-box",
			},
			html: {
				fontSize: "10px",
			},
			a: {
				textDecoration: "none",
			},

			"ul, ol": {
				marginInlineStart: "0",
			},
			li: {
				listStyleType: "none",
			},
			input: {
				fontSize: "2xl",
			},
			body: {
				backgroundColor: "#f49c9c",
				fontSize: "1.6rem",
				lineHeight: "1.5",
				fontWeight: 400,
			},
		},
	},
});

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<CSSReset />
			<BrowserRouter>
				<Provider store={store}>
					<App />
				</Provider>
			</BrowserRouter>
		</ChakraProvider>
	</React.StrictMode>
);
