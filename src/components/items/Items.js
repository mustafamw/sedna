import Item from './item/item';
import './Items.scss';
import PropTypes from 'prop-types';

function Items(props) {
    const { data, tags, itemSelected } = props;
    const list = data.map((e, i) => (
        <Item
            {...e}
            key={i}
            active={ tags.find(n => n.id === e.id) ? true : false}
            disable={tags.length === 5}
            itemSelected={itemSelected} />
    ))
    return (
        <>
            <ul className="items">
                {list}
            </ul>
        </>
    );
}

Items.propTypes = {
    data: PropTypes.array,
    tags: PropTypes.array,
    itemSelected: PropTypes.func
}

export default Items;