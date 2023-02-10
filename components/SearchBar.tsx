"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import SearchManufacturer from "./SearchManufacturer";

const SearchButton = ({ classes }: { classes: string }) => {
  return (
    <button type="submit" className={`-ml-10 z-10 ${classes}`}>
      <Image src="/magnifying-glass.svg" alt="search" width={40} height={40} />
    </button>
  );
};

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer === "" && model === "") {
      return alert("Please select car brand and model!");
    }

    updateSearchUrl(manufacturer.toLowerCase(), model.toLowerCase());
  };

  const updateSearchUrl = (manufacturer: string, model: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    manufacturer
      ? searchParams.set("manufacturer", manufacturer)
      : searchParams.delete("manufacturer");

    model ? searchParams.set("model", model) : searchParams.delete("model");

    const newSearchURL = `${
      (window, location.pathname)
    }?${searchParams.toString()}`;

    router.push(newSearchURL, { scroll: false });
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton classes="sm:hidden" />
      </div>

      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="model"
          width={25}
          height={25}
          className="absolute w-5 h-5 ml-4"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="searchbar__input"
          placeholder="Tiguan"
        />
        <SearchButton classes="sm:hidden" />
      </div>

      <SearchButton classes="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
