import styles from './index.module.css'

function Home() {
  return (
    <div className={styles.container}>
      <h1>Júlia Hobert</h1>
      <h3>Esses são alguns dos motivos pelos quais eu te amo tanto</h3>

      <ol className={styles.list}>
        <li>A tua risada é a melhor música que eu já ouvi na minha vida</li>
        <li>O teu sorriso é como o primeiro raio de sol em um dia de verão</li>
        <li>Os teus braços me rendem e me fazem querer morar no teu abraço</li>
        <li>O jeito como tu me olhas sempre me lembra do quanto eu sou amado</li>
        <li>A tua personalidade é radiante e a tua alegria e leveza me contagiam</li>
        <li>Tu és a melhor amiga que eu já tive e com quem posso dividir meus segredos</li>
        <li>O teu jeito de pensar me faz enxergar o mundo com outros olhos</li>
        <li>Tu és o amor da minha vida</li>
      </ol>

      <span>Do seu grande amor, Lucas 💛</span>
    </div>
  )
}

export default Home