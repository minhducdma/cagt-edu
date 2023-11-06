import COLORS from '@/constants/theme-constants';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView, Image, Text, View } from 'react-native';
import { Notifications } from './data';

interface DataItem {
  id: number;
  text: string;
  desc: string;
  img: string;
  time: string;
  isStatus: number;
}
const Notification = () => {
  const [data, setData] = useState<DataItem[]>(Notifications);
  const handleItemClick = (itemId: number) => {
    const updatedData = [...data];
    const itemIndex = updatedData.findIndex((item) => item.id === itemId);
    if (itemIndex !== -1) {
      updatedData[itemIndex].isStatus =
        updatedData[itemIndex].isStatus === 0 ? 1 : 1;
      // sendUpdatedStatusToServer(updatedData);
      setData(updatedData);
    }
  };
  // const sendUpdatedStatusToServer = (updatedData) => {
  //   fetch('https://example.com/update-status', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(updatedData),
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //     })
  //     .catch(error => {
  //       console.error('Lỗi khi gửi dữ liệu lên máy chủ:', error);
  //     });
  // };
  return (
    <ScrollView style={{ margin: 10 }}>
      {Notifications &&
        Notifications.map((item) => (
          <TouchableOpacity onPress={() => handleItemClick(item.id)}>
            <View
              key={item.id}
              style={[
                styles.row,
                {
                  backgroundColor:
                    item.isStatus === 0 ? COLORS.blue : COLORS.white,
                },
              ]}
            >
              <View style={[styles.box, styles.img]}>
                <Image
                  style={{ width: 50, height: 50, borderRadius: 30 }}
                  source={require('/assets/images/' + item.img)}
                />
              </View>
              <View style={[styles.box, styles.text]}>
                <Text style={{ fontSize: 14, fontWeight: '500' }}>
                  {item.text}
                </Text>
                <Text style={{ fontSize: 13, fontWeight: '100' }}>
                  {item.desc}
                </Text>
                <Text style={{ fontSize: 12, fontWeight: '100' }}>
                  {item.time}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderRadius: 20,
    padding: 10,
  },
  box: {
    flex: 1,
  },
  img: {},
  text: {
    flex: 4,
  },
});

export default Notification;
