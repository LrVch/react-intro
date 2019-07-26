import React from 'react'
import styles from './UserInfo.module.scss'
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'
import { Formik, Form } from 'formik'
import ErrorMessage from '../UI/Input/ErrorMessage/ErrorMessage'
import * as Yup from 'yup';
import Loader from '../UI/Loader/Loader';
import { loadImageValidator } from '../../shared'
import debounce from 'debounce'
import Avatar from '../UI/Avatar/Avatar'

const UserInfo = ({
  errors,
  displayName,
  loading,
  photoUrl,
  onSubmit,
  wasChanged
}) => {
  const initState = {
    displayName: displayName || '',
    photoUrl: photoUrl || ''
  }

  const userSchema = Yup.object().shape({
    displayName: Yup.string()
      .min(2, 'At least 2 chars')
      .required('Name is required')
  })

  const validatePhotoUrl = debounce((value) => {
    if (!value) {
      return ''
    }
    let image = new Image();
    image.src = value;
    return loadImageValidator(image)
      .then(() => {
        image = null
      })
      .catch(() => {
        image = null
        // eslint-disable-next-line no-throw-literal
        throw ('Image url is invalid')
      })
  }, 100)

  const errorMessages = errors => (
    errors.map((error, i) =>
      <div style={{ margin: '10px 0' }} key={i} >
        <ErrorMessage center>{
          error.message.toLowerCase().replace(/_/gi, ' ')
        }</ErrorMessage></div>)
  )


  return (
    <div className={styles.UserInfo}>
      <h4>User info</h4>
      {errors && errorMessages(errors)}
      <Formik
        enableReinitialize
        initialValues={initState}
        validationSchema={userSchema}
        onSubmit={(values, actions) => {
          onSubmit(values, actions)
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isSubmitting,
          isValidating,
          validateForm,
        }) => (
            <Form noValidate>
              {/* values
              <pre>{JSON.stringify(values, '', 4)}</pre>
              <br />
              errors
              <pre>{JSON.stringify(errors, '', 4)}</pre> */}
              <fieldset disabled={isSubmitting}>
                <Input
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label="Name"
                  value={values.displayName}
                  invalid={errors.displayName && touched.displayName}
                  elementConfig={{
                    name: 'displayName',
                    placeholder: 'Your name',
                    type: 'text'
                  }}
                  elementType="input"
                />
                {errors.displayName && touched.displayName &&
                  <ErrorMessage>{errors.displayName}</ErrorMessage>}

                <Input
                  label="Image url"
                  validate={validatePhotoUrl}
                  name="photoUrl"
                  invalid={errors.photoUrl && touched.photoUrl}
                  elementConfig={{
                    name: 'photoUrl',
                    placeholder: 'Your avatar url',
                    type: 'text'
                  }}
                  elementType="inputFormik"
                />
                {errors.photoUrl && touched.photoUrl &&
                  <ErrorMessage>{errors.photoUrl}</ErrorMessage>}

                <div>
                  <Avatar
                    name={values.displayName}
                    url={errors.photoUrl ? null : values.photoUrl}
                  />
                </div>

              </fieldset>
              <Button
                hidden={loading}
                disabled={isSubmitting}
                btnType="submit"
                type="success">
                UPDATE
              </Button>
              <Loader hidden={!loading} />
              <br />
            </Form>
          )}
      </Formik>
    </div>
  )
}

export default UserInfo
