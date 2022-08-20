<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
</script>
<template>
  <div>
    <div class="lg:w-8/12 md:w-full mx-auto">
      <div
        class="w-full grid grid-cols-1 gap-y-2 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-4"
      >
        <div
          class="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-4"
        >
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg"
            alt="Two each of gray, white, and black shirts arranged on table."
            class="object-center object-cover"
          />
        </div>

        <div class="sm:col-span-8 lg:col-span-5">
          <div class="card">
            <div class="card-body p-1">
              <p>
                ⚡CS⚡ 4 in 1 retractable square USB Type-C cellphone stand
                holder charging cable android charger Cable for IOS Android for
                iPhone Huawei Xiaomi oppo vivo charger data cable
              </p>
              <img
                src="https://lzd-img-global.slatic.net/g/gcp/lazada/86e2826e-4a47-464c-a5e6-bcac1bb66592_ALL-480-72.jpg_720x720q80.jpg_.webp"
              />
              
              <radioImage />
              <div>
                <p>Quantity:</p>
                <div>
                  <div class="input max-w-[300px]">
                    <label
                      class="cursor-pointer rounded-full px-2 py-1 bg-slate-400"
                      >-</label
                    >
                    <input type="number" value="1" class="text-center" />
                    <label
                      class="cursor-pointer rounded-full px-2 py-1 bg-slate-400"
                      >+</label
                    >
                  </div>
                </div>
              </div>
              <div class="flex gap-2">
                <button type="button" class="btn">Buy Now</button>
                <button type="button" class="btn p-2">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:col-span-3 bg-slate-200">
          <div class="card">
            <div class="card-body p-0">
              <div>
                <p>Delivery Options</p>
              </div>
              <div
                class="group relative rounded-full py-1 px-2 lg:rounded-r-none lg:rounded-l-xl lg:p-2 bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10"
              >
                <p>Ships from Overseas</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <TabGroup>
        <TabList class="tabs">
          <Tab class="tab tab-bordered">description</Tab>
          <Tab class="tab tab-bordered">specification</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <div class="card">
              <div class="card-body">
                <p>
                  ⚡CS⚡ 4 in 1 retractable square USB Type-C cellphone stand
                  holder charging cable android charger Cable for IOS Android
                  for iPhone Huawei Xiaomi oppo vivo charger data cable
                </p>
                <img
                  src="https://lzd-img-global.slatic.net/g/p/1a309eba54286406143a234631dfe56a.jpg_2200x2200q80.jpg_.webp"
                  alt=""
                  srcset=""
                />
                <img
                  src="https://lzd-img-global.slatic.net/g/p/8570deca045628ccff4bb34d34170305.jpg_2200x2200q80.jpg_.webp"
                  alt=""
                  srcset=""
                />
              </div></div
          ></TabPanel>
          <TabPanel>Content 2</TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  </div>
</template>
