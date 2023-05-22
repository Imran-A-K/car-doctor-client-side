import { useEffect, useState, useRef } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [asc, setAsc] = useState(true);
  const [search, setSearch] = useState('')
  const searchRef = useRef(null)
  useEffect(() => {
    // in fetch http://localhost:5000/services?search= if you give search field to be empty you will get all the data
    fetch(`http://localhost:5000/services?search=${search}&sort=${asc ? "asc" : "desc"}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setServices(data);
      });
  }, [asc, search]);
  const handleSearch = () => {
    console.log(searchRef)
    console.log(searchRef.current.value)
    setSearch(searchRef.current.value)
  }
  return (
    <div className="mt-4">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
        <h2 className="text-5xl">Our Service Area</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
          libero <br /> iste ipsa illum inventore voluptate aperiam rerum,
          minima eveniet saepe.
        </p>
        <div className="form-control">
          <div className="input-group">
            <input
                ref={searchRef}
              type="text"
              placeholder="Search…"
              className="input input-bordered"
            />
            <button onClick={handleSearch} className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <button onClick={() => setAsc(!asc)} className="btn btn-primary mb-3">
          {asc ? "Price: High to Low" : "Price: Low to High"}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
