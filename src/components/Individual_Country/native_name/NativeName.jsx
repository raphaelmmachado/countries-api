function NativeName({ nativeName }) {
  return (
    <p className="font-semibold">
      <span className="font-bold">Native name: </span>
      <em>
        {Object.values(nativeName).map((key, i) => (
          <span key={i}>{`${key.common}. `}</span>
        ))}
      </em>
    </p>
  );
}
export { NativeName };
