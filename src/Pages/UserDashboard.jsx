import React from "react";
import { useNavigate } from "react-router-dom";

function UserDashboard() {
  const role = localStorage.getItem("userType");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <style>{`
        /* Container */
        .user-container {
          display: flex;
          min-height: 100vh;
          background-color: #f5f6fa;
          font-family: "Poppins", sans-serif;
        }

        /* Sidebar */
        .sidebar {
          width: 200px;
          background: linear-gradient(180deg, #7e2a93ff);
          color: #fff;
          display: flex;
          flex-direction: column;
          padding: 20px;
          position: fixed;
          height: 100%;
          transition: all 0.3s ease;
        }

        .sidebar .logo {
          font-size: 22px;
          font-weight: bold;
          text-align: center;
          margin-bottom: 40px;
        }

        .sidebar ul {
          list-style: none;
          padding: 0;
        }

        .sidebar ul li {
          padding: 14px 16px;
          margin: 6px 0;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 16px;
        }

        .sidebar ul li:hover {
          background-color: rgba(255, 255, 255, 0.2);
          transform: translateX(4px);
        }

        .main-content {
          margin-left: 240px;
          flex: 1;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
        }

        
        .header {
          background-color: #fff;
          padding: 20px 30px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .header h2 {
          color: #4f2d50ff;
          font-size: 22px;
          margin-left: 15px;
        }

        /* Dashboard Cards */
        .dashboard-content {
          padding: 40px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .card {
          background: #fff;
          padding: 25px;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          text-align: center;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
        }

        .card h3 {
          margin-bottom: 10px;
          color: #965ea2ff;
        }

        .card p {
          font-size: 14px;
          color: #555;
          margin-bottom: 15px;
        }

        .card button {
          background-color: #472c50ff;
          color: #fff;
          border: none;
          padding: 10px 18px;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.2s ease;
        }

        .card button:hover {
          background-color: #8c3096ff;
          transform: scale(1.05);
        }

        /* Responsive Sidebar */
        @media (max-width: 768px) {
          .sidebar {
            width: 100%;
            height: auto;
            position: relative;
            flex-direction: row;
            justify-content: space-around;
          }

          .main-content {
            margin-left: 0;
          }

          .dashboard-content {
            padding: 20px;
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="user-container">
        <aside className="sidebar">
          <h2 className="logo">User Panel</h2>
          <ul>
            {role === "user1" && (
              <>
                <li onClick={() => navigate("/admin/mis/dashboard")}>📊 MIS Dashboard</li>
                <li onClick={() => navigate("/admin/mis/page1")}>📄 Page 1</li>
              </>
            )}

            {role === "user2" && (
              <>
                <li onClick={() => navigate("/admin/report/dashboard")}>📑 Report Dashboard</li>
                <li onClick={() => navigate("/admin/report/report1")}>📊 Report 1</li>
              </>
            )}

            <li onClick={logout}> Logout</li>
          </ul>
        </aside>

        <main className="main-content">
          <header className="header">
            <h2>Welcome, {role?.toUpperCase()} 👋</h2>
          </header>

          <section className="dashboard-content">
            {role === "user1" && (
              <>
                <div className="card">
                  <h3>MIS Dashboard</h3>
                  <p>Access MIS-related data and analytics.</p>
                  <button onClick={() => navigate("/admin/mis/dashboard")}>Open MIS</button>
                </div>

                <div className="card">
                  <h3>Page 1</h3>
                  <p>Check system report details.</p>
                  <button onClick={() => navigate("/admin/mis/page1")}>View </button>
                </div>
              </>
            )}

            {role === "user2" && (
              <>
                <div className="card">
                  <h3>Report Dashboard</h3>
                  <p>Explore and manage reports here.</p>
                  <button onClick={() => navigate("/admin/report/dashboard")}>Open Reports</button>
                </div>

                <div className="card">
                  <h3>Report 1</h3>
                  <p>Access specific  data.</p>
                  <button onClick={() => navigate("/admin/report/report1")}>View Page</button>
                </div>
              </>
            )}
          </section>
        </main>
      </div>
    </>
  );
}

export default UserDashboard;
