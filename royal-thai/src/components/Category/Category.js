import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
 
import Appetizers  from "../../images/Appetizers.png"
import Noodle_Plates  from "../../images/NoodlePlates.png"
import Noodle_Soups  from "../../images/NoodleSoups.png"
import Salads  from "../../images/Salads.png"
import Soups  from "../../images/Soups.png"

const useStyles = makeStyles((theme)=>({
  root: {
    maxWidth: 288,
    margin: "auto",
    marginTop:theme.spacing(15),
    // padding: theme.spacing(4),
    height: theme.spacing(50),
    // width: theme.spacing(49),
 
  },
  media: {
    height: 90,
    paddingTop: '56.25%', // 16:9,
    marginTop:'30',

  },
}));

export default function Category({category}) {

    const classes = useStyles();
    const imgHash={
      Appetizers,
      Noodle_Plates,
      Noodle_Soups,
      Salads,
      Soups
    }

 
    return (
        <Grid item xs={12} sm={6} lg={3}>
            <Card className={classes.root}>
                <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={imgHash[category]} 
                
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    {category.replace('_',' ')}
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="primary" onClick={(e)=>console.log("cate",category)}>
                   <Link to={"/menu/"+category}> Share</Link> 
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
                </CardActions>
            </Card>
      </Grid>
    );
}
