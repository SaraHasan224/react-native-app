import React from "react";
import { FlatList, View } from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import { StyleSheet } from "react-native";

function Menu(props) {
  const renderMenuItem = ({ item, index }) => {
    return (
      <ListItem
        key={index}
        onPress={() => props.onPress(item.id)}
        hideChevron={true}
        bottomDivider
      >
        <Avatar source={item.image} />
        <View style={styles.subtitleView}>
          <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
            <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
          </ListItem.Content>
        </View>
      </ListItem>
    );
  };

  return (
    <FlatList
      data={props.dishes}
      renderItem={renderMenuItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

const styles = StyleSheet.create({
  subtitleView: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingTop: 5,
  },
  ratingImage: {
    height: 19.21,
    width: 100,
  },
  ratingText: {
    paddingLeft: 10,
    color: "grey",
  },
});
export default Menu;
