class Visibility extends React.Component{
    constructor(props){
        super(props);

        this.toggleVis = this.toggleVis.bind(this); //preserve the binding so we can use this in the method

        this.state = {
            visible: false
        };
    }
    toggleVis() {
        this.setState((prevState) => {
            console.log(prevState);
            return {
                visible: !prevState.visible
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleVis}>{this.state.visible ? 'Hide details' : 'Show details' }</button>
                {this.state.visible && (
                    <p>Hey, these are some details you can now see!</p>
                )}
                
            </div>
            
        )
    }
}

ReactDOM.render(<Visibility/>, document.getElementById('app'));


// let visibility = false;

// const toggleVis = () => {
//     visibility = !visibility;
//     render();
// };

// const render = () => {
//     const jsx = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVis}>
//                 {visibility ? 'Hide details' : 'Show details'}
//             </button>
//             {visibility && (
//                 <div>
//                     <p>Hey, these are some details you can now see!</p>
//                 </div>
//             )}
//         </div>
//     );

//     ReactDOM.render(jsx, document.getElementById('app'));
// };

// render();

// //const appRoot = document.getElementById('app');