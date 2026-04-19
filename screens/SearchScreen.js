import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// import data của bạn
import products from "../data"; // chỉnh path nếu khác

const SearchScreen = () => {
  const navigation = useNavigation();
  const [keyword, setKeyword] = useState("");
  const [showFilter, setShowFilter] = useState(false);

  const [categories, setCategories] = useState({
    eggs: true,
    noodles: false,
    chips: false,
    fastfood: false
  });

  const [brands, setBrands] = useState({
    individual: false,
    cocola: true,
    ifad: false,
    kazi: false
  });

  const toggle = (state, setState, key) => {
    setState({ ...state, [key]: !state[key] });
  };

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

        <TouchableOpacity onPress={() => setShowFilter(true)}>
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

      {/* FILTER MODAL */}
      <Modal transparent visible={showFilter} animationType="slide">
        
        {/* OVERLAY */}
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setShowFilter(false)}
        />

        {/* PANEL */}
        <View style={styles.panel}>
          
          {/* HEADER */}
          <View style={styles.filterHeader}>
            <TouchableOpacity onPress={() => setShowFilter(false)}>
              <Text>✖</Text>
            </TouchableOpacity>
            <Text style={{ fontWeight: "bold" }}>Filters</Text>
            <Text></Text>
          </View>

          {/* CATEGORY */}
          <View style={styles.section}>
            <Text style={styles.title}>Categories</Text>

            <CheckItem
              label="Eggs"
              value={categories.eggs}
              onPress={() => toggle(categories, setCategories, "eggs")}
            />

            <CheckItem
              label="Noodles & Pasta"
              value={categories.noodles}
              onPress={() => toggle(categories, setCategories, "noodles")}
            />

            <CheckItem
              label="Chips & Crisps"
              value={categories.chips}
              onPress={() => toggle(categories, setCategories, "chips")}
            />

            <CheckItem
              label="Fast Food"
              value={categories.fastfood}
              onPress={() => toggle(categories, setCategories, "fastfood")}
            />
          </View>

          {/* BRAND */}
          <View style={styles.section}>
            <Text style={styles.title}>Brand</Text>

            <CheckItem
              label="Individual Collection"
              value={brands.individual}
              onPress={() => toggle(brands, setBrands, "individual")}
            />

            <CheckItem
              label="Cocola"
              value={brands.cocola}
              onPress={() => toggle(brands, setBrands, "cocola")}
            />

            <CheckItem
              label="Ifad"
              value={brands.ifad}
              onPress={() => toggle(brands, setBrands, "ifad")}
            />

            <CheckItem
              label="Kazi Farmas"
              value={brands.kazi}
              onPress={() => toggle(brands, setBrands, "kazi")}
            />
          </View>

          {/* BUTTON */}
          <TouchableOpacity
            style={styles.applyBtn}
            onPress={() => {
              alert("Filter applied!");
              setShowFilter(false);
            }}
          >
            <Text style={styles.applyText}>Apply Filter</Text>
          </TouchableOpacity>

        </View>
      </Modal>

    </View>
  );
};

export default SearchScreen;

const CheckItem = ({ label, value, onPress }) => (
  <TouchableOpacity style={styles.option} onPress={onPress}>
    <Text>{value ? "☑" : "☐"}</Text>
    <Text>{label}</Text>
  </TouchableOpacity>
);

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
    padding: 12,
    borderRadius: 12
  },

  filterIcon: {
    fontSize: 20
  },

  /* FILTER MODAL */
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)"
  },

  panel: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    maxHeight: "80%"
  },

  filterHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },

  section: {
    marginTop: 20
  },

  title: {
    fontWeight: "bold",
    marginBottom: 10
  },

  option: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 8
  },

  applyBtn: {
    marginTop: 30,
    backgroundColor: "#53B175",
    padding: 15,
    borderRadius: 25,
    alignItems: "center"
  },

  applyText: {
    color: "#fff",
    fontSize: 16
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