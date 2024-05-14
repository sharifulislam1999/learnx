import axios from "axios";
import useAuth from "../Hooks/useAuth";
import { PropTypes } from 'prop-types';
const Comment = ({id,comments,setComments}) => {    
    const {user} = useAuth();
    const handleComment = (e)=>{
        e.preventDefault();
        const form = e.target;
        const comment = form.comment.value;
        const email = user.email || user?.reloadUserInfo?.providerUserInfo[0]?.screenName+'@github.com';
        const commentBody = {assaignmentId:id,commentBy: email,comment:comment,photo:user?.photoURL}
        console.log(commentBody);
        axios.post('https://learnx-omega.vercel.app/comment',commentBody)
        .then(res=>{
            if(res.data.insertedId){
                console.log(res.data);
                // const newComment = {assaignmentId:res.data.assaignmentId,comment:res.data.comment,commentBy:res.data.commentBy,photo:res.data.photo}
                // console.log(newComment)
                setComments([...comments,commentBody])
                form.reset()
            }
        })
    }
    return (
        <div>
        <div>
       <form onSubmit={handleComment} className="mt-10">
       <textarea name="comment" placeholder="Enter Your Comment" className="border w-full text-sm h-20 p-2 rounded-md focus:outline-none resize-y" id="" required/><br/>
       <input type="submit" className="py-2 cursor-pointer mt-2 px-6 rounded-lg bg-[#FAB519] text-white" value="Comment" />
       </form>
    </div>
            
        </div>
    );
};
Comment.propTypes = {
    id: PropTypes.string,
    comments: PropTypes.array,
    setComments: PropTypes.func
}
export default Comment;