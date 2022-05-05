import { Component } from 'react';
import { nanoid } from 'nanoid';
import Section from './Section/Section';
import Phonebook from './Phonebook/Phonebook';
import ContactsList from './ContactsList/ContactsList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  onChangeInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  onAddUser = event => {
    event.preventDefault();
    const { contacts, name } = this.state;
    const searchedName = name.toLowerCase();

    if (
      contacts.some(contacts => contacts.name.toLowerCase() === searchedName)
    ) {
      return alert(`${name} is already in contacts.`);
    }

    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            id: [nanoid()],
            name: this.state.name,
            number: this.state.number,
          },
        ],
      };
    });
  };

  onDeleteUser = id => {
    console.log(id);
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(element => element.id !== id),
      };
    });
  };

  render() {
    return (
      <div>
        <Section>
          <Phonebook
            onChangeInput={this.onChangeInput}
            onAddUser={this.onAddUser}
          />
          <ContactsList
            contacts={this.state.contacts}
            onChangeInput={this.onChangeInput}
            onDeleteUser={this.onDeleteUser}
            filter={this.state.filter}
          />
        </Section>
      </div>
    );
  }
}

export default App;
