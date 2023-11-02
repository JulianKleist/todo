function TodoList ({children}) {
    return (
        <div className='container'>
        <div className='row'>
          <ul className='col-12'>
            {children}
          </ul>
        </div>
      </div>
    );
}

export { TodoList };