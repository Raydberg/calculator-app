import CalculatorButton from '@/components/CalculatorButton'
import ThemeText from '@/components/ThemeText'
import { Colors } from '@/constants/Colors'
import { useCalculator } from '@/hooks/useCalculator'
import { globalStyles } from '@/styles/global-styles'
import { View } from 'react-native'




const CalculatorApp = () => {
    const { formula, buildNumber, clean, toggleSigs } = useCalculator()
    const itemsForButton = [
        [
            { label: 'C', color: Colors.lightGray, blackText: true, doubleSize: false, onPress: clean },
            { label: '+/-', color: Colors.lightGray, blackText: true, doubleSize: false, onPress: toggleSigs },
            { label: 'del', color: Colors.lightGray, blackText: true, doubleSize: false, onPress: () => console.log('del') },
            { label: '%', color: Colors.orange, blackText: false, doubleSize: false, onPress: () => console.log('%') },
        ],
        [
            { label: '7', color: Colors.darkGray, blackText: false, doubleSize: false, onPress: () => buildNumber('7') },
            { label: '8', color: Colors.darkGray, blackText: false, doubleSize: false, onPress: () => buildNumber('8') },
            { label: '9', color: Colors.darkGray, blackText: false, doubleSize: false, onPress: () => buildNumber('9') },
            { label: 'X', color: Colors.orange, blackText: false, doubleSize: false, onPress: () => console.log('X') },
        ],
        [
            { label: '4', color: Colors.darkGray, blackText: false, doubleSize: false, onPress: () => buildNumber('4') },
            { label: '5', color: Colors.darkGray, blackText: false, doubleSize: false, onPress: () => buildNumber('5') },
            { label: '6', color: Colors.darkGray, blackText: false, doubleSize: false, onPress: () => buildNumber('6') },
            { label: '-', color: Colors.orange, blackText: false, doubleSize: false, onPress: () => console.log('-') },
        ],
        [
            { label: '1', color: Colors.darkGray, blackText: false, doubleSize: false, onPress: () => buildNumber('1') },
            { label: '2', color: Colors.darkGray, blackText: false, doubleSize: false, onPress: () => buildNumber('2') },
            { label: '3', color: Colors.darkGray, blackText: false, doubleSize: false, onPress: () => buildNumber('3') },
            { label: '+', color: Colors.orange, blackText: false, doubleSize: false, onPress: () => console.log('+') },
        ],
        [
            { label: '0', color: Colors.darkGray, blackText: false, doubleSize: true, onPress: () => buildNumber('0') },
            { label: '.', color: Colors.darkGray, blackText: false, doubleSize: false, onPress: () => buildNumber('.') },
            { label: '=', color: Colors.orange, blackText: false, doubleSize: false, onPress: () => console.log('=') }
        ],
    ]

    return (
        <View style={globalStyles.calculatorContainer}>
            <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
                <ThemeText variant='h1'>
                    {formula}
                </ThemeText>
                <ThemeText variant='h2'>
                    20
                </ThemeText>
            </View>
            {/* Filas de botones */}

            {
                itemsForButton.map((rows, index) => (

                    <View key={index} style={globalStyles.row}>
                        {
                            rows.map(({ label, color, blackText, onPress, doubleSize }, idx) => (
                                <CalculatorButton key={idx} doubleSize={doubleSize} label={label} color={color} blackText={blackText} onPress={onPress} />
                            ))
                        }
                    </View>
                ))
            }
        </View>
    )
}

export default CalculatorApp

