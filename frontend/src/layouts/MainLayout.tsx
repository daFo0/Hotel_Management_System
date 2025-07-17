import { Link, Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <nav className="p-4 bg-gray-100 flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <div className="p-4">
        <Outlet /> {/* Đây là nơi render route con */}
      </div>
    </div>
  );
}
