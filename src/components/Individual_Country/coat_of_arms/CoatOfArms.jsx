function CoatOfArms({ coatOfArms }) {
  return (
    <>
      {coatOfArms ? (
        <div className="flex flex-col items-center">
          <div className="text-center font-bold">Coat Of Arms</div>
          <img
            src={coatOfArms}
            alt="coat of arms"
            style={{ maxWidth: "100px" }}
          />
        </div>
      ) : null}
    </>
  );
}
export { CoatOfArms };
