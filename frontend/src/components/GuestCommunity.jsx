export default function GuestCommunity({ onJoin }) {
  return (
    <div className="container py-5">
      <h4>Please log in to join groups, comment, and post.</h4>
      {/* Limited posts preview here */}
      <button className="btn btn-primary mt-3" onClick={onJoin}>
        Join Our Community
      </button>
    </div>
  );
}
