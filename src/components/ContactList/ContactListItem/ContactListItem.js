import React from "react";
import PropTypes from "prop-types";

const ContactListItem = ({ contactName, contactNumber, remove }) => {
  return (
    <li>
      <p>
        {contactName}: {contactNumber}
      </p>

      <button type="button" onClick={remove}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contactName: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
};

export default ContactListItem;
