import Button from './Button'
const Header = ({onAdd, showAdd}) => {
    return (
        <header>
            <h1 className='header'>
                Task Tracker 
                <Button color={showAdd ? 'red' : 'green'}
                text={showAdd ? 'Close' : 'Add'} func={onAdd}/>
             </h1>
            
        </header>
    )
}

export default Header