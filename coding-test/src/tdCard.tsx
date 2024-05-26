interface tdCardProp {
  td: { data: string; status: string };
  idx: number;
  handleSuccessData: (idx: number) => void;
  handleDeleteData: (idx: number) => void;
}

export const TdCard = ({ td, idx, handleSuccessData, handleDeleteData }: tdCardProp) => {
  return (
    <div style={{ color: td.status === 'success' ? 'red' : 'white' }}>
      <div>{td.data}</div>
      <div>
        <button onClick={() => handleSuccessData(idx)}>완료</button>
      </div>
      <div>
        <button onClick={() => handleDeleteData(idx)}>작업 삭제</button>
      </div>
    </div>
  );
};
