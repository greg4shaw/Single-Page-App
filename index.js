// Router function for SPA

async function loadPage(){
    console.log(location.hash);
    let page      = location.hash.replace('#', '');
    const res     = await fetch(page);
    const content = await res.text();
    const element = document.getElementById('root');
    element.innerHTML = content;
};            

window.addEventListener('hashchange', loadPage);    
  
// React component for loading data

function App(){
    const [data, setData] = React.useState(null);        
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        async function getData() {
            //const response = await fetch('./books.json');
            const response = await fetch('./world.json');
            const json     = await response.json();
            setData(json);
            setLoaded(true);
        }
        getData();
    },[])
    console.log('loaded:', loaded, 'data:', data);

    return (<>
        <div className="container">
            {loaded && data.country.map((cnt,i) => <Country data={cnt} key={i}/>)}
        </div>        
    </>);   
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
