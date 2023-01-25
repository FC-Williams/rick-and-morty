import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import Character from "../../classes/Character";
import Information from "./Information";
import { Grid } from "@mui/material";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="right" ref={ref} {...props} />;
});

const CharacterDetails: React.FC<ICharacterDetails> = ({
  character,
  openDetails,
  setOpenDetails,
}) => {
  const handleClose = () => {
    setOpenDetails(false);
  };

  return (
    <Dialog
      open={openDetails}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      maxWidth="md"
      fullWidth
    >
      <DialogTitle flexDirection={"row"}>{character.name}</DialogTitle>
      <DialogContent>
        <Grid container>
          <Grid item xs={6}>
            <img src={character.image} alt={character.name} height={"300px"} width="350px" />
          </Grid>
          <Grid item xs={6}>
            <Information title="Nombre" text={character.name} />
            <Information title="Estatus" text={character.status} />
            <Information title="Especie" text={character.species} />
            <Information title="Genero" text={character.gender} />
            <Information title="Origen" text={character.origin.name} />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CharacterDetails;

interface ICharacterDetails {
  character: Character;
  openDetails: boolean;
  setOpenDetails: React.Dispatch<React.SetStateAction<boolean>>;
}
