// import Hero from "@/components/Home/Hero";

import BookSlider from "@/components/Home/BookSlider";
import CategorySection from "@/components/Home/CategorySection";
import FeaturedBooks from "@/components/Home/FeaturedBooks";
import Hero from "@/components/Home/Hero";
import RomanticBooks from "@/components/Home/RomanticBooks";


const Home = () => {
    return (
        <div>
            <Hero/>
            <CategorySection/>
            <RomanticBooks/>
            <BookSlider/>
            <FeaturedBooks/>
        </div>
    );
};

export default Home;