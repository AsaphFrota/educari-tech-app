import React from "react";
import { View, Text, Animated, TextInput, StyleSheet } from 'react-native';
import Svg, {G, Circle} from "react-native-svg";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);


export default function Donut({
    percentage = 63,
    radius = 55,
    strokeWidht = 10,
    duration = 500,
    color = '#B6B6C2',
    sColor = '#0A84FF',
    delay = 0,
    textColor,
    max = 100,
}) {
    const animatedValue = React.useRef(new Animated.Value(0)).current;
    const circleRef = React.useRef();
    const halfCircle = radius + strokeWidht;
    const circleCircumference = 2 * Math.PI * radius;
    const animation = (toValue) => {
        return Animated.timing(animatedValue, {
            toValue,
            duration,
            delay,
            useNativeDriver: true
        }).start;

    };

    const strokeDashoffset = circleCircumference - (circleCircumference * percentage) /100; 
    

    return (
        <View>
            <Svg width={radius * 2} height={radius *2} viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2} `}>
                <G rotation='90' origin={`${halfCircle}, ${halfCircle}`}>
                    <Circle
                        cx='50%'
                        cy='50%'
                        stroke={color}
                        strokeWidth={strokeWidht}
                        r={radius}
                        fill="transparent"
                        strokeOpacity={0.3}
                        
                    />
                    <AnimatedCircle
                    ref={circleRef}
                        cx='50%'
                        cy='50%'
                        stroke={sColor}
                        strokeWidth={strokeWidht}
                        r={radius}
                        fill="transparent"
                        strokeDasharray={circleCircumference}
                        strokeDashoffset={strokeDashoffset }
                        strokeLinecap="round"
                        
                    />
                    
                </G>
            </Svg>
            <TextInput
                underlineColorAndroid="transparent"
                editable={false}
                defaultValue="63"
                style={[
                    StyleSheet.absoluteFillObject, {fontSize: radius / 2, color: textColor ?? sColor},
                    {fontWeight: '900', textAlign: 'center', textAlignVertical: 'center' }
                ]}
            />
        </View>
    )
}