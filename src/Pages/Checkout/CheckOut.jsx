import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const service = useLoaderData();
  const { title, _id } = service;
  return (
    <div>
      <h2>Book Service: {title}</h2>
      
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                
              </div>
              
            </div>
            <div className="form-control mt-6">
                
                <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
              </div>
            </form>
            <div className="card-body">
             
            </div>
          </div>
        
    </div>
  );
};

export default CheckOut;
