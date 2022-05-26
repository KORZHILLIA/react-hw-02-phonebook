import { Component } from 'react';
import Contact from './Contact/Contact';
import { nanoid } from 'nanoid';

class Phonebook extends Component {
  state = { name: '', contacts: [] };

  onChangeHandler = event =>
    this.setState({
      name: event.currentTarget.value,
    });

  onSubmit = event => {
    event.preventDefault();
    return this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          { name: prevState.name, id: nanoid() },
        ],
      };
    });
  };

  isBtnDisabled = () => (this.state.name === '' ? true : false);

  render() {
    const { name, contacts } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <form>
          <label>
            Name
            <input
              value={name}
              onChange={this.onChangeHandler}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>

          <button
            type="submit"
            disabled={this.isBtnDisabled()}
            onClick={this.onSubmit}
          >
            Add contact
          </button>
        </form>
        <p>Contacts</p>
        <ul>
          {contacts.map(({ name, id }) => (
            <Contact name={name} id={id}></Contact>
          ))}
        </ul>
      </div>
    );
  }
}

export default Phonebook;
