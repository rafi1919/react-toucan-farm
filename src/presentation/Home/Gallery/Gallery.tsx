
interface image {
    name: string;
    image: any;
}

const imageGallery: image[] =[
    {
        name: 'farmer',
        image:'https://media.istockphoto.com/id/1445941332/id/foto/seorang-petani-menyimpan-sayuran-di-kebun-fokus-selektif.jpg?s=612x612&w=0&k=20&c=WrXqyJiy_RZWMex3Ahs8ttzQ6I3mAIVYAM3zLsLrf9s='
     },    
    {
        name: 'cow',
        image:'https://images.pexels.com/photos/7543209/pexels-photo-7543209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
    },
    {
        name: 'carrot',
        image: 'https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
     },    
    {
        name: 'truck',
        image:'https://images.pexels.com/photos/1009916/pexels-photo-1009916.jpeg?auto=compress&cs=tinysrgb&w=600'
    },    
    {
        name: 'pine',
        image:'https://images.pexels.com/photos/4975390/pexels-photo-4975390.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        name: 'leaf',
        image:'https://images.pexels.com/photos/14046786/pexels-photo-14046786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
     },    
    {
        name: 'milk',
        image:'https://media.istockphoto.com/id/1020693366/id/foto/pertanian-blueberry.jpg?s=612x612&w=0&k=20&c=XeGuwDTvbZqF_uB2Z0CqElMPYbni2o2zLeRuGhJQppE=',
    },
    {
        name: 'milk',
        image:'https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
     },


]

function Gallery(){
    return(
        <>
            <div className='w-full md:h-[100vh] h-[100%] bg-white'>
                <div className='p-6 md:px-3'>
                    <div className="text-center mx-auto max-w-[400px] ">
                        <h1 className="text-h3">Gallery</h1>
                        <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus repellat officiis blanditiis reprehenderit fugiat beatae dolorum sit illum.</p>
                    </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 mt-6">
                        {imageGallery.map((item, index)=>(
                            <div key={index} className=" bg-green ">
                                    <img src={item.image} className="object-cover min-w-[300px] min-h-[300px] transition duration-300 ease-in-out transform hover:opacity-30"  />
                            </div>
                        ))}
                      
                    </div>
                </div>
            </div>
        </>
    )
};
export default Gallery