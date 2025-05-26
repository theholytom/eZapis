import Statistics from "../components/StatisticsCard";
import TopMatchesCard from "../components/TopMachesCard";
import Layout from "../components/Layout";


function Homepage() {
    return (
        <Layout>
            <TopMatchesCard />
            <Statistics />
        </Layout>
    );
}

export default Homepage;
