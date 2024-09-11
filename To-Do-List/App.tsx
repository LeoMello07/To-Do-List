import { StyleSheet } from 'react-native';
import TodoList from './src';

export default function App() {
  return (
    <TodoList />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
