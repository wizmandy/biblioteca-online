import "./App.css";
import { useState } from "react";

function App() {
  const [livroAberto, setLivroAberto] = useState(null);
  const [pesquisa, setPesquisa] = useState("");
  const [favoritos, setFavoritos] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [categoria, setCategoria] = useState("Todos");

  const livros = [
    {
      titulo: "Eu E Esse Meu Coração",
      autor: "C. C. Hunter",
      capa: "https://m.media-amazon.com/images/I/81w-GCfqtjL._AC_UF1000,1000_QL80_.jpg",
      sinopse: "Leah sofre de uma doença cardíaca e vê sua vida mudar ao conhecer Matt. Entre romance e desafios, ela precisa lidar com escolhas difíceis.",
      nota: 4
    },
    {
      titulo: "Apostando No Amor",
      autor: "Lynn Painter",
      capa: "https://m.media-amazon.com/images/I/61qs2JCP4NL._AC_UF1000,1000_QL80_.jpg",
      sinopse: "Bailey faz uma aposta envolvendo o garoto por quem sempre teve uma queda, mas tudo sai do controle e sentimentos reais aparecem.",
      nota: 5
    },
    {
      titulo: "Binding 13",
      autor: "Chloe Walsh",
      capa: "https://m.media-amazon.com/images/I/81qgQ2eFh3L._AC_UF1000,1000_QL80_.jpg",
      sinopse: "Johnny é uma estrela do rugby e Shannon tenta fugir de problemas do passado. Os dois criam uma conexão intensa.",
      nota: 5
    }
  ];

  function toggleFavorito(titulo) {
    if (favoritos.includes(titulo)) {
      setFavoritos(favoritos.filter((f) => f !== titulo));
    } else {
      setFavoritos([...favoritos, titulo]);
    }
  }

  const livrosFiltrados = livros
    .filter((livro) =>
      livro.titulo.toLowerCase().includes(pesquisa.toLowerCase())
    )
    .filter((livro) =>
      categoria === "Todos" ? true : livro.categoria === categoria
    );

    return (
      <div className={darkMode ? "dark" : ""}>

        <div className="navbar">
          <h2>📚 Biblioteca</h2>

          <div className="menu">
            <button onClick={() => setCategoria("Todos")}>Todos</button>
            <button onClick={() => setCategoria("Romance")}>Romance</button>
            <button onClick={() => setCategoria("Drama")}>Drama</button>
          </div>

          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        <div className="hero">
          <h1>Biblioteca Online 📚</h1>
        </div>

        <input
          type="text"
          placeholder="Pesquisar livro..."
          value={pesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
        />

        <div className="livros">
          {livrosFiltrados.map((livro, index) => (
            <div className="card" key={index}>

              <img src={livro.capa} alt={livro.titulo} />

              <h2>{livro.titulo}</h2>
              <p>{livro.autor}</p>

              <p className="estrelas">
                {"⭐".repeat(livro.nota)}
              </p>

              <button
                className="fav"
                onClick={() => toggleFavorito(livro.titulo)}
              >
                {favoritos.includes(livro.titulo) ? "❤️" : "🤍"}
              </button>

              <button
                className="ler"
                onClick={() =>
                  setLivroAberto(livroAberto === index ? null : index)
                }
              >
                Ler mais
              </button>

              {livroAberto === index && (
                <div className="modal">
                  <p>{livro.sinopse}</p>
                </div> 
              )}

            </div>
          ))}
        </div>
      </div>
    );
  }

export default App;