import { useState } from 'react';
import './App.css';
import {TdCard} from './tdCard.tsx';

function App() {
  const [tdlist, setTdlist] = useState<{ data: string; status: string }[]>([]);
  const [data, setData] = useState('');

  const handleInsertData = () => {
    setTdlist([...tdlist, { data: data, status: 'ready' }]);
    setData('');
  };

  const handleDeleteData = (idx: number) => {
    const tempTdlist = [...tdlist.slice(0, idx), ...tdlist.slice(idx + 1)];
    setTdlist(tempTdlist);
  };

  const handleSuccessData = (idx: number) => {
    const tempTdlist = { data: tdlist[idx].data, status: 'success' };

    const newTdlist = [...tdlist.slice(0, idx), tempTdlist, ...tdlist.slice(idx + 1)];
    setTdlist(newTdlist);
  };

  return (
    <>
      <div>
        <input value={data} onChange={e => setData(e.target.value)} />
        <button onClick={() => handleInsertData()}>작업 추가</button>
      </div>

      {tdlist &&
        tdlist.map((td, idx) => (
            <TdCard td={td} idx={idx} handleSuccessData={handleSuccessData} handleDeleteData={handleDeleteData} />
        ))}
    </>
  );
}

export default App;
