import Items from '../items/Items';
import PropTypes from 'prop-types';

function SelectedTag(props) {
    const { data, tags, itemSelected } = props;
    return (
        <>
            {
               data.length === 0 ? 
               <h3>Please select Movies Tag...</h3> : null
            }
            <Items 
                data={data}
                tags={tags}
                itemSelected={itemSelected}/>
        </>
    )
}

SelectedTag.propTypes = {
    data: PropTypes.array,
    tags: PropTypes.array,
    itemSelected: PropTypes.func
}

export default SelectedTag;