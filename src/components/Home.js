import Login from './Login'
const Home = () => {
  return (
    <div className="home-container">
      <Login trigger={true}></Login>
      <div className="column-1">
        <h1 className="home-h1">
          WELCOME TO <span className="span-heading">BOOK HUB.</span>
        </h1>
      </div>

      <div
        className="
        login-btn"
      >
        <button>Log In</button>
      </div>
    </div>
  )
}
export default Home
