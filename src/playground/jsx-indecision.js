//babel  src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
//yarn install
console.log('App.js Is Running');


const app = {
    title: 'Indision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []

   

};
const onFormSubmit = (e) => {
    e.preventDefault();
    
    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderRefreshTemplate();
    }
}

const clearAll = () =>{
    app.options = [];
    renderRefreshTemplate();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option =  app.options[randomNum];
    alert(option);
}

const appRoot = document.getElementById('app');





const renderRefreshTemplate = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{(app.options) && app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={clearAll}>Remove all</button>


         
            <ol>
             {
                 app.options.map((option, index) => {
                    return <li key={index}>{option}</li>;
                 })
             }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
    
        </div>
    );

    ReactDOM.render(template, appRoot);
};


renderRefreshTemplate();