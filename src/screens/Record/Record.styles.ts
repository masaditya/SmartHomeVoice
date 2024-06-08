import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  recordButton: {
    width: 100,
    height: 100,
  },
  recordButtonContainer: {
    padding: 20,
    borderRadius: 200,
    borderColor: '#1abc9c60',
    borderWidth: 2,
  },
  recordButtonText: {
    color: '#16a085',
    fontSize: 32,
    fontWeight: 'bold',
  },
  textResult: {
    color: '#FFFFFF',
    fontSize: 24,
    textAlign: 'center',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#1abc9c60',
  },
  container: {
    display: 'flex',
    gap: 30,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#2c3e50',
  },
});
