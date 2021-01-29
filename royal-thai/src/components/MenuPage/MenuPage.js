import React,{useState} from 'react';
// import Button from '@material-ui/core/Button';
// import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import NavBar from '../NavBar/NavBar'
import {useSelector} from 'react-redux'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

export default function MenuPage() {
    const classes = useStyles();
    const categories=useSelector(state=>state.categories)
    const [selectedEl, setSelectedEl]=useState('')
     

    const handleChange = (event) => {
        setSelectedEl(event.target.value);
      };

    console.log(selectedEl)
    return (
        <div >
            <NavBar />
            <br/>
            <br/>
            <h1>Menu page</h1>

            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Categories</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedEl||""}
                onChange={handleChange}
                >
                {
                    categories.map((el,idx)=>(
                        <MenuItem key={idx} value={el} >{el}</MenuItem>
                    ))
                }
                </Select>
            </FormControl>        
        </div>
        
    )
}
