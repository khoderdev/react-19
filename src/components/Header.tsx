// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Dialog, Disclosure } from '@headlessui/react';
// import {
//     Bars3Icon, XMarkIcon,
// } from '@heroicons/react/24/outline';
// import { ChevronDownIcon } from '@heroicons/react/20/solid';
// import ThemeToggle from './ThemeToggle';

// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ');
// }
// const products = [
//     { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#' },
//     { name: 'Engagement', description: 'Speak directly to your customers', href: '#' },
//     { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#' },
//     { name: 'Integrations', description: 'Connect with third-party tools', href: '#' },
//     { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#' },
// ]
// const callsToAction = [
//     { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#' },
//     { name: 'Engagement', description: 'Speak directly to your customers', href: '#' },
//     { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#' },
//     { name: 'Integrations', description: 'Connect with third-party tools', href: '#' },
//     { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#' },
// ]

// export default function Header() {
//     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//     const [prevScrollPos, setPrevScrollPos] = useState(0);
//     const [visible, setVisible] = useState(true);

//     useEffect(() => {
//         const handleScroll = () => {
//             const currentScrollPos = window.pageYOffset;

//             setVisible(
//                 (prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) ||
//                 currentScrollPos < 10
//             );

//             setPrevScrollPos(currentScrollPos);
//         };

//         window.addEventListener('scroll', handleScroll);

//         return () => window.removeEventListener('scroll', handleScroll);
//     }, [prevScrollPos, visible]);

//     return (
//         <header className={`bg-[#333] text-white dark:text-white  fixed top-0 w-full transition-all duration-300 flex-1  ${visible ? '' : '-translate-y-full'}`}>
//             <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
//                 <div className="flex lg:flex-1">
//                     <Link to="/" className="-m-1.5 p-1.5">
//                         <h1 className="logo-title text-2xl text-[#ef4444]">React 19</h1>
//                     </Link>
//                 </div>
//                 <div className="flex lg:hidden">
//                     <button
//                         type="button"
//                         className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
//                         onClick={() => setMobileMenuOpen(true)}
//                     >
//                         <span className="sr-only">Open main menu</span>
//                         <Bars3Icon className="h-6 w-6 text-[#34d399]" aria-hidden="true" />
//                     </button>
//                 </div>
//                 <div className="hidden lg:flex lg:gap-x-12 border">

//                     <Link to='/' className="flex items-center gap-x-1 text-sm font-semibold leading-6 " >
//                         Home
//                     </Link>
//                     <Link to="/features" className="text-sm font-semibold leading-6 ">
//                         Features
//                     </Link>
//                     <Link to="/users" className="text-sm font-semibold leading-6 ">
//                         Users
//                     </Link>
//                     <Link to="/dashboard" className="text-sm font-semibold leading-6 ">
//                         Dashboard
//                     </Link>
//                 </div>
//                 <div className='flex gap-4 border'>
//                     <div className="hidden lg:flex lg:flex-1 lg:justify-end">
//                         <Link to="/login" className="text-sm font-semibold leading-6 ">
//                             Log in <span aria-hidden="true">&rarr;</span>
//                         </Link>
//                     </div>
//                     <div className='theme-toggle'>
//                         <ThemeToggle />
//                     </div>
//                 </div>
//             </nav>
//             <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
//                 <div className="fixed inset-0 z-10" />
//                 <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#000] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
//                     <div className="flex items-center justify-between">
//                         <Link to="#" className="-m-1.5 p-1.5">
//                             <h1 className="text-2xl text-[#ef4444]">React 19</h1>

//                         </Link>
//                         <button
//                             type="button"
//                             className="-m-2.5 rounded-md p-2.5 text-gray-100"
//                             onClick={() => setMobileMenuOpen(false)}
//                         >
//                             <span className="sr-only">Close menu</span>
//                             <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
//                         </button>
//                     </div>
//                     <div className="mt-6 flow-root">
//                         <div className="-my-6 divide-y divide-gray-600">
//                             <div className="space-y-2 py-6">
//                                 <Disclosure as="div" className="-mx-3">
//                                     {({ open }) => (
//                                         <>
//                                             <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-[#34d399] hover:bg-[#242424]">
//                                                 Home
//                                                 <ChevronDownIcon
//                                                     className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
//                                                     aria-hidden="true"
//                                                 />
//                                             </Disclosure.Button>
//                                             <Disclosure.Panel className="mt-2 space-y-2">
//                                                 {[...products, ...callsToAction].map((item) => (
//                                                     <Disclosure.Button
//                                                         key={item.name}
//                                                         as={Link}
//                                                         to={item.to}
//                                                         className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-[#34d399] hover:bg-[#242424]"
//                                                     >
//                                                         {item.name}
//                                                     </Disclosure.Button>
//                                                 ))}
//                                             </Disclosure.Panel>
//                                         </>
//                                     )}
//                                 </Disclosure>
//                                 <Link
//                                     to="/features"
//                                     className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#34d399] hover:bg-[#242424]"
//                                 >
//                                     Features
//                                 </Link>
//                                 <Link
//                                     to="/users"
//                                     className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#34d399] hover:bg-[#242424]"
//                                 >
//                                     Users
//                                 </Link>
//                                 <Link
//                                     to="/dashbaord"
//                                     className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#34d399] hover:bg-[#242424]"
//                                 >
//                                     Dashboard
//                                 </Link>
//                             </div>
//                             <div className="py-6">
//                                 <Link
//                                     to="#"
//                                     className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-[#34d399] hover:bg-[#242424]"
//                                 >
//                                     Log in
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </Dialog.Panel>
//             </Dialog>
//         </header>
//     );
// }

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Dialog, Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import ThemeToggle from './ThemeToggle';

function classNames(...classes) {
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

    return (
        <header className={` text-black-text dark:text-white-text fixed top-0 !drop-shadow-lg w-full transition-all duration-300 flex justify-center ${visible ? '' : ''}`} style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)', backdropFilter: 'blur(10px)' }}>
            <nav className="mx-auto flex items-center justify-between p-4 py-2 lg:px- max-w-screen-xl w-full" aria-label="Global">
                <Link to="/" className="-m-1.5 p-1.5">
                    <div className="!text-[2rem] font-semibold text-[#ef4444]">React 19</div>
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
                    <Link to="/features" className="text-md font-semibold leading-6 ">
                        Features
                    </Link>
                    <Link to="/users" className="text-md font-semibold leading-6 ">
                        Users
                    </Link>
                    <Link to="/dashboard" className="text-md font-semibold leading-6 ">
                        Dashboard
                    </Link>
                </div>
                {/* <div className="flex items-center gap-4"> */}
                <Link to="/login" className="hidden lg:block text-md font-semibold leading-6 ">
                    Log in <span aria-hidden="true">&rarr;</span>
                </Link>
                <div className='lg:flex hidden'>
                    <ThemeToggle />
                </div>
                {/* </div> */}
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
                                to="/features"
                                className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#34d399] hover:bg-[#242424]"
                            >
                                Features
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
                            <Link
                                to="/login"
                                className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#34d399] hover:bg-[#242424]"
                            >
                                Log in
                            </Link>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
}
