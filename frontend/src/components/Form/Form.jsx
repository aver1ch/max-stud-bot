import "./Form.css";

const FormField = ({ label, id, type = "text", value, onChange, children }) => {
  return (
    <div className="form-field">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      {children ? (
        children
      ) : (
        <input
          type={type}
          id={id}
          className="input-register"
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default FormField;
