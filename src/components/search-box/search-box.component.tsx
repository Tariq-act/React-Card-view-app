import { ChangeEvent } from 'react';
import './search-box.styles.css';

// interface ISearchBoxProps {
//   className: string;
//   placeholder?: string;
// }

// interface ISearchBoxProps {
//   onChangeHandler: (a: string) => void;
// }

// type CanadianAddress = {
//   street: string;
//   province: string;
// };

// type USAddress = {
//   street: string;
//   state: string;
// };

// type ItalianAddress = {
//   street: string;
//   region: string;
// };

// type Address = CanadianAddress | USAddress | ItalianAddress;

// const Address: Address = {
//   street: 'adas',
//   state: 'adasd',
// };

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
