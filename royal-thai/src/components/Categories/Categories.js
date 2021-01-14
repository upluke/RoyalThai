import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {useSelector} from 'react-redux'
import Category from '../Category/Category'
const useStyles = makeStyles((theme) => ({
    gridStyle:{
      minHeight:"85vh",
    }
 
  }));

export default function Categories() {
    const categories=useSelector(state=>state)
    const classes = useStyles();
    console.log(categories)
    return (
        <React.Fragment  >
            <Grid container spacing={0} justify="center" justify="center" className={classes.gridStyle}  >
 
             {categories.map(el=>{
                
                return  <Category category={el.category}/>
              
                  })}
            </Grid>
          
 
        </React.Fragment>
    )
}
