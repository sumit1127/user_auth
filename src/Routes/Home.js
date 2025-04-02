import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      Home component
      <button onClick={() => navigate("order")}>Place Order</button>
    </div>
  );
};

export default Home;
