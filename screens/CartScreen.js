import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// 👉 import từ data.js
import products from "../data";

const CartScreen = () => {
  const navigation = useNavigation();
  // 👉 tạo cart từ data.js (thêm qty)
  const [cart, setCart] = useState(
    products.map((item, index) => ({
      ...item,
      cartId: index,
      qty: 1,
      price: parseFloat(item.price.replace('$', ''))
    }))
  );

  // tăng
  const increase = (cartId) => {
    setCart(prev =>
      prev.map(item =>
        item.cartId === cartId ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  // giảm
  const decrease = (cartId) => {
    setCart(prev =>
      prev.map(item =>
        item.cartId === cartId && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  // xoá
  const removeItem = (cartId) => {
    setCart(prev => prev.filter(item => item.cartId !== cartId));
  };

  // tổng tiền
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.img} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.sub}>Price: ${item.price.toFixed(2)}</Text>

        <View style={styles.controls}>
          <TouchableOpacity style={styles.btn} onPress={() => decrease(item.cartId)}>
            <Text>-</Text>
          </TouchableOpacity>

          <Text>{item.qty}</Text>

          <TouchableOpacity style={styles.btn} onPress={() => increase(item.cartId)}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ alignItems: "flex-end" }}>
        <TouchableOpacity onPress={() => removeItem(item.cartId)}>
          <Text style={styles.remove}>✖</Text>
        </TouchableOpacity>

        <Text style={styles.price}>
          ${(item.price * item.qty).toFixed(2)}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <Text style={styles.header}>My Cart</Text>

      {/* LIST */}
      <FlatList
        data={cart}
        keyExtractor={(item) => item.cartId.toString()}
        renderItem={renderItem}
      />

      {/* FOOTER */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.checkout}>
          <Text style={{ color: "#fff" }}>Go to Checkout</Text>
          <Text style={{ color: "#fff" }}>
            ${total.toFixed(2)}
          </Text>
        </TouchableOpacity>
      </View>

      {/* NAVBAR */}
      <View style={styles.navbar}>
        <NavItem icon="🏠" label="Shop" onPress={() => navigation.navigate('Home')} />
        <NavItem icon="🔍" label="Explore" onPress={() => navigation.navigate('Explore')} />
        <NavItem icon="🛒" label="Cart" active onPress={() => navigation.navigate('Cart')} />
        <NavItem icon="❤️" label="Favourite" onPress={() => navigation.navigate('Favourite')} />
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


export default CartScreen;

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
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#eee",
    alignItems: "center"
  },

  image: {
    width: 60,
    height: 60,
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

  controls: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 5
  },

  btn: {
    width: 30,
    height: 30,
    borderRadius: 8,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center"
  },

  price: {
    fontWeight: "bold"
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

  remove: {
    color: "gray",
    marginBottom: 5
  },

  footer: {
    padding: 15
  },

  checkout: {
    backgroundColor: "#53B175",
    padding: 15,
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});