export default class Sauce{
    constructor(private _molho: string){}

    get molho(): string{
        return this._molho
    }
    
    set molho(value: string){
        this._molho = value
    }
}