class Calculator {
    constructor() {
        // Aqui é a propiedade que recebe os valores digitados pelo usuário
        this.displayValue = "";
    }

    // Este método adiciona valores á propiedade displayValue
    // e, em seguida chama o método updateDisplay para atualizar o visor (input)
    appendToDisplay(value) {
        this.displayValue += value;
        this.updateDisplay();
    }

    // Este método atualiza o input com os valores que o usuário digitou
    updateDisplay() {
        document.getElementById("displayContent").value = this.displayValue
    }

    // Este método limpa os valores do displayValue (input)
    // e chama o método updateDisplay para atualizar o visor (input)
    clearDisplay() {
        this.displayValue = "";
        this.updateDisplay();
    }

    calculate() {
        try {
            const result = eval(this.displayValue);
            this.displayValue = result;
            this.updateDisplay();
        } catch(error) {
            this.displayValue = "ERROR"
            this.updateDisplay()
        }
    }
}

// Instanciando o objeto
const calc = new Calculator()