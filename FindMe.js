import React, { Component } from 'react';
import { ViewBase, Text, View, TouchableOpacity, Alert } from 'react-native';
//import {Location} from 'expo';
//import * as Location from 'expo-location';
    class FindMe extends Component {
        state = {
            latitude: null,
            longtitude: null
        };

        findCurrentLocation = () => {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const latitude = JSON.stringify(position.coords.latitude);
                    const longtitude = JSON.stringify(position.coords.longitude);

                    this.setState({
                        latitude,
                        longtitude
                    });
                },
                error => Alert.alert(error.message),
                { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
            );
        };

        render() {
            return (
                <View>
                   <TouchableOpacity onPress={this.findCurrentLocation}> 
                        <Text>My location</Text>
                        <Text>{this.state.longtitude}</Text>
                        <Text>{this.state.latitude}</Text>
                    </TouchableOpacity>
                </View>
            );
        }
    }

    export default FindMe;