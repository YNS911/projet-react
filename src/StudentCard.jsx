function StudentCard(props){
    return(
       <div className={`rounded-xl p-5 shadow ${props.note >= 10 ? "bg-green-400" : "bg-red-400" }`}>
           <p className="text-lg font-bold">
            id : {props.id}
          </p>
          <h3 className="text-lg font-bold">
            {props.nom}
          </h3>

          <p className="mt-2 text-slate-500">
            Note : {props.note} / 20
          </p>
          
        </div>
    )
}
export default StudentCard