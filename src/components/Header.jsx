const courseStatus = ["All", "Active", "Completed", "Upcoming"];

function Header() {
  return (
    <div className="header">
      <h1>My Courses (3)</h1>
      <div className="course-status">
        {courseStatus.map((s) => (
          <div key={s}>{s}</div>
        ))}
      </div>
    </div>
  );
}

export default Header;
