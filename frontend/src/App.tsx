import {CartProvider} from "./contexts/CartContext";
import RouteList from "@/routeList/RouteList.tsx";
import {ThemeProvider} from "@/components/darkMode/themeProvider/ThemeProvider.tsx"

function App() {
    return (
        <>
            <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
                <CartProvider>
                    <RouteList/>
                </CartProvider>
            </ThemeProvider>
        </>
    )
}

export default App
