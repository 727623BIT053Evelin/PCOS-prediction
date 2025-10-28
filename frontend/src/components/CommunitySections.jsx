import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Carousel, Modal, Button, Form, Image, Alert } from "react-bootstrap";

const pastelGradient = {
  background: "linear-gradient(135deg,#f3e7fa 0%,#ffe5ee 100%)",
};
const accentColor = "#a259e8";
const trending = [
  {
    id: 1,
    title: "PCOS Awareness Week",
    description: "Workshops, webinars, and social campaigns to boost PCOS awareness.",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=cover&w=375&q=80",
    date: "Nov 2-7, 2025",
  },
  {
    id: 2,
    title: "Hormone Health Webinar",
    description: "Live chat with endocrinologists and registered dietitians.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=cover&w=375&q=80",
    date: "Nov 10, 2025",
  },
  {
    id: 3,
    title: "PCOS Yoga Challenge",
    description: "30-day guided yoga for hormone balance. All levels welcome.",
    image:
      "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=cover&w=375&q=80",
    date: "Ongoing",
  },
  {
    id: 4,
    title: "Success Stories LIVE",
    description:
      "Women share their transformation journeys: struggles, wins, hope.",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=cover&w=375&q=80",
    date: "Nov 21, 2025",
  },
  {
    id: 5,
    title: "PCOS Diet Tips Panel",
    description: "Expert panel shares the best nutrition practices.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwE1pWUtStxs4Rja2MnX6fpQC7gjMc-svCWA&s",
    date: "Nov 15, 2025",
  },
  {
    id: 6,
    title: "Mental Health Awareness",
    description:
      "Workshops focused on mindfulness and mental wellness with PCOS.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=cover&w=375&q=80",
    date: "Nov 18, 2025",
  },
  {
    id: 7,
    title: "PCOS Fitness Bootcamp",
    description: "4-week fitness bootcamp tailored for PCOS needs.",
    image:
      "https://cystercare.com/wp-content/uploads/2022/05/1-m9q1lv.webp",
    date: "Dec 1-28, 2025",
  },
];

const groups = [
  {
    id: 1,
    name: "Diet & Fitness for PCOS",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
    desc: "Eat smart, move more. Recipes, prep & accountability.",
  },
  {
    id: 2,
    name: "Ask the Doctor",
    img: "https://randomuser.me/api/portraits/men/17.jpg",
    desc: "AMA with specialists—science-based advice only.",
  },
  {
    id: 3,
    name: "Mind & Body Wellness",
    img: "https://randomuser.me/api/portraits/women/60.jpg",
    desc: "Yoga, guided meditation, positive psychology.",
  },
  {
    id: 4,
    name: "Motivation & Stories",
    img: "https://randomuser.me/api/portraits/women/85.jpg",
    desc: "Share your PCOS journey and encourage others.",
  },
  {
    id: 5,
    name: "PCOS & Fertility Planning",
    img: "https://randomuser.me/api/portraits/men/88.jpg",
    desc: "Prepping for pregnancy, fertility tips and Q&A.",
  },
  {
    id: 6,
    name: "Supplements & Vitamins",
    img: "https://randomuser.me/api/portraits/women/21.jpg",
    desc: "Discuss supplements, dosages and reviews.",
  },
  {
    id: 7,
    name: "PCOS Mental Health",
    img: "https://randomuser.me/api/portraits/women/22.jpg",
    desc: "Focus on coping mechanisms, therapy, and support.",
  },
  {
    id: 8,
    name: "Recipes & Cooking Club",
    img: "https://randomuser.me/api/portraits/men/23.jpg",
    desc: "Share your favorite PCOS-friendly recipes.",
  },
];

const user = {
  name: "Ananya Rao",
  avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  joinedGroups: [1, 3],
};

const topContributors = [
  { name: "Seema", avatar: "https://randomuser.me/api/portraits/women/41.jpg" },
  { name: "Pooja", avatar: "https://randomuser.me/api/portraits/women/67.jpg" },
  { name: "Sonali", avatar: "https://randomuser.me/api/portraits/women/78.jpg" },
  { name: "Megha", avatar: "https://randomuser.me/api/portraits/women/81.jpg" },
  { name: "Nisha", avatar: "https://randomuser.me/api/portraits/women/40.jpg" },
  { name: "Lavanya", avatar: "https://randomuser.me/api/portraits/women/55.jpg" },
  { name: "Anjali", avatar: "https://randomuser.me/api/portraits/women/54.jpg" },
  { name: "Divya", avatar: "https://randomuser.me/api/portraits/women/53.jpg" },
  { name: "Riya", avatar: "https://randomuser.me/api/portraits/women/52.jpg" },
  { name: "Kavya", avatar: "https://randomuser.me/api/portraits/women/51.jpg" },
];

