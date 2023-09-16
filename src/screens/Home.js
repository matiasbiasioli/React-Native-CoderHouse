import { SafeAreaView } from "react-native";
import Categories from "../components/Categories";
import Header from "../components/Header";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Header title="Categorias" />
      <Categories navigation={navigation} />  
    </SafeAreaView>
  );
};

export default Home;
