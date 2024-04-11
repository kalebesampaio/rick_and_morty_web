import styled from "styled-components";

export const CardStyles = styled.li`
width: 600px;
height: 220px;
display: flex;
overflow: hidden;
background-color: var(--grey2);
border-radius: 0.5rem;
margin: 0.75rem;
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

@media (max-width: 650px){
    flex-direction: column;
    height: initial;
    width: 100%;
}

figure{
    flex: 2 1 0%;
    width: 100%;
}
`

export const CardImage = styled.img`
width: 100%;
height: 100%;
margin: 0px;
opacity: 1;
transition: opacity 0.5s ease 0s;
object-position: center center;
object-fit: cover;

@media (max-width: 650px){
    height: 300px;
}
`

export const CardInfoList = styled.ul`
flex: 3 1 0%;
position: relative;
padding: 0.75rem;
color: rgb(255, 255, 255);
display: flex;
flex-direction: column;
`
export const CardInfoContainer = styled.li`
-webkit-box-pack: start;
justify-content: flex-start;
flex: 1 1 0%;
display: flex;
flex-direction: column;
gap: 5px;
`

export const CardInfoItem = styled.section`
color: rgb(245, 245, 245);
` 

export const CardTitle = styled.h2`
font-size: 1.5rem;
cursor: pointer;

&:hover{
    color: rgb(255, 152, 0);
}
` 

export const CardInfoStatus = styled.span`
display: flex;
-webkit-box-align: center;
align-items: center;
text-transform: capitalize;
font-size: 16px;
font-weight: 500;
cursor: pointer;
`

export const CardStatusIcon = styled.span.attrs<{ foo?: number, status: string }>({ foo: 1 })`
height: 0.5rem;
width: 0.5rem;
margin-right: 0.375rem;
background: ${props => {
    if(props.status === "Alive"){
        return "rgb(85, 204, 68);"
    }
    if(props.status === "Dead"){
        return "rgb(214, 61, 46);"
    }
    return "rgb(211,211,211)"
}};
border-radius: 50%;
`

export const CardInfoLocation = styled.span`
color: rgb(158, 158, 158);
font-size: 16px;
font-weight: 500;

@media (max-width: 650px) {
    margin-top: 1.25rem;
}
`
export const CardInfoParagraph = styled.p`
color: rgb(245, 245, 245);
font-size: 1rem;
cursor: pointer;
&:hover{
    color: rgb(255, 152, 0);
}
`