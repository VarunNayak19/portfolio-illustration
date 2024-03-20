import React from 'react';
import { useTheme } from '../../ThemeContext';
import { Switch } from '@headlessui/react';

const ToggleDarkMode = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div className={`h-auto flex lg:flex-col flex-row-reverse lg:justify-center lg:px-0 px-2 lg:py-0 py-2 justify-between items-center gap-2`}>
      <Switch
        checked={isDarkMode}
        onChange={toggleDarkMode}
        className={`bg-black relative inline-flex h-[20px] w-[58px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${
            isDarkMode ? 'translate-x-9' : 'translate-x-0'
          } pointer-events-none inline-block h-[16px] w-[16px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
      <span className="text-xs">{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
    </div>
  );
};

export default ToggleDarkMode;
