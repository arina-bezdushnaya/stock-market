const formatter = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUB',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const formatterWithFractionDigits = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUB',
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

export function formatPrice(
  value: string | number | undefined,
  showCurrency = false,
  showFractionDigits = false
): string | undefined {
  if (typeof value === 'undefined') {
    return;
  }

  if (typeof value === 'string' && isNaN(Number.parseFloat(value))) {
    return value;
  }

  const parsedValue = typeof value === 'string' ? Number(value) : value;

  const formattedPrice = showFractionDigits
    ? formatterWithFractionDigits.format(parsedValue)
    : formatter.format(parsedValue);

  return showCurrency ? formattedPrice : formattedPrice.slice(0, -2);
}
