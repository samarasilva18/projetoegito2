import React from "react"
import ceiling from "./ceiling.jpg"
import './Arte.css'

export default function Arte() {
    return (
        <div className="container">
            <section id="artebody">
                <div className="arteentry">
                    <h2>Teto da câmara do túmulo de Ramsés</h2>
                    <img src={ceiling} alt="Teto do tumulo" className="imateto"/>
                    <div className="texto">
                    Essa bela arte no teto da tumba de Ramsés mostra a deusa da noite Nut erguendo-se sobre a terra, onde trabalhadores seguem com suas vidas.
                    </div>
                </div>
                <div className="arteentry">
                    <h2>Reconstrução de um Templo</h2>
                    <img src="https://64.media.tumblr.com/b08d1157fc4e2bff92275d7a2ee6fd56/tumblr_oheiybcEF51sckv85o1_500.jpg" alt="Corte do Templo" className="imateto"/>
                    <div className="texto">
                    Essa imagem é uma reconstrução da corte de um templo egípcio, feita por Eduard Gaertner com aquarela e alocada no museu de Berlin.
                    </div>
                </div>
                <div className="arteentry">
                    <h2>Representaçao da deusa Bastet</h2>
                    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/38fa65de-b6e4-43f7-9953-72db656e993f/d35c1b1-686f1afb-4492-4c95-8bcb-c1605e07fc3d.jpg/v1/fill/w_900,h_634,q_75,strp/bast_at_work_by_swimmingrat_d35c1b1-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjM0IiwicGF0aCI6IlwvZlwvMzhmYTY1ZGUtYjZlNC00M2Y3LTk5NTMtNzJkYjY1NmU5OTNmXC9kMzVjMWIxLTY4NmYxYWZiLTQ0OTItNGM5NS04YmNiLWMxNjA1ZTA3ZmMzZC5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.auCk9OELSe1gP9VeW0Wqnt2MRO1fvmG2kvL_7u09NGY" alt="Deusa Bast com Deus Atem ao fundo" className="imateto"/>
                    <div className="texto">
                    Uma representação da deusa da família e maternidade Bastet cuidando de uma pantera e seu filhote, com o deus solar de infinitas mãos Atem ao fundo.
                    </div>
                </div>
            </section>
        </div>
    )
}