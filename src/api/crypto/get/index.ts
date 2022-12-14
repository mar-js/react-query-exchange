import { URL } from '../../../helpers'

import { ICrypto } from '../../../interfaces'

export const getCrypto = async (): Promise<ICrypto[] | void> => {
  try {
    const RESPONSE = await fetch(URL)
    const DATA: ICrypto[] = await RESPONSE.json()

    return DATA
  } catch (error) {
    return console.error('ERROR GET CRYPTO', { error })
  }
}
