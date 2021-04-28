import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.components';
import CollectionOverview from './collection-overview.component';

const mapStatetoProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionsOverviewContainer = compose(
  connect(mapStatetoProps),
  WithSpinner
)(CollectionOverview);

export default CollectionsOverviewContainer;
