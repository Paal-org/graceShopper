import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";
import { clearCart } from "../store/reducers/cartReducer";
import { clearAccount } from "../store/reducers/accountReducer";
import Konami from "konami";

let easter_egg = new Konami(function() {
  (function emojiCursor() {
    var possibleEmoji = ["😈", "💩", "🦄", "🐉"];
    var width = window.innerWidth;
    var height = window.innerHeight;
    var cursor = { x: width / 2, y: width / 2 };
    var particles = [];

    function init() {
      bindEvents();
      loop();
    }

    // Bind events that are needed
    function bindEvents() {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("touchmove", onTouchMove);
      document.addEventListener("touchstart", onTouchMove);

      window.addEventListener("resize", onWindowResize);
    }

    function onWindowResize(e) {
      width = window.innerWidth;
      height = window.innerHeight;
    }

    function onTouchMove(e) {
      if (e.touches.length > 0) {
        for (var i = 0; i < e.touches.length; i++) {
          addParticle(
            e.touches[i].clientX,
            e.touches[i].clientY,
            possibleEmoji[Math.floor(Math.random() * possibleEmoji.length)]
          );
        }
      }
    }

    function onMouseMove(e) {
      cursor.x = e.clientX;
      cursor.y = e.clientY;

      addParticle(
        cursor.x,
        cursor.y,
        possibleEmoji[Math.floor(Math.random() * possibleEmoji.length)]
      );
    }

    function addParticle(x, y, character) {
      var particle = new Particle();
      particle.init(x, y, character);
      particles.push(particle);
    }

    function updateParticles() {
      // Updated
      for (var i = 0; i < particles.length; i++) {
        particles[i].update();
      }

      // Remove dead particles
      for (var i = particles.length - 1; i >= 0; i--) {
        if (particles[i].lifeSpan < 0) {
          particles[i].die();
          particles.splice(i, 1);
        }
      }
    }

    function loop() {
      requestAnimationFrame(loop);
      updateParticles();
    }

    /**
     * Particles
     */

    function Particle() {
      this.lifeSpan = 120; //ms
      this.initialStyles = {
        position: "absolute",
        display: "block",
        pointerEvents: "none",
        "z-index": "10000000",
        fontSize: "16px",
        "will-change": "transform"
      };

      // Init, and set properties
      this.init = function(x, y, character) {
        this.velocity = {
          x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2),
          y: 1
        };

        this.position = { x: x - 10, y: y - 20 };

        this.element = document.createElement("span");
        this.element.innerHTML = character;
        applyProperties(this.element, this.initialStyles);
        this.update();

        document.body.appendChild(this.element);
      };

      this.update = function() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.lifeSpan--;

        this.element.style.transform =
          "translate3d(" +
          this.position.x +
          "px," +
          this.position.y +
          "px,0) scale(" +
          this.lifeSpan / 120 +
          ")";
      };

      this.die = function() {
        this.element.parentNode.removeChild(this.element);
      };
    }

    /**
     * Utils
     */

    // Applies css `properties` to an element.
    function applyProperties(target, properties) {
      for (var key in properties) {
        target.style[key] = properties[key];
      }
    }

    init();
  })();
});

export const Navbar = props => {
  const { handleClick, isLoggedIn, categories, firstName, cart } = props;
  const totalCartItem =
    cart.products &&
    cart.products
      .map(product => product.lineItem.purchaseQuantity)
      .reduce((total, num) => total + num, 0);

  return (
    <div>
      <div>
        <div className="row">
          <Link to="/home" className="col-8">
            <div className="row">
              <img className="logo" src="/img/paal.png" />
              <h1>Provisions, Alcohol and Libations</h1>
            </div>
          </Link>
          {/* ----------------------LOGIN-SIGNUP-LOGOUT----------------------- */}
          <div>
            {isLoggedIn ? (
              <div>
                {/* The navbar will show these links after you log in */}
                <button type="button" className="btn navbar-light bg-light">
                  <Link to="/account" className="col-2">
                    <img className="nav-icon" src="/img/godzilla.png" />
                    <span id="welcome">Welcome {firstName}</span>
                  </Link>
                </button>
                <button type="button" className="btn navbar-light bg-light">
                  <a href="#" onClick={handleClick} className="col-2">
                    <img className="nav-icon" src="/img/exit.png" />
                    Logout
                  </a>
                </button>
              </div>
            ) : (
              <div>
                {/* The navbar will show these links before you log in */}
                <button type="button" className="btn navbar-light bg-light">
                  <Link to="/signup" className="col-2">
                    <img className="nav-icon" src="/img/edit.png" />Sign Up
                  </Link>
                </button>
                <button type="button" className="btn navbar-light bg-light">
                  <Link to="/login" className="col-2">
                    <img className="nav-icon" src="/img/enter.png" />Login
                  </Link>
                </button>
              </div>
            )}
          </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light row">
          <div className="col-10">
            {/* ------------------------HOME----------------------- */}
            <button type="button" className="btn navbar-light bg-light">
              <Link to="/home">
                <img className="nav-icon" src="/img/house.png" /> Home
              </Link>
            </button>
            {/* ------------------------PRODUCTS----------------------- */}
            <div className="btn-group ">
              <button type="button" className="btn navbar-light bg-light">
                <Link to="/products">
                  <img className="nav-icon" src="/img/list.png" />
                  Products
                </Link>
              </button>
              <button
                type="button"
                className="btn dropdown-toggle dropdown-toggle-split navbar-light bg-light"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="sr-only">Toggle Dropdown</span>
              </button>
              <div className="dropdown-menu">
                {categories.list &&
                  categories.list.map(category => {
                    return (
                      <div key={category.id} className="dropdown-item">
                        <img className="nav-icon" src={category.imageUrl} />
                        <a href={"/products/" + category.name}>
                          {category.name}
                        </a>
                      </div>
                    );
                  })}
              </div>
            </div>
            {/* ------------------------SEARCH----------------------- */}
            <button type="button" className="btn navbar-light bg-light">
              <Link to="/products/search">
                <img className="nav-icon" src="/img/search.png" />Search
              </Link>
            </button>
          </div>
          {/* ------------------------CART----------------------- */}
          <div className="col-2">
            <button type="button" className="btn navbar-light bg-light">
              <Link to="/account/cart">
                {totalCartItem ? (
                  <img className="nav-icon" src="/img/shopping-basket.png" />
                ) : (
                  <img
                    className="nav-icon"
                    src="/img/shopping-basket-empty.png"
                  />
                )}{" "}
                {totalCartItem} Cart
              </Link>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    categories: state.categories,
    firstName: state.user.firstName,
    cart: state.cart.cart,
    isFetching: state.cart.isFetching
  };
};

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout());
      dispatch(clearCart());
      dispatch(clearAccount());
    }
  };
};

export default connect(
  mapState,
  mapDispatch
)(Navbar);

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};
