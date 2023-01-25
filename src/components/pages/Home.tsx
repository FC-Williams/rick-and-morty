import { Box, Grid, LinearProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Character from "../../classes/Character";
import ErrorHandler from "../../classes/Error";
import CharacterDetails from "../molecules/CharacterDetails";
import ImageCard from "../molecules/ImageCard";
import Searcher from "../molecules/Searcher";
import ToggleColorMode from "../molecules/ToggleColorMode";

const Home = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [character, setCharacter] = useState<Character>(new Character());
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [openDetails, setOpenDetails] = useState(false);

  const fetchAllCharacters = async () => {
    try {
      setCharacters(await Character.getAll());
    } catch (error) {
      console.log(error);
    }
  };

  const searchCharacters = async (value: string) => {
    setLoading(true)
    setErrorMessage("");
    try {
      setCharacters(await Character.getByName({ name: value }));
    } catch (error) {
      setCharacters([]);
      if (error instanceof ErrorHandler) {
        setErrorMessage(error.getMessage());
      } else {
        setErrorMessage("Ha ocurrido un error al consultar los datos");
      }
    } finally {
        setLoading(false)
    }
  };

  const onClickImage = (character: Character)=> {
    setCharacter(character);
    setOpenDetails(true);
  }

  useEffect(() => {
    fetchAllCharacters();
  }, []);

  return (
    <Grid container marginTop={5} 
    >
      <Grid item container spacing={2} direction ={"row"} justifyContent={"center"} alignItems= {"center"} marginBottom={5}>
        <Grid item xs={6}>
          <Searcher
            onChange={(value) => searchCharacters(value)}
            onSubmit={(value) => searchCharacters(value)}
          />
          {
            loading ? <LinearProgress variant="indeterminate" /> : <></>
          }
        </Grid>
      </Grid>
      <Grid item container xs={12} justifyContent={"center"} flexDirection={"row"}>
        {
            characters.length ?
            <>
                {
                    characters.map((character, i) => (
                        <Grid item xs={12} sm={2} margin={1} flexDirection={"row"}>
                            <ImageCard key={character.id} character={characters[i]} onClick= {()=> onClickImage(character)}/>
                        </Grid>
                    ))
                }
            </> : <></>
        }
      </Grid>

      {
        openDetails && <CharacterDetails character={character} openDetails={openDetails} setOpenDetails={setOpenDetails} />
      }

      <Typography>{errorMessage}</Typography>
    </Grid>
  );
};

export default Home;
