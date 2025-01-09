import { useEffect, useRef, useState } from 'react'

enum Operator {
    add = '+',
    subtract = '-',
    multiply = 'x',
    divide = '%'
}


export const useCalculator = () => {
    const [formula, setFormula] = useState('')
    const [number, setNumber] = useState("0")
    const [prevNumber, setPrevNumber] = useState('0')
    const lastOperation = useRef<Operator>();

    useEffect(() => {
        if (lastOperation.current) {
            const firstFormulaPart = formula.split(' ').at(0)
            setFormula(`${firstFormulaPart}${lastOperation.current}${number}`)
        } else {
            setFormula(number)
        }
    }, [number])
    // useEffect(() => {
    //     //* Calcular resultado

    //     // setPrevNumber(number)

    // }, [number])
    const clean = () => {
        setNumber('0')
        setPrevNumber('0')
        setFormula('0')
        lastOperation.current = undefined;
    }


    const toggleSigs = () => {
        if (number.includes('-')) {
            return setNumber(number.replace('-', ''))
        }
        setNumber('-' + number)
    }

    const deleteLast = () => {
        let currentSign = '';
        let temporalNumber = number;
        if (number.includes('-')) {
            currentSign = '-'
            temporalNumber = number.substring(1)
        }
        if (temporalNumber.length > 1) {
            return setNumber(currentSign + temporalNumber.slice(0, -1))
        }
        setNumber('0')
    }

    const setLastNumber = () => {
        if (number.endsWith('.')) {
            setPrevNumber(number.slice(0, -1))
        }
        setPrevNumber(number)
        setNumber('0')
    }
    const devideOperation = () => {
        setLastNumber()
        lastOperation.current = Operator.divide;
    }
    const multiplyOperation = () => {
        setLastNumber()
        lastOperation.current = Operator.multiply;
    }
    const subtractOperation = () => {
        setLastNumber()
        lastOperation.current = Operator.subtract;
    }
    const addOperation = () => {
        setLastNumber()
        lastOperation.current = Operator.add;
    }

    const calculateResult = () => {
      
    }

    const buildNumber = (numberString: string) => {
        console.log(numberString)
        //* Verificar si ya existe el punto decimal
        if (number.includes('.') && numberString === '.') return;
        if (number.startsWith('0') || number.startsWith('-0')) {
            if (numberString === '.') {
                return setNumber(number + numberString)
            }
            //* Evaluar si es otro cero y no hay punto
            if (numberString === "0" && number.includes('.')) {
                return setNumber(number + numberString)
            }
            //*Evaluar si es diferente de cero , y no hay punto y es el primer numero
            if (numberString !== '0' && !number.includes('.')) {
                return setNumber(numberString)
            }
            //* Evitar el 0000.0 
            if (numberString === '0' && !number.includes('.')) {
                return;
            }
        }
        setNumber(number + numberString)
    }



    return {
        //Props
        formula,
        number,
        prevNumber,
        //Methods
        buildNumber,
        clean,
        toggleSigs,
        deleteLast,
        devideOperation,
        multiplyOperation,
        subtractOperation,
        addOperation,
    }


}