import React from 'react';
import { Input, Label, Span } from './Filter.styled';
import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterValue, setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const filterValue = useSelector(getFilterValue);

  const dispatch = useDispatch();

  const onChangeFilter = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  return (
    <Label>
      <Span>Filter</Span>

      <Input
        onChange={onChangeFilter}
        value={filterValue}
        type="text"
        id={nanoid(5)}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
      />
    </Label>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string,
//   onChangeFilter: PropTypes.func.isRequired,
// };
