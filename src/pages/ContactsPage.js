import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import FilterContact from '../components/FilterContact';
import {
  useGetContactsByNameQuery,
  useDeleteContactMutation,
} from '../redux/contacts/contacts-api';

function ContactsPage() {
  const { data } = useGetContactsByNameQuery();
  const [deleteContact] = useDeleteContactMutation();

  return (
    <>
      <ContactForm />
      <FilterContact />
      {data && <ContactList onDeleteContact={deleteContact} />}
    </>
  );
}

export default ContactsPage;
