import { useNavigate } from 'react-router-dom';
import banner from '../assets/banner.jpg';

const Banner = () => {
    const navigate = useNavigate();
    const goToDashboard = ()=>{
        console.log('added')
        navigate('/dashboard');
    }
    return (
        <div className="hero bg-[#9538E2] rounded-b-xl pb-44 mb-60">
            <div className="hero-content text-center relative">
                <div className="w-10/12">
                    <h1 className="text-5xl text-white font-bold leading-[60px]">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p className="py-6 text-gray-300 w-8/12 mx-auto text-sm">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                    <button onClick={goToDashboard} className="btn btn-sm text-[#9538E2] rounded-full">Shop Now</button>
                </div>
                <div className='absolute top-72 border-2 rounded-xl'>
                    <div className='p-4'>
                        <img className='w-[600px] h-80 rounded-xl' src={banner} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;