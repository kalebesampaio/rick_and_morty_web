import { CardImage, CardInfoContainer, CardInfoItem, CardInfoList, CardInfoLocation, CardInfoParagraph, CardInfoStatus, CardStatusIcon, CardStyles, CardTitle } from "./styles"

interface Props {
    image: string; 
    name: string;
    status: string; 
    species: string; 
    origin: string; 
    location: string;
}

export const Card = ({image, name, status, species, origin, location }: Props) => {
    return <CardStyles>
        <figure>
            <CardImage src={image} alt="Imagem do personagem" />
        </figure>
        <CardInfoList>
        <CardInfoContainer>
            <CardInfoItem>
                <CardTitle>{name}</CardTitle>
            </CardInfoItem>
            <CardInfoItem>
                <CardInfoStatus>
                    <CardStatusIcon status={status}/>
                     {status} - {species}
                </CardInfoStatus>
            </CardInfoItem>
        </CardInfoContainer>
        <CardInfoContainer>
            <CardInfoLocation>
            Última localização conhecida:
            </CardInfoLocation>
            <CardInfoParagraph>{location}</CardInfoParagraph>
        </CardInfoContainer>

        <CardInfoContainer>
            <CardInfoLocation>
            Planeta de origem:
            </CardInfoLocation>
            <CardInfoParagraph>{origin}</CardInfoParagraph>
        </CardInfoContainer>
        </CardInfoList>
       
    </CardStyles>
}