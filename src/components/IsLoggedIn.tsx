import React, { ReactNode } from 'react';
import { useAtom } from 'jotai';
import { token, persistedIsLoggedInAtom } from '../atom/store';

interface IsLoggedInProps {
    children: ReactNode;
}

const IsLoggedIn: React.FC<IsLoggedInProps> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useAtom(persistedIsLoggedInAtom);

    const handleLogin = () => {
        const receivedToken = token;
        if (receivedToken === token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    };

    return isLoggedIn ? (
        <>
            {children}
        </>
    ) : (
        <div className='flex flex-col gap-6 !justify-center !items-center'>
            <h1 className='text-red-pri font-semibold'>You're Not Logged In</h1>
            <button className='btn-bg-green !text-xl' onClick={handleLogin}>Login</button>
        </div>
    );
};

export default IsLoggedIn;
