import React from 'react';

import { useTheme } from 'shared/lib/theme';

export const ThemeSwitcher = () => {
    const { toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme} type="button">Toggle</button>
    );
};
