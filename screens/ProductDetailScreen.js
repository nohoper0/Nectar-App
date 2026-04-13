import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

const ProductDetailScreen = () => {
  const [qty, setQty] = useState(1);
  const navigation = useNavigation();
  const route = useRoute();
  const { productName = "Naturel Red Apple", productImage = require('../assets/apple.jpg'), productDesc = "1kg, Price" } = route.params || {};

  const increase = () => setQty(qty + 1);
  const decrease = () => {
    if (qty > 1) setQty(qty - 1);
  };

  return (
    <View style={styles.container}>
      <ScrollView>

        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.icon}>←</Text>
          </TouchableOpacity>
          <Text style={styles.icon}>⤴</Text>
        </View>

        {/* IMAGE */}
        <View style={styles.imageBox}>
          <Image
            source={typeof productImage === 'string' ? { uri: productImage } : productImage}
            style={styles.image}
          />
        </View>

        {/* INFO */}
        <View style={styles.info}>
          <View style={styles.titleRow}>
            <View>
              <Text style={styles.title}>Naturel {productName}</Text>
              <Text style={styles.sub}>{productDesc}</Text>
            </View>
            <Text style={styles.heart}>❤️</Text>
          </View>

          {/* QUANTITY */}
          <View style={styles.quantityRow}>
            <View style={styles.qtyBox}>
              <TouchableOpacity style={styles.qtyBtn} onPress={decrease}>
                <Text style={styles.qtyText}>-</Text>
              </TouchableOpacity>

              <Text style={styles.qtyValue}>{qty}</Text>

              <TouchableOpacity style={styles.qtyBtn} onPress={increase}>
                <Text style={styles.qtyText}>+</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.price}>$4.99</Text>
          </View>
        </View>

        {/* PRODUCT DETAIL */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Product Detail</Text>
            <Text>⌄</Text>
          </View>
          <Text style={styles.desc}>
            Apples are nutritious. Apples may be good for weight loss.
            Apples may be good for your heart. As part of a healthful and varied diet.
          </Text>
        </View>

        {/* NUTRITION */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Nutritions</Text>
            <Text>100gr {'>'}</Text>
          </View>
        </View>

        {/* REVIEW */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Review</Text>
            <Text style={{ color: "orange" }}>★★★★★ {'>'}</Text>
          </View>
        </View>

      </ScrollView>

      {/* FOOTER BUTTON */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add To Basket</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15
  },

  icon: {
    fontSize: 20
  },

  imageBox: {
    alignItems: "center",
    padding: 10
  },

  image: {
    width: "80%",
    height: 200,
    resizeMode: "contain"
  },

  info: {
    padding: 15,
    backgroundColor: "#fff"
  },

  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  title: {
    fontSize: 20,
    fontWeight: "bold"
  },

  sub: {
    color: "gray",
    marginTop: 5
  },

  heart: {
    fontSize: 20
  },

  quantityRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20
  },

  qtyBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },

  qtyBtn: {
    backgroundColor: "#eee",
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 8
  },

  qtyText: {
    fontSize: 18
  },

  qtyValue: {
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10
  },

  price: {
    fontSize: 20,
    fontWeight: "bold"
  },

  section: {
    padding: 15,
    borderTopWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#fff"
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between"
  },

  sectionTitle: {
    fontWeight: "bold"
  },

  desc: {
    color: "gray",
    fontSize: 14,
    marginTop: 10
  },

  footer: {
    padding: 20,
    backgroundColor: "#fff"
  },

  button: {
    backgroundColor: "#53B175",
    padding: 15,
    borderRadius: 25,
    alignItems: "center"
  },

  buttonText: {
    color: "#fff",
    fontSize: 16
  }
});