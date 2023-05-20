import ItemCard from "../ItemCard";
import  ItemData  from "../../data/ItemData";
import { Box } from "@mui/material";

const Home = ()=>{
    return(
        <Box  style={{
            display: "flex",
            flexWrap: "wrap",
            
            
          }}>
             {ItemData.length > 0 ? ( ItemData.map((item, index)=>{
        return(
          <ItemCard
            id={index}
            key= {index}
            name = {item.Name}
            image = {item.img}
            price = {item.Price}
          />
        )
      })):<p>nothing to Display</p>}
        </Box>
    )
}

export default Home;