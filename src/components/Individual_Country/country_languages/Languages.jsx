function Languages({ languages }) {
  return (
    <div className="font-bold">
      Languages:{" "}
      <span className="font-semibold">
        {Object.values(languages)[0]} {Object.values(languages)[1]}{" "}
        {Object.values(languages)[2]}
      </span>
    </div>
  );
}
export { Languages };
