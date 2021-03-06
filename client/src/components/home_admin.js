import { Link, useLocation } from "react-router-dom";

const Admin = () => {
  const auth = useLocation();
  const isLoggin = auth.state
    ? auth.state.isAdmin === true
      ? true
      : false
    : false;
  const isAuth = isLoggin ? auth.state : null;
  console.log(isLoggin, isAuth);
  return (
    <div className="admin">
      {isLoggin ? (
        <>
          <div className="navbar dark:bg-slate-800 rounded-b-lg">
            <div className="flex-1">
              <a className="btn btn-ghost normal-case text-xl text-error">
                daisyUI
              </a>
            </div>
            <div className="flex-none">
              <div className="dropdown dropdown-end">
                <label tabIndex="0" className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="badge badge-sm indicator-item">8</span>
                  </div>
                </label>
                <div
                  tabIndex="0"
                  className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
                >
                  <div className="card-body bg-neutral">
                    <span className="font-bold text-lg">8 Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                      <button className="btn btn-primary btn-block">
                        View cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown dropdown-end">
                <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://api.lorem.space/image/face?hash=33791" />
                  </div>
                </label>
                <ul
                  tabIndex="0"
                  className="bg-neutral menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <Link to="/">Logout</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-8xl text-center">ADMIN PAGE</p>
          </div>
        </>
      ) : (
        history.back()
      )}
    </div>
  );
};

export default Admin;
