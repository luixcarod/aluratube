import React from "react";
import { StyledRegisterVideo } from "./styles";
import { createClient } from "@supabase/supabase-js";

function useForm(propsDoForm) {
    const [novoVideo, setNovoVideo] = React.useState(propsDoForm.initialValues);

    return {
        novoVideo,
        handleChange: (e) => {
            const value = e.target.value;
            const name = e.target.name;
            setNovoVideo({
                ...novoVideo,
                [name]: value
            });
        },
        clearForm() {
            setNovoVideo({});
        }
    };
}

const PROJECT_URL = "https://phbalwncokaegahodshk.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBoYmFsd25jb2thZWdhaG9kc2hrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyNzQ3ODAsImV4cCI6MTk4Mzg1MDc4MH0.ABVtbEU1ZtBsn1826jx4M4MzPRg5I_qRmoqj7lLgyW0";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

function getThumbnail(url) {
    //     "https://i.ytimg.com/vi/nwYAkagBGuQ/hqdefault.jpg"
    return `https://i.ytimg.com/vi/${url.split("v=")[1]}/hqdefault.jpg`;
}

export default function RegisterVideo() {

    const formCadastro = useForm({
        initialValues: { titulo: "", url: "" }
    });

    const [formVisivel, setFormVisivel] = React.useState(false);

    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)}>
                +
            </button>

            {/* Operador de curto-circuito */}
            {formVisivel && (
                <form onSubmit={(e) => {
                    e.preventDefault();

                    supabase.from("video").insert({
                        title: formCadastro.novoVideo.titulo,
                        url: formCadastro.novoVideo.url,
                        thumb: getThumbnail(formCadastro.novoVideo.url),
                        playlist: "jogos"
                    })
                    .then((e) => {
                        console.log(e);
                    })
                    .catch(()=>{
                        console.log("Erro ao cadastrar novo video...")
                    })

                    setFormVisivel(false);
                    formCadastro.clearForm();
                }}>
                    <div>
                        <button type="button" className="close-modal" onClick={() => setFormVisivel(false)}>
                            X
                        </button>
                        <input
                            placeholder="Título do vídeo"
                            name="titulo"
                            value={formCadastro.novoVideo.titulo}
                            onChange={formCadastro.handleChange}
                        />
                        <input
                            placeholder="URl do vídeo"
                            name="url"
                            value={formCadastro.novoVideo.url}
                            onChange={formCadastro.handleChange}
                        />
                        <button type="submit">Cadastrar</button>
                    </div>
                </form>
            )}
            {/* Essa forma funciona igual a próxima, seria mais aceitave
            pois como não temos outra condição necessária, ela sairia mais limpa */}

            {/* ============================================================================== */}

            {/* Operadore ternário */}
            {/* {formVisivel ? (
                <form>
                    <div>
                        <button className="close-modal">
                            X
                        </button>
                        <input placeholder="Título do vídeo" />
                        <input placeholder="URL do vídeo" />
                        <button type="submit">Cadastrar</button>
                    </div>
                </form>
            ) : null} */}
            {/* Aqui ele verifica se uma condição é verdadeira ou não, igual um if else
            então condição é verdadeira (?) sim: renderiza isso : não: renderiza esse outro
            nesse nosso caso como não temos outro tipo de renderização, colocamos um null para
            renderizar nada*/}
        </StyledRegisterVideo>
    )
}