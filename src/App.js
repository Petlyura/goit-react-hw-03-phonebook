import React, { Component } from "react";
import shortid from "shortid";

import Layout from "./components/Layout";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";

export default class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem("contacts");

    if (savedContacts) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  handleContactAdd = (name, number) => {
    const { contacts } = this.state;

    const isIncludes = contacts.some((contact) => contact.name === name);

    if (isIncludes) {
      alert(`${name} is already in contacts`);
      return;
    }

    const contactData = {
      id: shortid.generate(),
      name,
      number,
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contactData],
    }));

    // const contact = {
    //   id: shortid.generate(),
    //   name,
    //   number,
    // };

    // const contacts = [...this.state.contacts];

    // for (let i = 0; i < contacts.length; i += 1) {
    //   if (contacts[i].name === name) {
    //     alert(`${name} is already in contacts`);
    //     return;
    //   }
    // }

    // this.setState((prevState) => ({
    //   contacts: [...prevState.contacts, contact],
    // }));
  };

  handleChangeFilter = ({ target: { value } }) => {
    this.setState({ filter: value });
  };

  handleDeleteContact = (contactId) =>
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  removeContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;

    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <Layout title="Phonebook">
          <ContactForm onAddContact={this.handleContactAdd} />
        </Layout>

        {visibleContacts.length > 0 && (
          <Layout title="Contacts">
            <ContactList
              contacts={visibleContacts}
              onRemove={this.removeContact}
            />
          </Layout>
        )}

        {contacts.length > 1 && (
          <Layout title="Find contacts by name">
            <Filter
              filterValue={filter}
              onFilterChange={this.handleChangeFilter}
            />
          </Layout>
        )}
      </>
    );
  }
}
