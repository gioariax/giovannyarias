import HomeStyled from './HomeStyled'
import Glasses from '../../components/glasses/Glasses'
import Profile from '../../components/profile/Profile'
import LanguageSwitcher from '../../components/languageSwitcher/LanguageSwitcher'

function Home() {

  return (
    <HomeStyled>
      <div className="language">
        <LanguageSwitcher />
      </div>
      <div className='content'>
        <Glasses />
        <Profile />
      </div>
    </HomeStyled>
  )
}

export default Home