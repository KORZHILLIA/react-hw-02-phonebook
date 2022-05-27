import { Component } from 'react';
import ContactsForm from './ContactsForm/ContactsForm';
import Contact from './Contact/Contact';

class Phonebook extends Component {
  state = {
    name: '',
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    number: '',
    filter: '',
  };

  // onSubmit = event => {
  //   event.preventDefault();
  //   return this.setState(prevState => {
  //     return {
  //       contacts: [
  //         ...prevState.contacts,
  //         { name: prevState.name, id: nanoid(), number: prevState.number },
  //       ],
  //     };
  //   });
  // };

  onSubmit = obj =>
    this.setState(prevState => ({
      contacts: [...prevState.contacts, obj],
    }));

  contactsFindHandler = event =>
    this.setState({
      filter: event.currentTarget.value,
    });

  getFilteredContacts = () => {
    const requiredName = this.state.filter.toLowerCase();
    return [
      ...this.state.contacts.filter(contact =>
        contact.name.toLowerCase().includes(requiredName)
      ),
    ];
  };

  render() {
    const { filter } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactsForm onSubmit={res => this.onSubmit(res)}></ContactsForm>
        <label>
          Find contacts by name
          <input
            type="text"
            onChange={this.contactsFindHandler}
            value={filter}
          ></input>
        </label>
        <p>Contacts</p>
        <ul>
          {this.getFilteredContacts().map(({ name, id, number }) => (
            <Contact name={name} id={id} number={number}></Contact>
          ))}
        </ul>
      </div>
    );
  }
}

export default Phonebook;
