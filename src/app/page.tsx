import RestaurantPage from "./[slug]/page";

const HomePage = () => {
  return <RestaurantPage params={Promise.resolve({ slug: "fsw-donalds" })} />;
};
export default HomePage;
