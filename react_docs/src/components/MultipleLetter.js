export default function MultipleLetter({letter, onToggle, isSelected,}){
    return(
        <li className={
            isSelected ? 'selected': ''
        }>
        <label>
            <input
                type='checkbox'
                checked={isSelected}
                onChange={() =>{
                    onToggle(letter.id);
                }}
            />
            {letter.subject}
        </label>
        </li>
    );
}