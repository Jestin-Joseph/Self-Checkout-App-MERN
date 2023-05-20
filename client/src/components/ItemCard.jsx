
import Card from '@mui/material/Card';
import { Box, CardContent, Typography } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';

import PlusMinus from './AddMinus';



const ItemCard = (props)=>{

    return(
            <Card sx={{width:"30vh", height:"40vh", background:"#164A41", ml:"20px", borderRadius:"20px"}}>
            
                
                <Box sx={{  margin:"10px"}}>
                    <CardMedia
                        component="img"
                        image={props.image}
                    
                        sx={{borderRadius:"20px", height:"160px"}}

                    />
                </Box>
                
                <Typography sx={{color:"#ffffff", textAlign:"center", fontSize:"25px"}}>
                    {props.name}
                </Typography>
        
                <Box style={{display:"flex", alignItems: "center", justifyContent:"center", margin:"5px"}}>
                <Typography sx={{color:"#9DC88D", fontSize:"21px", ml:"10px", mt:"10px",}}>
                ${props.price}  
                </Typography>
                <Box sx={{ml:"15px", mt:"15px", }}><PlusMinus/></Box>
                
                </Box>


            


            </Card>
    )

}

export default ItemCard;