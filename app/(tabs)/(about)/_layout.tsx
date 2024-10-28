import React from 'react';
import { Stack } from 'expo-router';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

const Drawer = createDrawerNavigator();

export default function AboutStack() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="details" options={{ title: 'About Details' }} />
    </Stack>
  );
}

// export default function AboutLayout() {
//   const colorScheme = useColorScheme();

//   return (
//     <Drawer.Navigator
//       screenOptions={{
//         headerTintColor: Colors[colorScheme ?? "light"].text,
//         headerStyle: {
//           backgroundColor: Colors[colorScheme ?? "light"].background,
//         },
//         drawerStyle: {
//           backgroundColor: Colors[colorScheme ?? "light"].background,
//         },
//         drawerActiveTintColor: Colors[colorScheme ?? "light"].tint,
//         drawerInactiveTintColor: Colors[colorScheme ?? "light"].text,
//       }}
//     >
//       <Drawer.Screen
//         name="index"
//         component={AboutStack}
//         options={{
//           headerTitle: 'About',
//           drawerLabel: 'About',
//         }}
//       />
//     </Drawer.Navigator>
//   );
// }
