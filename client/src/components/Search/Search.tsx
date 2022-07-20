import "./Search.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { InputAdornment, TextField } from "@mui/material";

const Search = () => {
  return (
    <TextField
      type="text"
      label="Search..."
      size="small"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchOutlinedIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Search;
