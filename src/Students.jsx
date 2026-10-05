import {useState} from "react";

function Student(){
        const[nom,setNom] = useState("")
         function greetings(name){
            console.log("youness", name)
            setNom(name)
        }

        return(      
            <>
            <button onClick={()=>greetings("ouhdid")} className="bg-blue-500 text-white px-4 py-2 rounded-lg p-1">Button</button>
            <p>Welcome {nom}</p>
            </>
        )
    }
    export default Student 