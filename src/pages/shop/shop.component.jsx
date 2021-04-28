import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CollectionOverview from '../../components/collections-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebasae.utils';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.components';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
class ShopPage extends Component {
  state = {
    loading: true,
  };
  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');
    // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
    //   async (snapshot) => {
    //     const collectionMap = convertCollectionsSnapshotToMap(snapshot);
    //     updateCollections(collectionMap);
    //     this.setState({
    //       loading: false,
    //     });
    //   }
    // );
    collectionRef.get().then((snapshot) => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionMap);
      this.setState({
        loading: false,
      });
    });
  }
  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (connectionsMap) =>
    dispatch(updateCollections(connectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
