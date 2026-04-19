import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Modal
} from "react-native";

const SearchFilterScreen = () => {
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

  return (
    <View style={styles.container}>

      {/* SEARCH BAR */}
      <View style={styles.searchBar}>
        <Text>🔍</Text>

        <TextInput
          placeholder="Search Store"
          style={styles.input}
        />

        {/* FILTER BUTTON */}
        <TouchableOpacity onPress={() => setShowFilter(true)}>
          <Text style={styles.filterBtn}>⚙</Text>
        </TouchableOpacity>
      </View>

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
          <View style={styles.header}>
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

const CheckItem = ({ label, value, onPress }) => (
  <TouchableOpacity style={styles.option} onPress={onPress}>
    <Text>{value ? "☑" : "☐"}</Text>
    <Text>{label}</Text>
  </TouchableOpacity>
);

export default SearchFilterScreen;

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

  filterBtn: {
    fontSize: 20
  },

  /* MODAL */
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
    padding: 20
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between"
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
  }
});