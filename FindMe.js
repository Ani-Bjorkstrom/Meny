import React, { Component } from 'react';
import { Text, View, Platform, StyleSheet } from 'react-native';
//import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import * as appJson from './data.json';
import { getDistance } from 'geolib';
import { floor } from 'react-native-reanimated';
//import * as MediaLibrary from 'expo-media-library';
let cities = appJson.cities;


let curLat, curLong;
let cityLat = cities.map(item => ( item.lat ));
let cityLong = cities.map(item => ( item.lon));

let longLat = [];
cities.map(item =>(longLat.push({latitude: item.lat, longitude: item.lon})));


const EpCities = (props) => {
    return(
      cities.map((obj) => (
        <Text key={obj.name}>{obj.name}{' - '}</Text>
        
     ))


    )
}


//console.log(cityLat, cityLong);


    class FindMe extends Component {
        
        state = {
            errorMessage: '',
            location: {},
            curLong: null,
            curLat: null,
            curLongLat: {}
            };   
    
        findCurrentLocationAsync = async () => {

            let permissionStatus = null;
            //promise which in this case is Permissions.askAsync fullfills, the value will be returned and saved in status
            
                let { status } = await Location.requestForegroundPermissionsAsync();
                permissionStatus = status;
   
            
            if (permissionStatus !== 'granted'){
                
                this.setState({
                    errorMessage: 'Permission to access location was denied'
                    });
                    }
            
            const location = await Location.getCurrentPositionAsync({});
            curLat = location.coords.latitude;
            curLong = location.coords.longitude;
    
            let curLongLat = {latitude: curLat, longitude: curLong}; 

            this.setState({ 
                location,
                curLong,
                curLat,
                curLongLat
                });

                
            
            
        };  


    




        render() {
            this.findCurrentLocationAsync();
            
            let distance = longLat.map(item => (getDistance(this.state.curLongLat, item)));
            //const distance = getDistance(this.state.curLongLat, longLat);
            console.log(distance);
            //this.calDistance();
            let text;
            if (this.state.errorMessage){
                text = this.state.errorMessage;
            } else if (this.state.location){
                text = this.state.curLat + "/" + this.state.curLong;
            }
            return (
                <View>
                    
                        <Text>My location</Text>
                        <EpCities name = {cities.name} />
                        {cities.map(item =>(<Text>{(item.name) + ' -'}</Text>))} 
                        {distance.map(item=>(<Text>{(item/1000) + ' km'}</Text>))}


                </View>
            );
        }
    }

   //default means that only FindMe can be exported from this module 
    export default FindMe;
    console.log(cities.name);

    
   