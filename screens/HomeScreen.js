import React from "react";
import { View, Text, TextInput, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView>

        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.location}>📍 Dhaka, Banassre</Text>
          <TextInput placeholder="Search Store" style={styles.search} />
        </View>

        {/* BANNER */}
        <View style={styles.banner}>
        <Image 
          source={require('../assets/banner.png')} 
          style={styles.bannerImage}
          resizeMode="cover"
        />
        </View>

        {/* SECTION 1 */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Exclusive Offer</Text>
            <Text style={styles.seeAll}>See all</Text>
          </View>

          <View style={styles.products}>
            {renderCard("Organic Bananas", "7pcs, Price", require('../assets/banana.jpg'), navigation)}
            {renderCard("Red Apple", "1kg, Price", require('../assets/apple.jpg'), navigation)}
          </View>
        </View>

        {/* SECTION 2 */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Best Selling</Text>
            <Text style={styles.seeAll}>See all</Text>
          </View>

          <View style={styles.products}>
            {renderCard("Bell Pepper Red", "1kg, Price", require('../assets/bell.jpg'), navigation)}
            {renderCard("Ginger", "250gm, Price", require('../assets/ginger.jpg'), navigation)}
          </View>
        </View>

      </ScrollView>

      {/* NAVBAR */}
      <View style={styles.navbar}>
        <NavItem icon="🏠" label="Shop" onPress={() => navigation.navigate('Home')} />
        <NavItem icon="🔍" label="Explore" onPress={() => navigation.navigate('Explore')} />
        <NavItem icon="🛒" label="Cart" onPress={() => {}} />
        <NavItem icon="❤️" label="Favourite" onPress={() => {}} />
        <NavItem icon="👤" label="Account" onPress={() => navigation.navigate('Login')} />
      </View>
    </View>
  );
};

const renderCard = (title, desc, img, navigation) => (
  <TouchableOpacity 
    style={styles.card}
    onPress={() => navigation.navigate('ProductDetail', { productName: title, productImage: img, productDesc: desc })}
  >
    <Image source={img} style={styles.image} />
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardDesc}>{desc}</Text>

    <View style={styles.priceRow}>
      <Text style={styles.price}>$4.99</Text>
      <TouchableOpacity style={styles.addBtn} onPress={(e) => {
        e.stopPropagation();
      }}>
        <Text style={{ color: "#fff", fontSize: 18 }}>+</Text>
      </TouchableOpacity>
    </View>
  </TouchableOpacity>
);

const NavItem = ({ icon, label, onPress }) => (
  <TouchableOpacity style={styles.navItem} onPress={onPress}>
    <Text>{icon}</Text>
    <Text style={{ fontSize: 12 }}>{label}</Text>
  </TouchableOpacity>
);

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7"
  },

  header: {
    padding: 15,
    backgroundColor: "#fff"
  },

  location: {
    textAlign: "center",
    fontWeight: "bold"
  },

  search: {
    marginTop: 10,
    backgroundColor: "#eee",
    borderRadius: 10,
    padding: 10
  },

  banner: {
    margin: 1,
    backgroundColor: "#e8f5e9",
    padding: 15,
    borderRadius: 15
  },

  bannerImage: {
  width: '100%',
  height: 180,
  borderRadius: 15
},
  section: {
    margin: 15
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10
  },

  sectionTitle: {
    fontWeight: "bold"
  },

  seeAll: {
    color: "green",
    fontSize: 14
  },

  products: {
    flexDirection: "row",
    justifyContent: "space-between"
  },

  card: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 15,
    width: "48%"
  },

  image: {
    width: "100%",
    height: 80,
    resizeMode: "contain"
  },

  cardTitle: {
    marginTop: 5,
    fontWeight: "bold"
  },

  cardDesc: {
    fontSize: 13,
    color: "gray"
  },

  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10
  },

  price: {
    fontWeight: "bold"
  },

  addBtn: {
    backgroundColor: "#4CAF50",
    width: 35,
    height: 35,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  },

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
  }
});