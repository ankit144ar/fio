import { createContext, useEffect, useState } from "react";

export const AddressContext = createContext();

export const AddressContextProvider = ({ children }) => {
  const [checkoutAddress, setCheckoutAddress] = useState(
    "Select the address to deliver the product"
  );

  const [userAdd, setUserAdd] = useState({});
  const [userInfo, setUserInfo] = useState({});
  const [newAddress, setNewAddress] = useState({
    id: null,
    name: null,
    houseNo: null,
    city: null,
    state: null,
    country: null,
    postalCode: null,
    mobile: null,
  });

  const defaultAddress = [
    {
      id: 1,
      name: "Ankit Roy",
      houseNo: "Silver Prestige, Koramangala",
      city: "Bengaluru",
      state: "Karnataka",
      country: "India",
      postalCode: "600034",
      mobile: "6205603480",
    },
  ];

  const defaultUser = {
    "ankit@gmail.com": defaultAddress,
  };

  const updateAddress = () => {
    setNewAddress({
      name: "Ankit Roy",
      houseNo: "Silver Prestige, Koramangala",
      city: "Bengaluru",
      state: "Karnataka",
      country: "India",
      postalCode: "600034",
      mobile: "7999899345",
    });
  };

  const key = userInfo?.email;
  // console.log("key", key);

  const address = userAdd[key];
  // console.log("context", address);

  useEffect(() => {
    setUserAdd(defaultUser);
  }, []);

  console.log("user", userAdd);
  return (
    <AddressContext.Provider
      value={{
        checkoutAddress,
        setCheckoutAddress,
        defaultAddress,
        userInfo,
        setUserInfo,
        userAdd,
        setUserAdd,
        address,
        newAddress,
        setNewAddress,
        updateAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};
