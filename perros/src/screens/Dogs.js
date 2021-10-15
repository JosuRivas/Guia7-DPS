import {ListItem, Avatar} from 'react-native-elements';
import * as React from 'react';
import {View,Image} from 'react-native';

export default function Dogs(){
    const perros = [
        {
            nombre:'Labrador',
            origen:'Canadá',
            imagen:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Labrador_Retriever_%281210559%29.jpg/1024px-Labrador_Retriever_%281210559%29.jpg'
        },
        {
            nombre:'Bulldog Francés',
            origen:'Francia',
            imagen:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/%D0%A4%D1%80%D0%B0%D0%BD%D1%86%D1%83%D0%B7%D1%81%D0%BA%D0%B8%D0%B5_%D0%B1%D1%83%D0%BB%D1%8C%D0%B4%D0%BE%D0%B3%D0%B8_2013-09-02_11-36.JPG/1280px-%D0%A4%D1%80%D0%B0%D0%BD%D1%86%D1%83%D0%B7%D1%81%D0%BA%D0%B8%D0%B5_%D0%B1%D1%83%D0%BB%D1%8C%D0%B4%D0%BE%D0%B3%D0%B8_2013-09-02_11-36.JPG'
        },
        {
            nombre:'Pastor Alemán',
            origen:'Alemania',
            imagen:'https://upload.wikimedia.org/wikipedia/commons/9/94/Cane_da_pastore_tedesco_adulto.jpg'
        },
        {
            nombre:'Beagle',
            origen:'Inglaterra',
            imagen:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Beagle_Faraon.JPG/1024px-Beagle_Faraon.JPG'
        },
        {
            nombre:'Poodle',
            origen:'Francia',
            imagen:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Full_attention_%288067543690%29.jpg/368px-Full_attention_%288067543690%29.jpg'
        },
        {
            nombre:'Rottweiler',
            origen:'Alemania',
            imagen:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/02_I_Exposici%C3%B3n_Monogr%C3%A1fica_Club_Rottweiler_de_Espa%C3%B1a_-_Santa_Brigida_-_Gran_Canaria.jpg/450px-02_I_Exposici%C3%B3n_Monogr%C3%A1fica_Club_Rottweiler_de_Espa%C3%B1a_-_Santa_Brigida_-_Gran_Canaria.jpg'
        }
    ]

    return(
        <View>
             {    
             perros.map((l, i) => (      
             <ListItem key={i} bottomDivider>        
                <Avatar source={{uri: l.imagen}} />        
                <ListItem.Content>          
                 <ListItem.Title>{l.nombre}</ListItem.Title>          
                 <ListItem.Subtitle>{l.origen}</ListItem.Subtitle>        
                </ListItem.Content>      
             </ListItem>    
             ))}
        </View>
    )
}