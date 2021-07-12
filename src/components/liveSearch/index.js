import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLOR, FONT } from '../../styles';
import {
  widthComparedByReference as width,
  heightComparedByReference as height,
} from '../../utils/Responsive';
import LeftElement from './Element/leftElement';
import CenterElement from './Element/centerElement';
import RightElement from './Element/rightElement';
import { useNavigation } from '@react-navigation/native';

const NavHeader = ({
    judul = '',
    isSearchActive,
    onSearchClosed,
    onSearchTextChanged,
    searchValue,
    onSearchPressed,
}) => {
    const navigation = useNavigation();
    const onSearchGoBacked = () => {
        // GlobalFunction.getSoundClick();
        navigation.pop();
    };
    const onSearchClearPressed = () => {
        // GlobalFunction.getSoundClick();
        onSearchTextChanged('');
    };
    return (
        <View style={NavHeaders.container}>
            <View
                style={[
                    NavHeaders.wrapper,
                    { marginHorizontal: width(20)},
                ]}>
                <LeftElement
                    isSearchActive={isSearchActive}
                    onSearchClose={onSearchClosed}
                    onSearchGoBack={onSearchGoBacked}
                />
                <CenterElement
                    title={judul}
                    isSearchActive={isSearchActive}
                    onSearchTextChange={onSearchTextChanged}
                    searchValue={searchValue}
                />
                <RightElement
                    isSearchActive={isSearchActive}
                    onSearchPress={onSearchPressed}
                    searchValue={searchValue}
                    onSearchClear={onSearchClearPressed}
                />
            </View>
        </View>
    );
};

const NavHeaders = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        paddingBottom: width(5),
        alignItems: 'center',
        flex: 1,
    },
    judul: {
        color: COLOR.primary.green,
        ...FONT.sourceCodeProSemiBold(22),
    },
    container: {
        left: 0,
        right: 0,
        height: width(60),
        backgroundColor: COLOR.primary.yellow,
    },
});

export default React.memo(NavHeader);
