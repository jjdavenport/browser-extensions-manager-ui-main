import Extension from "./extension";

const List = ({ data, setData }) => {
  const toggleActive = (name) => {
    setData((prev) =>
      prev.map((i) => (i.name === name ? { ...i, isActive: !i.isActive } : i)),
    );
  };
  const removeExtension = (name) => {
    setData((prev) => prev.filter((i) => i.name !== name));
  };
  return (
    <main className="flex flex-1">
      <ul className="flex grid-cols-2 grid-rows-4 flex-col gap-4 md:grid xl:grid-cols-3">
        {data.map((i, index) => (
          <Extension
            toggle={() => toggleActive(i.name)}
            onDelete={() => removeExtension(i.name)}
            key={index}
            data={i}
          />
        ))}
      </ul>
    </main>
  );
};

export default List;