const upcomingEvents = [
  { date: "Nov 8", text: "Dietitian Q&A (Live Chat)" },
  { date: "Nov 15", text: "Supplement Workshop" },
  { date: "Nov 19", text: "Fitness Challenge Winners" },
  { date: "Nov 22", text: "November Support Group Call" },
  { date: "Nov 25", text: "Mental Health Webinar" },
  { date: "Nov 28", text: "Recipe Swap Session" },
  { date: "Dec 1", text: "Holiday Meal Hacks Webinar" },
  { date: "Dec 5", text: "Endocrinologist AMA" },
];

const demoFeed = [
{
id: 1,
user: {
name: "Priya Singh",
avatar: "https://randomuser.me/api/portraits/women/72.jpg",
},
time: "2 hours ago",
content:
"Yoga sessions and meal prepping have really helped me stay on track. Anyone want to join an online session next Saturday? 🧘‍♀️💬",
brief: "Yoga and meal prepping are my new life savers!",
group: "Mind & Body Wellness",
image: "https://images.drlogy.com/assets/uploads/img/admin/day_celebrate/pcos-awareness-month.webp",
likes: 17,
comments: [
{
name: "Sara",
avatar: "https://randomuser.me/api/portraits/women/17.jpg",
text: "I'd love the link! See you tomorrow 💜",
},
],
},
{
id: 2,
user: {
name: "Neha Gupta",
avatar: "https://randomuser.me/api/portraits/women/19.jpg",
},
time: "5 hours ago",
content:
"Update: Lost 5kg since September and my periods are regular! Tip: swap sweet drinks for lemon water and walk 7k+ steps daily.",
brief: "Lost 5kg & regular periods by small lifestyle changes!",
group: "Diet & Fitness for PCOS",
image:
"https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=cover&w=460&q=80",
likes: 32,
comments: [
{
name: "Maya",
avatar: "https://randomuser.me/api/portraits/women/32.jpg",
text: "Congrats Neha! Really inspiring 💪",
},
{
name: "Priya",
avatar: "https://randomuser.me/api/portraits/women/72.jpg",
text: "How did you stay motivated?",
},
],
},
{
id: 3,
user: {
name: "Asha Menon",
avatar: "https://randomuser.me/api/portraits/women/44.jpg",
},
time: "11 hours ago",
content:
"Struggling with fatigue more than ever this month... any tips for energy? Foods or habits? 😞",
brief: "Seeking tips for boosting energy during fatigue.",
group: "Ask the Doctor",
image: null,
likes: 15,
comments: [
{
name: "Sonali",
avatar: "https://randomuser.me/api/portraits/women/78.jpg",
text: "Iron & B12 check. Try mindful breaks too 💫",
},
],
},
{
id: 4,
user: {
name: "Ritika Sharma",
avatar: "https://randomuser.me/api/portraits/women/45.jpg",
},
time: "1 day ago",
content:
"Does anyone have recommendations for PCOS-friendly snacks? Need ideas to curb my afternoon cravings.",
brief: "Looking for healthy snacks to beat cravings.",
group: "Diet & Fitness for PCOS",
image: null,
likes: 21,
comments: [
{
name: "Pooja",
avatar: "https://randomuser.me/api/portraits/women/67.jpg",
text: "Try nuts and seeds, they help me a lot!",
},
],
},
{
id: 5,
user: {
name: "Deepa Nair",
avatar: "https://randomuser.me/api/portraits/women/48.jpg",
},
time: "2 days ago",
content:
"I found meditation has really helped with my stress levels. Highly recommend 'Calm'.",
brief: "Meditation really helped me manage stress better.",
group: "Mind & Body Wellness",
image:
"https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=cover&w=460&q=80",
likes: 25,
comments: [],
},
{
id: 6,
user: {
name: "Maya Kapoor",
avatar: "https://randomuser.me/api/portraits/women/58.jpg",
},
time: "3 days ago",
content:
"Just joined the 'Supplements & Vitamins' group! Looking forward to learning more.",
brief: "Excited to learn more about supplements!",
group: "Supplements & Vitamins",
image: "data:image/jpeg;base64,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",
likes: 9,
comments: [
{
name: "Lavanya",
avatar: "https://randomuser.me/api/portraits/women/55.jpg",
text: "Welcome Maya! Great to have you here.",
},
],
},
];
export default function CommunitySections() {
  const [activeComment, setActiveComment] = useState(null);
  const [commentText, setCommentText] = useState("");
  const [feed, setFeed] = useState(demoFeed);
  const [modalPost, setModalPost] = useState(null);
  const [modalTrending, setModalTrending] = useState(null);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showAddPostModal, setShowAddPostModal] = useState(false);
  const [showCreateGroupModal, setShowCreateGroupModal] = useState(false);
  const [showGroupModal, setShowGroupModal] = useState(false);
  const [modalGroup, setModalGroup] = useState(null);
  const [newPostContent, setNewPostContent] = useState("");
  const [newPostImage, setNewPostImage] = useState(null);
  const [newGroupName, setNewGroupName] = useState("");
  const [newGroupDesc, setNewGroupDesc] = useState("");
  const [joinedGroups, setJoinedGroups] = useState(user.joinedGroups);
  const [requestSentGroups, setRequestSentGroups] = useState([]);
  const [likedPosts, setLikedPosts] = useState(new Set());

  function toggleLike(postId) {
    setFeed((prevFeed) =>
      prevFeed.map((post) => {
        if (post.id === postId) {
          const isLiked = likedPosts.has(postId);
          const newLikes = isLiked ? post.likes - 1 : post.likes + 1;
          return { ...post, likes: newLikes };
        }
        return post;
      })
    );

    setLikedPosts((prevLiked) => {
      const updated = new Set(prevLiked);
      if (updated.has(postId)) {
        updated.delete(postId);
      } else {
        updated.add(postId);
      }
      return updated;
    });
  }

  function handleComment(pid) {
    if (commentText.trim()) {
      setFeed(
        feed.map((post) =>
          post.id === pid
            ? {
                ...post,
                comments: [...post.comments, { name: user.name, avatar: user.avatar, text: commentText.trim() }],
              }
            : post
        )
      );
      setCommentText("");
      setActiveComment(null);
    }
  }

  function addNewPost() {
    if (newPostContent.length) {
      const newPost = {
        id: Date.now(),
        user,
        time: "Just now",
        content: newPostContent.trim(),
        group: "Your Posts",
        image: newPostImage ? URL.createObjectURL(newPostImage) : null,
        likes: 0,
        comments: [],
      };
      setFeed([newPost, ...feed]);
      setNewPostContent("");
      setNewPostImage(null);
      setShowAddPostModal(false);
    }
  }

  function addNewGroup() {
    if (newGroupName.length && newGroupDesc.length) {
      const newGroup = {
        id: Date.now(),
        name: newGroupName,
        desc: newGroupDesc,
        img: "https://picsum.photos/seed/group" + (Date.now() % 1000) + "/90/90",
      };
      groups.push(newGroup);
      setJoinedGroups((prev) => [...prev, newGroup.id]);
      setNewGroupName("");
      setNewGroupDesc("");
      setShowCreateGroupModal(false);
    }
  }

  function toggleJoinGroup(groupId) {
    if (joinedGroups.includes(groupId)) {
      setModalGroup(groups.find((g) => g.id === groupId));
      setShowGroupModal(true);
    } else if (!requestSentGroups.includes(groupId)) {
      setRequestSentGroups((prev) => [...prev, groupId]);
      alert("Request sent to join the group.");
    }
  }
  
  return (
    
    <div style={pastelGradient} className="pb-5 min-vh-100">
      {/* Header */}
      <div className="container d-flex justify-content-between align-items-center py-4">
  <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
    className="fw-bold" style={{ color: accentColor, fontSize: "2.4rem" }}>
    PCOS Community 🌸
  </motion.h1>

  <div
  style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }}
  onClick={() => setShowProfileModal(true)}
  title="Profile"
