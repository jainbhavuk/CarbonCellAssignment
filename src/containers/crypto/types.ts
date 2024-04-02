/**
 * Represents the structure of data fetched from the CoinDesk API.
 */
export type CryptoData = {
  /**
   * Contains information about the timestamp when the data was last updated.
   */
  time: {
    /**
     * The date and time when the data was last updated in UTC format.
     */
    updated: string;
    /**
     * The date and time when the data was last updated in ISO format.
     */
    updatedISO: string;
    /**
     * The date and time when the data was last updated in UK time zone format.
     */
    updateduk: string;
  };
  /**
   * Disclaimer about the source of the data.
   */
  disclaimer: string;
  /**
   * The name of the chart (e.g., "Bitcoin").
   */
  chartName: string;
  /**
   * Contains information about Bitcoin price index in different currencies.
   */
  bpi: {
    /**
     * Information about the Bitcoin price in USD.
     */
    usd: {
      /**
       * The currency code (e.g., "USD").
       */
      code: string;
      /**
       * The currency symbol (e.g., "&#36;").
       */
      symbol: string;
      /**
       * The Bitcoin price in the specified currency as a formatted string (e.g., "68,534.091").
       */
      rate: string;
      /**
       * The description of the currency (e.g., "United States Dollar").
       */
      description: string;
      /**
       * The Bitcoin price in the specified currency as a floating point number (e.g., 68534.0907).
       */
      rateFloat: number;
    };
    /**
     * Information about the Bitcoin price in GBP.
     */
    gbp: {
      /**
       * The currency code (e.g., "GBP").
       */
      code: string;
      /**
       * The currency symbol (e.g., "&pound;").
       */
      symbol: string;
      /**
       * The Bitcoin price in the specified currency as a formatted string (e.g., "54,628.798").
       */
      rate: string;
      /**
       * The description of the currency (e.g., "British Pound Sterling").
       */
      description: string;
      /**
       * The Bitcoin price in the specified currency as a floating point number (e.g., 54628.7978).
       */
      rateFloat: number;
    };
    /**
     * Information about the Bitcoin price in EUR.
     */
    eur: {
      /**
       * The currency code (e.g., "EUR").
       */
      code: string;
      /**
       * The currency symbol (e.g., "&euro;").
       */
      symbol: string;
      /**
       * The Bitcoin price in the specified currency as a formatted string (e.g., "63,833.2").
       */
      rate: string;
      /**
       * The description of the currency (e.g., "Euro").
       */
      description: string;
      /**
       * The Bitcoin price in the specified currency as a floating point number (e.g., 63833.2003).
       */
      rateFloat: number;
    };
  };
};
