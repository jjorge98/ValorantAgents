import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const styles = StyleSheet.create({
  /* Login */
  mainContentL: {
    padding: 25,
  },
  imgBackgroundL: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
  },
  inputAreaL: {
    marginVertical: 20,
  },
  titleL: {
    fontSize: 25,
    color: colors.darkGray,
    fontWeight: '700',
    alignSelf: 'center',
    fontFamily: 'fantasy',
    backgroundColor: colors.mainColor,
  },
  centerAreaL: {
    justifyContent: 'center',
  },

  /* Home */
  mainViewH: {
    padding: 20,
    backgroundColor: colors.mainColor,
    height: '100%',
  },
  filterViewH: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  inputViewH: {
    flex: 3,
  },
  iconViewH: {
    flex: 1,
  },

  /* Agent */
  mainViewA: {
    padding: 20,
    backgroundColor: colors.mainColor,
    height: '100%',
  },

  /* Button Text */
  btnTextBT: {
    justifyContent: 'center',
    color: colors.white,
    fontSize: 15,
    fontWeight: '500',
  },

  /* Custom Button */
  btnAreaCB: {
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 15,
    alignSelf: 'center',
    backgroundColor: colors.darkGray,
    alignItems: 'center',
    justifyContent: 'center',
  },

  /* Agent Details */
  mainViewAD: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.trasparentWhite8,
    marginTop: 5,
    paddingHorizontal: 13,
    borderRadius: 10,
    borderWidth: 1,
    paddingVertical: 5,
  },
  titleAD: {
    fontSize: 17,
    color: colors.darkGray,
    flex: 1,
    fontWeight: '600',
  },
  contentAD: {
    flex: 1,
    fontSize: 16,
    color: colors.gray,
  },

  /* Agent Header */
  scrollAH: {
    marginVertical: 15,
  },
  leftImgAH: {
    marginRight: 10,
  },
  titleAH: {
    marginBottom: 20,
    fontSize: 25,
    fontFamily: 'fantasy',
    alignSelf: 'center',
    color: colors.darkGray,
    fontWeight: '600',
  },
  modalViewAH: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    backgroundColor: colors.mainColor,
    justifyContent: 'space-around',
  },

  /* Custom Flatlist */
  listItemCF: {
    marginTop: 15,
    backgroundColor: colors.white,
    height: 100,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowColor: colors.black,
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.darkGray,
  },
  imgAreaCF: {
    flex: 2,
    marginStart: 15,
  },
  textAreaCF: {
    flex: 5,
  },
  imgCF: {
    height: '80%',
    width: '80%',
  },
  titleCF: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.darkGray,
  },
  subTitleCF: {
    fontSize: 15,
    color: colors.darkGray,
  },

  /* Custom Header */
  imgCH: {
    height: 120,
    width: 120,
    alignSelf: 'center',
  },
  titleCH: {
    marginTop: 20,
    fontSize: 25,
    fontFamily: 'fantasy',
    alignSelf: 'center',
    color: colors.darkGray,
    fontWeight: '600',
  },
  descriptionCH: {
    fontSize: 18,
    fontFamily: 'fantasy',
    color: colors.white,
    justifyContent: 'center',
    textAlign: 'center',
    paddingHorizontal: 30,
  },

  /* Custom Input */
  mainViewCI: {
    height: 40,
    backgroundColor: colors.white,
    borderRadius: 10,
    borderColor: colors.darkGray,
    borderWidth: 2,
    marginVertical: 5,
  },
  inputCI: {
    paddingHorizontal: 15,
  },
});
