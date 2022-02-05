import { createContext, useContext, useState } from "react";

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function ApplicationStateProvider({ children }) {
  // This is our own custom provider! We will store data (state) and functionality (updaters) in here and anyone can access it via the consumer!

  const [cartOpen, setCartOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchTreatmentModalOpen, setSearchTreatmentModalOpen] =
    useState(false);

  function toggleCart() {
    setCartOpen(!cartOpen);
  }

  function closeCart() {
    setCartOpen(false);
  }

  function openCart() {
    setCartOpen(true);
  }

  function toggleSearchModal() {
    setSearchModalOpen(!searchModalOpen);
  }
  function closeSearchModal() {
    setSearchModalOpen(false);
  }

  function openSearchModal() {
    setSearchModalOpen(true);
  }

  function toggleSearchTreatmentModal() {
    setSearchTreatmentModalOpen(!searchTreatmentModalOpen);
  }
  function closeSearchTreatmentModal() {
    setSearchTreatmentModalOpen(false);
  }

  function openSearchTreatmentModal() {
    setSearchTreatmentModalOpen(true);
  }

  return (
    <LocalStateProvider
      value={{
        cartOpen,
        setCartOpen,
        toggleCart,
        closeCart,
        openCart,
        toggleSearchModal,
        closeSearchModal,
        openSearchModal,
        searchModalOpen,
        setSearchModalOpen,
        toggleSearchTreatmentModal,
        closeSearchTreatmentModal,
        openSearchTreatmentModal,
        searchTreatmentModalOpen,
        setSearchTreatmentModalOpen,
      }}
    >
      {children}
    </LocalStateProvider>
  );
}

// make a custom hook for accessing the cart local state
function useCart() {
  // We use a consumer here to access the local state
  const all = useContext(LocalStateContext);
  return all;
}

function useSearchModal() {
  const all = useContext(LocalStateContext);
  return all;
}

function useSearchTreatmentModal() {
  const all = useContext(LocalStateContext);
  return all;
}

export {
  ApplicationStateProvider,
  useCart,
  useSearchModal,
  useSearchTreatmentModal,
};
