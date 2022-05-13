import check from '../images/icon-check.svg'

const Button = ({clickable, checked}) => {
    
    return (
        <div className={`button ${ clickable && checked ? 'checked' : ''} `}>
            {checked && <img src={check} alt=''/>}
        </div>
    )
}

export default Button 