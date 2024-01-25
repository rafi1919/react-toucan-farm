
interface image {
    image: any;
    // image: any;
}

const imageGallery: image[] =[
    {image: 'https://media.istockphoto.com/id/97999276/id/foto/petani-tua-frustrasi.jpg?s=612x612&w=0&k=20&c=i8ghTRO-3JWf7xCcTgPp03WYJ6jnEzDtAbU1ADOulYI=' },    
    {image: 'https://media.istockphoto.com/id/1432272128/id/foto/potret-informal-luar-ruangan-dari-pekerja-pertanian-muda-yang-ceria.jpg?s=612x612&w=0&k=20&c=TlZy78TDsYv4BJWbqKoXZxBret6JaNVquBqPXj-APYw=' },
    {image: 'https://media.istockphoto.com/id/1265606447/id/foto/potret-seorang-petani-senior-yang-tersenyum.jpg?s=612x612&w=0&k=20&c=c0it0a6RazTNwfJPw8PS7etEFMSJFhfIB6x8qSBxQK4=' },    
    {image: 'https://media.istockphoto.com/id/1214141412/id/foto/ahli-agronomi.jpg?s=612x612&w=0&k=20&c=FR21__drGXxz1jAKxIb_qWZs5mC1DHbs_05ECuQHE5g=' },    


]

function Farmer(){
    return(
        <>
            <div className='w-full md:h-[60vh] h-[100%] mt-20 bg-white'>
            <div className='mx-auto max-w-[960px] px-6 md:px-3'>
                    <div className="text-center mx-auto md:max-w-[400px]">
                        <h1 className="text-h3 font-bold">Toucan Farmer</h1>
                        <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus repellat officiis blanditiis reprehenderit fugiat beatae dolorum sit illum.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 justify-center md:gap-5 gap-1 my-5 ">
                        {imageGallery.map((item, index)=>(
                        <div key={index} className=" bg-green ">
                            <img src={item.image} className="object-cover md:min-w-[200px] md:min-h-[200px] w-full h-full transition duration-300 ease-in-out transform hover:opacity-30"  />
                        </div>
                        ))}
                      
                       
                    </div>
                </div>
            </div>
        </>
    )
};
export default Farmer