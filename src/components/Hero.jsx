import { logo } from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
        <nav className="flex justify-between items-center w-full mb-10 pt-3">
            <img src={logo} alt="resm_logo"/>
            <p className="title_text">ResmAI</p>
            <button
            type="button"
            onClick={() => window.open('https://github.com/ManuelP22')}
            className="black_btn"
            >
                GitHub
            </button>
        </nav>

        <h1 className="head_text">
            Resumir Articulos con <br className="max-md:hidden"/>
            <span className='orange_gradient'>OpenAI GPT-4</span>
        </h1>
        
        <h2 className="desc">
            Simplifica tus lecturas con <span className="orange_gradient">ResmAI</span>,
            un open-source convertor de articulos que transforma largos
            articulos en claros y concisos resumenes.
        </h2>
    </header>
  )
}

export default Hero