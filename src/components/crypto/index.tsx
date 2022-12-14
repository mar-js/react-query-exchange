import { ICrypto } from '../../interfaces'

import {
  Box,
  TableCell,
  TableRow
} from '@mui/material'

export const Crypto: React.FC<ICrypto> = ({
  image,
  name,
  current_price,
  price_change_percentage_24h,
  total_volume
}) => (
  <TableRow>
    <TableCell component="th" scope="row">
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Box
          component="img"
          width="20px"
          height="20px"
          mx={ 1 }
          src={ image }
          alt={ name }
        />
        { name }
      </Box>
    </TableCell>
    <TableCell align="right">{ current_price }</TableCell>
    <TableCell
      align="right"
      sx={ { color: price_change_percentage_24h > 0 ? 'green' : 'red' } }
    >{ price_change_percentage_24h }</TableCell>
    <TableCell align="right">{ total_volume }</TableCell>
  </TableRow>
)
