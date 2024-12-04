"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
type FormsContextType = {
  aboutPage: boolean;
  setAboutPage: React.Dispatch<React.SetStateAction<boolean>>;
  projectPage: boolean;
  setProjectPage: React.Dispatch<React.SetStateAction<boolean>>;
  contactPage: boolean;
  setContactPage: React.Dispatch<React.SetStateAction<boolean>>;
};

const FormContext = createContext<FormsContextType | undefined>(undefined);

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within FormProvider");
  }
  return context;
};

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [aboutPage, setAboutPage] = useState(false);
  const [projectPage, setProjectPage] = useState(false);
  const [contactPage, setContactPage] = useState(false);

  return (
    <FormContext.Provider
      value={{
        aboutPage,
        setAboutPage,
        projectPage,
        setProjectPage,
        contactPage,
        setContactPage,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
