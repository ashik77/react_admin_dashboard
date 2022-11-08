import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import { userData } from "../../data";

import "./home.css";

const Home = () => {
  return (
    <div>
      <FeaturedInfo />
      <Chart
        title="User Analytics"
        data={userData}
        dataKey="Active Users"
        grid
      />
    </div>
  );
};

export default Home;
