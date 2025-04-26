let members = ''; 


function load(charMembers) {
    let container = '<p>';
    container += `${charMembers}</p>`;
    return container;
}


function register(s) {
    if (s == '=') {
        try{
            document.querySelector('.down').innerHTML = `<p>${eval(members)}</p>`;
        }catch(error){
            document.querySelector('.down').innerHTML = '<p>Error</p>'
        }
        
        
    }else{
        members += s;
        document.querySelector('.up').innerHTML = load(members);
    }

}