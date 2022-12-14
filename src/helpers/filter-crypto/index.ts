import { ICrypto } from '../../interfaces'

import { includeCrypto } from '../include-crypto'

export const filterCrypto = (cryptos: ICrypto[], search: string) => cryptos.filter(crypto => includeCrypto(crypto, search))
