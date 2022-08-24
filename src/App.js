// import logo from './logo.svg';
import './App.css';
import Todos from './Todos';
import Content from './Content';
import { useState, useEffect, useContext, createContext, useRef, useReducer, useCallback, useMemo} from 'react';


function App() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [products, setProducts] = useState([]);
  const hRedFocus = useRef();
  const handleSubmit = () => {
    setProducts([...products, {
      name,
      price: +price
    }]);
      setName('')
      setPrice('')
      hRedFocus.current.focus();
  }

  //sử dụng useMemo để không lặp lại logic tính toán tổng tiền result
  const total = useMemo(() => {
    const result = products.reduce((result, prod) => {
       return result + prod.price
      },0)
      return result;
      // khi Array products thay đổi sẽ tính toán lại tổng giá price
  },[products])
  
  
    return (
      <div style={{padding: 50}}>
        <label>Enter your product </label>
        <input
          ref={hRedFocus}
          value={name}
          name='name'
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>
        <label>Enter your price </label>
        <input 
        value={price}
        name='price'
        onChange={(e) => setPrice(e.target.value)}
        />
        <br></br>
        <button onClick={handleSubmit} >Add </button>
        <p>Total: {total}</p>
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              {product.name} - {product.price}
            </li>
          ))}
        </ul>
      </div>
    )
}


export default App;
