const Container = ({ children }) => {
  return (
    <>
      <div className="flex w-full max-w-5xl flex-col gap-4 p-4">{children}</div>
    </>
  );
};

export default Container;
