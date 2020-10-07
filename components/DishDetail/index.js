import React from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-elements";

function RenderDish(props) {
  const { dish } = props;

  if (dish != null) {
    return (
      <Card featuredTitle={dish.name} image={dish.image}>
        <Text style={{ margin: 10 }}>{dish.description}</Text>
      </Card>
    );
  } else {
    return <View></View>;
  }
}

function Dishdetail(props) {
  const { dish } = props;
  return <RenderDish dish={dish} />;
}

export default Dishdetail;
