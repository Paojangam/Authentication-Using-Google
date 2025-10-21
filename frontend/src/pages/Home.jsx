// src/components/Home.jsx
import "../styles/Home.css";

function Home({ user }) {
  const logout = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/auth/logout`;
  };

  return (
    <div className="home-wrapper">
      <div className="home-card">
        <h3 className="home-subtitle">You have succesfully logged in 😏</h3>
        <h1 className="home-title">Profile</h1>

        <div className="profile-section">
          <img
            src={user?.picture || "/images/profile.jpg"}
            alt="Profile"
            className="profile-img"
          />

          <div className="profile-info">
            <input
              type="text"
              defaultValue={user?.name || ""}
              className="input"
              placeholder="Username"
              readOnly
            />
            <input
              type="text"
              defaultValue={user?.email || ""}
              className="input"
              placeholder="Email"
              readOnly
            />
          </div>

          <button className="btn-primary" onClick={logout}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
