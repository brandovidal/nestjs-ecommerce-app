import { Separator } from "@/ui/separator";
import Link from "next/link";

const FOOTER = [
  {
    id: 1,
    name: "Sobre nosotros",
    href: "#",
  },
  {
    id: 2,
    name: "Productos",
    href: "#",
  },
  {
    id: 3,
    name: "Mi cuenta",
    href: "#",
  },
  {
    id: 4,
    name: "Politicas de privacidad",
    href: "#",
  },
];

const Footer = () => {
  return (
    <footer className="mt-4">
      <nav className="w-full max-w-screen-xl mx-auto p-4 md :py-8">
        <section className="sm:flex sm:items-center sm:justify-between">
          <h3>
            <span className="font-bold">Dracon Shop</span> Ecommerce
          </h3>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {FOOTER.map((data) => (
              <li key={data.id}>
                <Link
                  href={data.href}
                  className="hover:underline me-4 md:mr-6 "
                >
                  {data.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <Separator className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          &copy; 2024
          <Link href="#" className="ml-1">Dracon Shop</Link>
        </span>
      </nav>
    </footer>
  );
};

export { Footer };
