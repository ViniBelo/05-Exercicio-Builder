import Bread from "../../Components/Bread"
import Protein from "../../Components/Protein"
import Salad from "../../Components/Salad"
import SanduicheType from "../../Components/SanduicheType"
import Sauce from "../../Components/Sauce"
import Sanduiche from "../../Products/Sanduiche"

export default interface IBuilder{
    reset()
    getSanduiche(): Sanduiche
    setSanduicheType(SanduicheType)
    setBread(Bread)
    setProtein(Protein)
    setSalad(Salad)
    addSauces(Sauce)
}