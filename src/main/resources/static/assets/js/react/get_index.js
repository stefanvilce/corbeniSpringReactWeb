class App extends React.Component {
  state = {
    pages: []
  }
  componentDidMount() {
	    const url = 'http://stefan.loc:8080/pages/en'
	    axios.get(url).then(response => response.data)
	    .then((data) => {
	      this.setState({ pages: data })
	      //console.log(this.state.pages)
	      //console.log(this.state.testul)
	     })
	  }
  render() {
    return (
        <React.Fragment>
        <h3>Click on the page you want to see</h3>        
		<div>
		{this.state.pages.map((page) => (
		        <div key={page.id}>
		        	<a href={"http://localhost:9095/corbeniSpringReactWeb/holiday/"+ page.id }>
			        	<h6>{ page.title }</h6>
			            <p>{ page.subtitle }</p>
			            <p>{ page.shortDescription }</p>
			        </a>
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