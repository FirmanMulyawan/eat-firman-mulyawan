import React, { Component } from 'react';
import {
    Animated,
    Image,
    Platform,
    StyleSheet,
    Easing,
    TouchableOpacity
} from 'react-native';
import IMAGE from '../../../../assets';
import {
    widthComparedByReference as width,
    heightComparedByReference as height,
} from '../../../../utils/Responsive';

const backButton = IMAGE.icons.back;
const search = IMAGE.icons.search;

class LeftElement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leftElement: backButton,
            spinValue: new Animated.Value(0),
        };
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.isSearchActive && !this.props.isSearchActive) {
            this.animate({ toValue: 1, leftElement: search });
        }
        if (!nextProps.isSearchActive && this.props.isSearchActive) {
            this.animate({ toValue: 0, leftElement: backButton });
        }
    }

    animate = ({ toValue, leftElement }) => {
        Animated.timing(this.state.spinValue, {
            toValue: 0.5,
            duration: 112,
            easing: Easing.linear,
            useNativeDriver: Platform.OS === 'android',
        }).start(() => {
            this.setState({ leftElement });
            Animated.timing(this.state.spinValue, {
                toValue,
                duration: 112,
                easing: Easing.linear,
                useNativeDriver: Platform.OS === 'android',
            }).start();
        });
    };

    render() {
        const { leftElement, spinValue } = this.state;
        const { isSearchActive, onSearchClose, onSearchGoBack } = this.props;

        const spin = spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
        });

        return (
            <Animated.View style={[styles.container, { transform: [{ rotate: spin }] }]}>
                {isSearchActive ? (
                    <TouchableOpacity
                        onPress={() => {
                            // GlobalFunction.getSoundClick();
                            onSearchClose();
                        }}>
                        <Image style={styles.backButton} source={leftElement} />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity onPress={onSearchGoBack}>
                        <Image style={styles.backButton} source={leftElement} />
                    </TouchableOpacity>
                )}
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
    backButton: {
        width: width(25),
        height: width(25),
        resizeMode: 'contain',
    },
});
export default LeftElement;
