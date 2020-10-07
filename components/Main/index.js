import React, { useState } from "react";
import { View } from "react-native";
import Menu from "../Menu";
import Dishdetail from "../DishDetail";
import { DISHES } from "../../constants/dishes";

function Main() {
  const [selectedDish, setSelectedDish] = useState(null);

  const onDishSelect = (dishId) => {
    setSelectedDish(dishId);
  };

  return (
    <View style={{ flex: 1 }}>
      <Menu dishes={DISHES} onPress={(dishId) => onDishSelect(dishId)} />
      <Dishdetail dish={DISHES.filter((dish) => dish.id === selectedDish)[0]} />
    </View>
  );
}

export default Main;
