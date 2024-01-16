import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Students from "../../components/Students/Students";

const Home = () => {
  return (
    <main className="home bg-[radial-gradient(50%_50%_at_50%_50%,#17956D_0%,#0F684C_100%)] pt-32 -mt-[92px] md:-mt-[118px]">
      <Navbar />
      <Hero />
      <Students />
    </main>
  );
};

export default Home;
