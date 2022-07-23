import React, { useEffect, useState } from "react";
import { Keyboard, TextInput, View, Text } from "react-native";
import { Button } from "react-native-paper";
// Expo Constants provides system information https://docs.expo.dev/versions/latest/sdk/constants/
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import { useSelector } from "react-redux";

const CustomerToDeal = () => {
  const customers = useSelector((state) => state.customer);

  const onSubmit = (seconds) => {
    Keyboard.dismiss();
    console.log(customers);
    var title = "";
    var body = "";

    if (customers != null) {
      title = `Your customer to meet today is ${
        customers[Math.floor(Math.random() * customers.length)].name
      }`;
      body = "Open the app to read more about your customer!";
    } else {
      title = `You do not have any customer details`;
      body = "Open app to add customers";
    }

    const schedulingOptions = {
      content: {
        title: title,
        body: body,
        sound: true,
        priority: Notifications.AndroidNotificationPriority.HIGH,
        color: "blue",
      },
      trigger: {
        seconds: seconds,
      },
    };
    // Notifications show only when app is not active.
    // (ie. another app being used or device's screen is locked)
    Notifications.scheduleNotificationAsync(schedulingOptions);
  };

  const handleNotification = () => {
    console.warn("Your notification ran, but won`t show up in the app!");
  };

  const askNotification = async () => {
    // We need to ask for Notification permissions for ios devices
    const { status } = await Notifications.requestPermissionsAsync();
    if (Constants.isDevice && status === "granted") {
      console.log("Notification permissions granted.");
    }
  };

  useEffect(() => {
    askNotification();

    const listener =
      Notifications.addNotificationReceivedListener(handleNotification);
    return () => listener.remove();
  }, []);

  return (
    <View>
      <Text>Press the button to get your very own customer to meet today</Text>
      <Button onPress={() => onSubmit(5)} title="Schedule">
        <Text>Set Meeting Notification</Text>
      </Button>
    </View>
  );
};

export default CustomerToDeal;
