import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// import data của bạn
import products from "../data"; // chỉnh path nếu khác

const SearchScreen = () => {
  const navigation = useNavigation();
  const [keyword, setKeyword] = useState("");

  const filteredData = products.filter(item =>
    item.name.toLowerCase().includes(keyword.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.img} style={styles.image} />

      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.desc}>Price</Text>

      <View style={styles.priceRow}>
        <Text style={styles.price}>{item.price}</Text>

        <TouchableOpacity style={styles.addBtn}>
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>

      {/* SEARCH BAR */}
      <View style={styles.searchBar}>
        <Text>🔍</Text>

        <TextInput
          placeholder="Search..."
          value={keyword}
          onChangeText={setKeyword}
          style={styles.input}
        />

        <TouchableOpacity onPress={() => navigation.navigate("SearchFilter")}>
          <Text style={styles.filterIcon}>⚙</Text>
        </TouchableOpacity>
      </View>

      {/* LIST */}
      <FlatList
        data={filteredData}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 15 }}
      />

    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },

  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 15
  },

  input: {
    flex: 1,
    backgroundColor: "#eee",
    

  filterIcon: {
    fontSize: 20
  },padding: 12,
    borderRadius: 12
  },

  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 15,
    margin: "1%",
    alignItems: "center",
    elevation: 2
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
    color: "gray"
  },

  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
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