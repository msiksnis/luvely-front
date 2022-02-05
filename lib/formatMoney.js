export default function formatMoney(amount = 0) {
  const options = {
    style: "currency",
    currency: "NOK",
    minimumFractionDigits: 0,
  };
  //   Check if it's a clean amount
  if (amount % 100 === 0) {
    options.minimumFractionDigits = 0;
  }

  const farmatter = Intl.NumberFormat("fr-CA", options);
  return farmatter.format(amount);
}
