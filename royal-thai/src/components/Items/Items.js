import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import clsx from 'clsx';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));

export default function Items({itemName, description}) {
    const [expanded, setExpanded] = React.useState(false);
    const classes = useStyles();

    const handleExpandClick = () => {
        setExpanded(!expanded);
      };

    return (
        <div >
          <Grid item xs={12} sm={6} lg={3}>
       
            <Card className={classes.root}>
                   
                   <CardMedia
                     className={classes.media}
                     image="/static/images/cards/paella.jpg"
                     title="Paella dish"
                   />
                   <CardContent>
                   <Typography variant="body2" color="textSecondary" component="p">
                       {itemName}
                     </Typography>
                     <Typography variant="body2" color="textSecondary" component="p">
                       {description}
                     </Typography>
                   </CardContent>
                   <CardActions disableSpacing>
                     <IconButton aria-label="add to favorites">
                       <FavoriteIcon />
                     </IconButton>
                     <IconButton aria-label="share">
                       <ShareIcon />
                     </IconButton>
                     <IconButton
                       className={clsx(classes.expand, {
                         [classes.expandOpen]: expanded,
                       })}
                       onClick={handleExpandClick}
                       aria-expanded={expanded}
                       aria-label="show more"
                     >
                       <ExpandMoreIcon />
                     </IconButton>
                   </CardActions>
                   <Collapse in={expanded} timeout="auto" unmountOnExit>
                     <CardContent>
                       <Typography paragraph>Method:</Typography>
                       <Typography paragraph>
                         Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                         minutes.
                       </Typography>
                   
                     </CardContent>
                   </Collapse>
                 </Card>
            </Grid>
        </div>
    )
}
