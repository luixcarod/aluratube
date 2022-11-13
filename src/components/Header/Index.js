import { StyledBanner, StyledHeader } from "./Header.js";
import config from '../../../config.json';

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
            </section>
        </StyledHeader>
    )
}