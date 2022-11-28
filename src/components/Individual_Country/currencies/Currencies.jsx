function Currencies({ currencies }) {
  return (
    <div className="font-bold">
      Currencies:{"  "}
      <div className="font-semibold inline-block">
        {Object.values(currencies).map((key, i) => (
          <span key={i}>
            {key.name}{" "}
            <span className="bg-green-600 p-1 text-sm inline">
              {key.symbol}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
export { Currencies };
