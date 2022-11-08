import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
} from 'react-native';
import Frequencia from '../../components/Home/Frequencia';
import Donut from '../../components/donutChart/donutChart';
import {Canvas} from '@shopify/react-native-skia';

export default function Home() {
    return(
        <View style={styles.container}>
            <View style={styles.containerTop}>
                <Text style={styles.textTop}>educari.</Text>
            </View>
            <View style={styles.containerName}>
                <Text style={styles.textName}>Olá Aluno</Text>
            </View>
            <View>
                <Text style={styles.textSerie}>2°MA</Text>
            </View>
            <View style={styles.containerFreq}>
                <Text style={styles.textFreq}>Frequência diária</Text>
                
                <Canvas>

                </Canvas>
      
                <View style={styles.itemsFreq}>
                    <Frequencia text={'Seg'}/>
                    <Frequencia text={'Ter'}/>
                    <Frequencia text={'Qua'}/>
                    <Frequencia text={'Qui'}/>
                    <Frequencia text={'Sex'}/>
                </View>
                
            </View>
            <View style={styles.containerRec}>
                <Text style={styles.textRec}>Recentes</Text>
                <Text style={styles.numberRec}>6</Text>
                <Text style={styles.textRec2}>Aulas</Text>
            </View>
            
            <View style={styles.containerMed}>
                <Text style={styles.textMed}>Média</Text>
                <Donut/>
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#e8eaed',
    },
    containerTop:{
        alignItems: 'center',
    },
    textTop:{
        marginTop: 35,
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: 'bold',

    },
    containerName:{},
    textName:{
        marginTop: 40,
        marginBottom: -15,
        marginHorizontal: 15,
        fontSize: 43,
        fontWeight: 'bold',


    },
    textSerie:{
        marginLeft: 325,
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 5,
    },
    containerFreq:{
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 16,
        marginEnd: 170,
        marginHorizontal: 15,
    },
    textFreq:{
        alignSelf: 'center',
        fontSize: 17,
    },
    itemsFreq:{
        fontSize: 5,
        flexDirection: 'row',
        marginTop: 245,
        justifyContent: 'space-between',


    },
    canudo:{
        backgroundColor: '#B6B6C2',
        padding: 8,
        borderRadius: 10,
        marginEnd: 140,
        marginTop: 5,

    },
    containerRec:{
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 16,
        marginEnd: 15,
        marginHorizontal: 220,
        marginTop: -306
    },
    textRec:{
        alignSelf: 'center',
        fontSize: 15,
    },
    numberRec:{
        alignSelf: 'center',
        justifyContent: 'center',
        fontSize: 60,
        fontWeight: 'bold',
        color: '#FF3B30',
        },
    textRec2:{
        marginTop: 10,
        alignSelf: 'center',
        fontSize: 15,
    },
    containerMed:{
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 16,
        marginEnd: 15,
        marginHorizontal: 220,
        marginTop: 15
        
    },
    textMed:{
        alignSelf: 'center',
        fontSize: 15, 
    },
    numberMed:{
        marginTop: 10,
        alignSelf: 'center',
        fontSize: 30,
    },
})
                