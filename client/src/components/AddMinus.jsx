import { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';

const handleAdd = () =>{

}

const PlusMinus = ()=>{
    const [itemCount, setItemCount] = useState("Add")

    const handleAdd = () =>{
     if(itemCount === "Add"){
        setItemCount(1)
     }else{
        setItemCount(itemCount+1);
     }
    }

    const handleSubtract = () =>{
        if(itemCount === 1 || itemCount === "Add"){
           setItemCount("Add")
        }else{
            setItemCount(itemCount-1);
        }
       }

    return(
        <Box>
          <Box sx={{background:"#F1B24A", width: "100%",  borderRadius:"50px",alignItems:"center", display:"flex", justifyContent:"center"}}>
          <IconButton onClick={handleSubtract}>
            <RemoveOutlinedIcon sx={{ color:"#FFFFFF" }}/>
          </IconButton>
          <Typography sx={{color:"#FFFFFF", fontWeight:"bold"}}>
           {itemCount}
           </Typography>
           <IconButton onClick={handleAdd}>
            <AddOutlinedIcon sx={{  color:"#FFFFFF" }}/>
          </IconButton>
            </Box>
          
        </Box>
    )
}

export default PlusMinus;