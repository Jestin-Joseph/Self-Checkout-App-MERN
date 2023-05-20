import ItemCard from "../ItemCard";
import  ItemData  from "../../data/ItemData";
import { Box } from "@mui/material";

const Beverages = ()=>{
    return(
        <Box  style={{
            display: "flex",
            flexWrap: "wrap",         
          }}>
            { ItemData.length > 0 ? ItemData.filter(item => item.category === "Beverages").map((item, index)=>{
                return(
                <ItemCard
                    id={index}
                    key= {index}
                    name = {item.Name}
                    image = {item.img}
                    price = {item.Price}
                />)
            }): <p>nothing to display</p> }
          </Box>
    )
}

export default Beverages;