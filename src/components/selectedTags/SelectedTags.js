import Items from '../items/Items';

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

export default SelectedTag;