import Contact from 'components/ContactItem/ContactItem';

const ContactsList = ({ contacts, onChangeInput, onDeleteUser, filter }) => {
  return (
    <div>
      <h3>Contacts</h3>
      <label htmlFor="filter">Find contacts by name</label>
      <input onChange={onChangeInput} type="text" name="filter" />
      <ul>
        {contacts.map(contact => {
          return (
            <Contact
              key={contact.id}
              contact={contact}
              filter={filter}
              onDeleteUser={onDeleteUser}
            />
          );
        })}
      </ul>
    </div>
  );
};
export default ContactsList;
