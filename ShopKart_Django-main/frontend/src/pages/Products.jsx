import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom"

export default function Products(){
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  let {categoryId} = useParams();
  let [cateName,setCatName] = useState("")

  useEffect(() => {
   
    if(categoryId)
    {
      fetch(`https://shopkart-gqwt.onrender.com/api/products/list/${categoryId}`)
      .then((res) => res.json())
      .then((json) => {
        const targetData = json;
        setData(Array.isArray(targetData) ? targetData : [targetData]);
        setCatName(targetData[0].category.name)
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });

    }
    else
    {
       fetch("https://shopkart-gqwt.onrender.com/api/products/list")
      .then((res) => res.json())
      .then((json) => {
        const targetData = json;
        setData(Array.isArray(targetData) ? targetData : [targetData]);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
    }
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
        <div className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 text-white py-20 px-6 shadow-lg">
            <div className="max-w-6xl mx-auto text-center">
                <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">
                  {categoryId?`Browse All Products of ${cateName} `:"Browse All Products"}
                </h1>
                <p className="text-xl text-indigo-100 mb-8">Discover a wide range of products and services.</p>
            </div>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-6 md:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div 
            key={index} 
            className="bg-white   shadow-lg rounded-xl p-6 border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden relative group"
          >    
                {/* Poster image */}
                  <img
                src={item["poster"]?.toString()}
                alt={item["name"]?.toString()}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />


            
            <div className="space-y-3">
              
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">{item["name"]?.toString()}</h3>
                <div className="border-b border-gray-100 mt-2"></div>
              </div>
              <div className="">
                <p className="text-sm font-normal text-gray-600">
                  <span className="font-semibold text-gray-800">description:</span> {item["description"]?.toString()}
                </p>
                <div className="border-b border-gray-100 mt-2"></div>
              </div>
              <div className="">
                <p className="text-sm font-normal text-gray-600">
                  <span className="font-semibold text-gray-800">price:</span> {item["price"]?.toString()}
                </p>
                
              </div>
            </div>
            

            <div className="Btns flex items-center gap-2 mt-4" >
              <button className="bg-indigo-600 cursor-pointer text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
                Buy Now
              </button>
              <button className="bg-orange-600 cursor-pointer text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors">
                Add to Cart
              </button>
            </div>
            
            <div className="absolute inset-0 bg-indigo-50 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

