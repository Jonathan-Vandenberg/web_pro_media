import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <ProjectCard />
    </>
  );
};

export default Home;
