import React from 'react';

import { useDispatch } from 'react-redux';

import { addShortURL } from '../../redux/link/asyncActions';

import './LinkForm.scss';

const LinkForm = () => {
  const dispatch = useDispatch();

  const [value, setValue] = React.useState('');

  const isValidUrl = (url) => {
    return url.includes('http');
  };

  const onButtonClick = () => {
    if (value && isValidUrl(value)) {
      dispatch(addShortURL(value));
      setValue('');
    } else if (value && !isValidUrl(value)) {
      alert('Введите данные в формате ссылки!');
      setValue('');
    } else {
      alert('Введите ссылку!');
    }
  };

  return (
    <div className="link-form">
      <p className="link-form__title">Введите ссылку</p>
      <div className="link-form__input-wrap">
        <input
          type="text"
          className="link-form__input"
          value={value}
          onChange={({ target }) => {
            setValue(target.value);
          }}
        />
        <button className="link-form__button" onClick={onButtonClick}>
          Сократить
        </button>
      </div>
    </div>
  );
};

export default LinkForm;
