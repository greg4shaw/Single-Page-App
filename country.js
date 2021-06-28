function Country({data}){
    return (

        <div className="card">
            <h5 className="card-header">{data.properties.NAME}</h5>
            <div className="card-body">
                <table className="table">
                  <tbody>
                    <tr>
                        <td className="text-success font-weight-bold">Area (sq/km):</td>
                        <td>{(data.properties.AREA*10).toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 2})}</td>
                    </tr>
                    <tr>
                        <td className="text-success font-weight-bold">Population (2005):</td>
                        <td>{data.properties.POP2005.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 2})}</td>
                    </tr>
                    <tr>
                        <td className="text-success font-weight-bold">Longitude:</td>
                        <td>{data.properties.LON}</td>
                    </tr>
                    <tr>
                        <td className="text-success font-weight-bold">Latitude:</td>
                        <td>{data.properties.LAT}</td>
                    </tr>
                  </tbody>
                </table>
            </div>
        </div>

)}