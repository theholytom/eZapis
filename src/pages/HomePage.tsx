import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Statistics from "../components/StatisticsCard";
import TopMatchesCard from "../components/TopMachesCard";

function Homepage() {
  return (
    <>
      <Navigation />
      <h1>Homepage</h1>
      <TopMatchesCard />
      <Statistics />
      <Footer />
    </>
  );
}

export default Homepage;
