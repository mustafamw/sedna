import Item from './item/item';
import './Items.scss';

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

export default Items;