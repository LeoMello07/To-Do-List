import { StatusBar } from 'expo-status-bar';
import { FlatList, Text, View } from 'react-native';
import { data } from './Data/List'
import * as S from "./styles"

export default function TodoList() {
  return (
    <S.Container>
        <View>
        <StatusBar style="auto" />
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={{marginTop: 100, marginLeft: 20}}>
                <Text>{item.date}</Text>
                <Text>{item.task}</Text>
                <Text>Prioridade: {item.priority}</Text>
              </View>
            )}
          />
        </View>
    </S.Container>
  );
}
