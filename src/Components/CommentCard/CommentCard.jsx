import { PropTypes } from 'prop-types';
const CommentCard = ({item}) => {
    const {comment,commentBy,photo}= item;
    return (
        <div>
            <div className="p-4 relative font-normal rounded-md bg-[#ffb814fd]">
                <h1 className="mb-4 font-medium">{comment}</h1>
                <div className="text-sm text-[#2f2e2e]">
                    <h1>E-Mail: {commentBy}</h1>
                </div>
                <div className="absolute h-4 left-4 rotate-45 -bottom-[6px] w-4 bg-[#ffb814fd]">
                </div>
            </div>
            <div className="flex items-center mt-4 gap-2">
                <div>
                    <img className="h-14 w-14 rounded-full border-4 border-[#FAB519]" src={photo} alt="" />
                </div>
            </div>
            
        </div>
    );
};
CommentCard.propTypes = {
    item: PropTypes.obj
}

export default CommentCard;