import React, { useState, useEffect } from "react";
import axios from "axios";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function CategoryAdmin() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCategoryData() {
      let res = await axios.get("https://shopkart-gqwt.onrender.com/api/categories/list");
      setCategories(res.data);
      setLoading(false);
    }
    getCategoryData();
  }, []);

  async function handleCategorySubmit(e) {
    e.preventDefault();
    const Data = {
      poster: e.target[0].value,
      name: e.target[1].value,
      description: e.target[2].value,
    };
    const Res = await axios.post("https://shopkart-gqwt.onrender.com/api/categories/create", Data);
    console.log(Res.data);
  }

  return (
    <div className="p-8 bg-white min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-indigo-500">Category Admin</h1>
      </div>

      {/* Category Form */}
      <div className="bg-gray-50 border border-indigo-100 rounded-xl p-6 shadow-md max-w-lg mx-auto mb-10">
        <form onSubmit={handleCategorySubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Category Poster URL..."
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Category Name..."
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Category Description..."
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Category List */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-lg rounded-lg">
          <thead className="bg-indigo-500 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Poster</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Description</th>
              <th className="py-3 px-4 text-center">Update</th>
              <th className="py-3 px-4 text-center">Delete</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500">
                  Loading categories...
                </td>
              </tr>
            ) : (
              categories.map((category, index) => (
                <tr key={index} className="border-t hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <img
                      src={category.poster}
                      alt={category.name}
                      className="w-16 h-16 object-cover rounded-md border"
                    />
                  </td>
                  <td className="py-3 px-4 font-medium text-gray-700">{category.name}</td>
                  <td className="py-3 px-4 text-gray-600">{category.description}</td>
                  <td className="py-3 px-4 text-center">
                    <button className="bg-indigo-500 text-white px-3 py-1 rounded-md hover:bg-indigo-600 transition">
                      Update
                    </button>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ProductAdmin() {
  return (
    <div className="p-8 text-center bg-white min-h-screen">
      <h1 className="text-3xl font-bold text-indigo-500">Product Admin</h1>
    </div>
  );
}

export default function Admin() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Tabs>
        <TabList className="flex justify-center bg-white shadow-md mb-6 border-b border-gray-200">
          <Tab className="px-6 py-3 font-semibold cursor-pointer hover:text-indigo-500 focus:text-indigo-500">
            Category
          </Tab>
          <Tab className="px-6 py-3 font-semibold cursor-pointer hover:text-indigo-500 focus:text-indigo-500">
            Products
          </Tab>
        </TabList>

        <TabPanel>
          <CategoryAdmin />
        </TabPanel>

        <TabPanel>
          <ProductAdmin />
        </TabPanel>
      </Tabs>
    </div>
  );
}
