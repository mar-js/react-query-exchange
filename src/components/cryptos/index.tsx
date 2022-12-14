import { useEffect, useState } from 'react'

import { filterCrypto } from '../../helpers'

import { ICrypto, ICryptos } from '../../interfaces'

import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'

import { Crypto } from '../crypto'

export const Cryptos: React.FC<ICryptos> = ({ cryptos, searchCrypto }) => {
  const [ dataCryptos, setDataCryptos ] = useState<ICrypto[]>(cryptos)

  useEffect((): void | (() => void) => {
    if (searchCrypto) return setDataCryptos(filterCrypto(cryptos, searchCrypto))

    setDataCryptos(cryptos)

    return () => null
  }, [ searchCrypto ])

  return (
    <Box py={ 2 }>
      <Typography
        variant="h3"
        component="h1"
        my={ 2 }
        sx={ {
          color: 'tomato',
          fontWeight: 'bold',
          textDecoration: 'underline'
        } }
      >Cryptos: </Typography>
      <TableContainer component={ Paper }>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>Coin</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Price Change</TableCell>
              <TableCell align="right">24hs Volume</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { dataCryptos.map(crypto => <Crypto key={ crypto.id } { ...crypto } />) }
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}
