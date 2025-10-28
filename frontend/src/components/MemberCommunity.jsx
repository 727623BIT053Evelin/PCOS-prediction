import React, { useState } from "react";

export default function MemberCommunity({ user, feed, onLike, onComment, onJoinGroup }) {
  // Full community interaction UI similar to previous code
  return (
    <div>
      <h3>Hello, {user.name}</h3>
      {/* Full posts and groups UI */}
      {/* Buttons call onLike, onComment, onJoinGroup */}
    </div>
  );
}
