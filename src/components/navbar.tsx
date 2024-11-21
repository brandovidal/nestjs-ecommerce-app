"use client";

import { Heart, ShoppingCart, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { MenuList } from "./menu-list";
import ItemsMenuMobile from "@/ui/items-menu-mobile";

const NavBar = () => {
  const router = useRouter();

  const handleGoToHome = () => {
    router.push("/");
  };

  const handleGoToCart = () => {
    router.push("/cart");
  };
  const handleGoToLovedProducts = () => {
    router.push("/loved-products");
  };

  return (
    <aside className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl">
      <h1 className="text-3xl" onClick={handleGoToHome}>
        Dracon <span className="font-bold">Shop</span>
      </h1>
      <div className="items-center justify-between hidden sm:flex">
        <MenuList />
      </div>
      <nav className="flex sm:hidden">
        <ItemsMenuMobile />
      </nav>
      <div className="flex items-center justify-between gap-2 sm:gap-7">
        <ShoppingCart
          className="cursor-pointer"
          strokeWidth={1}
          onClick={handleGoToCart}
        />
        <Heart
          className="cursor-pointer"
          strokeWidth={1}
          onClick={handleGoToLovedProducts}
        />
        <User className="cursor-pointer" strokeWidth={1} />
      </div>
    </aside>
  );
};

export { NavBar };
