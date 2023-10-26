import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./scss/index.scss";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	styles: {
		global: {
			body: {
				backgroundColor: "#f49c9c",
				fontFamily: `"Raleway", sans-serif`,
				fontSize: "1.6rem",
				fontWeight: 400,
			},
		},
	},
});

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<BrowserRouter>
				<Provider store={store}>
					<App />
				</Provider>
			</BrowserRouter>
		</ChakraProvider>
	</React.StrictMode>
);
