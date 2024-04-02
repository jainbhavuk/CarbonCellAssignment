import { useState, useEffect } from "react";
import axios from "axios";
import camelcaseKeys from "camelcase-keys";
import { CryptoData } from "./types";

import { URL as CRYPTO_URL } from "./constants";
import { CurrencyCard } from "../../components/CurrencyCard";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import BitcoinImage from "../../assets/images/bitcoin.png";

const CryptoContainer = () => {
  // Define state to store the fetched data
  const [cryptoData, setCryptoData] = useState<CryptoData>();
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // Function to fetch crypto data
  const fetchCryptoData = async () => {
    try {
      const response = await axios.get(CRYPTO_URL);
      const camelizedData = camelcaseKeys(response.data, { deep: true });
      // Set the fetched data to state
      setCryptoData(camelizedData);
    } catch (error) {
      console.error("Error fetching crypto data:", error);
    }
  };

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    fetchCryptoData();
  }, []);

  // Render the fetched data
  return (
    <Box
      width="100%"
      display="flex"
      gap={4}
      flexDirection="column"
      alignItems="center"
    >
      <Typography variant="h3" fontWeight="bold">
        Bitcoin Prices
      </Typography>
      {cryptoData && (
        <Grid container spacing={isSmallScreen ? 4 : 8} width="100%">
          <Grid item sm={12} md={6} lg={4} width="100%">
            <CurrencyCard
              img={BitcoinImage}
              description={cryptoData.bpi.eur.description}
              code={cryptoData.bpi.eur.code}
              rate={cryptoData.bpi.eur.rate}
            />
          </Grid>
          <Grid item sm={12} md={6} lg={4} width="100%">
            <CurrencyCard
              img={BitcoinImage}
              description={cryptoData.bpi.usd.description}
              code={cryptoData.bpi.usd.code}
              rate={cryptoData.bpi.usd.rate}
            />
          </Grid>
          <Grid item sm={12} md={6} lg={4} width="100%">
            <CurrencyCard
              img={BitcoinImage}
              description={cryptoData.bpi.gbp.description}
              code={cryptoData.bpi.gbp.code}
              rate={cryptoData.bpi.gbp.rate}
            />
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default CryptoContainer;
