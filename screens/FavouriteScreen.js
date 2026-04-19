import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// 👉 import từ data.js
import products from "../data";

const FavouriteScreen = () => {
  const navigation = useNavigation();
  // 👉 lấy favourites từ data.js
  const [favourites, setFavourites] = useState(products);

  // add all to cart
  const addAllToCart = () => {
    Alert.alert("Success", `Added ${favourites.length} items to cart!`);
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.img} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.sub}>Price: ${parseFloat(item.price.replace('$', '')).toFixed(2)}</Text>
      </View>

      <Text style={styles.price}>{item.price}</Text>
      <Text style={{ marginLeft: 10 }}>{">"}</Text>
    </View>
  );

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <Text style={styles.header}>Favourite</Text>

      {/* LIST */}
      <FlatList
        data={favourites}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />

      {/* BUTTON */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.btn} onPress={addAllToCart}>
          <Text style={{ color: "#fff" }}>Add All To Cart</Text>
        </TouchableOpacity>
      </View>

      {/* NAVBAR */}
      <View style={styles.navbar}>
        <NavItem icon="🏠" label="Shop" onPress={() => navigation.navigate('Home')} />
        <NavItem icon="🔍" label="Explore" onPress={() => navigation.navigate('Explore')} />
        <NavItem icon="🛒" label="Cart" onPress={() => navigation.navigate('Cart')} />
        <NavItem icon="❤️" label="Favourite" active onPress={() => navigation.navigate('Favourite')} />
        <NavItem icon="👤" label="Account" onPress={() => navigation.navigate('Login')} />
      </View>

    </View>
  );
};

const NavItem = ({ icon, label, active, onPress }) => (
  <TouchableOpacity style={styles.navItem} onPress={onPress}>
    <Text style={{ color: active ? "#53B175" : "#000" }}>{icon}</Text>
    <Text style={[{ fontSize: 12 }, active && { color: "#53B175", fontWeight: "bold" }]}>{label}</Text>
  </TouchableOpacity>
);

export default FavouriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },

  header: {
    textAlign: "center",
    padding: 15,
    fontSize: 20,
    fontWeight: "bold"
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#eee"
  },

  image: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginRight: 10
  },

  info: {
    flex: 1
  },

  title: {
    fontWeight: "bold"
  },

  sub: {
    fontSize: 12,
    color: "gray"
  },

  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    backgroundColor: "#fff"
  },

  navItem: {
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 8
  },

  price: {
    fontWeight: "bold"
  },

  footer: {
    padding: 15
  },

  btn: {
    backgroundColor: "#53B175",
    padding: 15,
    borderRadius: 25,
    alignItems: "center"
  }
});