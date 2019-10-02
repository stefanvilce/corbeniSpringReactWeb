class App extends React.Component {
  state = {
    pages: []
  }
  componentDidMount() {
	    const url = 'http://stefan.loc:8080/pages/en'
	    axios.get(url).then(response => response.data)
	    .then((data) => {
	      this.setState({ pages: data })
	      console.log(this.state.pages)
	     })
	  }
  render() {
    return (
        <React.Fragment>
        <h3>The list with all pages</h3>        
		<div>
		{this.state.pages.map((page) => (
		        <div key={page.id}>
		            <h5>{ page.title }</h5>
		            <p>{ page.subtitle }</p>
		            <p>{ page.shortDescription }</p>
		        </div>
		        ))}
		</div>
        </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));


/*'use strict';
const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);*/