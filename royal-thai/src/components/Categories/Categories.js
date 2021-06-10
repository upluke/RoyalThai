import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {useSelector} from 'react-redux'
import Category from '../Category/Category'
import { Description } from '@material-ui/icons';
 

const useStyles = makeStyles((theme) => ({
    gridStyle:{
      paddingLeft:theme.spacing(15),
      paddingRight:theme.spacing(15),
      paddingBottom:theme.spacing(15)
    }
 
  }));

export default function Categories() {  
    const categories=useSelector(state=>state.categories)
    const data=useSelector(state=>state.data)

    const classes = useStyles();

 
    return (
        <React.Fragment  >
            <Grid container spacing={0} justify="center" className={classes.gridStyle}  >
            
             {categories.map((el,idx)=>{
                return  (
                  <Grid item xs={12} sm={6} lg={3}>
                    <Category key={idx} category={el} />
                  </Grid>
                )
                  })}
            
            </Grid>
 
        </React.Fragment>
    )
}
