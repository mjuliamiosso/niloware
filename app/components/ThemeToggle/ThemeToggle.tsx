import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store/slices/themeSlice";
import { RootState } from '../../store/store';

const ThemeToggle = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state: RootState) => state.theme.darkMode);

    const handleToggle = () => {
        dispatch(toggleTheme());
    };

    return (
        <button onClick={handleToggle}>
            Teste
        </button>
    );
};

export default ThemeToggle;