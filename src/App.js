
var React  = require('react')
var ReactDOM = require('react-dom')

var App  = React.createClass({
  render: function(){
    return (
      <div>
        <div id = "header"></div>

        <div className="container">
          <div className="column">
              <InboxPane/>
              <div>
                  <Welcome />
              </div>

          </div>
          <div className="column">

          </div>
          <div className="column">

          </div>
        </div>
      </div>
    )
  }
});

var Welcome = React.createClass({
render: function(){
  return <h1>Hello,{name}</h1>;
}
});

var InboxPane = React.createClass({
  render: function(){
    return (
    <div id ="inbox-pane">
       <h1>Inbox</h1>
       <table>
         <thead>
           <tr>
             <th>Chat Received</th>
             <th>Name</th>
             <th>Status</th>
           </tr>
         </thead>
            <tbody>
              <InboxItem/>
            </tbody>
       </table>
    </div>
  )
  }
});

var InboxItem =React.createClass({
   render: function(){
     return (
       <tr>
         <td>5pm</td>
         <td>RAthi </td>
         <td>confirmed</td>
       </tr>
     )
   }
});


ReactDOM.render(<App />, document.getElementById('root'));
export default App
