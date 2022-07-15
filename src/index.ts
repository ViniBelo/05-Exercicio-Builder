import { BuilderProgram } from "typescript";
import SanduicheBuilder from "./Builders/SanduicheBuilder";
import Director from "./Director/Director";
import Sanduiche from "./Products/Sanduiche";

const builder: SanduicheBuilder = new SanduicheBuilder()
const diretor: Director = new Director(builder)

diretor.constructHotDog()
let hotdog: Sanduiche = builder.getSanduiche()
console.log('\nCriando um sanduiche do tipo: ' + hotdog.sanduicheType)
console.log('Pão: ' + hotdog.bread)
console.log('Proteína: ' + hotdog.protein)
console.log('Molhos:')
for (let i = 0; i < hotdog.saucesTotal; i++){
    console.log(hotdog.sauce[i])
}

builder.reset()

diretor.constructXSalada()
let xsalada: Sanduiche = builder.getSanduiche()
console.log('\nCriando um sanduiche do tipo: ' + xsalada.sanduicheType)
console.log('Pão: ' + xsalada.bread)
console.log('Proteína: ' + xsalada.protein)
console.log('Salada: ' + xsalada.salad)
console.log('Molhos:')
for (let i = 0; i < xsalada.saucesTotal; i++){
    console.log(xsalada.sauce[i])
}
