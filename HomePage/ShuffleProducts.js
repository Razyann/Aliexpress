import { products } from "../stats";
export function ShuffleProducts(){

    function random(arr) {
        for (let i = 0; i < arr.length; i++) {
            const random = Math.floor(Math.random() * arr.length);
            [arr[i], arr[random]] = [arr[random], arr[i]];
        }
        return arr
    }
    random(products)
}