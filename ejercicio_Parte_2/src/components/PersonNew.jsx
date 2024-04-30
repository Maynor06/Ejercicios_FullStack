const PersonNew = ({addContact, handleNameChange, newName,newNumber, handleNumberChange}) => {

    return(
        <>        
            <form onSubmit={addContact} >
                <div>
                name: <input 
                    value={newName}
                    onChange={handleNameChange}
                />
                number: <input value={newNumber} onChange={handleNumberChange} />
                </div>
                <div>
                <button type="submit" >add</button>
                </div>
            </form>
        </>
    )
}
export default PersonNew