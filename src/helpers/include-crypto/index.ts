import { ICrypto } from '../../interfaces'

export const includeCrypto = (crypto: ICrypto, search: string): boolean => crypto.name.toLowerCase().includes(search.toLowerCase()) || crypto.symbol.toLowerCase().includes(search.toLowerCase())
