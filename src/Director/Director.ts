import IBuilder from "../Builders/Interface/IBuilder";
import Bread from "../Components/Bread";
import Protein from "../Components/Protein";
import Salad from "../Components/Salad";
import SanduicheType from "../Components/SanduicheType";
import Sauce from "../Components/Sauce";

export default class Director{
    constructor(private builder: IBuilder){}

    constructHotDog(){
        this.builder.setSanduicheType(SanduicheType.HOTDOG)
        this.builder.setBread(Bread.TRADICIONAL)
        this.builder.setProtein(Protein.SALSICHA)
        this.builder.addSauces(new Sauce('Tradicional'))
        this.builder.addSauces(new Sauce('Maionese'))
        this.builder.addSauces(new Sauce('Mostarda'))
    }

    constructXSalada(){
        this.builder.setSanduicheType(SanduicheType.XSALADA)
        this.builder.setBread(Bread.QUATROQUEIJOS)
        this.builder.setProtein(Protein.ANGUS)
        this.builder.setSalad(Salad.ALFACE)
        this.builder.addSauces(new Sauce('Barbecue'))
    }
}