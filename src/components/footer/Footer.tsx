import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <nav aria-label="Contact">
        <a href="https://github.com/mosesJG" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="mailto:Mo943393@ucf.edu">Email</a>
      </nav>
      <p>© {year} Moses Jean-Gilles</p>
    </footer>
  )
}

export default Footer