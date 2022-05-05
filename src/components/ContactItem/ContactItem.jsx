const Contact = ({ contact, onDeleteUser, filter }) => {
  const { id, name, number } = contact;

  return (
    name.toLowerCase().includes(filter.toLowerCase()) && (
      <li>
        {name}: {number}{' '}
        <button type="button" onClick={() => onDeleteUser(id)}>
          Delete
        </button>
      </li>
    )
  );
};
export default Contact;
