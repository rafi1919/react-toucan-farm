
interface image {
    image:any;
    text: string;
    // image: any;
}

const imageGallery: image[] =[
    {image: 'https://images.pexels.com/photos/255469/pexels-photo-255469.jpeg?auto=compress&cs=tinysrgb&w=600' ,
    text:'How to make great crops from only 60 days of watering adn sunlight'},    
    {image: 'https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=600',
    text:'I eat ass' },
    {image: 'https://images.pexels.com/photos/2255924/pexels-photo-2255924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text:'the amount of shit that came from the cattle makes as good shot for the vegetables' },    
]

interface footer {
    text: string
}

const footerContent: footer[]= [
    {text:'How to make great crops from only 60 days of watering adn sunlight'},    
    {text:'I eat ass' },
    {text:'the amount of shit that came from the cattle makes as good shot for the vegetables' },
]


function Blog(){
    return(
        <>
            <div className='w-full h-[60vh] mt-20 bg-white'>
                <div className='p-6  md:px-3'>
                    <div className="text-center mx-auto md:w-[400px]">
                        <h1 className="text-h3">Toucan Blog</h1>
                        <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus repellat officiis blanditiis reprehenderit fugiat beatae dolorum sit illum.</p>
                    </div>
                    <div className="flex justify-center gap-5 ">
                        {imageGallery.map((item, index)=>(
                            <div key={index} className="max-w-[200px]">
                            <img src={item.image} className="object-cover md:max-w-[200px] md:max-h-[200px] w-full h-full transition duration-300 ease-in-out transform hover:bg-green hover:bg-opacity-50" />
                                <p className="text-[11px]">
                                    {item.text}
                                </p>
                            </div>
                        ))}               
                    </div>
                </div>
                <div className="text-center mt-20 mx-auto max-w-[960px] max-h-[120px] bg-white drop-shadow-2xl p-6 -mb-16">
                        <h1 className="text-h3">Toucan Footer</h1>
                        <p className="md:text-base text-[12px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus repellat officiis blanditiis reprehenderit fugiat beatae dolorum sit illum.</p>
                    </div>
                <div className="w-full h-[60vh] bg-green">
                <div className="py-10">

                <div className='text-center mx-auto max-w-[960px]'>
                    <div className="flex justify-center gap-5 mt-14 ">
                        {footerContent.map((item, index)=>(
                            <div key={index} className=" w-[200px] h-[200px] text-white">
                                    <p>{item.text}</p>
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