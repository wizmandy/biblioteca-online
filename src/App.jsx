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
      sinopse: "Eu e Esse Meu Coração, da autora C.C. Hunter, é um romance jovem adulto emocionante. A história acompanha Leah MacKenzie, 17 anos, que sobrevive com um coração artificial em uma mochila e aguarda um transplante raro. Após receber o órgão, ela se envolve com o irmão do doador, investigando juntos as misteriosas circunstâncias de sua morte.",
      nota: 4.7,
      categoria: "Drama"
    },
    {
      titulo: "Apostando No Amor",
      autor: "Lynn Painter",
      capa: "https://m.media-amazon.com/images/I/61qs2JCP4NL._AC_UF1000,1000_QL80_.jpg",
      sinopse: "Apostando no Amor, de Lynn Painter, é uma comédia romântica juvenil focada em Bailey Mitchell e Charlie Sampson. Após se conhecerem no aeroporto devido ao divórcio dos pais, eles se reencontram anos depois como colegas de trabalho. Com tropos de enemies to lovers (inimigos para amantes) e fake dating (namoro falso), eles fingem um relacionamento enquanto Bailey tenta lidar com a nova vida da mãe, gerando conflitos e atração mútua.",
      nota: 4.8,
      categoria: "Romance"
    },
    {
      titulo: "Binding 13",
      autor: "Chloe Walsh",
      capa: "https://m.media-amazon.com/images/I/81qgQ2eFh3L._AC_UF1000,1000_QL80_.jpg",
      sinopse: "Binding 13, de Chloe Walsh, é o primeiro volume da série Boys of Tommen, um romance new adult ambientado na Irlanda. A história acompanha Shannon Lynch, uma adolescente de 15 anos que, fugindo de bullying severo, muda-se para o Colégio Tommen, onde conhece Johnny Kavanagh, astro do rugby local.",
      nota: 4.7,
      categoria: "Drama"
    },
    {
      titulo: "É Assim Que Acaba",
      autor: "Colleen Hoover",
      capa: "https://m.media-amazon.com/images/I/91r5G8RxqfL.jpg",
      sinopse: "É Assim que Acaba acompanha a jornada de Lily Bloom, uma mulher que supera uma infância traumática e se muda para Boston para realizar o sonho de abrir sua própria floricultura. Ela se apaixona pelo charmoso neurocirurgião Ryle Kincaid, mas o relacionamento rapidamente se torna abusivo e violento. Quando seu primeiro amor, Atlas Corrigan, reaparece, Lily encontra forças para romper o ciclo de violência, proteger sua filha e escolher um novo futuro.",
      nota: 4.8,
      categoria: "Drama"
    },
    {
      titulo: "É Assim Que Começa",
      autor: "Colleen Hoover",
      capa: "https://m.media-amazon.com/images/I/81Izv2GRWoL.jpg",
      sinopse: "É Assim que Começa (It Starts with Us), de Colleen Hoover, é a continuação direta de É Assim que Acaba, focando na vida de Lily após o divórcio de Ryle. A história aborda a busca de Lily por um recomeço amoroso com seu primeiro amor, Atlas Corrigan, enquanto lida com a guarda compartilhada de sua filha, Emerson, e a persistente agressividade e ciúme de seu ex-marido, Ryle.",
      nota: 4.8,
      categoria: "Drama"
    },
    {
      titulo: "Amor & Gelato",
      autor: "Jenna Evans Welch",
      capa: "https://m.media-amazon.com/images/I/81EE1CAUoEL.jpg",
      sinopse: "Amor e Gelato é um romance jovem adulto de Jenna Evans Welch que acompanha Lina, uma adolescente de 16 anos que viaja para a Itália para cumprir o último desejo de sua mãe falecida: conhecer seu pai biológico. Em Florença, ela descobre segredos sobre o passado da mãe, lida com o luto e vive um romance.",
      nota: 4.7,
      categoria: "Romance"
    },
    {
      titulo: "Amor & Sorte",
      autor: "Jenna Evans Welch",
      capa: "https://m.media-amazon.com/images/I/817IADbPtxL.jpg",
      sinopse: "Amor & Sorte, de Jenna Evans Welch, é um romance juvenil de viagem que acompanha Addie Bennett em uma jornada de cura e autodescoberta pela Irlanda. Após um término traumático, ela embarca em uma road trip com o irmão Ian e um guia misterioso, Rowan, buscando superar desilusões amorosas enquanto atravessa paisagens deslumbrantes.",
      nota: 4.6,
      categoria: "Romance"
    },
    {
      titulo: "Amor & Azeitonas",
      autor: "Jenna Evans Welch",
      capa: "https://m.media-amazon.com/images/I/91dmssvKHpL.jpg",
      sinopse: "Amor & Azeitonas, de Jenna Evans Welch, é um romance jovem adulto situado em Santorini, Grécia. A história acompanha Liv, que viaja para ajudar seu pai ausente a filmar um documentário sobre Atlântida, lidando com traumas passados, um novo romance e descobertas sobre sua família em um cenário paradisíaco.",
      nota: 4.7,
      categoria: "Romance"
    },
    {
      titulo: "A Razão Do Amor",
      autor: "Ali Hazelwood",
      capa: "https://m.media-amazon.com/images/I/81bkmJnflPL._AC_UF1000,1000_QL80_.jpg",
      sinopse: "A Razão do Amor (Ali Hazelwood) é um romance enemies to lovers ambientado no meio acadêmico, onde a neurocientista Bee Königswasser recebe a chance de liderar um projeto na NASA, mas precisa dividir a função com seu maior rival de doutorado, Levi Ward. A história segue Bee, com cabelo roxo e estilo peculiar, enquanto ela lida com traumas passados, traição no amor e a tensão romântica com Levi.",
      nota: 4.7,
      categoria: "Romance"
    },
    {
      titulo: "Até O Verão Terminar",
      autor: "Colleen Hoover",
      capa: "https://m.media-amazon.com/images/I/81u8c5lziEL.jpg",
      sinopse: "Até o Verão Terminar (Heart Bones), de Colleen Hoover, acompanha Beyah Grim, uma jovem de origem humilde e vida difícil que, após a morte da mãe viciada, precisa passar o verão na casa de seu pai ausente. Na península, ela conhece Samson, um rapaz misterioso com quem vive um intenso romance, enquanto enfrenta segredos, traumas e aprende a recomeçar antes da faculdade.",
      nota: 4.7,
      categoria: "Drama"
    },
    {
      titulo: "Melhor Do Que Nos Filmes",
      autor: "Lynn Painter",
      capa: "https://m.media-amazon.com/images/I/71qW9OdPhKL._UF1000,1000_QL80_.jpg",
      sinopse: "Melhor do que nos Filmes, de Lynn Painter, é uma comédia romântica juvenil focada em Liz Buxbaum, uma romântica incurável que, no último ano do ensino médio, tenta conquistar sua paixão de infância com a ajuda de seu vizinho irritante, Wes. O livro é popular no TikTok por ser leve, divertido e repleto de referências a filmes.",
      nota: 4.8,
      categoria: "Romance"
    },
    {
      titulo: "Wes E Liz Na Festa",
      autor: "Lynn Painter",
      capa: "https://m.media-amazon.com/images/I/71hLZDZD0nL._UF1000,1000_QL80_.jpg",
      sinopse: "Wes e Liz na Festa é um conto extra de Melhor do que nos Filmes de Lynn Painter, narrado sob a perspectiva de Wes Bennett. Ele foca em uma festa onde Liz tenta impressionar Michael Young, e Wes, adorando provocar, espera que ela se divirta com ele e seus amigos, provando que as suposições da vizinha implicante estavam erradas.",
      nota: 4.8,
      categoria: "Romance"
    },
    {
      titulo: "Melhor Do Que O Baile",
      autor: "Lynn Painter",
      capa: "https://m.media-amazon.com/images/I/71MiTQey5HL._UF1000,1000_QL80_.jpg",
      sinopse: "Melhor do que o Baile é um conto extra gratuito da autora Lynn Painter, ambientado no universo de Melhor do que nos Filmes. A história revisita a cena do baile de formatura sob a perspectiva de Wesley Bennett, mostrando seus pensamentos e sentimentos por Elizabeth Buxbaum enquanto ela está com outro.",
      nota: 4.8,
      categoria: "Romance"
    },
    {
      titulo: "Wes E Liz Na Estrada",
      autor: "Lynn Painter",
      capa: "https://m.media-amazon.com/images/I/71hrKctlXPL._UF1000,1000_QL80_.jpg",
      sinopse: "Wes e Liz na Estrada é um conto extra da autora Lynn Painter, parte do universo de Melhor do que nos Filmes, que acompanha o casal em uma viagem de carro rumo à Universidade da Califórnia. Durante a jornada, eles criam uma trilha sonora, resgatam um gatinho e fortalecem o romance.",
      nota: 4.8,
      categoria: "Romance"
    },
    {
      titulo: "Beijos E Croissants",
      autor: "Anne-Sophie Jouhanneau",
      capa: "https://m.media-amazon.com/images/I/71FSwSQ-EGL.jpg",
      sinopse: "Beijos e Croissants, de Anne-Sophie Jouhanneau, é um romance jovem adulto leve ambientado em Paris. A história acompanha Mia, uma bailarina americana de 16 anos que busca realizar seu sonho em um renomado programa de verão, mas acaba vivendo um intenso romance de verão com um parisiense charmoso.",
      nota: 4.7,
      categoria: "Romance"
    },
    {
      titulo: "Não É Como Nos Filmes",
      autor: "Lynn Painter",
      capa: "https://m.media-amazon.com/images/I/71KrPChpFXL.jpg",
      sinopse: "Não é como nos Filmes (Lynn Painter) é a aguardada continuação de Melhor do que nos Filmes, focada na fase universitária de Liz e Wes. Após um término doloroso causado por uma reviravolta na vida de Wes, o livro narra a tentativa dele de reconquistar Liz, agora madura e com novo namorado, em um romance cheio de referências à Taylor Swift.",
      nota: 4.8,
      categoria: "Romance"
    },
    {
      titulo: "Amor, Teoricamente",
      autor: "Ali Hazelwood",
      capa: "https://m.media-amazon.com/images/I/81mBAOFbqKL._UF1000,1000_QL80_.jpg",
      sinopse: "Amor, Teoricamente, de Ali Hazelwood, acompanha Elsie Hannaway, uma física teórica que trabalha como professora adjunta e namorada falsa para sobreviver. Quando seu emprego dos sonhos é ameaçado por Jack Smith, um físico rival que é irmão de um de seus clientes, ela precisa lidar com a tensão entre a carreira e uma paixão inesperada.",
      nota: 4.8,
      categoria: "Romance"
    },
    {
      titulo: "Nem Todo Outono É Igual",
      autor: "Misty Wilson",
      capa: "https://m.media-amazon.com/images/I/81ZW782W1VL.jpg",
      sinopse: "Nem Todo Outono é Igual, de Misty Wilson, é uma comédia romântica jovem adulta sobre Ellis, que precisa se mudar para uma cidade pequena após o divórcio dos pais. Em Bramble Falls, ela reencontra Cooper, seu amor de verão, e redescobre paixões, moda e segundas chances, provando que mudanças inesperadas podem trazer felicidade.",
      nota: 4.7,
      categoria: "Romance"
    },
    {
      titulo: "Minha Melhor Parte",
      autor: "Hannah Bonam-Young",
      capa: "https://m.media-amazon.com/images/I/81A7dIAnhhL.jpg",
      sinopse: "Minha Melhor Parte, de Hannah Bonam-Young, é um romance contemporâneo que narra a história de Winnifred (Win) McNutty e Bo, dois protagonistas PCDs que engravidam após uma única noite intensa no Halloween. O livro foca na conexão entre eles, amadurecimento, superação de traumas e a construção de um amor inusitado, abordando os desafios da vida adulta com humor e leveza.",
      nota: 4.7,
      categoria: "Romance"
    },
    {
      titulo: "Sapatilhas De Gelo",
      autor: "Babi A. Sette",
      capa: "https://m.media-amazon.com/images/I/81ywVJPVbXL.jpg",
      sinopse: "Sapatilhas de Gelo, de Babi A. Sette, é um romance contemporâneo (+18) sobre Natalie, uma bailarina que foge de um passado conturbado em Londres para recomeçar em Toronto. Lá, ela precisa lidar com a carreira estagnada e um hóqueiista mulherengo com quem divide apartamento, vivendo uma história de enemies to lovers (inimigos que se apaixonam).",
      nota: 4.8,
      categoria: "Romance"
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