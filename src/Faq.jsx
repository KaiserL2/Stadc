import React from 'react'
import { useState } from 'react'

function Faq() {

const [elementoAttivo, setElementoAttivo] = useState(null)

let animation = [
{
domanda: "Quante mele avete fatto in 3 decadeni?",
id: 1,
risposta: "La chiesa di san giorgio ha dato fuoco alla nostra città senza preavviso e quindi ha deciso di far esplodere l'intera umanità"
},
{
domanda: "Quante collab avete fatto con la chiesa?",
id: 2,
risposta: "Abbiamo fatto circa sulle 80 collab con la chiesa pagana e 90 con quella cristiana. Ci manca solo da masterizzare la chiesa mussulmana che sembra la sfida più difficile "
},
{
domanda: "Quante arance avete venduto?",
id: 3,
risposta: "Ti bombardiamo casa il prima possibile e se c'è la facciamo distruggiamo tutta New York City"
},]

let selezionaElemento = (id) => {
setElementoAttivo(id === elementoAttivo ? null : id)
}

return (
<div className='text-white py-36 px-40' id='faq'>
<h1 className='text-center text-5xl font-bold mb-16'>Domande Frequenti Fatte Normalmente</h1>

  {
    animation.map((elemento) => {
      return (
        <div key={elemento.id} className='flex flex-col'>

          <div className='text-3xl font-semibold mb-10'>Domanda N.{elemento.id}</div>

          <div className='flex flex-row justify-between items-center'>

            <p>{elemento.domanda}</p>
            <button className='bg-white' onClick={() => selezionaElemento(elemento.id)}>Click</button>

          </div>

          <div className='py-12'>

            {
              elemento.id === elementoAttivo && <div>{elemento.risposta}</div>
            }

          </div>


        </div>
      )
    })
  }
</div>
)
}

export default Faq