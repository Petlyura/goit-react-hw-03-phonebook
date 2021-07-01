import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./ContactForm.module.css";

export default class ContactForm extends Component {
  static propTypes = {
    onAddContact: PropTypes.func,
  };

  state = {
    name: "",
    number: "",
  };

  handleInputChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    const { name, number } = this.state;

    this.props.onAddContact(name, number);

    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit} className={styles.phonebookForm}>
        <div>
          <label>
            Name:
            <input
              className={styles.phonebookInput}
              type="text"
              name="name"
              placeholder="Type your name"
              value={name}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Number:
            <input
              className={styles.phonebookInput}
              type="tel"
              name="number"
              placeholder="Type your phone number"
              value={number}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <button type="submit" className={styles.phonebookButton}>
          Add contact
        </button>
      </form>
    );
  }
}
