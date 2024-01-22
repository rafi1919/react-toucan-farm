
interface image {
    name: string;
   number: string;
}

const imageGallery: image[] =[
    {name: 'Movement',
     number:'62+', },    
    {name: 'cow',
    number:'62+', },
    {name: 'carrot',
    number:'62+', },    
    {name: 'truck',
    number:'62+', },    


]

function Movement(){
    return(
        <>
            <div className='w-full h-[50vh] mt-20 bg-green'>
                <div className='mx-auto max-w-[960px] px-6 md:px-3'>
                    <div className="text-center mx-auto">
                        <h1 className="md:text-h3 text-h4  text-white py-14">We Are Startup Company. Experts In Field <br/> Organic Startup movement </h1>
                    </div>
                    <div className="grid grid-cols-4 justify-center gap-4 ">
                        {imageGallery.map((item, index)=>(
                            <div key={index} className="text-white  text-center">
                                    <p className="md:text-h1 text-h3 font-thin">{item.number}</p>
                                    <p>{item.name}</p>
                            </div>
                        ))}
                      
                       
                    </div>
                </div>
            </div>
        </>
    )
};
export default Movement