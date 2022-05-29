import { Component } from 'react';
import ContactsForm from './ContactsForm/ContactsForm';
import FilterInput from './FilterInput/FilterInput';
import Contacts from './Contacts/Contacts';

class Phonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onSubmit = obj =>
    this.setState(prevState => {
      const contactIndex = prevState.contacts.findIndex(
        ({ name }) => name.toLowerCase() === obj.name.toLowerCase()
      );
      if (contactIndex === -1) {
        return {
          contacts: [...prevState.contacts, obj],
        };
      } else {
        alert('no');
      }
    });

  filterChangeHandler = event =>
    this.setState({ filter: event.currentTarget.value });

  getFilteredContacts = () => {
    const requiredName = this.state.filter.toLowerCase();
    return [
      ...this.state.contacts.filter(contact =>
        contact.name.toLowerCase().includes(requiredName)
      ),
    ];
  };

  deleteBtnHandler = contactId =>
    this.setState(prevState => {
      const contactIndex = prevState.contacts.findIndex(
        ({ id }) => id === contactId
      );
      prevState.contacts.splice(contactIndex, 1);
      return { contacts: [...prevState.contacts] };
    });

  render() {
    const { filter } = this.state;
    return (
      <div>
        <ContactsForm onSubmit={res => this.onSubmit(res)}></ContactsForm>
        <FilterInput
          filter={filter}
          changeHandler={this.filterChangeHandler}
        ></FilterInput>
        <Contacts
          contactsArray={this.getFilteredContacts()}
          onDelete={res => this.deleteBtnHandler(res)}
        ></Contacts>
      </div>
    );
  }
}

export default Phonebook;
