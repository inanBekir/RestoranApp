import React from 'react';
import {View, Text, TouchableOpacity } from 'react-native';

export default class MyButton extends React.Component{

    constructor(){
        super();
        this.state2 = {
          
        textValue2: '',
        textCal2: 0,
        textTotal2:'',
        count2: 0,
    
        }
        
        this.onPressButton2= this.onPressButton2.bind(this);
    }
    
      onPressButton2(event,urnName,urnPrice) {
        this.setState2({
    
          count2:0,
         
            count2: this.state2.count + 1,
            textValue2: urnName,
            textCal2 : urnPrice * (this.state2.count + 1),
            textTotal2:urnPrice * (this.state2.count + 1),
            
            
        })
      }



}