const React = require('react');

const  {
    View,
    Text,
    ToolbarAndroid,
    StyleSheet
} = require('react-native');

class FPHeader extends React.Component {


    render() {

        return(
            <View style={styles.toolbarContainer}>
                <ToolbarAndroid
                    title={this.props.title}
                    titleColor={BarcampColors.lightText}
                    style={[styles.toolbar, {backgroundColor: this.props.backgroundColor}]} >
                        {this.props.children}
                </ToolbarAndroid>
            </View>
        )
    }

}

var STATUS_BAR_HEIGHT =  25;
var HEADER_HEIGHT = 56 + STATUS_BAR_HEIGHT;

const styles = StyleSheet.create({
  toolbarContainer: {
    paddingTop: STATUS_BAR_HEIGHT,
    backgroundColor: BarcampColors.backgroundDarkColor
  },
  toolbar: {
    height: HEADER_HEIGHT - STATUS_BAR_HEIGHT,
  }
});

module.exports = FPHeader;
