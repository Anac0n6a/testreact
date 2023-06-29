import { useParams } from 'react-router-dom';

function ResultPage() {
  const { inputValue } = useParams();

  return <div>
    <h1>
    {inputValue}
    </h1>
    </div>;
}

export default ResultPage;