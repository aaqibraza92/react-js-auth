import { useTheme } from "../auth/ThemeContext";

const Home = () => {
    const { theme, toggleTheme } = useTheme();
    return (<section>
       <div style={{ background: theme === "light" ? "red" : "#333", color: theme === "light" ? "#000" : "#fff", padding: "20px" }}>
      <h2>Current Theme: {theme}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
    </section>)
}
export default Home