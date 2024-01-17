import Button from "../../UI/Components/Button/Button"


function Description (){
    return (
        <>
            <div className="w-full md:h-[70vh] h-[100%] bg-white">
                <div className="mx-auto max-w-[960px] p-6  md:px-3">
                    <div className="grid md:grid-cols-2 pt-20 gap-4">
                        <div className="">
                            <div className="bg-slate-500 w-full ">
                                <img src="https://images.pexels.com/photos/259280/pexels-photo-259280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="object-cover h-[300px]" />
                            </div>
                        </div>
                        <div className="">      
                            <h1 className="text-h1 font-Playpen-Sans">Welcome to Toucan Organic</h1>
                            <h3 className="text-h5 font-thin tracking-widest py-5">WITH LOVE AND DEDICATION</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, ducimus natus iste, sit maxime fugit, hic labore error at officiis nemo asperiores odio culpa. Vel aspernatur amet minus minima necessitatibus.</p>
                            <Button
                            className="mt-4"
                             text='login' 
                             onClick={function (): void {
                               throw new Error('Function not implemented.')
                             } } 
                            />
                        </div>
                    </div>
                </div>
            </div>            

        </>
    )
};
export default Description