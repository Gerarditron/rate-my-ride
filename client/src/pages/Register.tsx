import {NavLink} from 'react-router-dom'

export const Register = () => {
    return (
      <div className="flex flex-col place-items-center items-center">
          <div className="text-2xl my-8 font-bold">
              <p>Rate My Ride - Create User</p>
          </div>
          <form className="rounded-md border-4 p-6 flex flex-col w-120 bg-zinc-800">
            <div className="mb-4 flex-row">
                <label className="mr-10">Email: </label>
              <input className="rounded-sm pl-1" type="email" placeholder="Enter your Email" />
            </div>
            <div className="mb-4 flex-row">
                <label className="mr-10">Email: </label>
              <input className="rounded-sm pl-1" type="email" placeholder="Enter your Email" />
            </div>
            <div className="mb-4 flex-row">
              <label className="mr-3">Password: </label>
                <input className="rounded-sm pl-1" type="password" placeholder="Enter your Password" />
            </div>
            <div className="text-md mt-4 p-2 bg-emerald-700 rounded-sm w-full text-center flex-1 ">
                <button type="submit">Login</button>
            </div>
            <div className="text-md mt-4 p-2 bg-emerald-700 rounded-sm w-full text-center flex-1 ">
              <button type="submit">Register</button>
            </div>
          </form>
          <div className="text-md my-4 font-bold text-white bg-black p-4 rounded">
            <NavLink to="/login">Regresar</NavLink>
          </div>
      </div>
    )
  }
  