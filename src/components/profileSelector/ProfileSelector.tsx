import { useaAppStore } from "../../store/appStore";
import Glasses from "../glasses/Glasses";
import Profile from "../profile/Profile";
import { ProfileSelectorStyled } from "./ProfileSelectorStyled";
import * as motion from "motion/react-client";

function ProfileSelector() {

  const { profile } = useaAppStore()

  return (
    <ProfileSelectorStyled>
      <motion.div 
        className='content' 
        animate={{ height: profile? '200px': 'calc(100vh - 82px)' }}
        initial={{ height: 'calc(100vh - 82px)' }}
        transition={{ duration: 0.5 }}>
        <Glasses />
        <Profile />
      </motion.div >
    </ProfileSelectorStyled>
  );
}

export default ProfileSelector