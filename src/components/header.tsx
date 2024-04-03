import nlwUniteIcon from '../assets/nlw-unite-icon.svg'
import { Nav, NavLink } from './navigator'

export function Header() {
  return (
    <div className="flex items-center gap-5 py-2">
      <img src={nlwUniteIcon} alt="nlw-unite-icon" />

      <Nav>
        <NavLink href='/eventos'>Eventos</NavLink>
        <NavLink href='/participantes'>Participantes</NavLink>
      </Nav>
    </div>
  )
}