import {ListItem, Avatar} from 'react-native-elements';
import * as React from 'react';
import {View,Image} from 'react-native';

export default function Cats(){
    const perros = [
        {
            nombre:'Siamés',
            origen:'Tailandia',
            imagen:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Siam_lilacpoint.jpg/368px-Siam_lilacpoint.jpg'
        },
        {
            nombre:'Persa',
            origen:'Persia',
            imagen:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Persian_in_Cat_Cafe.jpg/368px-Persian_in_Cat_Cafe.jpg'
        },
        {
            nombre:'Ragdoll',
            origen:'Estados Unidos',
            imagen:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Ragdoll_from_Gatil_Ragbelas.jpg/330px-Ragdoll_from_Gatil_Ragbelas.jpg'
        },
        {
            nombre:'Bengala',
            origen:'Estados Unidos',
            imagen:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Lepardalnd.jpg/375px-Lepardalnd.jpg'
        },
        {
            nombre:'Burmés',
            origen:'Inglaterra',
            imagen:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Burmese_chocolate_cat.jpg/368px-Burmese_chocolate_cat.jpg'
        },
        {
            nombre:'Sphynx',
            origen:'Canda',
            imagen:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Cat_Sphynx._img_025.jpg/368px-Cat_Sphynx._img_025.jpg'
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