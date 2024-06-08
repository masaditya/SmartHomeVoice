import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    display: 'flex',
    gap: 30,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: '100%',
    backgroundColor: '#2c3e50',
    padding: 10,
  },
  activityItem: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#34495e',
    borderRadius: 10,
    width: '100%',
  },

  activityItemText: {
    fontSize: 18,
    color: '#ecf0f1',
  },
});
