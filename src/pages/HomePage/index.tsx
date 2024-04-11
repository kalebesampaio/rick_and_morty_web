import { useContext, useEffect, useState } from "react"
import { Card } from "../../components/Card"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { List } from "../../components/List"
import { HomePageContainer, HomePageStyles } from "./styles"
import Pagination from "@mui/material/Pagination";
import { CharacterContext } from "../../providers/CharacterProvider"
import {  Navigate } from "react-router-dom"

export const HomePage = () => {
  const { getCharacter, characters, setPage, totalPage } = useContext(CharacterContext);
  const [nextPage, setNexPage] = useState<number | null>(null)
  const onChange = (page: number) => {
    setNexPage(page)
  }

  useEffect(() => {
    getCharacter("1");
  }, []);

  if(nextPage){
    return <Navigate to={`page/${nextPage}`}/>;
  }
return (
    <>
    <HomePageStyles>
        <Header/>
        <HomePageContainer>
            <List>
              {characters.map((char) => <Card key={char.id} image={char.image} name={char.name} 
              status={char.status} species={char.species} origin={char.origin.name} 
              location={char.location.name} />)}         
            </List>
        </HomePageContainer>
        <Pagination
          count={totalPage}
          color="primary"
          onChange={(e, page) => {
            e.preventDefault();
            setPage(page.toLocaleString())
            onChange(page)
          }}
        />
    </HomePageStyles>
    <Footer/>
    </>
    
)
}