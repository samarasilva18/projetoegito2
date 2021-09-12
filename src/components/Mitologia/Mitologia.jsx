import React from "react"
import horus from "./myth.jpg"
import './Mitologia.css'

export default function Mitologia() {
    return (
        <div className="container">
            <section id="mitobody">
            <div className="mitoentry">
            <h2>As Contendas de Horus e Seth</h2>
            <img src={horus} alt="Horus vs Seth" className="imamito"/>
            <h2>Sobre o Mito:</h2>
              <div className="texto">  
                "As contendas de Hórus e Seth" é uma história mitológica da Vigésima Dinastia do Egito, encontrada nas primeiras dezesseis páginas do papiro Chester Beatty. A lenda lida com as batalhas entre Horus e Seth para determinar quem será o sucessor de Osiris. <br/>
                Tais conflitos envolveram batalhas tradicionais, competições de barcos de pedra, hipopótamos, alfaces, e outros contos bizarros. Ao final do conto, embora Horus seja nomeado o verdadeiro sucessor, os dois deuses fazem as pazes e podem ser vistos abençoando reis e rainhas juntos em suas futuras representações em tumbas e templos.    
               </div>
            </div>
            <div className="mitoentry">
            <h2>O Peso do Coração</h2>
            <img src="https://64.media.tumblr.com/bd1431590d1f85f2bf1b8690e8e9c4f6/tumblr_nokndr8QPH1r3ys7do1_500.jpg" alt="Anubis e a Balança do Bem e do Mal" className="imamito"/>
            <h2>Sobre o Mito:</h2>
              <div className="texto">  
                No antigo Egito o Livro dos Mortos, um papiro extremamente importante, descreve a visão dos egípcios sobre a vida apos a morte. Nele, o Deus Anubis é encarregado de decidir quem é permitido atravessar para a vida apos a morte, e quem deve ser devorado pela quimera Ammut. <br/>
                O morto tem seu coração pesado na balança do bem e do mal contra uma pena de Maat, a deusa da verdade. Se o coração do defunto for mais pesado que a pena da verdade, graças aos pecados que cometeu em vida, ele não é considerado digno de desfrutar a vida apos a morte.    
               </div>
            </div>
            <div className="mitoentry">
            <h2>Quando a Cerveja salvou o Mundo</h2>
            <img src="https://deusanut.files.wordpress.com/2014/04/2c732-sekhmet2.jpg" alt="Anubis e a Balança do Bem e do Mal" className="imamito"/>
            <h2>Sobre o Mito:</h2>
              <div className="texto">  
                Um dos contos mais famosos da mitologia egípcia trata de quando Rá estava desgostado com a humanidade, e pediu que sua filha Sekhmnet, deusa da guerra, acabasse com todos os humanos. <br/>
                A deusa desceu a terra e espalhou caos e destruição, até que Ra se arrependeu, mas a deusa estava tão obcecada com o sangue dos humanos que ninguém conseguia pará-la. Assim, Rá tingiu cerveja com um pigmento vermelho para que ficasse parecida com sangue e enganou Sekhmet, que bebeu tanto que desmaiou, parando o extermínio da humanidade.
               </div>
            </div>
            </section>
        </div>
    )
}