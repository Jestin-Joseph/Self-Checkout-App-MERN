import React, { useState } from 'react'
import { sidebarClasses, Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import CloseIcon from '@mui/icons-material/Close';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Box, IconButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';




const Item = ({title, link}) =>{
    return(
        <Link to={link}>
        <MenuItem rootStyles={{
            color: "#FFFFFF",
           
        }}>
        
        {title}
        

        </MenuItem>
        </Link>
    )
}

const Categories = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <Box >
    
   {/* backgroundColor={!isCollapsed ? '#164A41' : null} */}
    
    <Sidebar
    className="rps-sidebar"
    defaultCollapsed = {isCollapsed}
    rootStyles={{ height:"97vh", border:"none", }}
     >
    <Box sx={{ height: "100%", borderRadius:"20px"}} backgroundColor ={!isCollapsed ? '#164A41' : null} >
    <IconButton onClick={()=>setIsCollapsed(!isCollapsed)}>
      {isCollapsed ? <MenuOutlinedIcon sx={{color:"#000000"}}/> : <CloseIcon sx={{color:"#ffffff", }}/>}
        {/* <MenuOutlinedIcon sx={!isCollapsed ? {color:"#ffffff"}: {color:"black"}}/> */}
    </IconButton>
   
    {!isCollapsed  && (<Box >
       
    
        <Menu rootStyles={{
            marginTop: "15%",
          
           
        }}	
         menuItemStyles={{
  button: {
        backgroundColor: undefined,
        '&:hover': {
           backgroundColor: "#4D774E",
        }, 
        fontSize:"25px"
        
    },
}} >

 
        <Item title="All" link="/"/>
        <Item title="Main Course" link="Main Course"/>
        <Item title="Beverages" link="Beverages"/>
        <Item title="Desserts" link="Desserts"/>
   
 
 
        </Menu>
    </Box>)}

    </Box>
    </Sidebar>
   
    
    </Box>
    
  )
}

export default Categories