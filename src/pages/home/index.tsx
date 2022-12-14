import { useQuery } from 'react-query'

import { useSearchText } from '../../hooks/'

import { getCrypto } from '../../api'

import { ICrypto } from '../../interfaces'

import { Container } from '@mui/material'

import { Cryptos, Search } from '../../components'

export const Home: React.FC = () => {
  const { search, handleOnChange } = useSearchText()
  const {
    isLoading,
    data,
    isError,
    error
  } = useQuery({
    queryKey: 'cryptos',
    queryFn: getCrypto
  })

  if (isError) return <b>Error: { (error as { message: string })?.message }</b>

  if (isLoading) return <i>Loading...</i>

  return (
    <Container>
      <Search handleChange={ handleOnChange } />
      <Cryptos cryptos={ (data as ICrypto[]) } searchCrypto={ search } />
    </Container>
  )
}
