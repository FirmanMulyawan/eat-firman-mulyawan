import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Animated,
    Easing,
    Platform,
    TextInput,
} from 'react-native';
import { COLOR, FONT } from '../../../../styles';
import {
    widthComparedByReference as width,
    heightComparedByReference as height,
} from '../../../../utils/Responsive';

class CenterElement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textInput: props.isSearchActive,
            opacityValue: new Animated.Value(1),
        };
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (this.props.isSearchActive !== nextProps.isSearchActive) {
            this.animateElements(nextProps.isSearchActive);
        }
    }

    animateElements = nextIsSearchActive => {
        Animated.timing(this.state.opacityValue, {
            toValue: 0,
            duration: 112,
            easing: Easing.linear,
            useNativeDriver: Platform.OS === 'android',
        }).start(() => {
            this.setState({
                textInput: nextIsSearchActive,
            });
            Animated.timing(this.state.opacityValue, {
                toValue: 1,
                duration: 112,
                easing: Easing.linear,
                useNativeDriver: Platform.OS === 'android',
            }).start();
        });
    };

    render() {
        const { title, onSearchTextChange, searchValue, isSearchActive } = this.props;
        const { opacityValue, textInput } = this.state;

        let content = (
            <View style={{ alignItems: 'center' }}>
                <Text
                    style={[
                        styles.text,
                        {
                            color: isSearchActive ? 'transparent' : COLOR.light.purple,
                        },
                    ]}>
                    {title}
                </Text>
            </View>
        );

        if (textInput) {
            content = (
                <View style={{ left: width(-20) }}>
                    <TextInput
                        autoCapitalize="none"
                        style={styles.textInput}
                        placeholder="Search"
                        value={searchValue}
                        onChangeText={text => onSearchTextChange(text)}
                        returnKeyType="search"
                        autoCorrect={false}
                        underlineColorAndroid="rgba(0,0,0,0)"
                    />
                    <View
                        style={{
                            height: width(4),
                            backgroundColor: COLOR.light.purple,
                            borderRadius: width(20),
                        }}
                    />
                </View>
            );
        }
        return (
            <Animated.View style={[styles.container, { opacity: opacityValue }]}>
                {content}
            </Animated.View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        ...FONT.sourceCodeProSemiBold(22),
    },
    textInput: {
        ...FONT.sourceCodeProReguler(20),
        color: COLOR.light.purple,
        paddingLeft: width(30),
        paddingBottom: width(5),
    },
});
export default CenterElement;
