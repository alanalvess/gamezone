import {Helmet} from "react-helmet";

import Consoles from "@/components/carousel/carouselConsoles/CarouselConsoles.tsx";
import GamesXbox from "@/components/carousel/gamesXbox/GamesXbox.tsx";
import GamesSwitch from "@/components/carousel/gamesSwitch/GamesSwitch.tsx";
import GamesPlaystation from "@/components/carousel/gamesPlaystation/GamesPlaystation.tsx";
import Poster from "@/components/carousel/poster/Poster.tsx";

export default function Home() {
    return (
        <>
            <Helmet>
                <title>GameZone | Home</title>
            </Helmet>

            <Poster/>
            <Consoles/>
            <GamesPlaystation/>
            <GamesXbox/>
            <GamesSwitch/>
        </>
    );
}
