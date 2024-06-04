const Error = ({ foodList }) => {
  return <div>{foodList.length === 0 && <div>Empty Food List</div>}</div>;
};

export default Error;
