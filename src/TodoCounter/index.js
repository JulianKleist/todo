function TodoCounter({completed, total}) {
    return(
        <h1 className='fs-3 title'>Has completado <span>{completed}</span> de <span>{total}</span> TODOs</h1>
    );
}

export { TodoCounter };