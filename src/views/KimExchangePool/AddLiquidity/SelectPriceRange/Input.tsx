import { memo, useEffect, useState } from 'react';
import { StyledInput, StyledInputButton, StyledInputLabel, StyledInputInner, StyledInputContent } from './styles';

const Input = ({ label, value, setValue, onButtonClick, desc, disabled, rangeType }: any) => {
  const [price, setPrice] = useState('');
  useEffect(() => {
    setPrice(value);
  }, [value]);
  return (
    <StyledInput>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledInputContent>
        <StyledInputButton
          disabled={value === '∞' || rangeType === 3 || disabled}
          onClick={() => {
            onButtonClick('add');
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 1L7 13" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            <path d="M1 7H13" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </StyledInputButton>
        <StyledInputInner
          placeholder="0"
          value={price || ''}
          onChange={(ev) => {
            if (isNaN(Number(ev.target.value))) return;
            setPrice(ev.target.value);
          }}
          onBlur={() => {
            setValue(price);
          }}
          disabled={disabled}
        />
        <StyledInputButton
          disabled={Number(value) === 0 || rangeType === 3 || disabled}
          onClick={() => {
            onButtonClick('minus');
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="2" viewBox="0 0 14 2" fill="none">
            <path d="M1 1H13" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </StyledInputButton>
      </StyledInputContent>
    </StyledInput>
  );
};

export default memo(Input);
