import React from 'react'
import UsingUseState from './components/UsingUseState'
import UsingUseEffect from './components/UsingUseEffect'
import UsingUseCallback from './components/UsingUseCallback'

const App = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h3>React Hooks</h3>
                </div>
                <div className="col-md-12">
                    <UsingUseState />
                </div>
                <div className="col-md-12">
                    <UsingUseEffect />
                </div>
                <div className="col-md-12">
                    <UsingUseCallback />
                    <UsingUseCallback />
                    <UsingUseCallback />
                </div>
            </div>
        </div>
    )
}

export default App