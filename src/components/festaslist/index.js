import React, { Component } from 'react';

import ReactNative, {
   TouchableOpacity,
   Image
 } from 'react-native';

import { Container, Content, List, ListItem, Thumbnail, Text,
         Header, Icon, Button, Title} from 'native-base';

var FestasList = React.createClass({
    onPressEvent(){
        this.props.navigator.push({name: 'festa'});
    },

    onHomePress(){
        this.props.navigator.pop();
    },

    render() {
        return (
            <Container>
                <Header style={{backgroundColor: '#336B87'}}>
                    <Button transparent onPress={this.onHomePress}>
                        <Image source={require('./home.png')}  style={{ width: 27, height: 27}} />
                    </Button>

                    <Title>Distrito de Setúbal</Title>

                    <Button transparent onPress={this.onHomePress}>
                        <Image source={require('./home.png')}  style={{ width: 0, height: 0}} />
                    </Button>

                </Header>

                <Content>
                    <List>
                        <ListItem itemDivider>
                            <Text>JULHO</Text>
                        </ListItem>
                        <ListItem onPress={this.onPressEvent}>
                            <Thumbnail square size={80} source={require('./bxb.png')} />
                            <Text>Baixa da Banheira</Text>
                            <Text note>10 JUL - 13 JUL</Text>
                        </ListItem>
                        <ListItem itemDivider>
                            <Text>AGOSTO</Text>
                        </ListItem>
                        <ListItem onPress={this.onPressEvent}>
                            <Thumbnail square size={80} source={require('./corroios.png')} />
                            <Text>Corroios</Text>
                            <Text note>10 AGO - 13 AGO</Text>
                        </ListItem>
                        <ListItem itemDivider>
                            <Text>SETEMBRO</Text>
                        </ListItem>
                        <ListItem onPress={this.onPressEvent}>
                            <Thumbnail square size={80} source={require('./moita.jpg')} />
                            <Text>Moita</Text>
                            <Text note>1 SET - 12 SET</Text>
                        </ListItem>
                        <ListItem onPress={this.onPressEvent}>
                            <Thumbnail square size={80} source={require('./pn.jpg')} />
                            <Text>Pinhal Novo</Text>
                            <Text note>15 SET - 18 SET</Text>
                        </ListItem>
                        <ListItem itemDivider>
                            <Text>DEZEMBRO</Text>
                        </ListItem>
                        <ListItem onPress={this.onPressEvent}>
                            <Thumbnail square size={80} source={require('./bxb.png')} />
                            <Text>Palmela</Text>
                            <Text note>1 DEZ - 15 DEZ</Text>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
});

module.exports = FestasList;
