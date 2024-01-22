import Button from "../../UI/Components/Button/Button"

interface FeedbackItem {
    title: string;
    description: string;
  }

  const feedbackData: FeedbackItem[] = [
    { title: 'Good', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur quo fugit sed delectus repellendus expedita sequi distinctio' },
    { title: 'Bad', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur quo fugit sed delectus repellendus expedita sequi distinctio' },
    { title: 'Meeh', description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur quo fugit sed delectus repellendus expedita sequi distinctio' },
  ];

function Choose(){
    return(
        <>
             <div className="w-full md:h-[100vh] h-[100%] bg-white">
                <div className="mx-auto max-w-[960px] p-6  md:px-3">
                    <div className="grid md:grid-cols-2 pt-20 gap-x-5">
                        <div className="mt-7">
                            <img src="https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className=" object-cover h-full"/>
                        </div>
                        <div className="">      
                            <h1 className="text-h1 font-thin">Why Choose Us</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis fugit maiores natus iusto accusamus a rerum quos quasi autem, dolor eum eius cupiditate deserunt repellat temporibus. Odit pariatur nam officia.</p>
                        <div className="mt-7">
                            {feedbackData.map((item, index)=> (

                            <div key={index} className="flex flex-row ">
                                <svg width="92" height="90" viewBox="0 0 122 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="60.6818" cy="60" rx="60.6818" ry="60" fill="#348452"/>
                                <path d="M52.832 80L33.832 61L38.582 56.25L52.832 70.5L83.4154 39.9166L88.1654 44.6666L52.832 80Z" fill="white"/>
                                </svg>
                            <div className="ml-4">
                                <h4 className="text-h4 font-thin ">{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
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
export default Choose