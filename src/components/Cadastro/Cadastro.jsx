import React from "react"
import './Cadastro.css'
import CadastroHeader from './CadastroHeader.jsx'

export default function Cadastro(props) {
    return (
     <div>
         <CadastroHeader/>
        <div id="container">
            <div class="cadasbody">
            <h2>Cadastre-se para receber notícias sobre descobertas do Egito Antigo!</h2>
            <form>
                <fieldset>
                    <legend>Seus dados:</legend>
                    <div class="input-block">
                        <label for="name">Nome Completo:</label>
                        <input name="name" id="name" required/>
                    </div>

                    <div class="input-block">
                        <label for="email">E-mail:</label>
                        <input name="email" id="email" required/>
                    </div>

                    <div class="input-block">
                        <label for="whatsapp">Telefone: </label>
                        <input name="whatsapp" id="whatsapp" type="number" required/>
                    </div>
                    <div className="insira">Insira também seus dados postais para receber nossa revista!</div>
                    <div class="input-block">
                        <label for="address">Endereço: <small>*(Opcional):</small></label>
                        <input name="address" id="address"/>
                    </div>
                    <div class="input-blocktel">
                        <label for="rg">RG: <small>*(Opcional):</small></label>
                        <input name="rg" id="rg" type="number" className="input1"/>
                        <label for="cep">CEP: <small>*(Opcional):</small></label>
                        <input name="cep" id="cep" type="number" className="input2"/>
                    </div>
                    <button type="submit">Salvar Cadastro</button>
                </fieldset>
            </form>
            </div>
    </div>

    </div>
    )
}