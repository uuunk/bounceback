import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "tailwindcss/dist/base.css";
import "tailwindcss/dist/components.css";
import "tailwindcss/dist/utilities.css";
import * as serviceWorker from "./serviceWorker";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import ReactGA from "react-ga";
import Relief from "./Relief";
import Home from "./Home";
import FAQ from "./FAQ";
import TagManager from "react-gtm-module";

const trackingId = "UA-162129906-1";
ReactGA.initialize(trackingId);

const history = createBrowserHistory();

// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

const tagManagerArgs = {
  gtmId: "GTM-PPDNPRC"
};

TagManager.initialize(tagManagerArgs);

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/relief/:slug" component={Relief} />
      <Route path="/faq" component={FAQ} />
    </div>
  </Router>
);

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
