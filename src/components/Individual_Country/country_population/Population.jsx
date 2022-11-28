import { NumericFormat } from "react-number-format";

function Population({ population }) {
  return (
    <p className="font-semibold">
      <span className="font-bold">Population: </span>{" "}
      {
        <NumericFormat
          value={population}
          thousandSeparator="."
          decimalSeparator=","
          className="bg-zinc-100 dark:bg-zinc-900 max-w-[150px]"
        />
      }
    </p>
  );
}
export { Population };
