import { View, Text, TouchableOpacity } from "react-native";
import { stylesFn } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
import regions from "..";

export default () => {
  const { navigate } = useNavigation();
  const styles = stylesFn();

  return (
    <View style={styles.container}>
      <Text>Region List View!</Text>

      {regions.map((region) => (
        <Button
          key={region.id}
          style={styles.regionButton}
          mode="contained"
          icon="map-marker"
          onPress={() => {
            navigate("CustomerList", { region: region.name });
          }}
        >
          <Text style={styles.regionButtonText}>{region.name}</Text>
        </Button>
      ))}
    </View>
  );
};
