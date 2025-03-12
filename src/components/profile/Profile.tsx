import { useTranslation } from "react-i18next";
import ProfileStyled from "./ProfileStyled";
import { useaAppStore } from "../../store/appStore";
import * as motion from "motion/react-client";

function Profile() {
  const { t } = useTranslation();
  const { profile } = useaAppStore();
  
  return (
    <ProfileStyled>
      <motion.div className="profile" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 1.5 }}>
        <div className="name">
          Giovanny Arias
        </div>
        <div className="title">
          { profile && t(profile+'Title') }
        </div>
      </motion.div>
    </ProfileStyled>
  );
}

export default Profile