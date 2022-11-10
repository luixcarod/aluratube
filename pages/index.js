import config from '../config.json';
import styled from 'styled-components';
import { CSSReset } from '../src/components/CSSReset';
import Menu from '../src/components/Menu';
import { StyledTimeline } from '../src/components/Timeline';

function HomePage() {

    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
                <Menu />

                <Header />

                {/* Aqui na timeline o que passei: playlists={config.playlists} 
                é conhecido como props (as propriedades desse componente) */}
                <Timeline playlists={config.playlists} />
            </div>
        </>
    )
}

export default HomePage

const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    .user-info{
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;

const StyledBanner = styled.div`
    background-color: blue;
    background-image: url(${({ bg }) => bg});
    /* background-image: url(${config.bg}); */
    height: 230px;
`;

function Header() {
    return (
        <StyledHeader>
            <StyledBanner bg={config.banner} />
            <section className='user-info'>
                {/* As aspas invertidas facilita a concatenação das strings com variaveis */}
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>

                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}

function Timeline(props) {

    //Aqui criamos uma variavel que recebe um array que contém as keys do arrey de playlists
    //nesse caso ele vai dar um retorno com os nomes de cada arrey...
    //Lembrando que o object.kays é uma função de javascript pura, pois o react se escora muito no js
    const playlistNames = Object.keys(props.playlists);
    // console.log(`playlistsName: ${playlistNames}`);


    //Statement
    //Retorno por expressão
    //Pesquisar esses dois termos depois...

    //Nesse primeiro return retornamos a parte principal desse componente, que no caso são
    //todas playlists que o usuario tem salvo...
    return (
        <StyledTimeline>
            {/* Essa primeira linha mapeia a variavel playlistsNames que contem um arrey
            com os nomes dos objetos que ta pegando lá do arquivo config.json*/}
            {playlistNames.map((playlistName) => {

                //aqui criamos uma variavel videos que recebe um arrey para cada objeto que tenha
                //dentro do arrey playlists
                const videos = props.playlists[playlistName];

                //nesse segundo return criamos uma sessão para CADA playlist que o usuario tenha
                return (
                    <section key={playlistName}>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.map((video) => {
                                // aqui mapeamos cada video dentro de cada playlist, renderizando os videos
                                // em sua propria playlist
                                return (
                                    <a key={video.url} href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                    //moral desse código, ele cria um arrey com os nomes das playlists
                    //depois cria um arrey com os videos de cada playlist
                    //ai renderiza na página cada playlist com seus respectivos videos
                    //ficaria algo como: <playlist 01 -> video 01, video02, video...
                    //acabda a playlist 01, vem a playlist 02 fazendo a mesma coisa...
                )
            })}
        </StyledTimeline>
    )
}