
interface image {
    name: string;
    text: string;
    // image: any;
}

const imageGallery: image[] =[
    {name: 'Blog' ,
    text:'lorem'},    
    {name: 'cow',
    text:'lorem' },
    {name: 'carrot',
    text:'lorem' },    
    {name: 'truck',
    text:'lorem' },    
]



function Blog(){
    return(
        <>
            <div className='w-full h-[60vh] mt-20 bg-white'>
                <div className='p-6  md:px-3'>
                    <div className="text-center mx-auto w-[400px]">
                        <h1 className="text-h3">Toucan Blog</h1>
                        <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus repellat officiis blanditiis reprehenderit fugiat beatae dolorum sit illum.</p>
                    </div>
                    <div className="flex justify-center gap-5 ">
                        {imageGallery.map((item, index)=>(
                            <div key={index}>
                            <div  className="bg-slate-400 w-[200px] h-[200px] transition duration-300 ease-in-out transform hover:bg-green hover:bg-opacity-50">
                                    <p>{item.name}</p>
                            </div>
                                <p>
                                    {item.text}
                                </p>
                            </div>
                        ))}               
                    </div>
                </div>
                <div className="text-center mt-20 mx-auto max-w-[960px] max-h-[120px] bg-white drop-shadow-2xl p-6 -mb-10">
                        <h1 className="text-h3">Toucan Footer</h1>
                        <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus repellat officiis blanditiis reprehenderit fugiat beatae dolorum sit illum.</p>
                    </div>
                <div className="w-full h-[60vh] bg-green">
                <div className="py-10">

                <div className='text-center mx-auto max-w-[960px]'>
                    <div className="flex justify-center gap-5 mt-14 ">
                        {imageGallery.map((item, index)=>(
                            <div key={index} className=" w-[200px] h-[200px] text-white">
                                    <p>{item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>             
                </div>
                </div>
            </div>
        </>
    )
};
export default Blog