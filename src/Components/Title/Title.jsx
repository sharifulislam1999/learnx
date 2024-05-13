import { PropTypes } from 'prop-types';
const Title = ({title,des}) => {
    return (
        <div className='my-16 space-y-2 lg:space-y-4 border-l-4 pl-6 border-[#FAB519]'>
            <h1 className='text-2xl text-[#FAB519] md:text-3xl font-semibold'>{title}</h1>
            <p className='lg:w-1/2 text-sm'>{des}</p>            
        </div>
    );
};
Title.propTypes = {
    title: PropTypes.string,
    des: PropTypes.string
}

export default Title;