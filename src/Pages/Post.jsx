import { useLocation, useParams } from "react-router-dom";

 
const Post=()=>{
   const {id}=useParams();

   const query=new URLSearchParams(useLocation().search)
//    console.log(useLocation());
//    console.log("sdlfj")

     return(
        <>
         <h2>Id is={id} </h2>
        <h2>{query.get("first")}</h2>
        <h2>{query.get("last")}</h2>
        </>
       
     )
} 
export default Post; 