const Wrapper = ({ children }) => {
  return (
    <>
      <div className="font-custom dark:from-dark-gradient-start dark:to-dark-gradient-end from-light-gradient-start to-light-gradient-end flex h-full min-h-screen flex-col items-center bg-gradient-to-b">
        {children}
      </div>
    </>
  );
};

export default Wrapper;
