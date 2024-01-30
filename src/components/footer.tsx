import ExtLink from './ext-link'
import Paper from './svgs/paper'

export default function Footer() {
  return (
    <>
      <footer>
        <div className="box-footer">
          <span>VAMOS CONSTRUIR ALGO JUNTOS?</span>
          <p>
            Se você tem algum projeto em mente, sinta-se à vontade para me
            enviar uma mensagem.
          </p>

          <button>
            Fale comigo <Paper />
          </button>

          <br />
        </div>
      </footer>
    </>
  )
}
