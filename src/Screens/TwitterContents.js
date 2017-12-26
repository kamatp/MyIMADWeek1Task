
import React from 'react';

import { Image, View } from 'react-native';

import {  Card,CardItem,Form,Picker,Left,Right,Thumbnail,Body,  Button, Icon, Text  } from 'native-base';

import UserDetails from './UserDetails.js';

const Item = Picker.Item;


export const TwitterContents = () => {



    return (   

         <Card>

           <CardItem>

             <Left>

               <Thumbnail source={require('../Images/nature.jpg')} />

            

               <Body style ={{flexDirection: 'row'}}>

                  {/* hardcoded info being passed as props to Userdetails where it will be rendered */}

                 <UserDetails

                   titleText="Robert Frost"

                   bodyText="Two roads diverged in a wood and I - I took the one less traveled by, and that has made all the difference."

                   twitterName='DemoTwitterID'

                   lastSeenTime='17m'/>

                <Icon name='arrow-dropdown'/>

          </Body>

          

             </Left>

             

           </CardItem>

           <CardItem cardBody>

                <Image source={require('../Images/road.jpg')} style={{height: 200, width: 400,alignSelf:'flex-end' }}/>

            </CardItem>

           <CardItem style={{justifyContent: 'flex-end'}}>



               <Button small iconLeft transparent>

                 <Icon name="chatbubbles" />

                 <Text style={ styles.buttonTextStyle }>60</Text>

               </Button>



             <Button small iconLeft transparent>

                <Icon name="git-compare" />

                <Text style={ styles.buttonTextStyle } >2</Text>

              </Button>



               <Button small iconLeft transparent>

                 <Icon name="heart" />

                 <Text style={ styles.buttonTextStyle }>19</Text>

               </Button>



               <Button default small transparent>

                 <Icon name="mail" />

                 <Text style={ styles.buttonTextStyle }>7</Text>

                 </Button>





           </CardItem>

         </Card>

       

     );

   };



     const styles = {

          buttonTextStyle: {

            paddingLeft: 5,

            color: '#000'

          }



     };