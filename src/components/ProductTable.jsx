
const ProductTable = ({ products }) =>{

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Codigo</th>
                    <th>Nombre</th>
                    <th>Categoria</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                {products.map(p =>(
                <tr key={p.id}>
                    <td>{p.id}</td>
                    <td>{p.nombre}</td>
                    <td>{p.categoria}</td>
                    <td>{p.precio}</td>
                </tr>
                    ))}
            </tbody>
        </table>
    );
}

export default ProductTable;