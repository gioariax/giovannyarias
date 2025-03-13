import { GlassesStyled, ProfileIconStyled } from "./GlassesStyled";
import IconCode from "../../assets/images/icons/icon-code.svg";
import IconCamera from "../../assets/images/icons/icon-camera.svg";
import { useaAppStore } from "../../store/appStore";
import * as motion from "motion/react-client";
import Lens from "../lens/Lens";
import { PROFILES } from "../../constants/constants";

function Glasses() {

  const { profile, setProfile } = useaAppStore()

  return (
    <GlassesStyled>
      <div className="menu">
        <ProfileIconStyled onClick={() => setProfile(PROFILES.DEVELOPER)}>
          <motion.div 
            className="circle"
            animate={{ 
              scale: profile === PROFILES.DEVELOPER ? 1 : 0.8,
              opacity: profile === PROFILES.DEVELOPER ? 1 : 0.5,
              backgroundColor: profile === PROFILES.DEVELOPER ? '#1DB533': '#242424'
            }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            initial={{ scale: 0.8, opacity: 0.5, backgroundColor: '#242424' }}
          >
            <motion.img 
              src={IconCode} 
              className="profile-icon" 
              alt="code icon" 
              animate={{ 
                scale: profile === PROFILES.DEVELOPER ? 1.2 : 1.5,
              }}
              transition={{ duration: 0.5 }}
              initial={{ scale: 1.2 }}
            />
          </motion.div>
        </ProfileIconStyled>
        <motion.div 
          className="glasses"
          animate={{ scale: 1, opacity: 1 }}
          initial={{ scale: 10, opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}>
          <Lens />
        </motion.div>
        <ProfileIconStyled onClick={() => setProfile(PROFILES.PHOTOGRAPHER)}>
          <motion.div 
            className="circle" 
            animate={{
              scale: profile === PROFILES.PHOTOGRAPHER ? 1 : 0.8, 
              opacity: profile === PROFILES.PHOTOGRAPHER ? 1 : 0.5,
              backgroundColor: profile === PROFILES.PHOTOGRAPHER ? '#FF003B': '#242424'
            }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            initial={{ scale: 0.8, opacity: 0.5, backgroundColor: '#242424' }}
          >
            <motion.img 
              src={IconCamera} 
              className="profile-icon" 
              alt="photo icon" 
              animate={{ 
                scale: profile === PROFILES.PHOTOGRAPHER ? 1.2 : 1.5,
              }}
              transition={{ duration: 0.5 }}
              initial={{ scale: 1.2 }}
            />
          </motion.div>
        </ProfileIconStyled>
      </div>
    </GlassesStyled>
  );
}

export default Glasses