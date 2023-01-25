import { mdiMagnify } from "@mdi/js";
import Icon from "@mdi/react";
import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";


const Searcher: React.FC<ISearcher> = ({
        onSubmit,
        onChange
    }) => {




    const [value, setValue] = useState("");

    const handleChange = (
        e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      ) => {
        setValue(e.target.value);
        if(onChange) return onChange(e.target.value);
      }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        return onSubmit(value);
    }

    return (
        <Box>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              onChange={handleChange}
              name="character"
              value={value}
              label="Buscar personaje por nombre"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton type="submit">
                      <Icon path={mdiMagnify} size={1} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            
          </form>
        </Box>
      );
}


interface ISearcher {
    onChange?: (value: string) => any;
    onSubmit: (value: string) => any;
  }
  

export default Searcher