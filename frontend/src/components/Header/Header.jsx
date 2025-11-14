import { Link } from "react-router-dom";

import "./Header.css";

function Header() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  if (!user) {
    return <p>Загрузка данных...</p>;
  }

  const parts = user.fullName.split(" ");
  return (
    <header>
      <div className="header-container">
        <Link to="/account" className="header-profile">
          <span>
            <img
              src="./profilelogo.svg"
              alt="logo"
              className="header-profile-logo"
            />
          </span>
          {parts[0]}
        </Link>
        <img src="./notify2.svg" alt="notify" className="header-notify" />
      </div>
    </header>
  );
}

export default Header;
