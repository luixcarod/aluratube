import React from "react";
import { ThemeProvider } from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import ColorModeProvider, { ColorModeContext } from "../src/components/Menu/components/ColorMode";
import RegisterVideo from "../src/components/RegisterVideo";
// import RoutesApp from "../src/routes";


const theme = {
    light: {
        backgroundBase: "#f9f9f9",
        backgroundLevel1: "#ffffff",
        backgroundLevel2: "#f0f0f0",
        borderBase: "#e5e5e5",
        textColorBase: "#222222",
    },
    dark: {
        backgroundBase: "#181818",
        backgroundLevel1: "#202020",
        backgroundLevel2: "#313131",
        borderBase: "#383838",
        textColorBase: "#FFFFFF",
    }
};


//Aqui separamos o ColorModeProvider dos outros provedores, porque ele precisa ser
//chamado antes do contexto, caso que não acontecia no código de referência abaixo:
// function MyApp({ Component, pageProps }) {
//     const contexto = React.useContext(ColorModeContext);
//     return (
//          Aqui, o ColorModeProvider estava sendo chamado depois do contexto
//          isso fazia a aplicação quebrar, pois o contexto ficava vazio e a aplicação
//          não sabia qual tema aplicar...
//          <ColorModeProvider initialMode={"dark"}></ColorModeProvider>
//              <ThemeProvider theme={theme[contexto.mode]}>
//                  <CSSReset />
//                  <Component {...pageProps} />
//              </ThemeProvider>
//          </ColorModeProvider>
//     )
// }


//Wrapper é conhecido como amarração, ou seja, ele pega dois ou mais providers
//de lugares diferentes e junta eles... No caso é um padrão de nomenclatura, e eu poderia colocar
//o nome que quisesse...
function ProviderWrapper(props) {
    return (
        <ColorModeProvider initialMode={"dark"}>
            {props.children}
        </ColorModeProvider>
    )
}

//esse componente serve para definições globais na aplicação...
function MyApp({ Component, pageProps }) {
    const contexto = React.useContext(ColorModeContext);

    return (

        <ThemeProvider theme={theme[contexto.mode]}>
            {/* <RoutesApp /> */}
            <CSSReset />
            <Component {...pageProps} />
            <RegisterVideo />
        </ThemeProvider>


    )
}

export default function _App(props) {
    return (

            <ProviderWrapper>
                <MyApp {...props} />
            </ProviderWrapper>
    )
};