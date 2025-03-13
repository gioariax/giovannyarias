import HomeStyled from './HomeStyled'
import LanguageSwitcher from '../../components/languageSwitcher/LanguageSwitcher'
import { useaAppStore } from '../../store/appStore'
import Developer from '../../components/developer/Developer'
import ProfileSelector from '../../components/profileSelector/ProfileSelector'
import { PROFILES } from '../../constants/constants'
import Photographer from '../../components/photographer/Photographer'

function Home() {

  const { profile } = useaAppStore()

  return (
    <HomeStyled>
      <div className="language">
        <LanguageSwitcher />
      </div>
      <ProfileSelector />
      { profile === PROFILES.DEVELOPER && <Developer /> }
      { profile === PROFILES.PHOTOGRAPHER && <Photographer /> }
    </HomeStyled>
  )
}

export default Home