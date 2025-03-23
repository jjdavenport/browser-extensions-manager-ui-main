const Container = ({ children }) => {
  return (
    <>
      <div className="flex w-full max-w-6xl flex-1 flex-col gap-10 p-10">
        {children}
      </div>
    </>
  );
};

export default Container;
