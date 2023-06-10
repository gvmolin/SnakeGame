export enum Directions {
    dw = 40,
    rg = 39,
    up = 38,
    lf = 37,
}

export interface IDirectionObj {
    code: Directions,
    oposite?: Directions,
    description: "up"|"dw"|"rg"|"lf"
    
}