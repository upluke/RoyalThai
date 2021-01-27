import React,{usestate} from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import NavBar from '../NavBar/NavBar'
import {useSelector} from 'react-redux'

export default function MenuPage() {x
    const categories=useSelector(dataState=>state)
    const [selectedEl, setSelectedEl]=usestate()
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSelected= category=>{
        setSelectedEl(category)
    }
    return (
        <div >
            <NavBar />
            <br/>
            <br/>
            <h1>Menu page</h1>
           
            <Button  aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Open Menu
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {
                    categories.map(el=>(
                        <MenuItem onClick={handleClose}>{el.category}</MenuItem>
                    ))
                }
                
                {/* <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem> */}
            </Menu>
            
        </div>
        
    )
}
