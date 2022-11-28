function Capital({ capital }) {
  return (
    <p className="font-semibold">
      <span className="font-bold">Capital: </span>
      {Object.values(capital).map((keys, i) => (
        <span key={i}>{keys}</span>
      ))}
    </p>
  );
}
export { Capital };
