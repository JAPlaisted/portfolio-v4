import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import PyTracking from "./pages/PyTracking";
import ArsDemo from "./pages/ArsDemo";
import MoreProjects from "./pages/MoreProjects";
import BucketList from "./pages/BucketList";
import Book from "./pages/Book";
import './App.css';
import './css/global/container.scss';
import './css/global/colors.scss';
import './css/global/buttons.scss';
import './css/global/media.scss';
import './css/global/typography.scss';
import './css/components/nav.scss';
import './css/components/hero.scss';
import './css/components/projects.scss';
import './css/components/skills.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/more-projects" element={<MoreProjects />} />
          <Route path="/py-tracking-demo" element={<PyTracking />} />
          <Route path="/ars-demo" element={<ArsDemo />} />
          <Route path="/bucket-list" element={<BucketList />} />
          <Route path="/book" element={<Book />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
