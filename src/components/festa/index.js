import React, {
  Component
} from 'react';

import ReactNative, {
   View,
   Image,
   Text,
   StyleSheet,
   TouchableOpacity,
   ListView
 } from 'react-native';

 import {
  Header, Title, Button, Icon
} from 'native-base';

var ParallaxScrollView = require('react-native-parallax-scroll-view');

import Dimensions from 'Dimensions';
let windowWidth = Dimensions.get('window').width;


class FestaDetail extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      navigator: props.navigator,
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }).cloneWithRows([
        '20:00 - Abertura',
        '21:00 - Concerto',
        '22:30 - Cenas maradas',
        '23:00 - Mais Cenas',
        '23:30 - Outras cenas',
        '23:30 - Outras cenas',
        '23:30 - Outras cenas',
        '23:30 - Outras cenas',
        '23:30 - Outras cenas',
        '23:30 - Outras cenas',
        '23:30 - Outras cenas',
        '23:30 - Outras cenas',
        '23:30 - Outras cenas',
        '23:30 - Outras cenas',
        '23:45 - Fechadura'
      ])
    };
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
                <Image source={{uri: 'https://dncache-mauganscorp.netdna-ssl.com/thumbseg/735/735646-bigthumbnail.jpg',
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
              <Header>


                <Title>Baixa da Banheira</Title>
              </Header>
            )}

            renderFixedHeader={() => (
                <View key="fixed-header" style={styles.fixedSection}>
                  <Text style={styles.fixedSectionText}
                        onPress={ (onPress) => this.state.navigator.pop()}>
                    Back
                  </Text>
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
const STICKY_HEADER_HEIGHT = 64;

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
    bottom: 35,
    right: -5,
    borderRadius: 10,
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
