import { Map } from "../classes/map";
import { Snake } from "../classes/snake/snake";
import { Controls } from "../classes/controls";
// map.updateMap(snake.renderSnake(map.map));

export class Program {
    map:Map = new Map();
    controls: Controls = new Controls();
    snake:Snake = new Snake(this.controls);
    running:boolean = false;
    

    constructor(){
        this.execute()
    }

    run(){
        this.running = true;
    }
    
    stop(){
        this.running = false;
    }

    execute() {
        setInterval(() => {
            if(this.running){
                // console.log(initial_map[20])
                this.map.renderMap(this.snake.updateSnake(new Map))
            // count++;
            }
            
        }, 1);
    }

}
