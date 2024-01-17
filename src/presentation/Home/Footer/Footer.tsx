
interface image {
    name: string;
}

const imageGallery: image[] =[
    {name: 'Footer' },    
    {name: 'cow' },
    {name: 'carrot' },    
    {name: 'truck' },    


]

function Footer(){
    return(
        <>
            <div className='w-full h-[60vh] bg-green'>
            <div className="text-center mx-auto mt-20 w-[960px] h-[120px] bg-white drop-shadow-2xl">
                <h1 className="text-h3">Toucan Footer</h1>
                <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus repellat officiis blanditiis reprehenderit fugiat beatae dolorum sit illum.</p>
            </div>
                <div className='text-center mx-auto w-[960px]'>
                    <div className="flex justify-center gap-5 mt-14 ">
                        {imageGallery.map((item, index)=>(
                            <div key={index} className=" w-[200px] text-white">
                                    <p>{item.name}</p>
                            </div>
                        ))}
                      
                       
                    </div>
                </div>
            </div>
        </>
    )
};
export default Footer