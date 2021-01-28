import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {useSelector} from 'react-redux'
import Category from '../Category/Category'


const useStyles = makeStyles((theme) => ({
    gridStyle:{
      paddingBottom:theme.spacing(15)
    }
 
  }));

export default function Categories() {  
    const categories=useSelector(state=>state.categories)
    const classes = useStyles();
    return (
        <React.Fragment  >
            <Grid container spacing={0} justify="center" className={classes.gridStyle}  >
 
             {categories.map((el,idx)=>{
                return  <Category key={idx} category={el} />
                  })}
            </Grid>
          
 
        </React.Fragment>
    )
}
