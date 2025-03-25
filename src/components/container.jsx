const Container = ({ children }) => {
  return (
    <>
      <div className="flex w-full max-w-7xl flex-1 flex-col gap-10 px-4 py-6 md:px-10 md:py-10">
        {children}
      </div>
    </>
  );
};

export default Container;
