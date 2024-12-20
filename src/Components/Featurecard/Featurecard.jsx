import { PropTypes } from 'prop-types';
import { MdOutlineSportsScore } from "react-icons/md";
import { BsCalendarDate } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Featurecard = ({item}) => {
    const {_id,title,mark,level,date,photo,des} = item;
    return (
        <div className='p-4 flex flex-col hover:scale-[101%] duration-200 gap-3 border rounded-md'>
            <div className='relative'>
                <img className='w-full h-60 object-cover rounded-md' src={photo} alt="" />
                <div className='absolute top-2 right-6'>
                    {level === "easy" && <h1 className='bg-blue-600 font-medium text-white px-5 py-1 rounded-md capitalize'>{level}</h1>}
                    {level === "medium" && <h1 className='bg-amber-500 font-medium text-white px-5 py-1 rounded-md capitalize'>{level}</h1>}
                    {level === "hard" && <h1 className='bg-red-600 font-medium text-white px-5 py-1 rounded-md capitalize'>{level}</h1>}
                </div>
            </div>
            <div className='text-xl md:text-2xl font-semibold'>
                <h1>{title}</h1>
            </div>
            <div className='flex justify-between'>
            <div>
                <div className='flex items-center gap-1'>
                <MdOutlineSportsScore className='text-[#FAB519] text-2xl'></MdOutlineSportsScore>
                <h1>{mark}</h1>
                </div>
            </div>        
            <div>
            <div className='flex items-center gap-2'>
                <BsCalendarDate className='text-[#FAB519]'></BsCalendarDate>
                <h1>{date}</h1>
                </div>
            </div>
            </div>           
            <div className='flex-grow'>
                <h1>{des.slice(0,150) + "..."}</h1>
            </div>
            {/* <div className='flex flex-wrap gap-3'>
                <Link to={`/details/${_id}`}><button className='px-4 bg-blue-600 text-white py-1 rounded-md font-medium'>View</button></Link>
                <Link to={`/update/${_id}`} className='px-4 bg-amber-500 text-white py-1 rounded-md font-medium'>Update</Link>
                <button onClick={()=>deleteItem(_id,addedby)} className='px-4 py-1 bg-red-600 text-white rounded-md font-medium'>Delete</button>
            </div> */}
            <div>
            <Link to={`/details/${_id}`}><button className='px-4 w-full text-white bg-[#FAB519] hover:text-black font-semibold py-1 rounded-md hover:bg-transparent duration-200 border-2 border-[#FAB519]'>View</button></Link>
            </div>
        </div>
    );
};
Featurecard.propTypes = {
    item: PropTypes.obj,   
}
export default Featurecard;