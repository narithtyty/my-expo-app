import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { TextInput, Button, Title, Snackbar } from 'react-native-paper';
import { z } from 'zod';

const customerSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  middleName: z.string().optional(),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^[0-9]\d{1,14}$/, 'Invalid phone number'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  website: z.string().url('Invalid website URL').optional().or(z.literal('')),
  address: z.string().min(5, 'Address must be at least 5 characters'),
  province: z.string().min(1, 'Province is required'),
  district: z.string().min(1, 'District is required'),
  subdistrict: z.string().min(1, 'Subdistrict is required'),
  zipcode: z.string().regex(/^\d{5}$/, 'Invalid zipcode format'),
});

export default function ProfileScreen() {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    address: '',
    province: '',
    district: '',
    subdistrict: '',
    zipcode: '',
  });
  const [errors, setErrors] = useState({});
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleChange = (name: string, value: string) => {
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    try {
      customerSchema.parse(formData);
      setErrors({});
      setSnackbarMessage('Profile updated successfully!');
      setSnackbarVisible(true);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors = {};
        error.errors.forEach((err) => {
          newErrors[err.path[0]] = err.message;
        });
        setErrors(newErrors);
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title style={styles.title}>Profile Information</Title>
      <TextInput
        label="First Name"
        value={formData.firstName}
        onChangeText={(text) => handleChange('firstName', text)}
        error={!!errors.firstName}
        style={styles.input}
      />
      <TextInput
        label="Middle Name (Optional)"
        value={formData.middleName}
        onChangeText={(text) => handleChange('middleName', text)}
        style={styles.input}
      />
      <TextInput
        label="Last Name"
        value={formData.lastName}
        onChangeText={(text) => handleChange('lastName', text)}
        error={!!errors.lastName}
        style={styles.input}
      />
      <TextInput
        label="Email"
        value={formData.email}
        onChangeText={(text) => handleChange('email', text)}
        error={!!errors.email}
        keyboardType="email-address"
        style={styles.input}
      />
      <TextInput
        label="Phone"
        value={formData.phone}
        onChangeText={(text) => handleChange('phone', text)}
        error={!!errors.phone}
        keyboardType="phone-pad"
        style={styles.input}
      />
      <TextInput
        label="Company"
        value={formData.company}
        onChangeText={(text) => handleChange('company', text)}
        error={!!errors.company}
        style={styles.input}
      />
      <TextInput
        label="Website (Optional)"
        value={formData.website}
        onChangeText={(text) => handleChange('website', text)}
        error={!!errors.website}
        keyboardType="url"
        style={styles.input}
      />
      <TextInput
        label="Address"
        value={formData.address}
        onChangeText={(text) => handleChange('address', text)}
        error={!!errors.address}
        style={styles.input}
      />
      <TextInput
        label="Province"
        value={formData.province}
        onChangeText={(text) => handleChange('province', text)}
        error={!!errors.province}
        style={styles.input}
      />
      <TextInput
        label="District"
        value={formData.district}
        onChangeText={(text) => handleChange('district', text)}
        error={!!errors.district}
        style={styles.input}
      />
      <TextInput
        label="Subdistrict"
        value={formData.subdistrict}
        onChangeText={(text) => handleChange('subdistrict', text)}
        error={!!errors.subdistrict}
        style={styles.input}
      />
      <TextInput
        label="Zipcode"
        value={formData.zipcode}
        onChangeText={(text) => handleChange('zipcode', text)}
        error={!!errors.zipcode}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button mode="contained" onPress={handleSubmit} style={styles.button}>
        Update Profile
      </Button>
      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={3000}
      >
        {snackbarMessage}
      </Snackbar>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 16,
  },
});
