import React, { Component, PropTypes } from 'react';
import { View, Row, Subtitle, Caption, Image, Text, Divider, TouchableOpacity } from '@shoutem/ui';
import styles from './styles';

class Room extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={styles.container}>
          <Row>
            {this.props.unreadMessages ? <View styleName="notification-dot" /> : null}
            <Image
              style={styles.avatar}
              source={{ uri: this.props.avatar }}
            />
            <View styleName="horizontal space-between">
              <View styleName="flexible vertical space-between">
                <Subtitle numberOfLines={1}>{this.props.name}</Subtitle>
                <Text numberOfLines={1}>{this.props.lastMessage}</Text>
              </View>

              <View>
                <Caption>{this.props.lastMessageTime}</Caption>
              </View>
            </View>
          </Row>
          <Divider styleName="line" />
        </View>
      </TouchableOpacity>
    );
  }
}

Room.propTypes = {
  onPress: PropTypes.func,
  unreadMessages: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  lastMessage: PropTypes.string.isRequired,
  lastMessageTime: PropTypes.string.isRequired,
};

Room.defaultProps = {
  onPress: () => {},
  unreadMessages: false,
  avatar: 'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png',
  // name: '-',
  // lastMessage: '',
  // lastMessageTime: 'UNKNOWN'
};

module.exports = Room;
