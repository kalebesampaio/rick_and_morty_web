import { useContext, useEffect } from "react"
import { Card } from "../../components/Card"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { List } from "../../components/List"
import Pagination from "@mui/material/Pagination";
import { CharacterContext } from "../../providers/CharacterProvider"
import { HomePageContainer, HomePageStyles } from "../HomePage/styles"
import { useNavigate, useParams, Navigate } from "react-router-dom"
import { Loading } from "../../components/Loading"
import { NotFound } from "../../components/NotFound"

export const NextPage = () => {
  const { getCharacter, characters, setPage, totalPage, loading } = useContext(CharacterContext);
  const navigate = useNavigate();

  const { id } = useParams();
  useEffect(() => {
    if(id){
        getCharacter(id);
    }
 
  }, []);
  useEffect(() => {
    if(id){
        getCharacter(id);
    }
 
  }, [id]);

 if(id == "1"){
    return <Navigate to="/" />
 }
return (
    <>
    <HomePageStyles>
        <Header/>
        <HomePageContainer>
        {loading ? <Loading/> : (
            <List>
            {characters.length === 0 ? <NotFound/> : (
              characters.map((char) => <Card key={char.id} image={char.image} name={char.name} 
            status={char.status} species={char.species} origin={char.origin.name} 
            location={char.location.name} />)
            )}         
          </List>
          )}

        </HomePageContainer>
        <Pagination
          count={totalPage}
          color="primary"
          page={parseInt(id!)}
          onChange={(e, page) => {
            e.preventDefault();
            setPage(page.toLocaleString())
            navigate(`/page/${page}`)
          }}
        />
    </HomePageStyles>
    <Footer/>
    </>
    
)
}