import React, { useState } from "react";

export default function CommunitySection({ user, feed, onLike, onComment, onJoinGroup, onJoinClick }) {
  const [activeCommentId, setActiveCommentId] = useState(null);
  const [commentText, setCommentText] = useState('');

  const joinedGroups = user?.joinedGroups || [];

  return (
    <div style={{ backgroundColor: '#f3e7fa', minHeight: '100vh', padding: '20px' }}>
      {user ? (
        <>
          {/* Show full community with posts, comment features, join group buttons, etc. */}
          {feed.map(post => (
            <div key={post.id} style={{ background: 'white', margin: '15px 0', padding: '10px', borderRadius: '8px' }}>
              <h4>{post.user.name}</h4>
              <p>{post.content}</p>
              <button onClick={() => onLike(post.id)}>{post.likes} Likes</button>
              <button onClick={() => setActiveCommentId(post.id)}>Comments ({post.comments.length})</button>
              {activeCommentId === post.id && (
                <div>
                  {post.comments.map(c => (
                    <div key={c.text} style={{ margin: '5px 0' }}>
                      <strong>{c.name}</strong>: {c.text}
                    </div>
                  ))}
                  <input
                    type="text"
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Write a comment..."
                  />
                  <button onClick={() => {
                    onComment(post.id, commentText);
                    setCommentText('');
                    setActiveCommentId(null);
                  }}>Post</button>
                </div>
              )}
            </div>
          ))}
          {/* Group join button */}
          {joinedGroups.length > 0 && (
            <div>
              <h4>Your Groups</h4>
              {joinedGroups.map(g => (
                <p key={g}>Group ID: {g}</p>
              ))}
            </div>
          )}
        </>
      ) : (
        // Guest view
        <div style={{ textAlign: 'center' }}>
          <p>Please log in to comment, join groups, or post.</p>
          <button onClick={onJoinClick}>Login / Sign Up</button>
        </div>
      )}
    </div>
  );
}
