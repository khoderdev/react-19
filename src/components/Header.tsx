import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Dialog, Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import ThemeToggle from './ThemeToggle';
import { useAtom } from 'jotai';
import { persistedIsLoggedInAtom } from '../atom/store';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const products = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#' },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#' },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#' },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#' },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#' },
];

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useAtom(persistedIsLoggedInAtom);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);


    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(
                (prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) ||
                currentScrollPos < 10
            );
            setPrevScrollPos(currentScrollPos);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible]);

    const handleLogin = () => {
        // Perform login ( authenticate user)
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        // Perform logout ( clear authentication)
        setIsLoggedIn(false);
    };

    return (
        <>
            <header className={`h-14  text-black-text dark:text-white-text fixed top-0 border-b border-b-white-contents dark:border-b-black-contents !drop-shadow-lg w-full transition-all duration-300 flex justify-center ${visible ? '' : ''}`} style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)', backdropFilter: 'blur(10px)' }}>
                <nav className="mx-auto flex items-center justify-between p-4 py-2 lg:px- max-w-screen-xl w-full" aria-label="Global">
                    <Link to="/" className="-m-1.5 p-1.5">
                        <div className="!text-[2.5rem] font-bold text-[#ef4444]">React 19</div>
                    </Link>
                    <div className="flex justify-center items-center lg:hidden gap-4">
                        <ThemeToggle />
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-10 w-10 text-[#34d399]" aria-hidden="true" />
                        </button>

                    </div>
                    <div className="hidden lg:flex gap-x-12">
                        <Link to='/' className="text-md font-semibold leading-6 ">
                            Home
                        </Link>
                        <Link to="/orders" className="text-md font-semibold leading-6 ">
                            Order
                        </Link>
                        <Link to="/users" className="text-md font-semibold leading-6 ">
                            Users
                        </Link>
                        <Link to="/tables" className="text-md font-semibold leading-6 ">
                            Tables
                        </Link>
                    </div>
                    {isLoggedIn ? (
                        <button className="hidden lg:block text-md font-semibold leading-6 " onClick={handleLogout}>
                            Log out <span aria-hidden="true">&rarr;</span>
                        </button>
                    ) : (
                        <button className="hidden lg:block text-md font-semibold leading-6 " onClick={handleLogin}>
                            Log in <span aria-hidden="true">&rarr;</span>
                        </button>
                    )}
                    <div className='lg:flex hidden'>
                        <ThemeToggle />
                    </div>
                </nav>
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-10 bg-opacity-80" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-20 w-full overflow-y-auto bg-black-contents px-6 py-6 sm:max-w-sm">
                        <div className="flex items-center justify-between">
                            <Link to="/" className="-m-1.5 p-1.5">
                                <h1 className="text-2xl text-[#ef4444]">React 19</h1>
                            </Link>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-white"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6">
                            <div className="space-y-2">
                                <Disclosure as="div" className="">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-[#34d399] hover:bg-[#242424]">
                                                Home
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'transform rotate-180' : '', 'h-5 w-5')}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {[...products].map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        to={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-[#34d399] hover:bg-[#242424]"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <Link
                                    to="/order"
                                    className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#34d399] hover:bg-[#242424]"
                                >
                                    Order
                                </Link>
                                <Link
                                    to="/users"
                                    className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#34d399] hover:bg-[#242424]"
                                >
                                    Users
                                </Link>
                                <Link
                                    to="/dashboard"
                                    className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#34d399] hover:bg-[#242424]"
                                >
                                    Dashboard
                                </Link>

                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>

        </>


    );
}
