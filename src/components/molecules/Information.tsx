import React, { ReactNode } from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const Information: React.FC<IInformationProps> = ({
  title,
  text
}) => {
  const classes = useStyles();

  return (
    <Box width="100%">
      <Typography
        variant="caption"
        color="primary"
        className={classes.text}
      >
        <Box component="span" fontWeight='bold'>{title}</Box> 
      </Typography>
        <Typography marginTop={0.5} className={classes.text}>
          {text}
        </Typography>
    </Box>
  );
};

export default Information;

const useStyles = makeStyles({
  text: {
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
});

interface IInformationProps {
    title: string;
    text?: string | ReactNode;
  }