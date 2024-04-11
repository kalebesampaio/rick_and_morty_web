import { CardImage, CardInfoContainer, CardInfoItem, CardInfoList, CardInfoLocation, CardInfoParagraph, CardInfoStatus, CardStatusIcon, CardStyles, CardTitle } from "./styles"

export const Card = () => {
    return <CardStyles>
        <figure>
            <CardImage src="https://rickandmortyapi.com/api/character/avatar/154.jpeg" alt="Imagem do personagem" />
        </figure>
        <CardInfoList>
        <CardInfoContainer>
            <CardInfoItem>
                <CardTitle>Hamurai</CardTitle>
            </CardInfoItem>
            <CardInfoItem>
                <CardInfoStatus>
                    <CardStatusIcon/>
                     Dead - Alien
                </CardInfoStatus>
            </CardInfoItem>
        </CardInfoContainer>
        <CardInfoContainer>
            <CardInfoLocation>
            Last known location:
            </CardInfoLocation>
            <CardInfoParagraph>Earth (Replacement Dimension)</CardInfoParagraph>
        </CardInfoContainer>

        <CardInfoContainer>
            <CardInfoLocation>
            First seen in:
            </CardInfoLocation>
            <CardInfoParagraph>Total Rickall</CardInfoParagraph>
        </CardInfoContainer>
        </CardInfoList>
       
    </CardStyles>
}