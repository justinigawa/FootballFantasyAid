import React, {Component} from "react"
import {Link} from "react-router"

const Quarterback = props => (
    <div className="searchForms">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title text-center">
                            Quarterback 1</h3>
                        </div>
                        <div className="panel-body text-center">
                            <form onSubmit={props.handleSubmit}>
                                <div className="form-group">
                                    <input onChange={props.handleChange} 
                                    type="text" 
                                    className="form-control" 
                                    id="text" 
                                    placeholder="Search Quarterback" 
                                    value={props.search} required />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title text-center">
                            Quarterback 2</h3>
                        </div>
                        <div className="panel-body text-center">
                            <form>
                                <div className="form-group">
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    id="text" 
                                    placeholder="Search Quarterback" 
                                    required />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="seachbtn">
                    <button type="submit" className="btn btn-default">
                    Submit</button>
                </div>
            </div>
        </div>
    </div>
)

// const Quarterback = props backup before changing
// const Quarterback = props => (
//     <div className="searchForms">
//         <div className="container">
//             <div className="row">
//                 <div className="col-md-6">
//                     <div className="panel panel-default">
//                         <div className="panel-heading">
//                             <h3 className="panel-title text-center">Quarterback 1</h3>
//                         </div>
//                         <div className="panel-body text-center">
//                             <form onSubmit = {props.handleSubmit}>
//                                 <div className="form-group">
//                                     <input onChange={props.handleChange} type="text" className="form-control" id="text" placeholder="Search Quarterback" value={props.search} required />
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-md-6">
//                     <div className="panel panel-default">
//                         <div className="panel-heading">
//                             <h3 className="panel-title text-center">Quarterback 2</h3>
//                         </div>
//                         <div className="panel-body text-center">
//                             <form>
//                                 <div className="form-group">
//                                     <input type="text" className="form-control" id="text" placeholder="Search Quarterback" required />
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="row">
//                 <div className="seachbtn">
//                     <button type="submit" className="btn btn-default">Submit</button>
//                 </div>
//             </div>
//         </div>
//     </div>
// )

export default Quarterback
