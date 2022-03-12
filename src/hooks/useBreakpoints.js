import { useState, useEffect } from 'react';
import createDebounce from '../utils/debounce';

const BREAK_TABLET_VALUE = 620;
const BREAK_LAPTOP_VALUE = 960;

function IsTablet() {
    return document.body.clientWidth >= BREAK_TABLET_VALUE;
}

function IsLaptop() {
    return document.body.clientWidth >= BREAK_LAPTOP_VALUE;
}

function useBreakpoints() {
    // Initially the values should always be false to be consistent
    // on both serverside and clientside to avoid different outputs.
    const [isTablet, setIsTablet] = useState(false);
    const [isLaptop, setIsLaptop] = useState(false);

    useEffect(() => {
        const debounce = createDebounce(300);
        const handler = () =>
            debounce(() => {
                setIsTablet(IsTablet());
                setIsLaptop(IsLaptop());
            });
        // Initially set the devices.
        handler();

        window.addEventListener('resize', handler);

        return () => {
            window.removeEventListener('resize', handler);
        };
    }, []);

    return {
        isTablet,
        isLaptop,
    };
}

export default useBreakpoints;
