import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store/slices/themeSlice";
import { RootState } from '../../store/store';
import styles from './ThemeToggle.module.scss';
import { IoSunnySharp, IoMoonSharp } from 'react-icons/io5';

const ThemeToggle: React.FC = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state: RootState) => state.theme.theme);

    const handleToggle = () => {
        dispatch(toggleTheme());
    };

    return (
        <button
            className={styles.toggleButton}
            onClick={handleToggle}
            aria-label="Toggle Theme"
        >
            {theme === 'light' ? <IoMoonSharp /> : <IoSunnySharp />}
        </button>
    );
};

export default ThemeToggle;