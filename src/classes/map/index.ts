export class Map {
    map = this.initMap()
    constructor(){}

    initMap():number[][]{
        const y = new Array(50).fill([])
        return y.map(() => {
            return new Array(100).fill(0);
        });
    }

    renderMap(map: number[][]){
        const render = document.querySelector(".render")
        render && (render.innerHTML = "")
        let str:string = "";

        str = map.map((y: any) => {
            return `<div style="display:flex">${y.map((x: number) => {
                return `<p class="block ${x === 0 && 'tile'} ${x === 1 && 'snake'}"></p>`
            })}
        </div>`})
        .join()
        .replace(/,/g, "")

        render && (render.innerHTML = str);
    }
}