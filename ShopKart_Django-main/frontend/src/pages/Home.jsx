import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://shopkart-gqwt.onrender.com/api/categories/list")
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
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-700 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl font-bold mb-6">Shop Amazing Products</h1>
          <p className="text-2xl text-indigo-100 mb-8">
            The modern Shop for Geeks
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-indigo-700 px-8 py-3 rounded-lg hover:bg-indigo-50 transition font-semibold shadow-xl">
              Shop Now
            </button>
            <button className="bg-indigo-800 text-white px-8 py-3 rounded-lg hover:bg-indigo-900 transition font-semibold border border-indigo-400">
              Best Deals
            </button>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-gray-50 p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white   shadow-lg rounded-xl p-6 border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden relative group"
            >
              <div className="absolute top-4 right-4">
                <span className="bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  New
                </span>
              </div>

             {/* Poster */}
              <img
                src={item["poster"]?.toString()}
                alt={item["name"]?.toString()}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              <div className="space-y-3">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {item["name"]?.toString()}
                  </h3>
                  <div className="border-b border-gray-100 mt-2"></div>
                </div>
                <div className="">
                  <p className="text-sm font-normal text-gray-600">
                    <span className="font-semibold text-gray-800">
                      description:
                    </span>{" "}
                    {item["description"]?.toString()}
                  </p>
                </div>
              </div>

              <button onClick={()=>{
                navigate(`/Products/${item["id"]}`)
              }} className="px-4 py-2 text-sm mt-2 cursor-pointer rounded-4xl bg-indigo-500 text-white hover:bg-indigo-600 " >Show Products</button>

              <div className="absolute inset-0 bg-indigo-50 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
            </div>

          ))}
        </div>
      </div>
    </>
  );
}
