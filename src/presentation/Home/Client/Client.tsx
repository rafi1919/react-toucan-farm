
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
            <div className='w-full h-[80vh] mt-20 bg-white'>
                <div className=''>
                    <div className="text-center mx-auto w-[400px]">
                        <h1 className="text-h3 font-bold">Toucan Farmer</h1>
                        <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus repellat officiis blanditiis reprehenderit fugiat beatae dolorum sit illum.</p>
                    </div>
                    <div className="flex justify-center gap-5 ">
                        {imageGallery.map((item, index)=>(
                            <div key={index} className="bg-slate-400 w-[200px] h-[200px] transition duration-300 ease-in-out transform hover:bg-green hover:bg-opacity-50">
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