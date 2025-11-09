import "../App.css";
import { useState } from "react";
import { cities, universitiesByCity } from "../data";

function Register() {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedUniversity, setSelectedUniversity] = useState("");

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    setSelectedUniversity("");
  };

  const currentUniversities = selectedCity
    ? universitiesByCity[selectedCity]
    : [];

  return (
    <main>
      <div className="container">
        <div className="select-wrapper">
          <label htmlFor="city" className="register-labels">
            Город:
          </label>
          <select
            name="city"
            id="city"
            className="select-main"
            value={selectedCity}
            onChange={handleCityChange}
          >
            <option value="" disabled hidden>
              Выберите город
            </option>
            {cities.map((city) => (
              <option key={city.value} value={city.value}>
                {city.label}
              </option>
            ))}
          </select>

          <label htmlFor="university" className="register-labels">
            ВУЗ:
          </label>
          <select
            name="university"
            id="university"
            className="select-main"
            value={selectedUniversity}
            onChange={(e) => setSelectedUniversity(e.target.value)}
            disabled={!selectedCity}
          >
            <option value="" disabled hidden>
              {selectedCity ? "Выберите ВУЗ" : "Сначала выберите город"}
            </option>
            {currentUniversities.map((uni) => (
              <option key={uni.value} value={uni.value}>
                {uni.label}
              </option>
            ))}
          </select>

          {/* Остальные поля формы */}
          <label htmlFor="username-register" className="register-labels">
            ФИО:
          </label>
          <input
            type="text"
            id="username-register"
            className="input-register"
          />

          <label htmlFor="username-register-login" className="register-labels">
            Логин:
          </label>
          <input
            type="text"
            id="username-register-login"
            className="input-register"
          />

          <label
            htmlFor="username-register-password"
            className="register-labels"
          >
            Пароль:
          </label>
          <input
            type="password"
            id="username-register-password"
            className="input-register"
          />

          <label
            htmlFor="username-register-password-repeat"
            className="register-labels"
          >
            Повторите пароль:
          </label>
          <input
            type="password"
            id="username-register-password-repeat"
            className="input-register"
          />

          <div className="radio-wrapper">
            <label className="radio-item">
              <input
                type="radio"
                name="role"
                value="employee"
                className="radio-input"
              />
              Сотрудник
            </label>
            <label className="radio-item">
              <input
                type="radio"
                name="role"
                value="student"
                className="radio-input"
              />
              Студент
            </label>
          </div>

          <button className="reg-button">Зарегистрироваться</button>
        </div>
      </div>
    </main>
  );
}

export default Register;
