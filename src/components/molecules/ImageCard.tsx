import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Character from "../../classes/Character";
import Icon from "@mdi/react";
import { mdiCheckboxBlankCircle } from "@mdi/js";
import { shortText } from "../../utils/util";

const ImageCard: React.FC<IImageCard> = ({ character, onClick }) => {

  const handleOnclick = ()=> {
    if (onClick) return onClick(character);
  }

  return (
    <Card
      sx={{
        maxWidth: 280,
      }}
      onClick={handleOnclick}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          width={"100%"}
          height="100%"
          image={character.image}
          alt={character.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6">
            {shortText(character.name)} <Icon size={0.5} path={mdiCheckboxBlankCircle} color={character.status.toUpperCase() == 'ALIVE' ? "green" : character.status.toUpperCase() == 'DEAD' ? "red" : "#36718f"}></Icon>
            <Typography variant="caption">  {character.status}</Typography>
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {character.species}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ImageCard;

interface IImageCard {
  character: Character;
  onClick: (character: Character)=>any;
}
