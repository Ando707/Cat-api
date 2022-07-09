import React, {useEffect, useState} from "react";

const Header = () => {


    const [categories, setCategories] = useState([])

    const fetchCategories = () => {
      fetch("https://api.thecatapi.com/v1/categories")
      .then((res) => res.json())
      .then((categori) => {setCategories(categori)})
    }
  
    useEffect(() => {
      fetchCategories()
    }, [])

    return (
        <header>
            {categories.length > 0 && (
            <ul>
                {categories.map(categori => (
                <li key={categori.id}>
                    <a href='#'> {categori.name} </a>
                </li>
                ))}
            </ul>
            )}
        </header>
    )
};

export default Header;