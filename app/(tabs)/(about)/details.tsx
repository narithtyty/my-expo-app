import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Title, Paragraph } from 'react-native-paper';

export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>App Details</Title>
      <Paragraph style={styles.paragraph}>
        Our app is designed with cutting-edge technology to provide you with the best user
        experience. We use React Native for cross-platform compatibility, ensuring that you get the
        same great experience whether you're on iOS or Android.
      </Paragraph>
      <Paragraph style={styles.paragraph}>Some of our key technologies include:</Paragraph>
      <Paragraph style={styles.listItem}>
        • React Navigation for seamless screen transitions
      </Paragraph>
      <Paragraph style={styles.listItem}>
        • React Native Paper for beautiful, consistent UI components
      </Paragraph>
      <Paragraph style={styles.listItem}>
        • Expo for rapid development and easy deployment
      </Paragraph>
      <Paragraph style={styles.paragraph}>
        We're constantly working on improving our app and adding new features. Stay tuned for
        exciting updates!
      </Paragraph>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 12,
  },
  listItem: {
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 16,
    marginBottom: 8,
  },
});
