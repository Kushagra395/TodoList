ismai todo bana hai jismai add ,update ,toggle mtlb complete hua ki nhi uske liye and delete bhi ho sakta hai
NOW WE WILL GO STEP BY STEP 

1. 1st context create karenge and context provider banaenge fir export karenge aab create mai hi kya kya lagega bass wo define karenge and properties state karenge  ...pura functionality idhar nhi define karenge wo sabh app jsx mai


  <export const Todocontext =createContext({
   //properities
   todos:[
      {
      id:1,
      todo:"Todo msg", 
      completed: false,
     }
      ],
      //functionality par baat nhi ki just method banaya hai
      addTodo:(todo)=>{},
      updateTodo:(id,todo)=>{},
      deleteTodo:(id)=>{},
      toggoleComplete :(todo)=>{ },
      });


2. now in app.js mai contextprovider mai sabh wrap karenge and jo jo value hai haam yaha fetch kar sakte hai and yaha par haam unki function decide karenge unko role provide karenge and 

//EK CHIZZ OBSERVE KARO CREATE MAI LIST BANAYA THO FUNCTION KESE LIKHA HAI addTodo:(todo)=>{}
AND SAME CHIZZ ABHI NORMAL APP.JSX MAI LIKHENGE THOO addTodo=(todo)=>{} HOA



3.   hame todo addtodo karna hai but prev hatana bhi nhi isliye ek method hai (prev)=>[...prev,new] 
     isse hoga ki prev wala array mai spread ho jaega and new todo jo add karna hai wo bhi add hoga

     ye todo jo createcontext mai todos tha usse alag hai wo todos tho sab todos ko represent karta hai ye todo tho app.jsx sai jaha haam likhene waha sai aayega

const addTodo =(todo)=>{
    setTodos((prev)=>[...prev,{id:Date.now(), ...todo}])
  }
  
4. aap update karna hai tho id and todo dono lagega 

const updateTodo =(id,todo)=>{
    setTodos((prev)=>prev.map(prevTodo)=>(prevTodo.id===id ? todo : prevTodo))

    isse hamne prev jitne todo thai usko map kiya ki sabpaar jaega and aap jiska id required id sai same hoga upar new todo set ho jaega ye hogaya update now

5. aab delete karna hai delete mai filter lagaenge filter ka kaam hai jo true statment hoga uspar hi kaam karenge baki par nhi so 

 const deleteTodo=(id)=>
   {
    setTodos((prev)=>prev.filter((prevtodo)=> prevtodo.id!==id))
   }
   aab jo match karega usko filter kar dega matlab nhi aane dega mtlb settodo mai nhi aate jaega and jo alag ahi wo set todo mai hote jaenge

6. last part toggle mtlb kaam khtm toggle kardo ismai haame aapne inner statment completed ko change karna padega tho same prev value par map chagaya fir jiski required id sai match kar gaya usmai spread ka use karenge {...prevtodo, completed: !prevtodo.completed } ye wala mtlb baki sabh same aega pass mera jo completed statment hai usko toggle kardena jo mera reve todos ka completed mai likha tha usse  

 const toggoleComplete=(id)=>
    {
      setTodos((prev)=>prev.map((prevtodo)=>prevtodo.id===id ? {...prevtodo, completed: !prevtodo.completed }:prevtodo))
    }




  ----- --------------------- ------------------- --------------------- -------------------- --------------- 
ko
                                  LOCAL STORAGE

 local storage mai store karne sai refresh karne ke baad data vese hi rehega   koi change nhi aaega as wo locally safe ho gaya hai 
                  
      useEffect(()=>{
      const todos = JSON.parse(localStorage.getItem("todos"/*name*/)) //converting string to json as  for data fetching
    },[])

    useEffect(()=>{
      localStorage.setItem("todos",JSON.stringify(Todos))
    },[Todos])

    2 chizz hoti hai set and get local storrage ke liye 

    localstorage.getiteam("key")
    localstorage.setItem("key","value")
    useeffect ka use karke jabh bhi Todos mai koi change aaega jabh so setiteam hoga and as local storage always string mai store karta hai so json.stringly sai strimg mai convert kar denge and local storage mai set karenge fir baad mai useeffect dusra use karke json.parse sai usko wapas component type mai convert karke const todos mai store karenge use aane par fetch karne ke liye





    more concept to learn


 JSON.stringify: Converts objects/arrays to a JSON string so they can be stored as strings in localStorage.
JSON.parse: Converts JSON strings back into objects or arrays after retrieving them from localStorage.
Array.isArray: Verifies if the parsed data is an array, adding a layer of safety to prevent errors.


