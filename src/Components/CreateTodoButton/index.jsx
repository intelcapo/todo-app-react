import './CreateTodoButton.css'
function CreateTodoButton({openModal}){
   
    return (
    <button className='animated-button' onClick={openModal}>
        <span className='button-content'>➕</span>
    </button>)
}


export {CreateTodoButton}