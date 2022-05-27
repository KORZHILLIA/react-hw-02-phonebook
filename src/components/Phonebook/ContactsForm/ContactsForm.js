import { nanoid } from 'nanoid';
import { Component } from 'react';

class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onNameChangeHandler = event =>
    this.setState({
      name: event.currentTarget.value,
    });

  onNumberChangeHandler = event =>
    this.setState({ number: event.currentTarget.value });

  isBtnDisabled = () =>
    this.state.name === '' || this.state.number === '' ? true : false;

  submitHandler = event => {
    event.preventDefault();
    this.props.onSubmit({
      ...this.state,
      id: nanoid(),
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form>
        <label>
          Name
          <input
            value={name}
            onChange={this.onNameChangeHandler}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            onChange={this.onNumberChangeHandler}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button
          type="submit"
          disabled={this.isBtnDisabled()}
          onClick={this.submitHandler}
        >
          Add contact
        </button>
      </form>
    );
  }
}
export default ContactsForm;
