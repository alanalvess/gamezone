import {Link} from 'react-router-dom';

import {Button} from "@/components/ui/button"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"

import {BsBagFill, BsList} from 'react-icons/bs';
import {ModeToggle} from "@/components/darkMode/modeToggle/ModeToggle.tsx";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"

import logo from '@/assets/img/gamezone.svg';

export default function Header() {

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-white dark:bg-neutral-950 ">

            <div className="fixed top-24 z-50">
                <ModeToggle/>
            </div>

            <div className="flex items-center justify-between">

                <Link to="/" className="md:!px-10">
                    <img src={logo} alt="Logo" className="h-20 w-auto"/>
                </Link>

                <div className="flex-1 flex justify-center ">
                    <NavigationMenu className="hidden md:flex">
                        <NavigationMenuList className="flex space-x-8 ">
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    className="!text-black !px-6 hover:!text-gray-600 hover:!underline dark:!text-neutral-50"
                                    asChild>
                                    <Link to="/" className="px-4 py-2 text-xl ">
                                        Home
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    className="!text-black !px-6 hover:!text-gray-600 hover:!underline dark:!text-neutral-50"
                                    asChild>
                                    <Link to="/consoles" className="px-4 py-2 text-xl">
                                        Consoles
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    className="!text-black !px-6 hover:!text-gray-600 hover:!underline dark:!text-neutral-50"
                                    asChild>
                                    <Link to="/jogos" className="px-4 py-2 text-xl">
                                        Jogos
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    className="!text-black !px-6 hover:!text-gray-600 hover:!underline dark:!text-neutral-50"
                                    asChild>
                                    <Link to="/sobre-nos" className="px-4 py-2 text-xl">
                                        Sobre Nós
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className="flex items-center space-x-2">
                    <Link to="/carrinho" className="hidden md:flex !px-10 !text-neutral-800 hover:!text-neutral-600">
                        <BsBagFill size={28}/>
                    </Link>

                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden h-12 w-14 text-white !mx-3">
                                <BsList size={30}/>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-72">
                            <nav className="flex flex-col text-lg gap-2">
                                <div className="border-t border-gray-300 my-4"></div>

                                <Link to="/" className="!px-3 py-3 !text-black dark:!text-neutral-50">Home</Link>
                                <Link to="/consoles" className="!px-3 py-3 !text-black dark:!text-neutral-50">Consoles</Link>
                                <Link to="/jogos" className="!px-3 py-3 !text-black dark:!text-neutral-50">Jogos</Link>
                                <Link to="/sobre-nos" className="!px-3 py-3 !text-black dark:!text-neutral-50">Sobre Nós</Link>

                                <div className="border-t border-gray-300 my-4"></div>

                                <Link to="/carrinho" className="!px-3 py-3 flex items-center gap-2 !text-black dark:!text-neutral-50">
                                    <BsBagFill size={24}/> Carrinho
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>

    );
}
