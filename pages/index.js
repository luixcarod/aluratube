import React from 'react';
import config from '../config.json';

//Importe dos COMPONENTES
import Menu from '../src/components/Menu/Index.js';
import Timeline from '../src/components/Timeline/Index.js';
import Header from '../src/components/Header/Index.js';

//Importe dos SERVICES
import { videoService } from '../src/services/videoService';


function HomePage() {

    const service = videoService();
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");
    const [playlists, setPlaylists] = React.useState({});

    React.useEffect(() => {
        service
            .getAllVideos()
            .then((dados) => {
                console.log(dados);

                const novasPlaylists = { ...playlists };
                dados.data.forEach((video) => {
                    if (!novasPlaylists[video.playlist]) {
                        novasPlaylists[video.playlist] = [];
                    }
                    novasPlaylists[video.playlist].push(video);
                });
                setPlaylists(novasPlaylists);
            });
    }, []);


    return (
        // Aqui, como queremos renderizar mais de uma coisa, o React exige que
        //tudo esteja dentro de uma "tag", então abrimos essas tags vazias
        //<></> afim de que tudo roda certinho...
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>

                {/* Prop Drilling - que é quando "furamos" as camadas do react para passar
                propriedades de um componente para seu children */}
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />

                <Header />

                {/* Aqui na timeline o que passei: playlists={config.playlists} 
                é conhecido como props (as propriedades desse componente) */}
                <Timeline playlists={playlists} favoritos={config.favoritos} searchValue={valorDoFiltro} />
            </div>
        </>
    )
}

export default HomePage

