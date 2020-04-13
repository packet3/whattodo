//stateless functional component
class WhatToDo extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            //options: props.options
            options: []
        };
    }
    componentDidMount(){
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
    
            if(options){
                this.setState(() => ({options}));
            }

        } catch (e) {
            // Do nothing at all
        }
      

      
        //console.log('Fetching data')
    }
    componentDidUpdate(prevProps, prevState){
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            //console.log('Saving data');

        }
       

    }
    componentWillUnmount(){
        console.log('componet will unoumt');
    }
    handleDeleteOptions() {
        this.setState(() => ({
            options: []
        }));
    }

    handleDeleteOption(optionToRemove){
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        })); 
    }

    handlePick() {
      
     const randomNum = Math.floor(Math.random() * this.state.options.length);
     const option =  this.state.options[randomNum];
    alert(option);
         
        
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';

        }
       this.setState((prevState)=> ({options: prevState.options.concat(option)}));
    }
    //handleDeleteOptions
    render() {
        const subtitle = 'Let the computer decide for you!';
        
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                
                />
            </div>
        );
    }
}
// WhatToDo.defaultProps = {
//     options: []
// };
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'What To Do?'
}

// class Header extends React.Component {
//     render(){
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }
const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick}
            disabled={!props.hasOptions}
            >
            What should I do?
            </button>
        </div>
    );
};
// class Action extends React.Component {
//     render(){
//         return (
//             <div>
//                 <button onClick={this.props.handlePick}
//                 disabled={!this.props.hasOptions}
//                 >
//                 What should I do?
//                 </button>
//             </div>
//         );
//     }
// }

const Options = (props) => {
    return (
        <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.options.length === 0 && <p>Please add an Option to get started!</p>}
        
           {props.options.map((option) => (
                <Option 
                   key={option} 
                   optionText={option}
                   handleDeleteOption={props.handleDeleteOption}
                />
                ))
            }
            
            
        </div>
    ); 
};

// class Options extends React.Component {
//     render(){
//         return (
//             <div>
//             <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                {this.props.options.map((option) => {
//                     return <Option key={option} optionText={option}/>
//                })}
                
//                 <Option/>
//             </div>
//         );
//     }
// }

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button 
                onClick={(e) => {
                        props.handleDeleteOption(props.optionText);
                }}
                >
                Remove
            </button>
        </div>
    )
};

// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 {this.props.optionText}
//             </div>
//         )
//     }
// }

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({error}));

        if (!error){
            e.target.elements.option.value = '';
        }

        };

      
    
    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}



// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age} </p>
//         </div>
//     );
// };

ReactDOM.render(<WhatToDo />, document.getElementById('app'));
//ReactDOM.render(<WhatToDo options={['Option one', 'Option ']} />, document.getElementById('app'));