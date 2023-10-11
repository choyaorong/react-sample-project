import { useEffect, useState } from 'react';
import Pagination from '../Layout/Pagination';
import Card from '../UI/Card';
import ingredientsAPI from '../api/baseApi';
import Product from './Product';
import styles from './Receipe.module.css';


function Catalogue() {
  const [ingredients, setIngredients] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // Add search query state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); // Number of items to display per page
  const [nextPageLink, setNextPageLink] = useState('recipes/v2');

  const apiGet = async () => {
    try {

      const response = await ingredientsAPI.get(nextPageLink, {
        params: {
          session: 0,
          app_id: process.env.REACT_APP_RECEIPE_APP_ID,
          app_key: process.env.REACT_APP_RECEIPE_APP_KEY,
          ingr: searchQuery, // Add the search query as a parameter
        }
      });
      console.log(response.data.hints);

      setIngredients((prevData) => [...prevData, ...response.data.hints]);
      setNextPageLink(response.data._links.next?.href || null);


      // if (response.data._links.next) {
      //   // If there's a next page, fetch it recursively
      //   await apiGet(response.data._links.next.href);
      // }

    }


    catch (error) {
      console.log(error.message);
    }
  }



  const catalogue = ingredients.map(item => (
    <Product
      key={item.receipe.foodId}
      id={item.food.foodId}
      name={item.food.label}
      energy={item.food.nutrients.ENERC_KCAL}
      measureLabel={item.measures[0].label}
      measureWeight={item.measures[0].weight}
      description={item.food.image}
    // price={item.price}
    />
  ));



  // Calculate the current items to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = catalogue.slice(indexOfFirstItem, indexOfLastItem);

  // // Pagination logic
  // const paginate = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };

  useEffect(() => {
    apiGet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return (
    <section className={styles.products}>
      <Card>
        {/* Add the search input and search button */}
        <div>
          <input
            type="text"
            placeholder="Search for Receipes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={apiGet}>Search</button>
        </div>

        <ul>{currentItems}</ul>
      </Card>
      {/* Pagination controls */}
      <Pagination
        items={ingredients}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
      />
      {/* <div className="pagination">
        {Array.from({ length: Math.ceil(ingredients.length / itemsPerPage) }).map((_, index) => (
          <div
            key={index}
            className={`pagination-item ${index + 1 === currentPage ? 'active' : ''}`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </div>
        ))}
      </div> */}

    </section>
  );
}

export default Catalogue