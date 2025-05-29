import FavoriteAccordions from "@/components/FavoriteAccoridons";
import Layout from "../components/Layout";
import NotSignedInAlert from "@/components/NotSignedInAlert";

function FavoritePage() {
    return (
        <Layout>
            <NotSignedInAlert />
            <FavoriteAccordions />
        </Layout>
    );
}

export default FavoritePage;
