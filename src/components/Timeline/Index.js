import { StyledFavorito } from "./Favoritos";
import { StyledTimeline } from "./Timeline";



export default function Timeline({ searchValue, ...props }) {

    //Aqui criamos uma variavel que recebe um array que contém as keys do arrey de playlists
    //nesse caso ele vai dar um retorno com os nomes de cada arrey...
    //Lembrando que o object.kays é uma função de javascript pura, pois o react se escora muito no js

    const playlistNames = Object.keys(props.playlists);
    // console.log(`playlistsName: ${playlistNames}`);

    const favoritosNames = Object.keys(props.favoritos);


    //Statement
    //Retorno por expressão
    //Pesquisar esses dois termos depois...

    //Nesse primeiro return retornamos a parte principal desse componente, que no caso são
    //todas playlists que o usuario tem salvo...
    return (
        <>
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
                                {videos
                                    .filter((video) => {
                                        //aqui criamos duas novas variaveis "titleNormalized e searchValueNormalized" que 
                                        //recebe o titulo da busca
                                        //e a função toLowerCase() faz com que indiferente do case da fonte, ela exiba
                                        //a busca. Ex: a == A ou S == s. Não faz diferença entre a fonte maiuscula ou
                                        //minuscula...
                                        const titleNormalized = video.title.toLowerCase();
                                        const searchValueNormalized = searchValue.toLowerCase();

                                        return titleNormalized.includes(searchValueNormalized);
                                    })
                                    .map((video) => {
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

            <StyledFavorito>
                {favoritosNames.map(() => {
                    const favorito = props.favoritos[favoritosNames];

                    return (
                        <section key={favoritosNames}>
                            <h2>{favoritosNames}</h2>
                            {favorito.map((favorito) => {
                                return (
                                    <a key={favorito.url} href={favorito.url}>
                                        <img src={favorito.thumb} />
                                        <span>
                                            @{favorito.nomecanal}
                                        </span>
                                    </a>
                                )
                            })}
                        </section>
                    )
                })}
            </StyledFavorito>
        </>

    )
}