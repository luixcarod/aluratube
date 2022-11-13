import { StyledBanner, StyledHeader } from "./Header.js";
import config from '../../../config.json';
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";

export default function Header() {
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
                <div className="social">
                        <span>
                            <a href="https://github.com/luixcarod" target="_blank"><AiOutlineGithub /></a>
                            <a href="https://www.linkedin.com/in/luiz-carlos-rodrigues-a7611679/" target="_blank"><AiFillLinkedin /></a>
                        </span>
                    </div>
            </section>
        </StyledHeader>
    )
}