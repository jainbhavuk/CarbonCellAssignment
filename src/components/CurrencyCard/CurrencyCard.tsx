import { Box, Button, Stack, Typography } from "@mui/material";
import { CurrencyCardProps } from "./types";

/**
 * CurrencyCard component displays information about a currency,
 * including its code, rate, description, and an optional image.
 * Users can click on the "View More" button to see additional details.
 *
 * @param {CurrencyCardProps} props - The props for the CurrencyCard component.
 * @param {string} props.code - The code of the currency.
 * @param {number} props.rate - The exchange rate of the currency.
 * @param {string} props.description - The description of the currency.
 * @param {string} [props.img] - The URL of an optional image representing the currency.
 * @returns {JSX.Element} A CurrencyCard component.
 */
const CurrencyCard = ({
  code,
  rate,
  description,
  img,
}: CurrencyCardProps): JSX.Element => {
  return (
    <Stack
      borderRadius={4}
      bgcolor="black"
      color="white"
      p={4}
      gap={2}
      height="100%"
      alignItems="center"
    >
      <Box display="flex" gap={1} width="100%" justifyContent="center">
        {img && (
          <Box
            component="img"
            sx={{ ObjectFit: "cover" }}
            src={img}
            height={30}
          />
        )}
        <Typography fontSize={24} fontWeight={700}>
          {code}
        </Typography>
      </Box>
      <Typography fontSize={26} fontWeight={600}>
        {rate}
      </Typography>
      <Typography fontSize={18} variant="subtitle2">
        {description}
      </Typography>
      <Button variant="contained" color="primary" sx={{ mt: 2, width: "100%" }}>
        View More
      </Button>
    </Stack>
  );
};

export default CurrencyCard;
