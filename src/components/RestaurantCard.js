import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  //const RestaurantCard = ({name, cuisine, rating}) => { --> Destructuring props
  // const { name, cuisine, rating } = props; --> Destructuring props
  return (
    <div className="restaurant-card">
      <img className="restaurant-image" src={CDN_URL + props.logo} alt="logo" />
      <h3>{props.name}</h3>
      <h4>{props.cuisine}</h4>
      <h4>{props.rate}</h4>
      <h4>{props.rating} ⭐️</h4>
    </div>
  );
};

export default RestaurantCard;