>
  <span style={{ fontWeight: '600', fontSize: 18 }}>
    Ananya Rao
  </span>
  <img
    src={user.avatar}
    alt="Profile"
    className="rounded-circle"
    style={{
      width: 52,
      height: 52,
      border: "2px solid #6c63ff",
      // removed cursor: default to allow click pointer
    }}
  />
</div>


</div>


      {/* Trending carousel */}
      <div className="container mb-4" style={{ overflow: "hidden" }}>
        <Carousel interval={4500} controls indicators={false} pause="hover" variant="dark">
          {trending.map((item) => (
            <Carousel.Item key={item.id}>
              <div className="d-flex flex-row gap-4 justify-content-center align-items-center flex-wrap" style={{ cursor: "pointer" }} onClick={() => setModalTrending(item)}>
                <img src={item.image} className="rounded-4 shadow" style={{ height: 128, width: 192, objectFit: "cover", border: "2px solid #f3e7fa" }} alt={item.title} />
                <div>
                  <div className="fw-bold" style={{ color: accentColor, fontSize: "1.2rem" }}>
                    {item.title}
                  </div>
                  <div className="text-secondary">{item.description}</div>
                  <div className="badge rounded-pill my-1" style={{ background: accentColor + "22", color: accentColor }}>
                    {item.date}
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div className="container">
        <div className="row gx-5 gy-4">
          {/* Sidebar on Left */}
          <div className="col-lg-4">
            {/* Motivation */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-4 p-4 bg-light rounded-4 text-center"
            >
              <div style={{ color: accentColor, fontWeight: 600 }}>
                💬 Motivation
              </div>
              <div className="mt-3 text-secondary small">
                "Progress, not perfection. Every step is brave!"
              </div>
            </motion.div>

            {/* Top Contributors */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-4 p-4 bg-white rounded-4"
            >
              <div style={{ color: accentColor, fontWeight: 600 }}>
                🌟 Top Contributors
              </div>
              <div className="mt-3 d-flex flex-wrap gap-3 justify-content-center">
                {topContributors.map((tc) => (
                  <div key={tc.name} className="text-center">
                    <img
                      src={tc.avatar}
                      className="rounded-circle mb-1"
                      style={{ width: 32, height: 32, objectFit: "cover" }}
                      alt=""
                    />
                    <div className="small" style={{ color: "#4c377e" }}>
                      {tc.name}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Upcoming Events */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-4 bg-white rounded-4"
            >
              <div style={{ color: accentColor, fontWeight: 600 }}>
                📅 Upcoming Events
              </div>
              <ul className="mt-2 small ps-1">
                {upcomingEvents.map((ev) => (
                  <li key={ev.date} className="mb-1">
                    <span className="badge rounded-pill bg-secondary-subtle me-2">
                      {ev.date}
                    </span>
                    {ev.text}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Community Feed Full Width */}
          <div className="col-lg-8 col-12">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h3 className="fw-semibold" style={{ color: accentColor }}>
                Popular Groups
              </h3>
              <Button variant="outline-primary" onClick={() => setShowCreateGroupModal(true)}>
                + Create Group
              </Button>
            </div>
            <div className="d-flex flex-wrap gap-4 mb-4">
              {groups.map((g) => {
                const isJoined = joinedGroups.includes(g.id);
                const isRequested = requestSentGroups.includes(g.id);
                return (
                  <div
                    key={g.id}
                    className="card shadow-sm border-0 rounded-4 p-3 d-flex flex-row align-items-center"
                    style={{ minWidth: 270, background: "#fff", flex: "1 1 310px", maxWidth: 340, cursor: "pointer" }}
                  >
                    <img src={g.img} alt="" className="rounded-circle me-3 shadow-sm" style={{ width: 54, height: 54, objectFit: "cover" }} />
                    <div>
                      <div className="fw-semibold mb-1" style={{ color: accentColor, fontSize: "1.13rem" }}>
                        {g.name}
                      </div>
                      <div className="small text-secondary mb-2">{g.desc}</div>
                      <Button
                        size="sm"
                        variant={isJoined ? "outline-secondary" : isRequested ? "outline-warning" : "outline-primary"}
                        style={{
                          borderColor: isJoined ? "#ccc" : isRequested ? "#ffc107" : accentColor,
                          color: isJoined ? "#555" : isRequested ? "#856404" : accentColor,
                        }}
                        onClick={() => toggleJoinGroup(g.id)}
                      >
                        {isJoined ? "View Group" : isRequested ? "Request Sent" : "Join Group"}
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="d-flex justify-content-end mb-4">
              <Button variant="primary" onClick={() => setShowAddPostModal(true)}>
                + Add Post
              </Button>
            </div>

            
              
          </div>

        </div>
        {/* Community Feed */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
              <div className="pt-1 pb-2 mb-3 fw-semibold" style={{ color: accentColor }}>
                Community Feed
              </div>
              {feed.map((post) => {
                const isLiked = likedPosts.has(post.id);
                return (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.03 }}
                    className="mb-4"
                  >
                    <div className="card border-0 rounded-4 shadow-sm" style={{ background: "#fff", boxShadow: "0 2px 18px #f1e6f8" }}>
                      <div className="card-body">
                        <div className="d-flex align-items-center gap-3 mb-2">
                          <img src={post.user.avatar} alt="" className="rounded-circle" style={{ width: 46, height: 46, objectFit: "cover" }} />
                          <span className="fw-bold" style={{ color: accentColor }}>
                            {post.user.name}
                          </span>
                          <span className="badge bg-secondary-subtle ms-2">{post.group}</span>
                          <span className="ms-auto text-muted small">{post.time}</span>
                        </div>
                        <div className="mb-3" style={{ fontSize: "1.13rem", whiteSpace: "pre-line" }}>
                          {post.content}
                        </div>
                        {post.image && (
                          <img src={post.image} className="w-100 rounded-3 mb-3" alt="post visual" style={{ maxHeight: 350, objectFit: "cover", cursor: "pointer" }} onClick={() => setModalPost(post)} />
                        )}
                        <div className="d-flex gap-2 mb-2">
                          <Button
                            size="sm"
                            className={`px-3 rounded-pill shadow-sm ${isLiked ? "btn-dark text-white" : "btn-light text-danger"}`}
                            onClick={() => toggleLike(post.id)}
                          >
                            ❤️ {post.likes}
                          </Button>
                          <Button className="btn-light text-primary px-3 rounded-pill shadow-sm" size="sm" onClick={() => setActiveComment(activeComment === post.id ? null : post.id)}>
                            💬 {post.comments.length}
                          </Button>
                          <Button className="btn-light px-3 rounded-pill shadow-sm text-secondary" size="sm">
                            🔄 Share
                          </Button>
                        </div>
                        <AnimatePresence>
                          {activeComment === post.id && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                              <div className="mb-2">
                                {post.comments.map((cmt, idx) => (
                                  <div key={idx} className="d-flex align-items-center gap-2 small mb-1">
                                    <img src={cmt.avatar} alt="" className="rounded-circle" style={{ width: 28, height: 28, objectFit: "cover" }} />
                                    <span className="fw-semibold text-primary">{cmt.name}:</span> <span>{cmt.text}</span>
                                  </div>
                                ))}
                              </div>
                              <div className="d-flex gap-2 mb-3">
                                <Form.Control
                                  size="sm"
                                  className="bg-light"
                                  value={commentText}
                                  onChange={(e) => setCommentText(e.target.value)}
                                  placeholder="Add a comment…"
                                  onKeyDown={(e) => {
                                    if (e.key === "Enter") handleComment(post.id);
                                  }}
                                />
                                <Button size="sm" className="rounded-pill" style={{ background: accentColor }} onClick={() => handleComment(post.id)}>
                                  Send
                                </Button>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                );
                })}
            </motion.div>
      </div>
     
      {/* Modals outside grid */}
      {/* Profile Modal */}
      <Modal show={showProfileModal} onHide={() => setShowProfileModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>My Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <Image src={user.avatar} alt="user avatar" roundedCircle className="mb-3" style={{ width: 100, height: 100, objectFit: "cover" }} />
          <h5>{user.name}</h5>
          <p>
            <strong>Joined groups:</strong>
          </p>
          {joinedGroups.length === 0 && <p>No groups joined yet.</p>}
          <ul className="list-unstyled">
            {joinedGroups.map((gid) => {
              const group = groups.find((g) => g.id === gid);
              return (
                <li key={gid} style={{ cursor: "pointer", color: accentColor }} onClick={() => alert(`Request to join '${group?.name}' sent.`)}>
                  {group?.name || "Unknown Group"}
                </li>
              );
            })}
          </ul>
          <Button variant="outline-primary" className="me-2" onClick={() => setShowAddPostModal(true)}>
            Add Post
          </Button>
          <Button variant="outline-primary" onClick={() => setShowCreateGroupModal(true)}>
            Create Group
          </Button>
        </Modal.Body>
      </Modal>

      {/* Add Post Modal */}
      <Modal show={showAddPostModal} onHide={() => setShowAddPostModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add New Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control as="textarea" rows={4} value={newPostContent} onChange={(e) => setNewPostContent(e.target.value)} placeholder="Share your thoughts or questions..." className="mb-3" />
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload an Image (optional):</Form.Label>
            <Form.Control type="file" accept="image/*" onChange={(e) => setNewPostImage(e.target.files[0])} />
            {newPostImage && <Image src={URL.createObjectURL(newPostImage)} rounded className="mt-2" style={{ maxWidth: "100%", maxHeight: 200 }} alt="new post preview" />}
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddPostModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={addNewPost}>
            Post
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Create Group Modal */}
      <Modal show={showCreateGroupModal} onHide={() => setShowCreateGroupModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create New Group</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="groupName">
            <Form.Label>Group Name</Form.Label>
            <Form.Control type="text" value={newGroupName} onChange={(e) => setNewGroupName(e.target.value)} placeholder="Enter group name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="groupDesc">
            <Form.Label>Group Description</Form.Label>
            <Form.Control as="textarea" rows={3} value={newGroupDesc} onChange={(e) => setNewGroupDesc(e.target.value)} placeholder="Enter group description" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowCreateGroupModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={addNewGroup}>
            Create Group
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Group View Modal */}
      <Modal show={showGroupModal} onHide={() => setShowGroupModal(false)} size="md" centered>
        <Modal.Header closeButton>
          <Modal.Title>{modalGroup?.name || "Group"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{modalGroup?.desc || "Group details will be displayed here."}</p>
          <hr />
          <Alert variant="info">Request to join this group has been sent.</Alert>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowGroupModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Post Image Modal */}
      <Modal show={modalPost !== null} onHide={() => setModalPost(null)} size="lg" centered dialogClassName="modal-half-screen">
        <Modal.Header closeButton>
          <Modal.Title>{modalPost?.user.name}'s Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={modalPost?.image} alt="Post Visual" className="w-100 rounded mb-3" style={{ objectFit: "cover", maxHeight: "300px" }} />
          <p style={{ whiteSpace: "pre-line" }}>{modalPost?.content}</p>
          <hr />
          <div>
            <b>Group:</b> {modalPost?.group}
          </div>
          <div>
            <b>Posted:</b> {modalPost?.time}
          </div>
          <div>
            <b>Likes:</b> {modalPost?.likes}
          </div>
          <div>
            <b>Comments:</b> {modalPost?.comments.length}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalPost(null)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Trending Modal */}
      <Modal show={modalTrending !== null} onHide={() => setModalTrending(null)} size="lg" centered dialogClassName="modal-half-screen">
        <Modal.Header closeButton>
          <Modal.Title>{modalTrending?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={modalTrending?.image} alt="Trending Event" className="w-100 rounded mb-3" style={{ objectFit: "cover", maxHeight: "300px" }} />
          <p>{modalTrending?.description}</p>
          <div>
            <b>Date:</b> {modalTrending?.date}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalTrending(null)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <style>{`
        .modal-half-screen .modal-dialog {
          max-width: 60vw;
        }
        @media(max-width: 768px) {
          .modal-half-screen .modal-dialog {
            max-width: 90vw;
          }
        }
        /* Prevent button active state to dark blue */
        .btn-outline-primary:focus, .btn-outline-primary:active, .btn-outline-primary.active {
          background-color: transparent !important;
          color: ${accentColor} !important;
          border-color: ${accentColor} !important;
          box-shadow: none !important;
        }
          
      `}</style>

      <style>{`
  .btn-outline-primary {
    background-color: transparent !important;
    color: ${accentColor} !important;
    border-color: ${accentColor} !important;
    box-shadow: none !important;
  }
  .btn-outline-primary:hover {
    background-color: ${accentColor}22 !important; /* 22 adds subtle transparency */
    color: ${accentColor} !important;
    border-color: ${accentColor} !important;
  }
  .btn-outline-primary:focus,
  .btn-outline-primary:active,
  .btn-outline-primary.active {
    background-color: transparent !important;
    color: ${accentColor} !important;
    border-color: ${accentColor} !important;
    box-shadow: none !important;
  }
`}</style>

    </div>
  );
}
