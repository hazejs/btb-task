import { useState } from 'react';
import { InputContainer, InputField, InputLabel } from '../styles/FloatingInput';

const FloatingInput = ({labelText, onChange, inputType, val}: any) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (e: any) => {
    if (!e.target.value) {
      setIsFocused(false);
    }
  };


  return (
    <InputContainer>
      <InputLabel $focused={isFocused}>
        {labelText}
      </InputLabel>
      <InputField
        id="floating-input"
        type={inputType}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={onChange}
        value={val}
      />
    </InputContainer>
  );
};

export default FloatingInput