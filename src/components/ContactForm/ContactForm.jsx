import { useState } from 'react';
import { BsTelephonePlus } from 'react-icons/bs';
import { toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
// import FormImage from '../../images/contact.png';
import {
  useGetContactsByNameQuery,
  useAddContactMutation,
} from '../../redux/contacts/contacts-api';
import {
  Form,
  Label,
  Input,
  InputBottom,
  // Image,
  Container,
} from './ContactForm.styled';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [addContact, { isLoading }] = useAddContactMutation();
  const { data: contacts } = useGetContactsByNameQuery();

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const normalizedName = name.toLowerCase();
    const isNameInContacts = contacts.some(contact =>
      contact.name.toLowerCase().includes(normalizedName),
    );

    if (isNameInContacts) {
      setName('');
      setNumber('');
      toast.info(`${name} is already in contacts.`);
    }

    if (!isNameInContacts) {
      addContact({ name, number });
      setName('');
      setNumber('');
      toast.success(`${name} with tel:${number} added to contacts.`);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor={nameInputId}>Name</Label>
        <Input
          type="text"
          name="name"
          value={name}
          htmlFor={nameInputId}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <Label htmlFor={numberInputId}>Number</Label>
        <InputBottom
          type="tel"
          name="number"
          value={number}
          htmlFor={numberInputId}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <Button
          type="submit"
          disabled={isLoading}
          color="secondary"
          variant="outlined"
        >
          <BsTelephonePlus
            style={{
              width: 30,
              height: 30,
            }}
          />{' '}
          Add contact
        </Button>
      </Form>
      {/* <Image src={FormImage} alt="alt" /> */}
    </Container>
  );
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
