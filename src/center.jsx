import { useState } from "react"

function Center(){
    
    let [userList,setUserlist] = useState([])
    const[id,setId]= useState(0)
    const[fname,setFname] =useState('')
    const[lname,setLname] =useState('')


    function showUsers(e){
        e.preventDefault()
        setUserlist(userList.concat({id:id,fname:fname,lname:lname}))
    }


    function Del_User(userId){
        setUserlist(userList.filter((e)=>{
            return e.id!== userId
            }))
        }


    return(
        <>
            <div className="flex justify-center h-max p-40 items-center flex-col">
                
                <form action="" method="post" className="flex flex-col border-4 h-min rounded-3xl px-2 py-2 justify-evenly w-96">
                    <label htmlFor="id" className="p-3 text-xl font-sans font-semibold text-white">ID :</label>
                    <input onChange={(e)=>{setId(e.target.value)}} type="number" min="1" name="id" className="p-2 outline-none"placeholder="Id"/>
                    <label htmlFor="prenom" className="p-3 text-xl font-sans font-semibold text-white">First Name :</label>
                    <input onChange={(e)=>{setFname(e.target.value)}} type="text" name="prenom" className="p-2 outline-none"  placeholder="John"/>
                    <label htmlFor="" className="p-3 text-xl font-sans font-semibold text-white">Last Name :</label>
                    <input onChange={(e)=>{setLname(e.target.value)}} type="text" name="nom" className="p-2 outline-none" placeholder="Pork"/>
                    <button type="submit" className="mt-5 mx-24 text-xl text-white border-2 w-1/2 rounded-md bg-green-700" onClick={showUsers}>Save</button>
                </form>
                
            </div>
            <div>
                <table className="table w-full border-collapse">
                    <thead>
                        <tr className="thead-1 text-center font-bold text-white">
                            <th className="px-4 py-2 border-2 border-gray-200">ID</th>
                            <th className="px-4 py-2 border-2 border-gray-200">first Name</th>
                            <th className="px-4 py-2 border-2 border-gray-200">Last Name</th>
                            <th className="px-4 py-2 border-2 border-gray-200">Actions</th>    
                        </tr>    
                    </thead>
                    <tbody >
                        {userList.map((element,index)=>{
                            return <>
                                <tr className="tbody-2">
                                    <td className="text-left text-stone-400 border border-gray-300">{element.id}</td>
                                    <td  className="text-left text-stone-400 border border-gray-300">{element.fname}</td>
                                    <td  className="text-left text-stone-400 border border-gray-300">{element.lname}</td>
                                    <td className="text-left border border-gray-300">
                                        <button className="rounded-lg px-2 py-1 mr-2 ml-2 text-white bg-red-700" onClick={()=>Del_User(element.id)}>Delete</button>
                                        <button className="rounded-lg px-2 py-1 text-white bg-yellow-400">Modify</button>
                                    </td>
                                </tr>
                            </>
                            })
                            }

                        
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Center