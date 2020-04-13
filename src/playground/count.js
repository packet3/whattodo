class Counter extends React.Component {
    constructor(props){
        super(props);

        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.state = {
            count: props.count
            
        };
    }
    handleAddOne() {
        this.setState((prevState) => {
           return {
            count: prevState.count + 1
           };
       });
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }

    handleReset(){
       this.setState(() => {
        return {
            count: 0
        };
       });
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

Counter.defaultProps = {
    count: 0
};
ReactDOM.render(<Counter count={-10}/>, document.getElementById('app'));




// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
//     //console.log('addOne', count);
// };
// const minusOne = () => {
//     count--;
//     renderCounterApp();
//     //console.log('minusOne');
// };
// const reset = () => {
//     count = 0;
//     renderCounterApp();
//     //console.log('reset');
// }



// /* const user = {
//     name: 'Joe',
//     age: 33,
//     location: 'Cornwall'
// };

// function getLocation(location){
//    if (location){
//        return <p>Location: {location}</p>;
//    } 
// }
// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : 'Anonymous'}</h1>
//         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// ); */

// //ReactDOM.render(template, appRoot)


// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );

//     ReactDOM.render(templateTwo, appRoot)
// }

// renderCounterApp();