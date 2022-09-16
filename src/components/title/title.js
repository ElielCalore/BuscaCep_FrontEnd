export const Title = ({message}) => {
  return (
    <div className="d-flex flex-row mb-3">
      {message.map((item) => (
        <h1 key={item.letter} className={`text-${item.color}`}>
          {item.letter}
        </h1>
      ))}
    </div>
  );
};
