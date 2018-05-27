import React from "react";
import { injectIntl, intlShape, FormattedMessage } from "react-intl";

const Header = ({ intl }) => (
  <div className="bsa-flex">
    <div>
      <h1 className="bsa-h1">
        <FormattedMessage id="simple.app.title" />
      </h1>
    </div>
    <div>
      <button
        className="bsa-button"
        aria-label={intl.formatMessage({ id: "simple.app.add.list" })}
      >
        <i className="fa fa-plus fa-lg bsa-fa-plus" />
      </button>
    </div>
  </div>
);

Header.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(Header);
