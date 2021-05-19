import * as React from 'react';
import {
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.homeHeader}>Admin Panel</Text>

      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => navigation.navigate('ProductsScreen')}>
        <Text style={styles.homeButtonText}>Manage Products</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => navigation.navigate('EmployeesScreen')}>
        <Text style={styles.homeButtonText}>Manage Employees</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => navigation.navigate('OrdersScreen')}>
        <Text style={styles.homeButtonText}>Manage Orders</Text>
      </TouchableOpacity>
    </View>
  );
};

const ProductsScreen = ({ navigation }) => {
  return (
    <View style={styles.list}>
      <FlatList
        data={[
          { name: 'skirt', quantity: '5', color: 'blue', price: "Rs. 1100"},
          { name: 'shirt', quantity: '4', color: 'pink', price: "Rs. 500" },
          { name: 'scarf', quantity: '2', color: 'black' , price: "Rs. 850"},
          { name: 'blouse', quantity: '3', color: 'red', price: "Rs. 1200" },
          { name: 'pants', quantity: '5', color: 'purple' , price: "Rs. 2000"},
          { name: 'shorts', quantity: '7', color: 'green' , price: "Rs. 600"},
          { name: 'gown', quantity: '6', color: 'orange' , price: "Rs. 1850"},
        ]}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('ProductsDetails', item)}>
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const ProductsDetails = ({ route, navigation }) => {
  const name = route.params.name;
  const quantity = route.params.quantity;
  const color = route.params.color;
  const price = route.params.price;

  return (
    <View style={styles.descriptionPage}>
      <Text style={styles.descriptionName}>{name}</Text>
      <Text style={styles.descriptionField}>color: {color}</Text>
      <Text style={styles.descriptionField}>
        quantity available: {quantity}
      </Text>
      <Text style={styles.descriptionField}>price: {price}</Text>
    </View>
  );
};

const EmployeesScreen = ({ navigation }) => {
  return (
    <View style={styles.list}>
      <FlatList
        data={[
          {
            name: 'Fatima',
            designation: 'Manager',
            salary: 'Rs. 80,000',
            joinDate: '21 March, 2009',
          },
          {
            name: 'Sara',
            designation: 'Sales Person',
            salary: 'Rs. 10,000',
            joinDate: '11 April, 2008',
          },
          {
            name: 'Maleeka',
            designation: 'Accountant',
            salary: 'Rs. 50,000',
            joinDate: '4 July, 2009',
          },
          {
            name: 'Khadija',
            designation: 'Receptionist',
            salary: 'Rs. 20,000',
            joinDate: '15 November, 2009',
          },
        ]}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('EmployeesDetails', item)}>
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const EmployeesDetails = ({ route, navigation }) => {
  const name = route.params.name;
  const designation = route.params.designation;
  const salary = route.params.salary;
  const joinDate = route.params.joinDate;

  return (
    <View style={styles.descriptionPage}>
      <Text style={styles.descriptionName}>{name}</Text>
      <Text style={styles.descriptionField}>designation: {designation}</Text>
      <Text style={styles.descriptionField}>salary: {salary}</Text>
      <Text style={styles.descriptionField}>joinDate: {joinDate}</Text>
    </View>
  );
};

const OrdersScreen = ({ navigation }) => {
   return (
    <View style={styles.list}>
      <FlatList
        data={[
          {
            id: '10345',
            datePlaced: '18 May, 2021',
            customer: "Maleeka Fatima",
            amount: 'Rs. 4000',
            status: 'processing',
          },
          {
            id: '10425',
            datePlaced: '20 May, 2021',
            customer: "Roham Asif",
            amount: 'Rs. 1050',
            status: 'shipped',
          },
           {
            id: '10533',
            datePlaced: '21 May, 2021',
            customer: "Khadija Iqbal",
            amount: 'Rs. 10,000',
            status: 'processing',
          }
        ]}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('OrdersDetails', item)}>
            <Text style={styles.itemText}>Order No. {item.id}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const OrdersDetails = ({ route, navigation }) => {
  const id = route.params.id;
  const datePlaced = route.params.datePlaced;
  const customer = route.params.customer;
  const amount = route.params.amount;
  const status = route.params.status;

  return (
    <View style={styles.descriptionPage}>
      <Text style={styles.descriptionName}>Order No. {id}</Text>
      <Text style={styles.descriptionField}>Date Placed: {datePlaced}</Text>
      <Text style={styles.descriptionField}>Customer Name: {customer}</Text>
      <Text style={styles.descriptionField}>Amount: {amount}</Text>
      <Text style={styles.descriptionField}>Status: {status}</Text>
    </View>
  );
};

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#F5B7B1',
            justifyContent: 'center',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            color: 'white',
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          options={{ headerShown: false }}
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen name="ProductsScreen" component={ProductsScreen} />
        <Stack.Screen name="ProductsDetails" component={ProductsDetails} />
        <Stack.Screen name="EmployeesScreen" component={EmployeesScreen} />
        <Stack.Screen name="EmployeesDetails" component={EmployeesDetails} />
        <Stack.Screen name="OrdersScreen" component={OrdersScreen} />
        <Stack.Screen name="OrdersDetails" component={OrdersDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D5F5E3',
  },

  homeHeader: {
    color: '#F5B7B1',
    fontWeight: 'bold',
    fontSize: 60,
    marginBottom: 60,
  },

  homeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5B7B1',
    height: 100,
    width: '75%',
    marginBottom: 20,
  },
  homeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  item: {
    justifyContent: 'center',
    backgroundColor: 'white',
    height: 100,
    width: '100%',
    marginBottom: 20,
  },
  itemText: {
    fontSize: 20,
    marginLeft: 10,
  },
  list: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: '#D5F5E3',
  },
  descriptionPage: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  descriptionName: {
    color: '#F5B7B1',
    fontWeight: 'bold',
    fontSize: 60,
    marginTop: 60,
  },
  descriptionField: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
  },
});
