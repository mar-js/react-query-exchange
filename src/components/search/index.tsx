import { ISearch } from '../../interfaces'

import {
  Box,
  InputAdornment,
  TextField
} from '@mui/material'

import SearchIcon from '@mui/icons-material/Search'

export const Search: React.FC<ISearch> = ({ handleChange }) => (
  <Box width="100%" pt={ 4 }>
    <TextField
      fullWidth
      type="search"
      label="Search Crypto"
      variant="standard"
      onChange={ handleChange }
      InputProps={ {
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        )
      } }
    />
  </Box>
)
