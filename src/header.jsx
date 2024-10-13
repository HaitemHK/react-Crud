function Header(){
    return(
        <>
        <div className="border-b-2 pt-3 flex w-full h-20 items-center justify-between p-2">
           <span className="text-stone-100 font-sans text-2xl font-bold">Homework</span>
           <ul className="flex flex-row gap-3 text-stone-100 text-lg">
            <li className='hover:cursor-pointer hover:scale-x-110 hover:translate-y-2 hover:duration-300 hover:ease-in-out hover:delay-100 hover:px-2 hover:underline font-sans'>option 1</li>
            <li className='hover:cursor-pointer hover:scale-x-110 hover:translate-y-2 hover:duration-300 hover:ease-in-out hover:delay-100 hover:px-2 hover:underline font-sans'>option 2</li>
            <li className='hover:cursor-pointer hover:scale-x-110 hover:translate-y-2 hover:duration-300 hover:ease-in-out hover:delay-100 hover:px-2 hover:underline font-sans'>option 3</li>
           </ul>
           <span className="gap-3">
                <button className="border-2 p-2 mx-2 rounded-2xl border-cyan-100 text-slate-100">Button 1</button>
                <button className="border-2 p-2 mx-2 rounded-2xl border-cyan-100 text-slate-100">Button 2</button>
           </span>
        </div>
        </>
    )
}

export default Header