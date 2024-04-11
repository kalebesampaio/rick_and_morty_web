import { Card } from "../../components/Card"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { List } from "../../components/List"
import { HomePageContainer, HomePageStyles } from "./styles"

export const HomePage = () => {
return (
    <>
    <HomePageStyles>
        <Header/>
        <HomePageContainer>
            <List>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </List>
        </HomePageContainer>
   
    </HomePageStyles>
    <Footer/>
    </>
    
)
}