import EnvioImg from '../assets/BannerEnvio.png'


function Envio() {
    return(
        <img className="
            border-t
            border-b
            pt-1
            w-full
            relative
            z-20" 
            src={EnvioImg} alt="Envío gratis" />
    )
}

export default Envio