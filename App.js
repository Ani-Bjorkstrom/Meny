import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TextInput, FlatList} from 'react-native';
import * as appJson from './app.json';
import FindMe from './FindMe';
let cities = appJson.cities;

let myLat = 10;
let myLon = 10;
console.log(cities);
const EpCities = (props) => {
    return(
      cities.map((city) => (
        <Text className="city">{city.name} - {city.lat-myLat}/{city.lon-myLon}</Text>
     ))
    )
}
export default class App extends Component {

render(){
  return (

  <ScrollView>
    
    <View style={{justifyContent: 'center'}}>

          

          <Text style={{color: '#f1287e',
              fontWeight: 'bold',
              fontFamily: 'Arial',
              fontSize: 15,
              textAlign:'center',
              paddingTop: 40}}>
        My distance from EasyPark cities
        {console.log(navigator.geolocation)}
        
      </Text>
    
    
    <Image
        source={require('./assets/search.png')}
        style={{ width: 50, height: 50, alignSelf: 'center', marginTop: 20 }}
      />
    <FindMe />  
    <EpCities name = {cities.name} 
      
    />
  </View>
    
  
  </ScrollView> 
  ); 
}
};

