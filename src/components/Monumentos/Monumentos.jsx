import React from "react"
import curvada from "./curva.jpg"
import './Monumentos.css'

export default function Monumentos() {
    return (
        <div className="container">
            <section id="monubody">
            <div className="monuentry">
            <h2>A Pirâmide Curvada</h2>
            <img src={curvada} alt="Piramide Curvada" className="imacurva"/>
            <h2>Sobre o Monumento:</h2>
                Antes que as belas e perfeitas pirâmides de Giza fossem construídas, houveram muitas tentativas e erros. <br/>
                Essa pirâmide foi concluída as pressas, e seu formato curioso se deve ao fato de os arquitetos perceberem que construíram a base pequena demais, tendo que mudar o ângulo da pirâmide para que a coisa toda não desabasse.
            </div>
            <div className="monuentry">
            <h2>A Grande Esfinge</h2>
            <img src="https://64.media.tumblr.com/1eebef65e226905229ea7c7404b30563/tumblr_oesnkwiSqK1rnq4hdo1_500.jpg" alt="Esfinge" className="imacurva"/>
            <h2>Sobre o Monumento:</h2>
                A Grande Esfinge, embora poucos saibam, é na verdade muito mais antiga que as grandes piramides de Giza. <br/>
                Ela é a fonte de muitos mitos e comumente usada em historias que tratem de charadas ou desafios mentais. Presume-se que seu nariz foi destruido quando soldados europeus durante a segunda guerra mundial usaram o monumento como alvo para tiros.
            </div>
            <div className="monuentry">
            <h2>A Cidade Submersa de Herakleion</h2>
            <img src="https://64.media.tumblr.com/80959a8db5f9edd7baa71e33001c58f7/tumblr_nqamj28esz1rvjth8o9_640.jpg" alt="Estatua Submersa" className="imacurva"/>
            <img src="https://64.media.tumblr.com/921866d24244a10ea1874049b48f39b6/tumblr_nqamj28esz1rvjth8o3_640.jpg" alt="Estatua Submersa" className="imacurva"/>
            <img src="https://64.media.tumblr.com/e2ce1a9f0a7a261c5fee3eb2f95227b7/tumblr_nqamj28esz1rvjth8o1_640.jpg" alt="Estatua Submersa" className="imacurva"/>
            <h2>Sobre o Monumento:</h2>
                Herakleion foi o principal porto do Antigo Egito na época dos faraós. Estima-se que a cidade nasceu em meados do século 12 antes de Cristo. <br/>
                Antes de uma descoberta massiva que confirmou sua existência, ela era apenas mencionada em lendas Gregas e alguns livros de história da Antiguidade. A cidade foi submergida durante um grande terremoto que ocorreu mais de 1.000 anos atrás.
            </div>
            </section>
        </div>
    )
}