import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="site-header">
      <div className="logo-wrap">
        <span className="logo-dot" />
        <span className="logo-text">LEMON SHOCK</span>
      </div>
      <nav className="site-nav">
        <NavLink to="/" end>
          TOP
        </NavLink>
        <NavLink to="/experience">SOUR ROOM</NavLink>
      </nav>
    </header>
  )
}
