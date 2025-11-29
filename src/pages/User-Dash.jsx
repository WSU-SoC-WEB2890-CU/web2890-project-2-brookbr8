import DashHeader from "../scripts/components/Dash-Header";

function UserDash() {
  return (
    <div className="dashboard">
      <DashHeader />
      <main className="dashboard-content">
        <h1>Welcome to your Dashboard!</h1>
      </main>
    </div>
  );
}

export default UserDash;
