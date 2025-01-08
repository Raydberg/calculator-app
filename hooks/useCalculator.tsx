import { useEffect, useRef, useState } from 'react'
import { View, Text } from 'react-native'

enum Operator {
    add = '+',
    subtract = '-',
    multuply = 'x',
    divide = '%'
}


export const useCalculator = () => {
    const [formula, setFormula] = useState('')
    const [number, setNumber] = useState("0")
    const [prevNumber, setpPrevNumber] = useState('0')
    const lastOperation = useRef<Operator>();

    useEffect(() => {
        //* Calcular resultado

        setFormula(number)

    }, [number])
    const clean = () => {
        setNumber('0')
        setpPrevNumber('0')
        setFormula('0')
        lastOperation.current = undefined;
    }


    const toggleSigs = () => {
        if (number.includes('-')) {
            return setNumber(number.replace('-', ''))
        }
        setNumber('-' + number)
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
        toggleSigs
    }


}