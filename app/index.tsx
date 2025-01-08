import CalculatorButton from '@/components/CalculatorButton'
import ThemeText from '@/components/ThemeText'
import { Colors } from '@/constants/Colors'
import { globalStyles } from '@/styles/global-styles'
import { View } from 'react-native'


const itemsForButton = [
    [
        { label: 'C', color: Colors.lightGray, blackText: true, doubleSize: false, onPress: () => console.log() },
        { label: '+/-', color: Colors.lightGray, blackText: true, doubleSize: false, onPress: () => console.log() },
        { label: 'del', color: Colors.lightGray, blackText: true, doubleSize: false, onPress: () => console.log() },
        { label: '%', color: Colors.orange, blackText: false, doubleSize: false, onPress: () => console.log() },
    ],
    [
        { label: '7', color: Colors.darkGray, blackText: false, doubleSize: false, onPress: () => console.log() },
        { label: '8', color: Colors.darkGray, blackText: false, doubleSize: false, onPress: () => console.log() },
        { label: '9', color: Colors.darkGray, blackText: false, doubleSize: false, onPress: () => console.log() },
        { label: 'X', color: Colors.orange, blackText: false, doubleSize: false, onPress: () => console.log() },
    ],
    [
        { label: '4', color: Colors.darkGray, blackText: false, doubleSize: false, onPress: () => console.log() },
        { label: '5', color: Colors.darkGray, blackText: false, doubleSize: false, onPress: () => console.log() },
        { label: '6', color: Colors.darkGray, blackText: false, doubleSize: false, onPress: () => console.log() },
        { label: '-', color: Colors.orange, blackText: false, doubleSize: false, onPress: () => console.log() },
    ],
    [
        { label: '1', color: Colors.darkGray, blackText: false, doubleSize: false, onPress: () => console.log() },
        { label: '2', color: Colors.darkGray, blackText: false, doubleSize: false, onPress: () => console.log() },
        { label: '3', color: Colors.darkGray, blackText: false, doubleSize: false, onPress: () => console.log() },
        { label: '+', color: Colors.orange, blackText: false, doubleSize: false, onPress: () => console.log() },
    ],
    [
        { label: '0', color: Colors.darkGray, blackText: false, doubleSize: true, onPress: () => console.log() },
        { label: '.', color: Colors.darkGray, blackText: false, doubleSize: false, onPress: () => console.log() },
        { label: '=', color: Colors.orange, blackText: false, doubleSize: false, onPress: () => console.log() },
    ],
]


const CalculatorApp = () => {
    return (
        <View style={globalStyles.calculatorContainer}>
            <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
                <ThemeText variant='h1'>
                    10x2
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

