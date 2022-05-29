import { Component } from 'react';

class Contacts extends Component {
  deleteClickHandler = event => this.props.onDelete(event.currentTarget.id);
  render() {
    return (
      <>
        <p>Contacts</p>
        <ul>
          {this.props.contactsArray.map(({ id, name, number }) => {
            return (
              <li key={id}>
                <span>{name}: </span>
                <span>{number}</span>
                <button id={id} type="button" onClick={this.deleteClickHandler}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default Contacts;
