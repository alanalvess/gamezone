import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from "@/pages/home/Home.tsx";
import Carrinho from "@/pages/cart/Cart.tsx";
import Consoles from "@/pages/consoles/Consoles.tsx";
import Games from "@/pages/games/Games.tsx";
import GameDetails from "@/pages/gameDetails/GameDetails.tsx";
import NotFound from "@/pages/notFound/NotFound.tsx";
import Sobre from "@/pages/about/About.tsx";

import Header from "@/components/header/Header.tsx";
import Footer from "@/components/footer/Footer.tsx";

export default function RouteList() {

    return (

        <BrowserRouter>

            <header>
                <Header/>
            </header>

            <main>
                <div className="dark:bg-neutral-800 min-h-[80vh]">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/jogos" element={<Games/>}/>
                        <Route path="/:id" element={<GameDetails/>}/>
                        <Route path="/consoles" element={<Consoles/>}/>
                        <Route path="/sobre-nos" element={<Sobre/>}/>
                        <Route path="/carrinho" element={<Carrinho/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </div>
            </main>

            <footer>
                <Footer/>
            </footer>

        </BrowserRouter>
    )
}
