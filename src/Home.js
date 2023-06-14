import { View, StyleSheet, Text, FlatList, Touchable } from 'react-native';
import { Component } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Home extends Component {
    Navigation = null
    constructor({navigation}){
        super();
        this.Navigation = navigation;
        this.state={
            games:[
                {name:'Terraformacja Marsa',id:1},
                {name:'Kosci',id:2},
                {name:'Sen',id:3},
            ]
        }
    }
    onPressBtn(item){
        this.Navigation.navigate(item.name,item.id)
    }
    createGamesBtns(){
        return(
            <FlatList
                data ={this.state.games}
                extraData={this.state.games}
                renderItem={({item}) => (
                    <TouchableOpacity 
                        style={styles.flatListElementContainer}
                        onPress={() => this.onPressBtn(item)}>
                        <View>
                        <Text style={styles.gameName}>
                            {item.name}
                        </Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        );
    }
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text  style={styles.titleTxt}>
                        Główny Ekran
                    </Text>
                </View>
                <View style={styles.content}>
                    {this.createGamesBtns()}
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    title:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor:'black',
        borderBottomWidth: 0.3
    },
    titleTxt:{
        flex: 1,
        fontSize: 30,
        fontWeight: 'bold'
    },
    content:{
        flex:8
    },
    flatListElementContainer:{
        flex:1,
        backgroundColor: 'white',
        marginTop: 20,
        flexDirection: 'column',
        marginHorizontal: 10,
        paddingHorizontal: 5,
        paddingVertical:5,
        borderWidth: 2,
        alignItems: 'center'
    },
    gameName:{
        fontSize: 30,
        fontFamily: 'Teko-Bold',
        marginVertical: 30
    },
});