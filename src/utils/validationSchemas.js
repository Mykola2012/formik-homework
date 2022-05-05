import * as yup from 'yup';

export const USER_REGISTRATION_VALIDATION_SCHEMA = yup.object({
  firstName: yup
    .string()
    .min(2)
    .max(40)
    .matches(/^(?=.*[a-z].*)[\w \d]*$/, 'Name must contain at least 1 letter')
    .required('Required'),
  lastName: yup
    .string()
    .min(2)
    .max(40)
    .matches(/^(?=.*[a-z].*)[\w \d]*$/, 'Name must contain at least 1 letter')
    .required('Required'),
  displayName: yup
    .string()
    .min(2)
    .max(40)
    .matches(/^(?=.*[a-z].*)[\w \d]*$/, 'Name must contain at least 1 letter')
    .required('Required'),
  emailAddress: yup
    .string()
    .email('Invalid email format')
    .required('Required'),
  password: yup
    .string()
    .required('Please Enter your password')
    .matches(
      '^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$',
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
    ),
  passwordConfirmation: yup
    .string()
    .required()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
  statusUser: yup.string().required('A radio option is required'),
});
