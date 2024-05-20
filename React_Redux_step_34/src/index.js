import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "./components/app/App";
import store from "./store";

import "./styles/index.scss";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
