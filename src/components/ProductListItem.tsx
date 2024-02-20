import { StyleSheet, Image, Text, View } from 'react-native';
import products from '@/assets/data/data/products';
import Colors from '@/src/constants/Colors';


const ProductListItem = ({ product }) => {

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
      />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
    </View>
  );
}

export default ProductListItem;


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'beige',
    borderRadius: 20,
    padding: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    alignSelf: 'center',
  },
  title: {
    fontWeight: '600',
    fontSize: 18,
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold',
    marginTop: 'auto',
  },
});