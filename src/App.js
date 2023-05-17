import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";
import Theme from "./util/Theme";
import ThemeStore from "./util/ThemeStore";
import { getAllBoards } from "./util/api";
import Group from "./view/Group";
import Home from "./view/Home";

function App() {
    //eslint-disable-next-line
    const [allBoards, setAllBoards] = useLocalStorage('allBoards', [])
    useEffect(() => {
        getAllBoards().then(res => 
            setAllBoards(res.filter(board => !board.is_private).sort((a, b) => new Date(b.modified) - new Date(a.modified)))
        )
    }, [])
    return (
        <ThemeStore>
            <Theme>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/:id" element={<Group/>}/>
                </Routes>
            </Theme>
        </ThemeStore>
    )
}
  
export default App;
  