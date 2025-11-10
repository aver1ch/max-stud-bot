import "./Register.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cities, universitiesByCity } from "../../data";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";

function Register() {
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedUniversity, setSelectedUniversity] = useState("");
  const [selectedPosition, setSelectedPosition] = useState(""); // TODO: добавить по галочке "Я сотрудник" возможность ввода код-пароля

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    setSelectedUniversity("");
  };

  const currentUniversities = selectedCity
    ? universitiesByCity[selectedCity]
    : [];

  const handlePositionChange = (e) => {
    setSelectedPosition(e.target.value);
    setSelectedPosition("");
  };

  return (
    <main>
      <div className="container colored">
        <div className="select-wrapper">
          <Form label="Город" id="city">
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
          </Form>

          <Form label="ВУЗ" id="university">
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
          </Form>

          <Form label="ФИО" id="username-register" />
          <Form label="Логин" id="username-register-login" />
          <Form
            label="Пароль"
            id="username-register-password"
            type="password"
          />
          <Form
            label="Повторите пароль"
            id="username-register-password-repeat"
            type="password"
          />

          <div className="radio-wrapper">
            <label className="radio-item">
              <input
                type="radio"
                name="role"
                value="employee"
                className="radio-input"
                onChange={handlePositionChange}
              />
              Я сотрудник
            </label>
          </div>

          <Button
            text="Зарегистрироваться"
            onClick={() => navigate("/mainpage")}
          />
        </div>
      </div>
    </main>
  );
}

export default Register;
