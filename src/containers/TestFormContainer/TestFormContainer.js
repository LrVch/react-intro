import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

const user = {
  email: '22',
  password: '',
  social: {
    facebook: ''
  }
}

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// const validateAsync = value => {
//   console.log(value)
//   return sleep(2000).then(() => {
//     if (['admin', 'null', 'god'].includes(value)) {
//       throw 'Nice try';
//     }
//   });
// };

const userSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is Required')
    .email('Not valid email'),
  password: Yup.string()
    .required('Password is Required')
    .min(2, 'At least 2 chars')
    .max(4, 'Max least 4 chars'),
  social: Yup.object().shape({
    facebook: Yup.string()
      .required('Social is required')
  })
})


const TestFormContainer = () => (
  <div>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={user}
      // validate={values => {
      //   let errors = {};

      //   if (!values.email) {
      //     errors.emailRequierd = 'Email is Required';
      //   }

      //   if (
      //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      //   ) {
      //     errors.emailNotMatched = 'Invalid email address';
      //   }

      //   if (!values.password) {
      //     errors.passwordRequierd = 'Passord is Required';
      //   }
      //   if (values.password.length < 3) {
      //     errors.passwordMinLength = 'Password lehgth at least 3 chars';
      //   }

      //   if (!values.social.facebook) {
      //     errors.facebook = 'Facebook is Required';
      //   }

      //   return errors;
      // }}
      validationSchema={userSchema}
      onSubmit={(values, actions) => {
        // console.log(actions)
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        status,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        isValidating
      }) => (
          <form noValidate onSubmit={handleSubmit}>
            {/* <fieldset disabled={isSubmitting}>
              <div>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values['email']}
                />
                <br />
                {errors.email && touched.email && errors.email}
              </div>

              <div>

                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <br />
                {errors.password && touched.password && errors.password}
              </div>

              <div>
                <input
                  type="text"
                  name="social.facebook"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.social.facebook}
                />
                <br />
                {errors.social &&
                  errors.social.facebook &&
                  touched.social && touched.social.facebook && <div>{errors.social.facebook}</div>}
              </div>
            </fieldset> */}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>

            {status && status.msg && <div>{status.msg}</div>}
            <hr />
            values
            <pre>{JSON.stringify(values, '', 4)}</pre>
            errors
            <pre>{JSON.stringify(errors, '', 4)}</pre>
          </form>
        )}
    </Formik>
  </div>
);

export default TestFormContainer;