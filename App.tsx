import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, Alert, Image } from "react-native";
import CheckBox from 'react-native-checkbox';

const Stack = createStackNavigator();

// Courses Data
const sixMonthCourses = [
  { name: "First Aid", fee: 1500, details: "Learn basic first aid, emergency response, CPR, and handling common injuries.", image: require('./assets/First aid.jpeg'), },
  { name: "Sewing", fee: 1500, details: "Master garment alterations, stitching techniques, and sewing machine operations.", image: require('./assets/sewing.png'), },
  { name: "Landscaping", fee: 1500, details: "Explore garden aesthetics, indigenous and exotic plants, and outdoor design.", image: require('./assets/landscaping.jpg'), },
  { name: "Life Skills", fee: 1500, details: "Gain essential life skills, including literacy, basic law, and financial literacy.", image: require('./assets/life skills.png'), },
];

const sixWeekCourses = [
  { name: "Child Minding", fee: 750, details: "Understand child care for different ages, from infants to toddlers, including educational toys.", image: require('./assets/child minding.png'), },
  { name: "Cooking", fee: 750, details: "Learn meal planning, nutrition basics, and cooking techniques for a healthy family.", image: require('./assets/cooking.jpg'), },
  { name: "Garden Maintenance", fee: 750, details: "Develop skills in pruning, planting, and maintaining a home garden.", image: require('./assets/garden maintenance.jpg'), },
];

// Home Screen
const HomeScreen = ({ navigation }: any) => (
  <ScrollView style={styles.container}>
    <View style={styles.header}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Empowering the Nation</Text>
      <Text style={styles.subtitle}>
        Empowering individuals with skills for brighter careers and stronger communities.
      </Text>
    </View>
    <View style={styles.nav}>
      <TouchableOpacity onPress={() => navigation.navigate("SixMonthCourses")} style={styles.heroButton}>
        <Text style={styles.heroButtonText}>Six-Month Courses</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("SixWeekCourses")} style={styles.heroButton}>
        <Text style={styles.heroButtonText}>Six-Week Courses</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("CalculateFees")} style={styles.heroButton}>
        <Text style={styles.heroButtonText}>Calculate Fees</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Contact")} style={styles.heroButton}>
        <Text style={styles.heroButtonText}>Contact Us</Text>
      </TouchableOpacity>
    </View>
  </ScrollView>
);

// Six-Month Courses Screen
const SixMonthCoursesScreen = ({ navigation }: any) => (
  <ScrollView style={styles.container}>
    <Image source={require('./assets/sixmonth-courses-banner.jpg')} style={styles.moduleImage}/>
    <Text style={styles.sectionTitle}>Six-Month Courses</Text>
    <Text style={styles.sectionText}>
      Empowering the Nation offers the following courses for the Six-Month program:
    </Text>
    {sixMonthCourses.map((course, index) => (
      <TouchableOpacity
        key={index}
        onPress={() =>
          navigation.navigate("CourseDetails", {
            courseName: course.name,
            fee: course.fee,
            details: course.details,
            image: course.image,
          })
        }
        style={styles.courseCard}
      >
        <Text style={styles.courseCardText}>{course.name}</Text>
        <Text style={styles.courseFee}>R{course.fee}</Text>
      </TouchableOpacity>
    ))}
  </ScrollView>
);

// Six-Week Courses Screen
const SixWeekCoursesScreen = ({ navigation }: any) => (
  <ScrollView style={styles.container}>
    <Image source={require('./assets/sixweek-courses-banner.jpg')} style={styles.moduleImage}/>
    <Text style={styles.sectionTitle}>Six-Week Courses</Text>
    <Text style={styles.sectionText}>
      Empowering the Nation offers the following courses for the Six-Week program:
    </Text>
    {sixWeekCourses.map((course, index) => (
      <TouchableOpacity
        key={index}
        onPress={() =>
          navigation.navigate("CourseDetails", {
            courseName: course.name,
            fee: course.fee,
            details: course.details,
            image: course.image,
          })
        }
        style={styles.courseCard}
      >
        <Text style={styles.courseCardText}>{course.name}</Text>
        <Text style={styles.courseFee}>R{course.fee}</Text>
      </TouchableOpacity>
    ))}
  </ScrollView>
);

// Course Details Screen
const CourseDetails = ({ route, navigation }: any) => {
  const { courseName, fee, details, image } = route.params;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <Image source={image} style={styles.courseImage} />
      <Text style={styles.sectionTitle}>{courseName}</Text>
      <Text style={styles.courseDetailText}>Fee: R{fee}</Text>
      <Text style={styles.courseDetailText}>{details}</Text>
    </View>
  );
};

