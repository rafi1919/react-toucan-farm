
interface image {
    name: string;
    // image: any;
}

const imageGallery: image[] =[
    {name: 'farmer' },    
    {name: 'cow' },
    {name: 'carrot' },    
    {name: 'truck' },    


]

function Farmer(){
    return(
        <>
            <div className='w-full md:h-[60vh] h-[100%] mt-20 bg-white'>
                <div className='p-6 md:px-3'>
                    <div className="text-center mx-auto md:w-[400px]">
                        <h1 className="text-h3">Toucan Farmer</h1>
                        <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus repellat officiis blanditiis reprehenderit fugiat beatae dolorum sit illum.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 justify-center md:gap-5 gap-1 my-5 ">
                        {imageGallery.map((item, index)=>(
                            <div key={index} className="bg-slate-400 w-[full] h-[full] transition duration-300 ease-in-out transform hover:bg-green hover:bg-opacity-50">
                                    <p>{item.name}</p>
                            </div>
                        ))}
                      
                       
                    </div>
                </div>
            </div>
        </>
    )
};
export default Farmer