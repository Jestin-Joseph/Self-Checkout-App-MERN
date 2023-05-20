import ItemCard from "../ItemCard";
import  ItemData  from "../../data/ItemData";
import { Box } from "@mui/material";

const MainCourse = ()=>{
    return(
        <Box  style={{
            display: "flex",
            flexWrap: "wrap",         
          }}>
            { ItemData.length > 0 ? ItemData.filter(item => item.category === "Main Course").map((item, index)=>{
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

export default MainCourse;