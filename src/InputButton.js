import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function InputButton() {
  const [inputValue, setInputValue] = useState('');
  const history = useHistory();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    history.push(`/result/${inputValue}`);
  };

  return (
    <div>
      <input type="text" placeholder="Введите текст" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleClick}>Перейти</button>
    </div>
  );
}

export default InputButton;