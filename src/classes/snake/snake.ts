import { Controls } from "../controls";
import { Map } from "../map";

export class Snake{
    snake:number[][] = [[20,20], [21, 20], [22, 20], [23, 20], [24, 20], [25, 20], [25, 19]]; //y,x
    count = 0;
    controls:Controls;
    constructor(controls:Controls){
        this.controls = controls;
    }

    renderSnake(map:number[][]){
        this.snake.forEach(el => {
            map[el[0]][el[1]] = 1;
        })

        return map;
    }

    updateSnake(newMap:Map):number[][]{
        for(let i = this.snake.length -1; i > 0; i--){
            if(i > 0) this.snake[i] = [...this.snake[i - 1]] 
        }

        
        this.snake[0] = this.controls.getFormatedDirection(this.snake[0]);

        console.log(this.controls.lastCommand)
        console.log(this.snake)

        const map = newMap.map

        this.snake.forEach(el => {
            map[el[0]][el[1]] = 1;
        })

        return map;
    }

    getSnake():number[][]{
        return this.snake;
    }
}