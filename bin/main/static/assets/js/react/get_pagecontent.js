class App extends React.Component {
  state = {
    pages: null
  }
  componentDidMount() {
	    const url = 'http://stefan.loc:8080/page/1/en'
	    axios.get(url).then(response => response.data).then((data) => {
		      this.setState({   title: data.title,
		    	  				subtitle: data.subtitle,
		    	  				shortDescription: data.shortDescription,
		    	  				content: data.content
		      })
		     })	    
	  }
  render() {
    return (
        <React.Fragment>
		<div>	
		        <div key="1">
			        	<h1>{this.state.title}</h1>
			        	<h3>{this.state.subtitle}</h3>
			        	<p>{ this.state.shortDescription }</p>
			        	<div dangerouslySetInnerHTML={{ __html: this.state.content }}></div>
		        </div>
		</div>
        </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));