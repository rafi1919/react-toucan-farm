import Button from "../../UI/Components/Button/Button"

function Visit (){
    return(
        <>
        <div className='w-full md:h-[40vh] h-[100%] bg-green'>
                <div className="mx-auto max-w-[960px] p-6  md:px-3">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="text-white text-center md:text-left">
                            <h1 className="text-h1 font-thin">Our Features</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, repellendus. Ab veritatis repellendus est eos error! Libero, minima, id earum exercitationem voluptas officia culpa facilis, corporis animi accusantium aperiam! Aliquid?</p>
                        </div>
                        <div className="md:pt-20 text-center">      
                        <Button 
                            text='login' 
                            className='bg-yellow justify-center'
                            onClick={function (): void {
                                throw new Error('Function not implemented.')
                            }} 
                        />
                        </div>
                    </div>
                </div>
            </div>           
        </>
    )
};
export default Visit