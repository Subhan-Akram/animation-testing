import React, { useState } from 'react';
const initialState = [{
  name: "David",
  id: "1",
  created: "Commented 3 month ago",
  text: "API to get what's new in Score UI is now available on DEV environment",
  parentId: "parent",
  reply: [{
    name: "John",
    created: "Commented 1 month ago",
    text: "now available on DEV environment",
    parentId: "1",
    id: "sub_1",
    reply: []
  }]
},
{
  name: "Alan",
  id: "2",
  parentId: "parent",
  created: "Commented 3 month ago",
  text: "API to get what's new in Score UI is now available on DEV environment",
  reply: [{
    name: "Rudra",
    created: "Commented 1 month ago",
    text: "now available on DEV environment",
    parentId: "2",
    id: "sub_2",
    reply: []
  }, {
    name: "Micky",
    created: "Commented 1 month ago",
    text: "now available on DEV environment",
    parentId: "2",
    id: "sub_2c",
    reply: []
  }]
}]
const CommentBox = ({commentText,setCommentText}) => {
  return (
    <div className="flex items-center w-8/12 ">
      <input value={commentText} onChange={(e)=>{setCommentText(e.target.value)}} type="text" className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring-0 focus:ring-blue-500 border border-gray-300 placeholder:text-gray-400" placeholder="write a comment" />
    </div>
  );
};

const ReplySection = ({ replies, indentLevel = 0, onReplyClick, childReply }) => {
  return (
    <div className={`mt-1 transition duration-1 ease-in-out ${indentLevel > 0 ? 'ml-6' : ''}`}> {/* Indentation for nested replies */}
      {replies.map((reply) => (
        <div className='mt-4'><Comment onReplyClick={onReplyClick} key={reply.id} comment={reply} indentLevel={indentLevel + 1} /></div>
      ))}
      {!childReply && <div className='mt-4'><CommentBox /></div>}
    </div>

  );
};

const Comment = ({ comment, onReplyClick, parentReply, indentLevel = 0, childReply, isReplyClick }) => {
  console.log('PARWNT', parentReply, 'CHILD', childReply)
  return (
    <div className={`flex gap-x-2 item-center ${indentLevel > 0 ? 'ml-6' : ''}`}> {/* Indentation for nested replies */}
      <div className="rounded-lg w-[32px] h-[32px]">
        <img src="https://thiswayglobal.myjetbrains.com/hub/api/rest/avatar/cf696da7-ccc7-4b4d-8f1a-5923595cd06d?s=48&dpr=1&size=32" alt="Avatar" />
      </div>
      <div className="">
        <div className="flex gap-2">
          <h3 className="text-[blue] font-bold">{comment.name}</h3>
          <span className="font-medium text-slate-400">{comment.created}</span>
        </div>
        <div>
          <p>{comment.text}</p>
          <p
            onClick={() => onReplyClick(comment.id, comment.parentId)}
            className="font-medium text-sm cursor-pointer"
          >
            {comment.reply.length} replies
          </p>

          {parentReply === comment.id && (
            // <ReplySection childReply={childReply} onReplyClick={onReplyClick} replies={comment.reply} />
            <div className={`mt-1 transition duration-1 ease-in-out ${indentLevel > 0 ? 'ml-6' : ''}`}> {/* Indentation for nested replies */}
              {comment.reply.map((reply) => (
                <div className='mt-4'><Comment onReplyClick={onReplyClick} key={reply.id} comment={reply} indentLevel={indentLevel + 1} />
                  {childReply === reply.id && <div className='mt-4 ml-[4rem]'><CommentBox /></div>}
                </div>
              ))}
              {!childReply && <div className='mt-4'><CommentBox /></div>}
            </div>
          )}
          {childReply === comment.id && <CommentBox />}
        </div>
      </div>
    </div>
  );
};

const CommentsList = () => {
  const [commentsData,setCommentsData]=useState(initialState)
  const [commentText,setCommentText]=useState("")
  const [parentReply, setParentReply] = useState(null); // Track open reply box ID
  const [childReply, setChildReply] = useState(false)
  console.log("conne tlist", parentReply, "child reply comment", childReply)
  const handleClick=(e)=>{
      // setCommentsData
  }
  const handleReplyClick = (commentId, isParent) => {
    if (isParent === "parent") {
      setParentReply(commentId); // Toggle reply box
      setChildReply(false)
    } else {
      // setReplyBox(commentId);
      setChildReply(commentId)
    }
    // setReplyBox(commentId); 

  };

  return (
    <div className="comment_section flex flex-col gap-y-6 p-8">
      {commentsData.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          onReplyClick={handleReplyClick}
          parentReply={parentReply}
          childReply={childReply}
        // isReplyClick={replyBox}

        />
      ))}
      {!parentReply && <div className="mt-6">
        <CommentBox handleClick={handleClick} commentText={commentText} setCommentText={setCommentText} /> {/* CommentBox for main comments */}
      </div>}
    </div>
  );
};

export default CommentsList;
