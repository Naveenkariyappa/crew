import shopActionTypes from './shop.types';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebasae.utils';

export const fetchCollectionsStart = () => ({
  type: shopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionMap) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionMap,
});

export const fetchCollectionsFailure = (errorMEssage) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMEssage,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection('collections');

    dispatch(fetchCollectionsStart);
    collectionRef
      .get()
      .then((snapshot) => {
        const collectionMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionMap));
      })
      .catch((e) => dispatch(fetchCollectionsFailure(e.message)));
  };
};
