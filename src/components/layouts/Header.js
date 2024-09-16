import React,{Component} from "react";
import './Header.css';

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            menus:[
                {name:"all_courses",label:"All Courses"},
                {name:"placements",label:"Placements"},
                {name:"internship",label:"Internship"},
                {name:"aboutus",label:"About Us"},
                {name:"reviews",label:"Reviews"},
                {name:"blog",label:"Blog"},
            ]
        }
    }
    render(){
        return(
            <header className="header">
                <div className="logo">
                    <a href="/"><img src="../logo.png"></img></a>
                </div>
                <nav className="nav">
                    <ul>
                    {this.state.menus.map(menu =>(<li>{menu.label}</li>))}
                    </ul>
                </nav>
            </header>
        )
    }
}
export default Header;