import { NumericFormat } from "react-number-format";

function Area({ area }) {
  return (
    <p className="font-semibold">
      <span className="font-bold">Area: </span>{" "}
      {
        <NumericFormat
          value={area}
          type="text"
          thousandSeparator="."
          decimalSeparator=","
          suffix=" km²"
          className="bg-zinc-100 dark:bg-zinc-900 max-w-[150px]"
        />
      }
    </p>
  );
}
export { Area };
