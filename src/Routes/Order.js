import { useNavigate } from "react-router-dom";

const Order = () => {
  const navigate = useNavigate();
  return (
    <div>
      order confirmed!
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default Order;
