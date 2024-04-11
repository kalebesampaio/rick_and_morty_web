import { HeaderLogo, HeaderStyles } from "./styles"
import Logo from "../../assets/Logo.png"

export const Header = () => {
    return <HeaderStyles>
        <figure>
            <HeaderLogo src={Logo} alt="Logo" />
        </figure>
    </HeaderStyles>
}