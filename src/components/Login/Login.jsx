// import "./Login.css";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const [showModal, setShowModal] = useState(false);
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     if (password === "12345") {
//       setShowModal(false);
//       navigate("/home");
//     } else {
//       alert("Parol noto‘g‘ri!");
//     }
//   };

//   return (
//     <div className="all">
//       <div className="login-page">
//         <div className="login-card">

//           {/* LEFT */}
//           <div className="login-left">
//             <div className="brand">AMU</div>
//             <div className="left-content">
//               <h2>
//                 Capturing Moments,<br />Creating Memories
//               </h2>
//               <div className="dots">
//                 <span></span>
//                 <span className="active"></span>
//                 <span></span>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT */}
//           <div className="login-right">
//             <h1>Create an account</h1>
//             <p className="sub-text">
//               Already have an account?{" "}
//               <span onClick={() => setShowModal(true)}>Log in</span>
//             </p>

//             <div className="input-row">
//               <input type="text" placeholder="First name" />
//               <input type="text" placeholder="Last name" />
//             </div>

//             <input type="email" placeholder="Email" />
//             <input type="password" placeholder="Enter your password" />

//             <label className="checkbox">
//               <input type="checkbox" />
//               <span>I agree to the Terms & Conditions</span>
//             </label>

//             <button className="main-btn">Create account</button>

//             <div className="divider">or register with</div>

//             <div className="social">
//               <button className="google">Google</button>
//               <button className="apple">Apple</button>
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* 🔥 LOGIN MODAL */}
//       {showModal && (
//         <div className="modal-overlay" onClick={() => setShowModal(false)}>
//           <div className="modal" onClick={(e) => e.stopPropagation()}>
//             <h2>Sign in</h2>

//             <input
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />

//             <button className="main-btn" onClick={handleLogin}>
//               Login
//             </button>

//             <button className="close-btn" onClick={() => setShowModal(false)}>
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
// import { useState } from "react";
// import "./Login.css";

// export default function Login() {
//   const [showModal, setShowModal] = useState(false);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = () => {
//     if (username === "admin" && password === "12345") {
//       alert("Login successful!");
//       setShowModal(false);
//       // Bu yerda useNavigate bilan home page ga o'tish mumkin
//     } else {
//       alert("Username yoki parol noto‘g‘ri!");
//     }
//   };

//   return (
//     <div className="all">
//       <div className="login-page">
//         <div className="login-card">

//           {/* LEFT */}
//           <div className="login-left">
//             <div className="brand">AMU</div>
//             <div className="left-content">
//               <h2>
//                 Capturing Moments,<br />Creating Memories
//               </h2>
//               <div className="dots">
//                 <span></span>
//                 <span className="active"></span>
//                 <span></span>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT */}
//           <div className="login-right">
//             <h1>Create an account</h1>
//             <p className="sub-text">
//               Already have an account?{" "}
//               <span className="login-span" onClick={() => setShowModal(true)}>
//                 Log in
//               </span>
//             </p>

//             <div className="input-row">
//               <input type="text" placeholder="First name" />
//               <input type="text" placeholder="Last name" />
//             </div>

//             <input className="ma" type="email" placeholder="Email" />
//             <input type="password" placeholder="Enter your password" />

//             <label className="checkbox">
//               <input type="checkbox" />
//               <span>I agree to the Terms & Conditions</span>
//             </label>

//             <button className="main-btn">Create account</button>

//             <div className="divider">or register with</div>

//             <div className="social">
//               <button className="google">Google</button>
//               <button className="apple">Apple</button>
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* LOGIN MODAL */}
//       {showModal && (
//         <div className="modal-overlay">
//           <div className="modal">
//             <h2>Sign in</h2>

//             <input
//               type="text"
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />

//             <button className="main-btn" onClick={handleLogin}>
//               Login
//             </button>
//             <button className="close-btn" onClick={() => setShowModal(false)}>
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


import { useState } from "react";
import { useNavigate } from "react-router-dom"; // 🔥 QO‘SHILDI
import "./Login.css";

export default function Login() {
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // 🔥 QO‘SHILDI

  const handleLogin = () => {
    if (username === "admin" && password === "12345") {
      setShowModal(false);
      navigate("/home"); // 🔥 HOME PAGEGA O‘TADI
    } else {
      alert("Username yoki parol noto‘g‘ri!");
    }
  };

  return (
    <div className="all">
      <div className="login-page">
        <div className="login-card">

          {/* LEFT */}
          <div className="login-left">
            <div className="brand">AMU</div>
            <div className="left-content">
              <h2>
                Capturing Moments,<br />Creating Memories
              </h2>
              <div className="dots">
                <span></span>
                <span className="active"></span>
                <span></span>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="login-right">
            <h1>Create an account</h1>
            <p className="sub-text">
              Already have an account?{" "}
              <span className="login-span" onClick={() => setShowModal(true)}>
                Log in
              </span>
            </p>

            <div className="input-row">
              <input type="text" placeholder="First name" />
              <input type="text" placeholder="Last name" />
            </div>

            <input className="ma" type="email" placeholder="Email" />
            <input type="password" placeholder="Enter your password" />

            <label className="checkbox">
              <input type="checkbox" />
              <span>I agree to the Terms & Conditions</span>
            </label>

            <button className="main-btn">Create account</button>

            <div className="divider">or register with</div>

            <div className="social">
              <button className="google">Google</button>
              <button className="apple">Apple</button>
            </div>
          </div>

        </div>
      </div>

      {/* LOGIN MODAL */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Sign in</h2>

            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="main-btn" onClick={handleLogin}>
              Login
            </button>

            <button className="close-btn" onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
