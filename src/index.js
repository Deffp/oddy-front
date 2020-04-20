import React from "react";
import ReactDOM from "react-dom";

import { App } from "./Pages/App";
import { BASE_URL } from "./config";

const params = new URL(window.location.href).searchParams;
const code = params.get("code");

if (code) {
	window.opener.postMessage({ code }, BASE_URL);
} else {
	ReactDOM.render(<App />, document.getElementById("root"));
}
