import React from 'react';
import { useTranslation } from 'react-i18next';

const LangSwitcher = () => {
    const { i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return <button onClick={toggle} type="button">Click</button>;
};

export default LangSwitcher;
