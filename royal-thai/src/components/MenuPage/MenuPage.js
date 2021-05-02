import React,{useState, useEffect} from 'react';
// import Button from '@material-ui/core/Button';
// import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import NavBar from '../NavBar/NavBar'
import {useSelector, useDispatch} from 'react-redux'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Items from '../Items/Items'


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

export default function MenuPage(props) {
    let paramCategory=props.match.url.split("/").pop()
    const classes = useStyles();
    const categories=useSelector(state=>state.categories)
    const data=useSelector(state=>state.data)
    const [selectedEl, setSelectedEl]=useState(paramCategory)
     
    
     
    
    const handleChange = (event) => {
        setSelectedEl(event.target.value);
      };
    
     
 

    const getItemsByCategories=()=>{
        return Object.entries(
           data.reduce((datas , data)=>{
                const {category}=data
                datas[category]=datas[category]
                ?[...datas[category],data]
                :[data]
                return datas
            
        },{})
        )
    }
    let newDatas=getItemsByCategories()
   
    // console.log("props-->: ", props.match.url.split("/").pop())
    
    
    
    // console.log("newdate: ", newDatas)
    // console.log("selected element: ", selectedEl)
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
            {
                newDatas.map(([category, items])=>{
                    // console.log(category,"--->", items)
                    if(category===selectedEl){
                      
                        return items.map(item=>{
                            console.log(item)
                            return <Items key={item.id} itemName={item.name} price={item.price} description={item.description} />
                           
                            
                        })
                          
                    }
                })
            }

        </div>
        
    )
}
