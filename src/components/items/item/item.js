import './item.scss'
import moment from 'moment';
import PropTypes from 'prop-types';

function Item(props) {
    const { name, created_at, active, disable, itemSelected } = props;
    return (
        <li 
            onClick={ 
                () => { itemSelected({ ...props, active}) }
            } 
            className={`item ${ active ? 'active': '' } ${ disable ? 'disable' : ''}`}>
            <h4>{name} - <small>{moment(created_at, 'YYYY-MM-DD HH:mm:SS').format('DD/MM/YYYY HH:mm A')}</small></h4>
        </li>
    );
}

Item.propTypes = {
    name: PropTypes.string,
    created_at: PropTypes.string,
    active: PropTypes.bool,
    disable: PropTypes.bool,
    itemSelected: PropTypes.bool
}

export default Item;