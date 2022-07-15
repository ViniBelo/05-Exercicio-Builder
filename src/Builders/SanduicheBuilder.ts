import Bread from "../Components/Bread";
import Protein from "../Components/Protein";
import Salad from "../Components/Salad";
import SanduicheType from "../Components/SanduicheType";
import Sauce from "../Components/Sauce";
import Sanduiche from "../Products/Sanduiche";
import IBuilder from "./Interface/IBuilder";

export default class SanduicheBuilder implements IBuilder{
    private sanduiche = new Sanduiche()

    reset(): void {
        this.sanduiche = new Sanduiche()
    }
    getSanduiche(): Sanduiche {
        return this.sanduiche
    }
    setSanduicheType(value: SanduicheType) {
        this.sanduiche.sanduicheType = value
    }
    setBread(bread: Bread) {
        this.sanduiche.bread = bread
    }
    setProtein(protein: Protein) {
        this.sanduiche.protein = protein
    }
    setSalad(salad: Salad) {
        this.sanduiche.salad = salad
    }
    addSauces(sauce: Sauce) {
        this.sanduiche.addSauce(sauce)
    }
}