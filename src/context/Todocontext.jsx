import react,{useContext,createContext} from "react";
export const Todocontext =createContext({
   //properities
   Todos:[
      {
      id:1,
      todo:"Todo msg", //MESSAGE JO DISPLAY HOGA
      completed: false,
     }
   ],
   //functionality par baat nhi ki just method banaya hai
   addTodo:(todo)=>{},
   updateTodo:(id,todo)=>{},
   deleteTodo:(id)=>{},
   toggoleComplete :(todo)=>{},


   
});
export const usetodo = ()=>
{

   return useContext(Todocontext)
}
export const Todoprovider = Todocontext.Provider
