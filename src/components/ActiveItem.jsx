import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { purple,red } from '@mui/material/colors';
export default function ActiveItem(props) {
    const { active } = props;
  return (
    <Card sx={{ maxWidth: 500 }}>
        <CardMedia
        component="img"
        height= "auto"
        image="https://unsplash.com/photos/TT-ROxWj9nA/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8c2hpcnQlMjBzaG9wcGluZ3xlbnwwfHx8fDE2ODg0MzkyODV8MA&force=true&w=1920"
        alt={active.Name}
        />
      <CardContent>
        <Typography gutterBottom variant="h2" component="div" color={purple[500]} >
            {active.Name}
        </Typography>
        <Typography variant="h5" color={red[500]} component="div">
          Price:  {active.Price} $
        </Typography>
      </CardContent>
      <CardActions>
     
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}