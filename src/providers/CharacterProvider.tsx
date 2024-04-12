import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

interface ListProvaiderProps {
    children: ReactNode;
}

export interface ICharacter {
id: number;
name: string;
status: string;
species: string;
type?: string;
gender: string;
origin: {
    name: string;
    url: string;
};
location: {
    name: string;
    url: string;
};
image: string;
episode: string[];
url: string;
created: string;

}
export interface IData {
info: {
    count: number,
    pages: number,
    next: string | null
    prev: null | string
};
results: ICharacter[]    
}



export interface ICharacterContext {
getCharacter: (id: string) => void;
characters: ICharacter[];
setPage: React.Dispatch<React.SetStateAction<string>>;
totalPage: number;
page: string;
loading: boolean;
}

export const CharacterContext = createContext({} as ICharacterContext);

const CharacterProvider = ({ children }: ListProvaiderProps) => {
    const [characters, setCharacters] = useState<ICharacter[]>([])
    const [newData, setNewData] = useState<IData | null>(null)
    const [page, setPage] = useState<string>("1")
    const [loading, setLoading] = useState<boolean>(false);
    const [totalPage, setTotalPage] = useState<number>(1)
    useEffect(() => {
        if(newData){
            setCharacters(newData.results)
            setTotalPage(newData.info.pages)
        }
 
    }, [newData])


const getCharacter = async (id: string) => {
    try {
      setLoading(true)
      const {data} = await api.get(`/character?page=${id}`);
      setPage(id)
      setNewData(data)
      setLoading(false)

    } catch (error) {
      setLoading(false)
      console.error(error);
    }
  };


  return (
    <CharacterContext.Provider
      value={{
        getCharacter,
        characters,
        setPage,
        totalPage,
        page,
        loading
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterProvider;