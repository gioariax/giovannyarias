import LanguageSwitcher from "../../components/languageSwitcher/LanguageSwitcher";
import CVStyled from "./CVStyled";
import Experience from "../../components/experience/Experience";

function CV() {
  return <CVStyled>
    <div className="language">
      <LanguageSwitcher />
    </div>
    <Experience />
  </CVStyled>
}

export default CV