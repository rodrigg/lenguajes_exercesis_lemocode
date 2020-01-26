console.log("Ejercicio 5 Slot Machine");
class SlothMachine {
    private contadorMonedas: number;
    constructor() {
        this.contadorMonedas = 0;
    }
    private randomBoolean(): boolean {
        return Math.random() >= 0.5
    }
    public play(): string {
        this.contadorMonedas++;
        return this.randomBoolean() && this.randomBoolean() && this.randomBoolean() ?
            `Congratulations!!!. You won ${this.contadorMonedas} coins!!` :
            "Good luck next time!!";
    }
}

const machine1 = new SlothMachine();
console.log(machine1.play()); // "Good luck next time!!"
console.log(machine1.play()); // "Good luck next time!!"
console.log(machine1.play()); // "Congratulations!!!. You won 3 coins!!"
console.log(machine1.play()); // "Good luck next time!!" machine1.play();
// "Congratulations!!!. You won 2 coins!!"