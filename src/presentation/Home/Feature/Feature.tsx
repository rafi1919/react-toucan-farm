



function Features (){

    return(
        <>
            <div className='w-full md:h-[100vh] h-[100%] bg-grey'>
                <div className='mx-auto max-w-[960px]'>
                    <div className="text-center mx-auto w-[300px] py-14">
                        <h1 className="text-h3 font-bold">Our Features</h1>
                        <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus repellat officiis blanditiis</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4 justify-items-center grid-cols-1">
                        <div className="bg-white py-3 max-w-[300px] md:h-[400px] h-fit flex flex-col justify-center items-center text-center shadow-md transition duration-300 ease-in-out transform hover:translate-y-[-5%]">
                            <svg width="72" height="70" viewBox="0 0 122 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="60.6818" cy="60" rx="60.6818" ry="60" fill="#348452"/>
                            <path d="M45.9487 52.9565C46.7615 52.794 47.4765 52.3153 47.9363 51.6258C48.3962 50.9362 48.5633 50.0921 48.4008 49.2794C48.2384 48.4666 47.7597 47.7516 47.0701 47.2918C46.3805 46.8319 45.5365 46.6648 44.7237 46.8273C40.9612 47.5773 38.1196 50.2106 36.6071 53.7398C35.1071 57.2315 34.8862 61.5981 36.0571 66.2731C36.1485 66.6794 36.3202 67.0634 36.5621 67.4024C36.8041 67.7414 37.1113 68.0286 37.4658 68.2471C37.8203 68.4657 38.2149 68.6112 38.6265 68.6751C39.038 68.739 39.4582 68.7199 39.8623 68.6191C40.2664 68.5183 40.6462 68.3377 40.9795 68.088C41.3128 67.8383 41.5929 67.5245 41.8032 67.165C42.0135 66.8056 42.1498 66.4077 42.2041 65.9948C42.2584 65.5819 42.2297 65.1623 42.1196 64.7606C41.2029 61.1023 41.5029 58.1773 42.3487 56.2023C43.1821 54.2606 44.5071 53.2481 45.9487 52.9565ZM33.7571 20.3898C33.5793 23.348 34.0124 26.3111 35.0296 29.0946C36.0468 31.8782 37.6263 34.4224 39.6696 36.569C35.7002 37.707 32.1465 39.9726 29.4395 43.0908C26.7325 46.209 24.9887 50.0458 24.4196 54.1356C23.0481 63.949 25.0615 73.9367 30.1279 82.4523L31.5862 84.9106C31.6415 85.0011 31.7013 85.0887 31.7654 85.1731L37.6654 93.1148C38.915 94.798 40.5166 96.1885 42.3584 97.1897C44.2003 98.1908 46.2382 98.7785 48.3303 98.9118C50.4224 99.045 52.5185 98.7207 54.4724 97.9613C56.4264 97.2019 58.1914 96.0258 59.6446 94.5148C59.8145 94.3381 60.0183 94.1975 60.2438 94.1015C60.4693 94.0055 60.7119 93.956 60.957 93.956C61.2022 93.956 61.4448 94.0055 61.6703 94.1015C61.8958 94.1975 62.0997 94.3381 62.2696 94.5148C63.7227 96.0258 65.4877 97.2019 67.4417 97.9613C69.3956 98.7207 71.4917 99.045 73.5838 98.9118C75.6759 98.7785 77.7138 98.1908 79.5557 97.1897C81.3975 96.1885 82.9991 94.798 84.2487 93.1148L90.1487 85.169C90.2115 85.0845 90.2699 84.9969 90.3237 84.9065L91.7862 82.4481C96.856 73.9353 98.8738 63.949 97.507 54.1356C97.1036 51.244 96.111 48.466 94.5905 45.9735C93.0701 43.4811 91.0542 41.3272 88.6677 39.6453C86.2812 37.9635 83.5749 36.7893 80.7162 36.1957C77.8576 35.602 74.9076 35.6014 72.0487 36.194L64.1279 37.8356H64.1154C64.2404 34.5856 64.7487 31.0856 65.7446 28.094C66.9529 24.4773 68.6279 22.3023 70.4946 21.5273C71.2598 21.2079 71.8669 20.5976 72.1822 19.8307C72.4975 19.0638 72.4952 18.203 72.1758 17.4377C71.8564 16.6724 71.2462 16.0654 70.4792 15.7501C69.7123 15.4348 68.8515 15.4371 68.0862 15.7565C63.7029 17.5856 61.2112 21.9231 59.8154 26.1148L59.6237 26.7065C58.5976 24.7238 57.2724 22.9109 55.6946 21.3315C53.5336 19.1681 50.9378 17.4885 48.0789 16.4038C45.22 15.3192 42.1633 14.8542 39.1112 15.0398C37.7184 15.12 36.4034 15.7086 35.4157 16.6939C34.428 17.6793 33.8363 18.9929 33.7529 20.3856L33.7571 20.3898ZM39.9779 21.2523C42.0688 21.1919 44.1499 21.56 46.0932 22.3339C48.0365 23.1078 49.8009 24.2711 51.2779 25.7523C52.7591 27.2293 53.9224 28.9937 54.6963 30.937C55.4701 32.8803 55.8382 34.9614 55.7779 37.0523C55.0222 37.0728 54.266 37.038 53.5154 36.9481L50.9446 36.4148C48.501 35.6858 46.2782 34.3581 44.4779 32.5523C42.9967 31.0753 41.8334 29.3109 41.0595 27.3676C40.2856 25.4243 39.9175 23.3432 39.9779 21.2523ZM48.5987 42.3106L49.4404 42.4856C50.4404 42.769 51.4571 42.9815 52.4821 43.119L56.5237 43.9523C59.451 44.5587 62.4715 44.5587 65.3987 43.9523L73.3237 42.3106C75.3452 41.8917 77.4311 41.8921 79.4524 42.312C81.4737 42.7319 83.3873 43.5622 85.0747 44.7516C86.762 45.9409 88.1873 47.464 89.2622 49.2265C90.3371 50.989 91.0388 52.9535 91.3237 54.9981C92.4938 63.4053 90.764 71.9602 86.4196 79.2523L85.0404 81.5731L79.2362 89.3898C78.5279 90.3439 77.6201 91.1322 76.576 91.6996C75.5319 92.2671 74.3766 92.6001 73.1907 92.6755C72.0047 92.7508 70.8166 92.5667 69.7091 92.136C68.6016 91.7053 67.6013 91.0383 66.7779 90.1815C66.0251 89.3981 65.1219 88.7748 64.1224 88.349C63.1229 87.9233 62.0476 87.7038 60.9612 87.7038C59.8748 87.7038 58.7996 87.9233 57.8 88.349C56.8005 88.7748 55.8973 89.3981 55.1446 90.1815C54.3211 91.0383 53.3208 91.7053 52.2133 92.136C51.1058 92.5667 49.9177 92.7508 48.7318 92.6755C47.5458 92.6001 46.3906 92.2671 45.3465 91.6996C44.3024 91.1322 43.3946 90.3439 42.6862 89.3898L36.8821 81.5731L35.5029 79.2523C31.1599 71.9596 29.4316 63.4048 30.6029 54.9981C30.8879 52.9539 31.5894 50.9899 32.6641 49.2277C33.7387 47.4655 35.1636 45.9427 36.8505 44.7533C38.5374 43.564 40.4504 42.7336 42.4712 42.3134C44.492 41.8933 46.5775 41.8923 48.5987 42.3106Z" fill="white"/>
                            </svg>

                            <h6 className="text-h5">bang</h6>
                            <p className="text-sm ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus repellat </p>
                            <a href="#" className="mt-5">Read more</a>
                        </div>
                        <div className="bg-white py-3 max-w-[300px] md:h-[400px] h-fit flex flex-col justify-center items-center text-center shadow-md transition duration-300 ease-in-out transform hover:translate-y-[-5%]">
                            <svg width="70" height="70" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="60" cy="60" r="60" fill="#FFB02A"/>
                            <g clip-path="url(#clip0_199_30)">
                            <path d="M92.5 92.5L27.5 27.5M70.7 89.74C67.2722 91.6046 63.4166 92.5412 59.5153 92.4569C55.6141 92.3727 51.8025 91.2705 48.4584 89.2597C45.1142 87.2488 42.3535 84.3991 40.4498 80.9928C38.5461 77.5865 37.5654 73.742 37.605 69.84C37.834 66.4943 38.6781 63.2195 40.095 60.18M80.1 80.1C81.6764 76.9664 82.4982 73.5077 82.5 70C82.5 57.55 60 27.5 60 27.5C60 27.5 53.13 36.675 46.985 46.985" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_199_30">
                            <rect width="70" height="70" fill="white" transform="translate(25 25)"/>
                            </clipPath>
                            </defs>
                            </svg>

                            <h6 className="text-h5">bang</h6>
                            <p className="text-sm ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus repellat </p>
                            <a href="#" className="mt-5">Read more</a>
                        </div>
                        <div className="bg-white py-3 max-w-[300px] md:h-[400px] h-fit flex flex-col justify-center items-center text-center shadow-md transition duration-300 ease-in-out transform hover:translate-y-[-5%]">
                            <svg width="72" height="70" viewBox="0 0 122 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="60.6818" cy="60" rx="60.6818" ry="60" fill="#FA6A4C"/>
                            <path d="M47.0417 25C57.525 25 66.5625 31.1958 70.6917 40.125C72.475 39.7708 74.3208 39.5833 76.2083 39.5833H95.4792C97.8274 39.5833 100.08 40.5162 101.74 42.1767C103.4 43.8371 104.333 46.0892 104.333 48.4375V67.7083C104.333 83.2417 91.7417 95.8333 76.2083 95.8333C69.6475 95.8437 63.2912 93.5507 58.2479 89.3542L48.3625 99.2375C47.8741 99.7259 47.2116 100 46.5208 100C45.8301 100 45.1676 99.7259 44.6792 99.2375C44.1907 98.7491 43.9163 98.0866 43.9163 97.3958C43.9163 96.7051 44.1907 96.0426 44.6792 95.5542L54.5646 85.6688C52.4145 83.0829 50.7464 80.1319 49.6396 76.9563C48.7854 77.0396 47.9188 77.0833 47.0417 77.0833C32.6583 77.0833 21 65.425 21 51.0417V33.8542C21 31.5059 21.9328 29.2538 23.5933 27.5933C25.2538 25.9328 27.5059 25 29.8542 25H47.0417ZM61.95 85.65C66.0004 88.8785 71.0287 90.633 76.2083 90.625C88.8646 90.625 99.125 80.3646 99.125 67.7083V48.4375C99.125 47.4706 98.7409 46.5432 98.0572 45.8595C97.3734 45.1758 96.4461 44.7917 95.4792 44.7917H76.2083C63.5521 44.7917 53.2917 55.0521 53.2917 67.7083C53.2917 73.0979 55.1521 78.0542 58.2667 81.9667L76.9792 63.2542C77.221 63.0123 77.5081 62.8205 77.8241 62.6896C78.1401 62.5587 78.4788 62.4913 78.8208 62.4913C79.1629 62.4913 79.5015 62.5587 79.8175 62.6896C80.1335 62.8205 80.4207 63.0123 80.6625 63.2542C80.9044 63.496 81.0962 63.7831 81.2271 64.0991C81.358 64.4151 81.4253 64.7538 81.4253 65.0958C81.4253 65.4379 81.358 65.7765 81.2271 66.0925C81.0962 66.4085 80.9044 66.6957 80.6625 66.9375L61.95 85.65ZM47.0417 71.875C47.4917 71.875 47.9396 71.8604 48.3833 71.8333C48.1831 70.4675 48.0828 69.0888 48.0833 67.7083C48.0833 64.1542 48.7438 60.7521 49.9458 57.6208L36.3458 44.0208C35.8574 43.5324 35.583 42.8699 35.583 42.1792C35.583 41.4884 35.8574 40.8259 36.3458 40.3375C36.8343 39.8491 37.4967 39.5747 38.1875 39.5747C38.8783 39.5747 39.5407 39.8491 40.0292 40.3375L52.4083 52.7167C55.5535 47.7332 60.1794 43.8591 65.6375 41.6375C63.8981 38.199 61.2391 35.3104 57.9562 33.2926C54.6733 31.2749 50.8951 30.2073 47.0417 30.2083H29.8542C28.8872 30.2083 27.9599 30.5924 27.2762 31.2762C26.5924 31.9599 26.2083 32.8872 26.2083 33.8542V51.0417C26.2083 62.5479 35.5354 71.875 47.0417 71.875Z" fill="white"/>
                            </svg>

                            <h6 className="text-h5">bang</h6>
                            <p className="text-sm ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus repellat </p>
                            <a href="#" className="mt-5">Read more</a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
};
export default Features