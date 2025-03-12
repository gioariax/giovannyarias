import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import { Segmented } from 'antd';
import { setDefaultOptions } from "date-fns";
import { enUS, es } from "date-fns/locale";

const LanguageSwitcher = () => {
  const { t } = useTranslation();
  const languageOptions = [{label: t('english'), value: 'en'}, {label: t('spanish'), value: 'es'}];

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    setDefaultOptions({ locale: getLocale(language) });
  }

  const getLocale = (language: string) => {
    switch (language) {
      case 'es':
        return es;
      case 'en':
        return enUS;
      default:
        return enUS;
    }
  };

  return (
    <Segmented
      options={languageOptions}
      onChange={(language: string) => changeLanguage(language)}
    />
  )
}

export default LanguageSwitcher;