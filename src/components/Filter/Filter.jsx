import { Label, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts, getFilter } from 'redux/contactSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleFilterChange = event => {
    dispatch(filterContacts(event.target.value));
  };
  return (
    <Label>
      Find contacts by Name
      <Input
        type="text"
        placeholder="Search contact"
        value={filter}
        onChange={handleFilterChange}
      />
    </Label>
  );
};
