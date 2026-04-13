import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const ExploreScreen = () => {
  const navigation = useNavigation();
  const categories = [
    {
      name: "Fresh Fruits & Vegetable",
      img: require('../assets/FrashFruits.png'),
      style: styles.green,
      route: "FreshFruits"
    },
    {
      name: "Cooking Oil & Ghee",
      img: require('../assets/CookingOil.png'),
      style: styles.orange,
      route: "CookingOil"
    },
    {
      name: "Meat & Fish",
      img: require('../assets/MeatFish.png'),
      style: styles.red,
      route: "MeatFish"
    },
    {
      name: "Bakery & Snacks",
      img: require('../assets/Bakery.png'),
      style: styles.purple,
      route: "Bakery"
    },
    {
      name: "Dairy & Eggs",
      img: require('../assets/Dairy.png'),
      style: styles.yellow,
      route: "Dairy"
    },
    {
      name: "Beverages",
      img: require('../assets/Beverages.png'),
      style: styles.blue,
      route: "Beverages"
    }
  ];

  return (
    <View style={styles.container}>
      <ScrollView>

        {/* HEADER */}
        <Text style={styles.header}>Find Products</Text>

        {/* SEARCH */}
        <View style={styles.searchBox}>
          <TextInput placeholder="Search Store" style={styles.search} />
        </View>

        {/* GRID */}
        <View style={styles.grid}>
          {categories.map((item, index) => (
            <TouchableOpacity 
              key={index} 
              style={[styles.card, item.style]}
              onPress={() => navigation.navigate(item.route)}
            >
              <Image source={item.img} style={styles.image} />
              <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

      </ScrollView>

      {/* NAVBAR */}
      <View style={styles.navbar}>
        <NavItem icon="🏠" label="Shop" onPress={() => navigation.navigate('Home')} />
        <NavItem icon="🔍" label="Explore" active onPress={() => navigation.navigate('Explore')} />
        <NavItem icon="🛒" label="Cart" onPress={() => {}} />
        <NavItem icon="❤️" label="Favourite" onPress={() => {}} />
        <NavItem icon="👤" label="Account" onPress={() => navigation.navigate('Login')} />
      </View>
    </View>
  );
};

const NavItem = ({ icon, label, active, onPress }) => (
  <TouchableOpacity style={styles.navItem} onPress={onPress}>
    <Text style={{ color: active ? "#53B175" : "#000" }}>{icon}</Text>
    <Text style={[styles.navText, active && { color: "#53B175", fontWeight: "bold" }]}>
      {label}
    </Text>
  </TouchableOpacity>
);

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },

  header: {
    textAlign: "center",
    padding: 15,
    fontSize: 20,
    fontWeight: "bold"
  },

  searchBox: {
    paddingHorizontal: 15
  },

  search: {
    backgroundColor: "#eee",
    padding: 12,
    borderRadius: 12
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 15
  },

  card: {
    width: "48%",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    marginBottom: 15,
    borderWidth: 2
  },

  image: {
    width: "80%",
    height: 80,
    resizeMode: "contain",
    marginBottom: 10
  },

  text: {
    textAlign: "center",
    fontWeight: "bold"
  },

  /* COLORS */
  green: { backgroundColor: "#e8f5e9", borderColor: "#53B175" },
  orange: { backgroundColor: "#fff3e0", borderColor: "#f4a261" },
  red: { backgroundColor: "#fdecea", borderColor: "#e57373" },
  purple: { backgroundColor: "#f3e5f5", borderColor: "#ba68c8" },
  yellow: { backgroundColor: "#fffde7", borderColor: "#fbc02d" },
  blue: { backgroundColor: "#e3f2fd", borderColor: "#64b5f6" },

  /* NAVBAR */
  navbar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#ddd"
  },

  navItem: {
    alignItems: "center"
  },

  navText: {
    fontSize: 12
  }
});