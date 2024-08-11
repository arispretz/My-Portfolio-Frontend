import React from 'react';
import { Box, Button, TextArea, TextField } from '@radix-ui/themes';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'Must be at least 2 characters')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      message: Yup.string()
        .min(10, 'Must be at least 10 characters')
        .required('Required'),
    }),
    onSubmit: async (values, { setStatus }) => {
      console.log('Submitting form with values:', values);
      console.log('Backend URL:', process.env.REACT_APP_BACKEND_URL);
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/contact`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          setStatus({ message: 'Form submitted successfully', type: 'success' });
          formik.resetForm();
        } else {
          setStatus({ message: 'Error sending form', type: 'error' });
        }
      } catch (error) {
        setStatus({ message: 'Network error: ' + error.message, type: 'error' });
      }
    },
  });

  return (
    <Box style={{ display: 'flex' }}>
      <Box style={{ flex: 2, paddingBottom: '50px', backgroundColor: '#F6EEB4' }}>
        <form onSubmit={formik.handleSubmit}>
          {formik.status && (
            <div className={formik.status.type === 'success' ? 'success' : 'error'}>
              {formik.status.message}
            </div>
          )}
          <Box maxWidth="600px">
            <label htmlFor="name">
              Name:
              <TextField.Root
                placeholder="Name…"
                size="3"
                type="text"
                id="name"
                {...formik.getFieldProps('name')}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="error">{formik.errors.name}</div>
              ) : null}
            </label>
          </Box>
          <Box maxWidth="600px">
            <label htmlFor="email">
              Email:
              <TextField.Root
                placeholder="Email…"
                size="3"
                type="email"
                id="email"
                {...formik.getFieldProps('email')}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
              ) : null}
            </label>
          </Box>
          <Box maxWidth="600px">
            <label htmlFor="message">
              Message:
              <TextArea
                color="blue"
                variant="soft"
                placeholder="Write your message…"
                id="message"
                rows="5"
                {...formik.getFieldProps('message')}
              />
              {formik.touched.message && formik.errors.message ? (
                <div className="error">{formik.errors.message}</div>
              ) : null}
            </label>
          </Box>
          <Button type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default ContactForm;
