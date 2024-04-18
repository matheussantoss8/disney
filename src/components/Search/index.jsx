import { TextField, InputAdornment, IconButton } from "@mui/material";
import { useState } from "react";
import { Search as SearchIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import "../../styles/style.css";

export const Search = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  function handleNavigate() {
    navigate(`/person/${name}`);
  }

  return (
    <div className='search-input'>
      <TextField fullWidth label="Pesquisar" id="fullWidth" 
        color="primary"
        value={name}
        size='normal'
        onChange={(e) => setName(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleNavigate}>
                <SearchIcon style={{ color: "blue", fontSize: 50 }} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};
