import { Search } from '../../components/Search'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/iconeDisney.png'
import '../../styles/style.css'

export default function Home() {
  return (
    <div className="home-container">
        <Link>
          <img src={Logo} alt="imagem logo disney" />
        </Link>
        <Search/>
    </div>
  )
}