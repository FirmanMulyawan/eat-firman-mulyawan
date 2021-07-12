import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import {Card, LiveSearch} from '../../components';
import styles from './styles';

const Main = () => {
  const [state, setState] = useState({
    searchValue: '',
    data: [],
    arrayholder: [],
    isSearchActive: false,
  });

  useEffect(() => {
    const result = async () => {
      fetch('http://3.15.16.42:7000/foods')
        .then(response => response.json())
        .then(result => {
          setState({
            ...state,
            data: result,
            arrayholder: result,
          });
        });
    };
    result();
  }, []);

  const searchData = text => {
    const newData = state.arrayholder.filter(item => {
      const itemData = item.name?.toUpperCase();
      const textData = text.toUpperCase();
      return itemData?.indexOf(textData) > -1;
    });
    setState({
      ...state,
      data: newData,
      searchValue: text,
    });
  };

  const onSearchClosed = () => {
    setState({
      ...state,
      isSearchActive: false,
      searchValue: '',
    });
  };

  const onSearchTextChanged = searchValue => {
    searchData(searchValue);
  };

  const onSearchPressed = () => {
    setState({
      ...state,
      isSearchActive: true,
    });
  };

  return (
    <>
      <View style={styles.wrapperTitle}>
        <Text style={styles.headerTitle}>List Foods</Text>
      </View>
      <LiveSearch
        judul="Klik Button Search"
        isSearchActive={state.isSearchActive}
        onSearchClosed={onSearchClosed}
        onSearchTextChanged={onSearchTextChanged}
        searchValue={state.searchValue}
        onSearchPressed={onSearchPressed}
      />
      <View style={styles.wrapperCard}>
        <Card
          data={state.data}
          isLoading={state.isLoading}
          isError={state.isError}
        />
      </View>
    </>
  );
};

export default Main;
