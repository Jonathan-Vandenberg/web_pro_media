import type { NextPage } from "next";
import AddClientForm from "../components/AddClientForm";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";

const Home: NextPage = () => {
  return (
    <>
      <div style={{ position: "fixed", width: "100vw", zIndex: "10" }}>
        <Navbar />
      </div>
      <ProjectCard />
    </>
  );
};

export default Home;
