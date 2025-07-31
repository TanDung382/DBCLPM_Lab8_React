import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <h1>🎬 Movie Web</h1>
      <nav>
        <Link to="/">Trang chủ</Link>
        <Link to="/about">Giới thiệu</Link>
      </nav>
    </header>
  );
}
