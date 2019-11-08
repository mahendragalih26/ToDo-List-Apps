import React, {Component} from 'react';
import {View, TextInput} from 'react-native';

function UselessTextInput(props) {
  return (
    <TextInput
      style={{fontSize: 18, paddingHorizontal: 20}}
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      //   maxLength={40}
    />
  );
}

export default function UselessTextInputMultiline() {
  const [value, onChangeText] = React.useState(
    'Useless Multiline Placeholder awdwad sefsfse sefsefsef sfeesfsef sese          ww                  wadawd                  awdaw                   wadawd              wadawd              2',
  );

  // If you type something in the text box that is a color, the background will change to that
  // color.
  return (
    <View
      style={{
        backgroundColor: value,
        width: '100%',
      }}>
      <UselessTextInput
        multiline
        numberOfLines={1}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
    </View>
  );
}
