import React from "react";
import { StyledRegisterVideo } from "./styles";

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

export default function RegisterVideo() {

    const formCadastro = useForm({
        initialValues: { titulo: "", ur: "" }
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