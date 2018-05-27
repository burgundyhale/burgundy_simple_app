import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";

import getStore from "./store";
import ListApp from "./containers/list-app";

import translations from "../public/translations";
import "./assests/list.css";

ReactDOM.render(
  <IntlProvider messages={translations.messages} locale={translations.locale}>
    <Provider store={getStore()}>
      <ListApp />
    </Provider>
  </IntlProvider>,
  document.getElementById("root"),
);
