import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const BeveragesScreen = () => {
  const navigation = useNavigation();
  const products = [
    {
      name: "Diet Coke",
      desc: "355ml, Price",
      price: "$1.99",
      img: require('../assets/DietCoke.png')
    },
    {
      name: "Sprite Can",
      desc: "325ml, Price",
      price: "$1.50",
      img: require('../assets/SpriteCan.png')
    },
    {
      name: "Apple & Grape Juice",
      desc: "2L, Price",
      price: "$15.99",
      img: require('../assets/Applegrape.png')
    },
    {
      name: "Orange Juice",
      desc: "2L, Price",
      price: "$15.99",
      img: require('../assets/OrengeJuice.png')
    },
    {
      name: "Coca Cola Can",
      desc: "325ml, Price",
      price: "$4.99",
      img: require('../assets/CocaColaCan.png')
    },
    {
      name: "Pepsi Can",
      desc: "330ml, Price",
      price: "$4.99",
      img: require('../assets/PepsiCan.png')
    }
  ];

  return (
    <View style={styles.container}>
      <ScrollView>

        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.icon}>←</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Beverages</Text>
          <Text style={styles.icon}>⚙</Text>
        </View>

        {/* GRID */}
        <View style={styles.grid}>
          {products.map((item, index) => (
            <View key={index} style={styles.card}>
              <Image source={item.img} style={styles.image} />

              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.desc}>{item.desc}</Text>

              <View style={styles.priceRow}>
                <Text style={styles.price}>{item.price}</Text>

                <TouchableOpacity style={styles.addBtn}>
                  <Text style={styles.addText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

      </ScrollView>
    </View>
  );
};

export default BeveragesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15
  },

  icon: {
    fontSize: 20
  },

  title: {
    fontSize: 18,
    fontWeight: "bold"
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 15
  },

  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
    alignItems: "center",
    elevation: 2 // Android shadow
  },

  image: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    marginBottom: 10
  },

  name: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center"
  },

  desc: {
    fontSize: 12,
    color: "gray",
    textAlign: "center"
  },

  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 10
  },

  price: {
    fontWeight: "bold"
  },

  addBtn: {
    backgroundColor: "#53B175",
    width: 35,
    height: 35,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  },

  addText: {
    color: "#fff",
    fontSize: 18
  }
});