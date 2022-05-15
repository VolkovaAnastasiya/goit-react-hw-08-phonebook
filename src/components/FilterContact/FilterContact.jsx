import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { changesFilter } from '../../redux/contacts/contacts-reducer';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import { Label, Input, Wrapper } from './FilterContact.styled';

const FilterContact = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Label>
        <Input
          type="text"
          value={value}
          placeholder="Find contacts by name"
          onChange={e => dispatch(changesFilter(e.currentTarget.value))}
        />
      </Label>
    </Wrapper>
  );
};

export default FilterContact;

FilterContact.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
