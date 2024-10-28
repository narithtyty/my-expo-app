import React from 'react';
import { ScrollView, StyleSheet, View, Image, Text } from 'react-native';
import { Title, Paragraph, Card, Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
export default function AboutScreen() {
  const navigation = useNavigation();

  const navigateToDetails = () => {
    navigation.navigate('details');
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Content>
          <Title style={styles.title}>Welcome to Our App</Title>
          <Paragraph style={styles.paragraph}>
            We're dedicated to providing you with the best experience possible. Our team of experts
            works tirelessly to ensure that you have access to cutting-edge features and
            unparalleled support.
          </Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Content>
          <Title style={styles.title}>Welcome to Our App</Title>
          <Paragraph style={styles.paragraph}>
            We're dedicated to providing you with the best experience possible. Our team of experts
            works tirelessly to ensure that you have access to cutting-edge features and
            unparalleled support.
          </Paragraph>
        </Card.Content>
      </Card>

      <View style={styles.featuresContainer}>
        <Title style={styles.featuresTitle}>Key Features</Title>
        <View style={styles.feature}>
          <Ionicons name="rocket" size={24} color="#6200ee" />
          <Paragraph style={styles.featureText}>Lightning-fast performance</Paragraph>
        </View>
        <View style={styles.feature}>
          <Ionicons name="shield-checkmark" size={24} color="#6200ee" />
          <Paragraph style={styles.featureText}>Enhanced security measures</Paragraph>
        </View>
        <View style={styles.feature}>
          <Ionicons name="people" size={24} color="#6200ee" />
          <Paragraph style={styles.featureText}>Seamless collaboration tools</Paragraph>
        </View>
      </View>

      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Our Mission</Title>
          <Paragraph style={styles.paragraph}>
            To empower individuals and businesses with innovative technology solutions that simplify
            their lives and boost productivity.
          </Paragraph>
        </Card.Content>
      </Card>

      <Button
        mode="contained"
        onPress={navigateToDetails}
        style={styles.button}
        icon={({ size, color }) => <Ionicons name="mail" size={size} color={color} />}
      >
        Contact Us
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
  },
  featuresContainer: {
    marginBottom: 16,
  },
  featuresTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  featureText: {
    marginLeft: 8,
    fontSize: 16,
  },
  button: {
    marginTop: 16,
  },
});
