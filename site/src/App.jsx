import './App.css'

const aulas = [
  { numero: '01', titulo: 'Introdução aos fundamentos do design gráfico e da comunicação visual', ativa: true },
  { numero: '02', titulo: 'História e evolução do design', ativa: true },
  { numero: '03', titulo: 'Elementos da linguagem visual', ativa: false },
  { numero: '04', titulo: 'Princípios da linguagem visual', ativa: false },
  { numero: '05', titulo: 'Teoria das cores', ativa: false },
  { numero: '06', titulo: 'Tipografia — classificação e anatomia', ativa: false },
  { numero: '07', titulo: 'Tipografia — hierarquia e legibilidade', ativa: false },
  { numero: '08', titulo: 'Composição e grid', ativa: false },
  { numero: '09', titulo: 'Percepção visual e Gestalt', ativa: false },
  { numero: '10', titulo: 'Processos criativos', ativa: false },
  { numero: '11', titulo: 'Desenvolvimento de projetos gráficos', ativa: false },
  { numero: '12', titulo: 'Relação entre forma, função e comunicação', ativa: false },
  { numero: '13', titulo: 'Técnicas de representação visual', ativa: false },
  { numero: '14', titulo: 'Elaboração de layouts', ativa: false },
  { numero: '15', titulo: 'Introdução à identidade visual', ativa: false },
  { numero: '16', titulo: 'Design editorial', ativa: false },
  { numero: '17', titulo: 'Noções de produção gráfica', ativa: false },
  { numero: '18', titulo: 'Mídias digitais', ativa: false },
  { numero: '19', titulo: 'Aplicação de softwares gráficos básicos', ativa: false },
  { numero: '20', titulo: 'Ética, acessibilidade e sustentabilidade no design', ativa: false },
  { numero: '21', titulo: 'Projeto prático final', ativa: false },
]

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Fundamentos do Design Gráfico</h1>
        <p className="professor">Professor Pedro Sacramento</p>
      </header>

      <ul className="aulas">
        {aulas.map((aula) => (
          <li key={aula.numero} className={aula.ativa ? 'aula ativa' : 'aula'}>
            <span className="aula-numero">Aula {aula.numero}</span>
            <span className="aula-titulo">{aula.titulo}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
