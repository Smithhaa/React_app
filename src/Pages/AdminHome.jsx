import React from "react";
import { useNavigate } from "react-router-dom";

function AdminHome() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <style>{`
        /* Layout Wrapper */
        .admin-container {
          display: flex;
          min-height: 100vh;
          background-color: #f5f6fa;
          font-family: "Poppins", sans-serif;
        }

        .sidebar {
          width: 200px;
          background: linear-gradient(180deg, #313465ff, #6b73ff);
          color: #fff;
          display: flex;
          flex-direction: column;
          padding: 15px;
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
          background-color: rgba(255, 255, 255, 0.15);
          transform: translateX(4px);
        }

        /* Main Content */
        .main-content {
          margin-left: 240px;
          flex: 1;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
        }

        /* Header */
        .header {
          background-color: #fff;
          padding: 20px 30px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .header h2 {
          color: #45488aff;
          font-size: 22px;
          margin-left: 15px;
        }

        .dashboard-content {
          padding: 40px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
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
          color: #000dff;
        }

        .card p {
          font-size: 14px;
          color: #555;
          margin-bottom: 15px;
        }

        .card button {
          background-color: #000dff;
          color: #fff;
          border: none;
          padding: 10px 18px;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.2s ease;
        }

        .card button:hover {
          background-color: #6b73ff;
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

      <div className="admin-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <h2 className="logo">Admin Panel</h2>
          <ul>
            <li onClick={() => navigate("/admin/home")}>🏠 Dashboard</li>
            <li onClick={() => navigate("/admin/mis/dashboard")}>📊 MIS Section</li>
            <li onClick={() => navigate("/admin/report/dashboard")}>📑 Report Section</li>
            <li onClick={logout}> Logout</li>
          </ul>
        </aside>

        <main className="main-content">
          <header className="header">
            <h2>Welcome, Admin 👋</h2>
          </header>

          <section className="dashboard-content">
            <div className="card">
              <h3>MIS Dashboard</h3>
              <p>Manage all MIS-related analytics and reports here.</p>
              <button onClick={() => navigate("/admin/mis/dashboard")}>Go to MIS</button>
            </div>

            <div className="card">
              <h3>Report Dashboard</h3>
              <p>View and generate all system reports efficiently.</p>
              <button onClick={() => navigate("/admin/report/dashboard")}>Go to Reports</button>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default AdminHome;
