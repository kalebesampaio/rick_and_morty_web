import { Card } from "../../components/Card"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { List } from "../../components/List"
import { HomePageContainer, HomePageStyles } from "./styles"
import Pagination from "@mui/material/Pagination";

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
        <Pagination
          count={10}
          color="primary"
          onChange={(e, page) => {
            e.preventDefault();
            console.log(page)
          }}
        />
    </HomePageStyles>
    <Footer/>
    </>
    
)
}