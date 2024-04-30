import { useForm } from 'react-hook-form';
import './styles.css';

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isLoading, errors },
  } = useForm();

  const onFormSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="form-container">
      <h3>Sign Up</h3>
      <form className="form signup-form" onSubmit={handleSubmit(onFormSubmit)}>
        <div className="name-container">
          <div className="input-container">
            <label htmlFor="first-name">First name</label>
            <input type="text" name="first-name" {...register('firstName')} />
          </div>
          <div className="input-container">
            <label htmlFor="last-name">Last name</label>
            <input type="text" name="last-name" {...register('lastName')} />
          </div>
        </div>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            {...register('email')}
            placeholder="Email address"
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            {...register('password')}
            placeholder="Password"
          />
        </div>
        <button type="submit">Create an account</button>
      </form>

      <small>
        By clicking "Create account" above, you acknowledge that you will
        receive updates from the Relume team and that you have read, understood,
        and agreed to Relume Library's <a href="#">Terms & Conditions</a>,{' '}
        <a href="3">Licensing Agreement</a> and <a href="#">Privacy Policy.</a>
      </small>
      <br />
      <br />

      <hr />

      <div className="form-footer">
        <p>Already have an account?</p>
        <button>Log in</button>
      </div>
    </div>
  );
};

export default SignUpForm;
