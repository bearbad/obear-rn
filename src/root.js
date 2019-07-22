/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <View style={styles.header}>
          <Text style={styles.return}>返回</Text>
          <Text style={styles.title}>修改密码</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.label}>登陆用户：</Text>
          <Input inputContainerStyle={styles.input}/>
        </View>
        <View style={styles.line}>
          <Text style={styles.label}>登陆账号：</Text>
          <Input inputContainerStyle={styles.input}/>
        </View>
        <View style={styles.line}>
          <Text style={styles.label}>旧密码：</Text>
          <Input placeholder="请输入旧密码" inputContainerStyle={styles.input}/>
        </View>
        <View style={styles.line}>
          <Text style={styles.label}>新密码：</Text>
          <Input placeholder="请输入新密码" inputContainerStyle={styles.input}/>
        </View>
        <View style={styles.line}>
          <Text style={styles.label}>确认密码：</Text>
          <Input placeholder="请输入新密码" inputContainerStyle={styles.input}/>
        </View>
        <View style={styles.btn}>
        <Button title="提交" buttonStyle={styles.submit}/>
        <Button title="取消" type="outline" containerStyle={styles.mt20}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mt20: {
    marginTop: 20
  },
  btn: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10
  },
  submit: {
    backgroundColor: '#FC5051'
  },
  line: {
    flexDirection:'row',
    height: 50
  },
  label: {
    color: '#7E7F7E',
    height: 51,
    width: 100,
    lineHeight: 51,
    textAlign: 'right',
    fontSize: 16,
    // backgroundColor: 'green'
  },
  input: {
    borderBottomColor: '#7E7F7E'
  },
  // header
  header: {
    height: 44,
    lineHeight: 44,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5'
  },

  return: {
    color: '#FC4444',
    height: 45,
    width: 45,
    lineHeight: 45,
    textAlign: 'center',
    fontSize: 16
  },

  title: {
    color: '#161616',
    flex: 1,
    height: 45,
    lineHeight: 45,
    textAlign: 'center',
    fontSize: 16,
    marginRight: 45
  }

});
