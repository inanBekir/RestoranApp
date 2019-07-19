import React, { Component } from 'react';
import { StyleSheet, Text, View ,ScrollView ,Button} from 'react-native';


export default class App extends Component<{}> {

  constructor(){
    super();
    this.state = {
      
    textValue: '',
    textCal: 0,
    textTotal:'',
    count: 0,
    

    }
    this.onPressButton= this.onPressButton.bind(this);
}

onPressButton(event,buttonId) {
    this.setState({

        count: this.state.count + 1,
        textValue: buttonId,
        textCal : 5.95 * (this.state.count + 1),
        textTotal:"ad",
        
        
    })
}

  

 
  render(){
  return (
    
    <View style={styles.container}>
         
      
            <View style={styles.Box}>
              
              <Text style={{color: 'red',fontSize:20,textAlign:"center"}}> {this.state.count} {this.state.textValue} {this.state.textCal} </Text>
              <Text style={{color: 'red',fontSize:20}}> {this.state.textTotal} </Text>
              
            </View>
     
         
          <ScrollView style={styles.Box}>
            <View style={styles.Element2}>
            
            <Button title= 'Pizza' onPress={(event) => this.onPressButton(event, "pizza")}/>

            </View>
            <View style={styles.Element2}>
            <Button title= 'Hamburger' onPress={(event) => this.onPressButton(event, 1)}/>
            </View>
            <View style={styles.Element2}>
              <Text>Egemen - 1Egemen - 1Egemen - 1</Text>
            </View>
            <View style={styles.Element2}>
              <Text>Egemen - 1Egemen - 1Egemen - 1</Text>
            </View>
            <View style={styles.Element2}>
              <Text>Egemen - 1Egemen - 1Egemen - 1</Text>
            </View>
            <View style={styles.Element2}>
              <Text>Egemen - 1Egemen - 1Egemen - 1</Text>
            </View>
            <View style={styles.Element2}>
              <Text>Egemen - 1Egemen - 1Egemen - 1</Text>
            </View>
            <View style={styles.Element2}>
              <Text>Egemen - 1Egemen - 1Egemen - 1</Text>
            </View>
            <View style={styles.Element2}>
              <Text>Egemen - 1Egemen - 1Egemen - 1</Text>
            </View>
            <View style={styles.Element2}>
              <Text>Egemen - 1Egemen - 1Egemen - 1</Text>
            </View>
            <View style={styles.Element2}>
              <Text>Egemen - 1Egemen - 1Egemen - 1</Text>
            </View>
            <View style={styles.Element2}>
              <Text>Egemen - 1Egemen - 1Egemen - 1</Text>
            </View>
            <View style={styles.Element2}>
              <Text>Egemen - 1Egemen - 1Egemen - 1</Text>
            </View>
            <View style={styles.Element2}>
              <Text>Egemen - 1Egemen - 1Egemen - 1</Text>
            </View>
            <View style={styles.Element2}>
              <Text>Egemen - 1Egemen - 1Egemen - 1</Text>
            </View>
            <View style={styles.Element2}>
              <Text>Egemen - 1Egemen - 1Egemen - 1</Text>
            </View>
            <View style={styles.Element2}>
              <Text>Egemen - 1Egemen - 1Egemen - 1</Text>
            </View>
            <View style={styles.Element2}>
              <Text>Egemen - 1Egemen - 1Egemen - 1</Text>
            </View>
            <View style={styles.Element2}>
              <Text>Egemen - 1Egemen - 1Egemen - 1</Text>
            </View>
            <View style={styles.Element2}>
              <Text>Egemen - 1Egemen - 1Egemen - 1</Text>
            </View>
            <View style={styles.Element2}>
              <Text>Egemen - 1Egemen - 1Egemen - 1</Text>
            </View>
            <View style={styles.Element2}>
              <Text>Egemen - 1Egemen - 1Egemen - 1</Text>
            </View>
            <View style={styles.Element2}>
              <Text>Egemen - 1Egemen - 1Egemen - 1</Text>
            </View>
            <View style={styles.Element2}>
              <Text>Egemen - 1Egemen - 1Egemen - 1</Text>
            </View>
          </ScrollView>
         

          <View style={styles.Box}>
          <View style={styles.Element3}>
              <Text>Egemen</Text>
            </View>
            <View style={styles.Element3}>
              <Text>Egemen</Text>
            </View>
            <View style={styles.Element3}>
              <Text>Egemen</Text>
            </View>
            <View style={styles.Element3}>
              <Text>Egemen</Text>
            </View>
           
           
          </View>
          
          
     </View>   

     
  );
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#F5FCFF',
    alignItems: 'flex-start',
    backgroundColor: 'red',
    flexDirection: 'row',
  },
  
  Box: {
    flex: 1,
    margin: 20,
    backgroundColor: 'orange',
    
   
 
  },
  Element1: {
    flex: 1,
    margin: 20,
    backgroundColor: 'pink',
   
 
  },

  Element2: {
    flex: 1,
    margin: 20,
    backgroundColor: 'yellow',
    borderWidth: 2,
    borderRadius: 4,
  },

  Element3: {
    flex: 1,
    margin: 20,
    backgroundColor: 'yellow',
    
 
  },
 

});
