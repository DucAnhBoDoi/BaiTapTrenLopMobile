import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Tiêu đề */}
      <Text style={styles.title}>Programming Languages</Text>

      {/* Danh sách hình ảnh cuộn ngang */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
        <View style={styles.imageWrapper}>
          <Image source={require('./assets/Icon1.jpg')} style={styles.image} />
        </View>
        <View style={styles.imageWrapper}>
          <Image source={require('./assets/Icon2.jpg')} style={styles.image} />
        </View>
        <View style={styles.imageWrapper}>
          <Image source={require('./assets/Icon3.jpg')} style={styles.image} />
        </View>
        <View style={styles.imageWrapper}>
          <Image source={require('./assets/Icon4.jpg')} style={styles.image} />
        </View>
        <View style={styles.imageWrapper}>
          <Image source={require('./assets/Icon5.jpg')} style={styles.image} />
        </View>
        <View style={styles.imageWrapper}>
          <Image source={require('./assets/Icon6.jpg')} style={styles.image} />
        </View>
      </ScrollView>


      {/* Ô nhập văn bản */}
      <TextInput
        style={styles.input}
        placeholder="What is your favorite programming language from the list above?"
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  scrollContainer: {
    maxHeight: 400,
    marginTop: 50,

  },
  scrollContent: {
    alignItems: 'center',
  },
  imageWrapper: {
    backgroundColor: 'orange', // nền cam
    borderColor: '#000',       // viền đen
    borderWidth: 3,
    borderRadius: 15,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',

    // wrapper to hơn ảnh
    width: 270,
    height: 270,
  },
  image: {
    width: 230,
    height: 230,
    borderRadius: 10,
    resizeMode: 'contain',
  },


  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    padding: 10,
    fontSize: 14,
    width: '90%',
  },
});
