import React, { useRef, Dispatch, useState, SetStateAction } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { MultiSelect } from 'react-native-element-dropdown';
import { IndexedValue } from "../interfaces/Categories";

interface Props { 
  data: IndexedValue[]
  chipStyle?: any,
  chipTextStyle?: any,
  style?: any
  placeholder?: string
}

const CategoryFiltersTest = (props: Props) => {
  const [selected1, setSelected1] = useState<string[]>([])

  const renderItem = (item: IndexedValue) => {
    return (
      <View style={styles.item}>
        <Text style={styles.selectedTextStyle}>{item.label}</Text>
      </View>
    );
  };

  const data = [{label: "item1", id: "1"},{label: "item2", id: "2"}]

  return (
    <MultiSelect
      style={{...styles.dropdown, ...props.style}}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      labelField="label"
      valueField="label"
      placeholder={props.placeholder}
      value={selected1}
      search
      inside
      searchPlaceholder="Search..."
      onChange={setSelected1}
      renderItem={renderItem}
      renderSelectedItem={(item, unSelect) => (
        <View><Text>{item.label}</Text></View>
      )}
    />
  )
}

const styles = StyleSheet.create({
  dropdown: {
    marginTop: 12,
    minHeight: 50,
    backgroundColor: 'white',
    padding: 12,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 12,
  },
  item: {
    padding: 10,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  chipTextStyle: {
    fontSize: 14,
    color: 'black'  
  },  
  placeholderStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 30,
    fontSize: 16,
  },
  icon: {
    marginRight: 5,
  },
})

export default CategoryFiltersTest