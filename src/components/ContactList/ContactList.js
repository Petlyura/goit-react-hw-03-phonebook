import React from "react";
import PropTypes from "prop-types";

import ContactListItem from "./ContactListItem";

const ContactList = ({ contacts, onRemove }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        const removeContact = () => {
          onRemove(id);
        };

        return (
          <ContactListItem
            key={id}
            contactName={name}
            contactNumber={number}
            remove={removeContact}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ContactList;
