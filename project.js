



const prompt = require("prompt-sync")();


const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    A : 2,
    B : 4,
    C : 6,
    D : 8,
};
const SYMBOL_VALUE = {
    A : 5,
    B : 4,
    C : 3,
    D : 2,
};

const deposit = () => {
    while(true) {
        const depositAmount = prompt("Emter a deposit amount: ");
        const numberDepositAmmount = parseFloat(depositAmount);
    
        if (isNaN(numberDepositAmmount) || numberDepositAmmount <= 0) {
            console.log('invalid deposit amount, try again');
        }
        else {
            return numberDepositAmmount;
        }
    }
};

const getNumberOfLines = () => {
    while(true) {
        const lines = prompt('Enter number of lines to bet on(1-3): ');
        const numberOfLines = parseFloat(lines);
         
        if(isNaN(numberOfLines) || numberOfLines <=0 || numberOfLines >=4) {
            console.log('invalid number of lines, try again');
        }
        else {
            return numberOfLines;
        }
    }
}

const getBet = (balance, lines) => {
    while(true) {
        const bet = prompt('Enter the bet per line: ');
        const numberBet = parseFloat(bet);
         
        if(isNaN(numberBet) || numberBet <= 0 || numberBet > balance/lines) {
            console.log('invalid bet placed, try again');
        }
        else {
            return numberBet;
        }
    }
};

const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        for (let i = 0; i < count; i++) {
            symbols.push(symbol);
        }
    }


    const reels = [[], [], []];
    for (let i = 0; i <  COLS; i++) {
        const reelSymbols = [...symbols];
        for (let j = 0; j < ROWS; j++) {
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex];
        }
    }
};

spin();

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance);
