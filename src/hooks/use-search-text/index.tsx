import { FormEvent, useState } from 'react'

import { IUseSearchText } from '../../interfaces'

export const useSearchText = (): IUseSearchText => {
  const [ search, setSearch ] = useState('')

  const handleOnChange = (e: FormEvent) => setSearch((e.target as HTMLInputElement).value)

  return {
    search,
    handleOnChange
  }
}
