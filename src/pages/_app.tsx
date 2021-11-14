import { AnimatePresence, motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "../contexts/AuthContext";
import { GlobalStyle } from "../styles/GlobalStyles";

function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <AnimatePresence>
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={{
            initial: {
              opacity: 0,
            },
            animate: {
              opacity: 1,
            },
            exit: {
              opacity: 0,
            },
          }}
        >
          <GlobalStyle />
          <Component {...pageProps} />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </motion.div>
      </AnimatePresence>
    </AuthProvider>
  );
}

export default App;
