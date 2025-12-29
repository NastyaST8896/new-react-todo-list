import './item-counters.css'

function ItemCounters({counterChecked, counterLeft}) {
    
  return (
    <div className="item-counters">
        <span>{counterLeft} {counterLeft === 1 ? 'item' : 'items'} left</span>
        <span>{counterChecked} {counterChecked === 1 ? 'item' : 'items'} checked</span>
    </div>
  )
}

export default ItemCounters