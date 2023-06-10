import { Directions, IDirectionObj } from "../../interfaces/controls";

export class Controls{
    lastCommand:IDirectionObj  = this.getDirection();
    allCommands:IDirectionObj[] = this.getAllDirections();
    constructor(){
        this.execute();
    }

    execute(){
        document.addEventListener("keydown", (e:KeyboardEvent) => {
            if(
                e.keyCode === Directions.dw ||
                e.keyCode === Directions.lf ||
                e.keyCode === Directions.up ||
                e.keyCode === Directions.rg
            ){  
                const direction = this.getDirection(e.keyCode);
                if( this.lastCommand.code !== direction.oposite){
                    this.lastCommand = this.getDirection(e.keyCode);
                }
            }
            
        });
    }

    getLastEvent(){
        return this.lastCommand;
    }

    getAllDirections():IDirectionObj[]{
        return [
            {
                code : Directions.dw,
                description: "dw",
                oposite: Directions.up,
            },
            {
                code: Directions.lf,
                description:"lf",
                oposite: Directions.rg
            },
            {
                code: Directions.up,
                description: "up",
                oposite: Directions.dw
            },
            {
                code: Directions.rg,
                description: "rg",
                oposite:Directions.lf
            },
        ]
    }

    getDirection(code?:number):IDirectionObj{
        const directions = this.getAllDirections();
        if(code){
            const found = directions.find(direction => direction.code === code);
            if(!!found) return found;
        } 
        return directions[0]; 
    }

    getFormatedDirection (snakeHead: number[]): number[]{
        if(this.lastCommand.code === Directions.up){
            return [snakeHead[0] - 1, snakeHead[1]];
        } else if (this.lastCommand.code === Directions.dw){
            return [snakeHead[0] + 1, snakeHead[1]];
        } else if (this.lastCommand.code === Directions.lf){
            return [snakeHead[0], snakeHead[1] - 1];
        } else if (this.lastCommand.code === Directions.rg){
            return [snakeHead[0], snakeHead[1] + 1];
        }
        return snakeHead;
    }
}