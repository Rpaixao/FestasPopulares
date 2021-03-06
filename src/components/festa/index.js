import React, {
  Component
} from 'react';

import ReactNative, {
  Platform,
   View,
   Image,
   StyleSheet,
   TouchableOpacity,
   ListView
 } from 'react-native';

 import {
  ListItem, Header, Title, Button, Icon, Text,
} from 'native-base';

var ParallaxScrollView = require('react-native-parallax-scroll-view');

import Dimensions from 'Dimensions';
let windowWidth = Dimensions.get('window').width;

var DIAS = ['10 JUL','11 JUL','12 JUL','13 JUL'];
var BACK = " <- ";


class FestaDetail extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      navigator: props.navigator,
      dataSource: new ListView.DataSource({
        sectionHeaderHasChanged: (r1, r2) => r1 !== r2,
        rowHasChanged: (r1, r2) => r1 !== r2
      }).cloneWithRowsAndSections([[
        '20:00 - Abertura',
        '21:00 - Concerto',
        '22:30 - Cenas maradas',
        '23:45 - Fechadura'
      ], [
        '20:00 - Abertura',
        '23:30 - Outras cenas',
        '23:30 - Outras cenas'
      ], [
        '20:00 - Abertura',
        '21:00 - Concerto',
        '22:30 - Cenas maradas',
        '23:30 - Outras cenas'
      ], [
        '20:00 - Abertura',
        '21:00 - Concerto',
        '22:30 - Cenas maradas',
        '23:00 - Mais Cenas',
        '23:30 - Outras cenas',
        '00:00 - Fogo de Artifício'
      ]])
    };
  }

  renderSectionHeader(data, sectionId) {
    var text;
    return (
      <ListItem itemDivider>
          <Text>{DIAS[sectionId]}</Text>
      </ListItem>
    );
  }

  render() {
    const { onScroll = () => {} } = this.props;
    return (
      <View style={styles.container}>
      <ListView
        ref="ListView"
        style={styles.listContainer}
        dataSource={ this.state.dataSource }
        renderRow={(rowData) => (
          <View key={rowData} style={ styles.row }>
            <Text style={ styles.rowText }>
              { rowData }
            </Text>
          </View>
         )}
         renderSectionHeader={this.renderSectionHeader}
        renderScrollComponent={props => (
          <ParallaxScrollView
            onScroll={onScroll}
            showsVerticalScrollIndicator={false}
            headerBackgroundColor="#333"
            stickyHeaderHeight={ STICKY_HEADER_HEIGHT }
            parallaxHeaderHeight={ PARALLAX_HEADER_HEIGHT }
            backgroundSpeed={10}

            renderBackground={() => (
              <View key="background">
                <Image source={{uri: 'https://static.pexels.com/photos/30732/pexels-photo-30732.jpg',
                                width: window.width,
                                height: PARALLAX_HEADER_HEIGHT}}/>
                <View style={{position: 'absolute',
                              top: 0,
                              width: window.width,
                              backgroundColor: 'rgba(0,0,0,.4)',
                              height: PARALLAX_HEADER_HEIGHT}}/>
              </View>
            )}

            renderForeground={() => (
              <View key="parallax-header" style={ styles.parallaxHeader }>
                <Image style={ styles.avatar } source={{
                  uri: 'https://image.freepik.com/free-vector/modern-abstract-background_1048-1003.jpg',
                  width: AVATAR_SIZE,
                  height: AVATAR_SIZE
                }}/>
                <Text style={ styles.sectionSpeakerText }>
                  Baixa da Banheira
                </Text>
                <Text style={ styles.sectionTitleText }>
                  10 JUL - 13 JUL
                </Text>
              </View>
            )}

            renderStickyHeader={() => (
              <Header style={{backgroundColor: '#336B87'}}>
                <Title>Baixa da Banheira</Title>
              </Header>
            )}

            renderFixedHeader={() => (
                <View key="fixed-header" style={styles.fixedSection}>
                  <TouchableOpacity onPress={(onPress) => {this.state.navigator.pop()}}>
                    <Image source={require('./back3.png')}  style={{ width: 30, height: 30}} />
                  </TouchableOpacity>
                </View>
            )}/>
        )}
      />
      </View>
    );
 }
}

const window = Dimensions.get('window');

const AVATAR_SIZE = 90; //original: 120
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 300;
const STICKY_HEADER_HEIGHT = 56;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    width: 100,
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: window.width,
    height: PARALLAX_HEADER_HEIGHT
  },
  stickySection: {
    height: STICKY_HEADER_HEIGHT,
    width: window.width,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  stickySectionText: {
    color: 'white',
    fontSize: 20,
    margin: 10
  },
  fixedSection: {
    ...Platform.select({
      ios: {
        bottom: 30
      },
      android: {
        bottom: 40
      },
    }),
    right: -10
  },
  fixedSectionText: {
    color: '#999',
    fontSize: 20
  },
  parallaxHeader: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    paddingTop: 100
  },
  avatar: {
    marginBottom: 15,
    borderRadius: AVATAR_SIZE / 2
  },
  sectionSpeakerText: {
    color: 'white',
    fontSize: 24,
    paddingVertical: 5
  },
  sectionTitleText: {
    color: 'white',
    fontSize: 18,
    paddingVertical: 5
  },
  row: {
    overflow: 'hidden',
    paddingHorizontal: 10,
    height: ROW_HEIGHT,
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderBottomWidth: 1,
    justifyContent: 'center'
  },
  rowText: {
    fontSize: 20
  }
});

module.exports = FestaDetail;
