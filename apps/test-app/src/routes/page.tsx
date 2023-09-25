import { useEffect, useState } from 'react';
import { uiModel } from './ui-model';
import './index.css';

const Index = () => {
  // const uiState = getUIState<ButtonState>();
  // const [color, setColor] = useState('#ccc');
  useEffect(() => {
    // fetchApi1.fetch({}/* 请求参数 */);
    console.info('fetch');
  }, []);

  return (
    <div className="container-box">
      <button className="button" style={{ background: uiModel.btnColor }}>
        {uiModel.loading ? 'loading' : 'loaded'}
      </button>
    </div>
  );
};

export default Index;
