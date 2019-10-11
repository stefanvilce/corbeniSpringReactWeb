class App extends React.Component {
  state = {
    title: "",
    subtitle: ""
  }
  componentDidMount() {
	    const id = document.querySelector("#idPage").innerHTML
	    const url = 'http://stefan.loc:8080/page/' + id + '/en'	
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
			        	<h2>{this.state.title}</h2>
			        	<h4>{this.state.subtitle}</h4>
			        	<p>{ this.state.shortDescription }</p>
			        	<div dangerouslySetInnerHTML={{ __html: this.state.content }}></div>
		        </div>
		</div>
        </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));