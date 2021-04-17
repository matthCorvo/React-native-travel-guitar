import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import StyledButton from "../StyledButton";
import styles from './styles';
const CarItem = (props) => {

  const { name, tagline ,taglineCTA, image} = props.car;
    return (
        <View style={styles.carContainer}>
 
        <ImageBackground 
        source={image}
        style={styles.image}
        />
    
        <View style={styles.titles}>
          <Text style={styles.title}>
          {name}
          </Text>
          <Text style={styles.subtitle}>{tagline}{''}
          <Text style={styles.subtitleCTA}>
            {taglineCTA}
          </Text>
          </Text>
        </View>
    
    <View style={styles.buttonsContainer}>
    <StyledButton type="primary" 
        content={"Voir plus"}  
         onPress={() => {
            console.warn('Boutton Voir plus a été touché')
          }}/>

        <StyledButton type="secondary" 
        content={"Achetez maintenant"}   
        onPress={() => {
            console.warn('Boutton Achetez maintenant a été touché')
          }}/>

    </View>

       

        </View>
    );
  };


export default CarItem ;