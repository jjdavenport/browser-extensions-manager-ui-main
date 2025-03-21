const Extension = ({ data }) => {
  return (
    <>
      <li>
        <div>
          <img src={data.logo} />
          <div>
            <span>{data.name}</span>
            <p>{data.description}</p>
          </div>
        </div>
        <div>
          <button>Remove</button>
          <button></button>
        </div>
      </li>
    </>
  );
};

export default Extension;