// Fee Calculator Screen
const CalculateFees = ({ navigation }: any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedCourses, setSelectedCourses] = useState<any[]>([]);
  const allCourses = [...sixMonthCourses, ...sixWeekCourses];

  const toggleCourse = (course: any) => {
    setSelectedCourses((prev) =>
      prev.includes(course)
        ? prev.filter((c) => c !== course)
        : [...prev, course]
    );
  };

  const calculateTotal = () => {
    if (!name || !email || !phone) {
      Alert.alert("Error", "Please fill out all contact details.");
      return;
    }
    const totalFee = selectedCourses.reduce((acc, c) => acc + c.fee, 0);
    const discount =
      selectedCourses.length === 2
        ? 0.05
        : selectedCourses.length === 3
        ? 0.1
        : selectedCourses.length > 3
        ? 0.15
        : 0;
    const discountedFee = totalFee * (1 - discount);
    const vat = discountedFee * 0.15;
    const finalFee = discountedFee + vat;

    Alert.alert(
      "Quote",
      `Total Fee: R${finalFee.toFixed(2)}\nDiscount Applied: ${
        discount * 100
      }%`
    );
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.sectionTitle}>Calculate Fees</Text>
      <TextInput
        placeholder="Name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Phone"
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      {allCourses.map((course, index) => (
        <View key={index} style={styles.courseRow}>
          <CheckBox
            value={selectedCourses.includes(course)}
            onValueChange={() => toggleCourse(course)}
          />
          <Text style={styles.courseText}>
            {course.name} - R{course.fee}
          </Text>
        </View>
      ))}
      <TouchableOpacity style={styles.button} onPress={calculateTotal}>
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

// Contact Screen
const ContactScreen = ({ navigation }: any) => (
  <ScrollView style={styles.container}>
    <Image source={require('./assets/contact-banner.jpg')} style={styles.bannerImage} />
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
      <Text style={styles.backButtonText}>Back</Text>
    </TouchableOpacity>
    <Text style={styles.sectionTitle}>Contact Us</Text>
    <Text style={styles.sectionText}>
      Phone: +27 11 123 4567{"\n"}
      Email: info@empoweringthenation.co.za
    </Text>
    <Text style={styles.sectionText}>
      Locations:
      {"\n"}- Sandton: 125 Prosperity Avenue
      {"\n"}- Soweto: 48 Freedom Street
      {"\n"}- Centurion: 256 Unity Crescent
    </Text>
  </ScrollView>
);

// App Component
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SixMonthCourses" component={SixMonthCoursesScreen} />
        <Stack.Screen name="SixWeekCourses" component={SixWeekCoursesScreen} />
        <Stack.Screen name="CourseDetails" component={CourseDetails} />
        <Stack.Screen name="CalculateFees" component={CalculateFees} />
        <Stack.Screen name="Contact" component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5", padding: 20 },
  header: { alignItems: "center", marginBottom: 30 },
  logo: { width: 80, height: 80, marginBottom: 10 },
  title: { fontSize: 24, fontWeight: "bold", color: "#00274d" },
  subtitle: { fontSize: 16, textAlign: "center", color: "#4a4a4a" },
  nav: { marginTop: 20 },
  heroButton: {
    backgroundColor: "#00274d",
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: "center",
  },
  heroButtonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
  sectionTitle: { fontSize: 20, fontWeight: "bold", color: "#00274d", marginBottom: 10 },
  sectionText: { fontSize: 16, color: "#4a4a4a", lineHeight: 22 },
  courseCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  courseCardText: { fontSize: 16, color: "#333", fontWeight: "500" },
  courseFee: { fontSize: 14, color: "#007BFF" },
  courseDetailText: { fontSize: 16, marginVertical: 5, color: "#333" },
  courseRow: { flexDirection: "row", alignItems: "center", marginVertical: 5 },
  courseText: { marginLeft: 10, fontSize: 16, color: "#333" },
  backButton: { marginBottom: 15 },
  backButtonText: { color: "#007BFF", fontSize: 16 },
  input: {
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#28a745",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 15,
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
  moduleImage: { width: '100%', height: 120, marginBottom: 20 },
  bannerImage: { width: '100%', height: 120, marginBottom: 20 },
  courseImage: {
    width: '100%',
    height: 200, // Adjust size as needed
    resizeMode: 'contain', // Ensures the image is properly scaled
    marginBottom: 20,
  },
});
