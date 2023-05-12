import { useState } from "react";
import AuthorizationForm from "./AuthorizationForm.js";

const Register = ({ onRegister }) => {
  const [registrationValues, setRegistrationValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setRegistrationValues({
      ...registrationValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onRegister(registrationValues);
  };

  return (
    <div className="authorization">
      <AuthorizationForm
        name={"login"}
        title={"Регистрация"}
        buttonName={"Зарегистрироваться"}
        onSubmit={handleSubmit}
        register
      >
        <input
          id="email"
          required
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="email"
          minLength="2"
          maxLength="40"
          className="authorization__input"
          value={registrationValues.email}
          onChange={handleChange}
        />
        <span className="popup__warning-text" id="email-warning-text"></span>
        <input
          id="password"
          required
          type="password"
          name="password"
          placeholder="Пароль"
          autoComplete="password"
          minLength="6"
          maxLength="20"
          className="authorization__input"
          value={registrationValues.password}
          onChange={handleChange}
        />
        <span className="popup__warning-text" id="password-warning-text"></span>
      </AuthorizationForm>
    </div>
  );
};

export default Register;
