import { Colors } from '@/constants/Colors';
import { Pressable, StyleSheet, Text } from 'react-native'
import * as Haptics from 'expo-haptics';

interface Props {
    label: string;
    color: string;
    blackText: boolean;
    onPress: () => void,
    doubleSize?: boolean;
}


const CalculatorButton = (
    {
        label,
        color = Colors.darkGray,
        blackText = false,
        onPress,
        doubleSize
    }: Props
) => {
    return (
        <Pressable
            style={({ pressed }) => ({
                ...styles.button,
                backgroundColor: color,
                opacity: pressed ? 0.8 : 1,
                width: doubleSize ? 180 : 80
            })}
            onPress={() => {
                Haptics.notificationAsync(),
                    onPress()
            }}
        >
            <Text
                style={{
                    ...styles.buttonText,
                    color: blackText ? 'black' : 'white'
                }}>
                {label}
            </Text>
        </Pressable>
    )
}

export default CalculatorButton


const styles = StyleSheet.create({
    button: {
        height: 80,
        width: 80,
        backgroundColor: Colors.darkGray,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    buttonText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: Colors.textPrimary,
        fontWeight: '300',
        fontFamily: 'SpaceMono'
    }
})
