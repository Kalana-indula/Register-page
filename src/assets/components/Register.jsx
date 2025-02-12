import './register.css';

const Register = () => {
    return (
        <div className="flex">
            <div className="left-panel w-[40vw] h-screen p-10 flex flex-col justify-center items-start relative">
                <div className="logo-div flex items-center mb-8 absolute top-[100px]">
                    <img src="/logo.png" alt='logo' className='mr-[10px] w-[50px] h-[50x] object-cover' />
                    <div className='text-white text-xl font-bold w-[200px]'>
                        GINYARD INTERNATIONAL CO.
                    </div>
                </div>
                <div className="middle-text-bold text-[40px] font-bold text-white leading-tight mb-4">
                    JOIN US AND TRANSFORM YOUR DIGITAL JOURNEY!
                </div>
                <div>
                    <p className="text-white text-[18px] leading-[22px]">Create your account in minutes and unlock access to premium services.</p>
                </div>
                <div>
                    <p className="w-[450px] text-white text-[18px] italic leading-[22px] absolute bottom-[70px]">By registering, you agree to recieve occasional updates and offers from us.You can unsubscribe at any time.</p>
                </div>

            </div>

            <div className="right-panel w-[60vw] h-screen bg-white flex flex-col justify-center items-center">
                <div>
                    
                </div>
                <form className="w-full max-w-xl space-y-6">
                    <div className="space-y-4">
                        <div className="flex justify-center items-center
                        mb-[40px]">
                            <input type="text" placeholder="First Name" className="w-full p-3 border rounded-lg
                            mr-[20px]"/>
                            <input type="text" placeholder="Last Name" className="w-full p-3 border rounded-lg" />
                        </div>

                        <input type="email" placeholder="Email Address" className="w-full p-3 border rounded-lg
                        mb-[40px]" />

                        <div className="flex justify-center items-center
                        mb-[40px]">
                            <input type="tel" placeholder="Phone Number" className="w-full p-3 border rounded-lg
                            mr-[20px]"/>
                            <input type="text" placeholder="Country" className="w-full p-3 border rounded-lg" />
                        </div>

                        <div className="flex justify-center items-center
                        mb-[40px]" >
                        <input type="password" placeholder="Password" className="w-full p-3 border rounded-lg
                        mr-[20px]" />
                        <input type="password" placeholder="Repeat Password" className="w-full p-3 border rounded-lg" />
                        </div>
                        
                    </div>

                    <button type="submit" className="reg-button w-full py-3 bg-[#5447ca] text-white text-lg rounded-lg
                     hover:bg-[#6847ca] transition duration-300 ease-in-out active:bg-[#8765ee]
                     active:transition duration-75 ease-in-out">
                        REGISTER NOW!
                    </button>
                    <div className="mt-[10px] text-start">
                        <span className="text-sm text-gray-600">
                            Already have an account?
                            <a href="#" className="text-[#8456e2] font-semibold"> Log In Here</a>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
