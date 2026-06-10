'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import { mens_kurta } from '../../../Data/mens_kurta'
import ProductCard from '../Product/ProductCard'
import { filters, singleFilter } from './FilterData.js'
import FilterListIcon from '@mui/icons-material/FilterList';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material'
import { useLocation, useNavigate } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
const sortOptions = [

  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Product() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const location = useLocation();

  const navigate = useNavigate();

  const handleFilter = (value, sectionId) => {
    const searchParams = new URLSearchParams(location.search);

    let filterValue = searchParams.get(sectionId)
      ? searchParams.get(sectionId).split(",")
      : [];

    // agar already hai to remove karo
    if (filterValue.includes(value)) {
      filterValue = filterValue.filter((item) => item !== value);

      // agar empty ho gaya to param delete
      if (filterValue.length === 0) {
        searchParams.delete(sectionId);
      } else {
        searchParams.set(sectionId, filterValue.join(","));
      }
    }

    // agar nahi hai to add karo
    else {
      filterValue.push(value);
      searchParams.set(sectionId, filterValue.join(","));
    }

    navigate({
      search: searchParams.toString(),
    });
  };
  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
          />

          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white pt-4 pb-6 shadow-xl transition duration-300 ease-in-out data-closed:translate-x-full"
            >
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="relative -mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4 border-t border-gray-200 lg:hidden">

                {[...filters, ...singleFilter].map((section) => (

                  <Disclosure
                    key={section.id}
                    as="div"
                    className="border-b border-gray-200 py-6 px-4"
                  >

                    <h3 className="-my-3 flow-root">

                      <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">

                        <FormLabel
                          sx={{ color: "black" }}
                          className="text-gray-900"
                          id={`${section.id}-label`}
                        >
                          {section.name}
                        </FormLabel>

                        <span className="ml-6 flex items-center">

                          <PlusIcon
                            aria-hidden="true"
                            className="size-5 group-data-open:hidden"
                          />

                          <MinusIcon
                            aria-hidden="true"
                            className="size-5 group-not-data-open:hidden"
                          />

                        </span>

                      </DisclosureButton>

                    </h3>

                    <DisclosurePanel className="pt-6">

                      <div className="space-y-4">

                        <FormControl>

                          {section.options.map((option, optionIdx) => {

                            const searchParams = new URLSearchParams(location.search);

                            const checkedOptions = searchParams.get(section.id)
                              ? searchParams.get(section.id).split(",")
                              : [];

                            return (
                              <FormControlLabel
                                key={optionIdx}
                                control={
                                  <Checkbox
                                    checked={checkedOptions.includes(option.value)}
                                    onChange={() =>
                                      handleFilter(option.value, section.id)
                                    }
                                  />
                                }
                                label={option.label}
                              />
                            );
                          })}

                        </FormControl>

                      </div>

                    </DisclosurePanel>

                  </Disclosure>

                ))}

              </form>
            </DialogPanel>
          </div>
        </Dialog>

        <main className="mx-auto  px-4 sm:px-6 lg:px-20">
          <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sort
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                  />
                </MenuButton>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <MenuItem key={option.name}>
                        <a
                          href={option.href}
                          className={classNames(
                            option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                            'block px-4 py-2 text-sm data-focus:bg-gray-100 data-focus:outline-hidden',
                          )}
                        >
                          {option.name}
                        </a>
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>

              <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                <span className="sr-only">View grid</span>
                <Squares2X2Icon aria-hidden="true" className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon aria-hidden="true" className="size-5" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">

              <div>
                <div className='py-10 flex justify-between items-center '>
                  {/* Filters */}
                  <h1 className=" text-lg opacity-50 font-bold ">Filters</h1>
                  <FilterListIcon />
                </div>

                <form className="hidden lg:block">

                  {[...filters, ...singleFilter].map((section) => (
                    <Disclosure key={section.id} as="div" className="border-b border-gray-1000 py-6">


                      <h3 className="-my-3 flow-root">
                        <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                          {/* <span className="font-medium "></span> */}
                          <FormLabel sx={{ color: "black" }} className="text-gray-900" id="demo-radio-buttons-group-label" >
                            {section.name}
                          </FormLabel>
                          <span className="ml-6 flex items-center">
                            <PlusIcon aria-hidden="true" className="size-5 group-data-open:hidden" />
                            <MinusIcon aria-hidden="true" className="size-5 group-not-data-open:hidden" />
                          </span>
                        </DisclosureButton>
                      </h3>
                      <DisclosurePanel className="pt-6">
                        <div className="space-y-4">
                          <FormControl>

                            {section.options.map((option, optionIdx) => {

                              const searchParams = new URLSearchParams(location.search);

                              const checkedOptions = searchParams.get(section.id)
                                ? searchParams.get(section.id).split(",")
                                : [];

                              return (
                                <FormControlLabel
                                  key={optionIdx}
                                  control={
                                    <Checkbox
                                      checked={checkedOptions.includes(option.value)}
                                      onChange={() =>
                                        handleFilter(option.value, section.id)
                                      }
                                    />
                                  }
                                  label={option.label}
                                />
                              );
                            })}

                          </FormControl>
                        </div>
                      </DisclosurePanel>

                    </Disclosure>
                  ))}
                </form>
              </div>
              {/* Product grid */}
              <div className="lg:col-span-4 w-full">
                <div className="flex flex-wrap justify-center bg-white py-5">
                  {mens_kurta.map((item) => <ProductCard Product={item} />)}
                </div>
              </div>
            </div>


          </section>
        </main>
      </div>
    </div>
  )
}
