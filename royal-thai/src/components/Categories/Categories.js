import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {useSelector} from 'react-redux'
import Category from '../Category/Category'
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export default function Categories() {
    const categories=useSelector(state=>state)
    const classes = useStyles();
    console.log(categories)
    return (
        <React.Fragment>
            <Grid item xs={3}>
             {categories.map(el=>{
                
                return  <Category category={el.category}/>
              
                  })}
            </Grid>
            {/* <Grid container spacing={3}>
                 <Grid item xs={3}>
                    {categories.map(el=>{
                
              return  <Category category={el.category}/>
            
                })}
            
            </Grid>
            </Grid> */}
        </React.Fragment>
    )
}
