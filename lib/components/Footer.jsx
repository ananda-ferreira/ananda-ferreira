
export default function Footer() {
  return (
      <footer>
          <p>&copy; <span className="number">{new Date().getFullYear().toString()}</span> Ananda Ferreira. All rights reserved.</p>
          <a className="photolink" href="/"> 
            <p>photography</p> 
            <p>→</p>
          </a>
      </footer>
  )
}
