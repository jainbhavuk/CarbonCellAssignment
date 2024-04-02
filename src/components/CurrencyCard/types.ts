/**
 * Props for the CurrencyCard component.
 */
export type CurrencyCardProps = {
  /**
   * The code of the currency.
   */
  code: string;
  /**
   * The exchange rate of the currency.
   */
  rate: string;
  /**
   * The description of the currency.
   */
  description: string;
  /**
   * The URL of an optional image representing the currency.
   */
  img: string;
};
