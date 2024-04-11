import {  Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { NextPage } from "../pages/NextPage";

export const RouterMain = () => {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/page/:id" element={<NextPage />} />
      </Routes>
    );
  };