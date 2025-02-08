import './register.css';

const Register = () => {
    return (
        <div className="flex">
            <div className="left-panel w-[40vw] h-screen bg-gradient-to-r from-[#8f7af7] to-[#8456e2] p-10 flex flex-col justify-center items-start">
                <div className="logo-div flex items-center mb-8">
                    <img src='' alt='logo' className='mr-[10px] w-[50px]' />
                    <div className='text-white text-xl font-bold'>
                        GINYARD INTERNATIONAL CO.
                    </div>
                </div>
                <div className="middle-text-bold text-[40px] font-bold text-white leading-tight mb-6">
                    JOIN US AND TRANSFORM YOUR DIGITAL JOURNEY!
                </div>
                <p className="text-white text-lg">Create your account in minutes and unlock access to premium services.</p>
            </div>

            <div className="right-panel w-[60vw] h-screen bg-white flex flex-col justify-center items-center p-8">
                <form className="w-full max-w-md space-y-6">
                    <div className="space-y-4">
                        <input type="text" placeholder="First Name" className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8456e2]" />
                        <input type="text" placeholder="Last Name" className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8456e2]" />
                        <input type="email" placeholder="Email Address" className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8456e2]" />
                        <input type="tel" placeholder="Phone Number" className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8456e2]" />
                        <input type="text" placeholder="Country" className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8456e2]" />
                        <input type="password" placeholder="Password" className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8456e2]" />
                        <input type="password" placeholder="Repeat Password" className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8456e2]" />
                    </div>

                    <button type="submit" className="w-full py-3 bg-[#8456e2] text-white text-lg rounded-lg shadow-lg focus:outline-none">
                        REGISTER NOW!
                    </button>
                    <div className="mt-4 text-center">
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
