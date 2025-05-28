import { NavLink } from 'react-router-dom'

import s from './Header.module.css'

export default function Header() {
  return (
    <header className={s.Header}>
      <p>Easy</p>
      <nav>
        <NavLink to="/" className={({ isActive }) => isActive ? s.active : s.inactive}>Home</NavLink>
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? s.active : (s.inactive, s.dash)}>Dashboard</NavLink>
      </nav>
    </header>
  )
}
