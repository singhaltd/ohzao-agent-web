<template>
  <div class="w-full">
    <div class="mx-auto w-full max-w-md">
      <RadioGroup v-model="selected">
        <RadioGroupLabel class="sr-onl">ເລືອກສີ</RadioGroupLabel>
        <div class="flex gap-2">
          <RadioGroupOption
            as="template"
            v-for="plan in plans"
            :key="plan.name"
            :value="plan"
            v-slot="{ active, checked }"
          >
            <div
              :class="[
                active
                  ? 'ring-2 ring-white ring-opacity-60  ring-offset-sky-300'
                  : '',
                checked ? 'bg-opacity-75 text-white ' : 'bg-white ',
              ]"
              class="relative flex cursor-pointer rounded-lg px-0 py-0 focus:outline-none"
            >
              <div class="flex items-center justify-between">
                <div class="flex items-center z-0 ">
                  <div class="text-sm border  rounded-lg p-[2px]" :class="checked ? 'border-green-900':''">
                      <img src="https://lzd-img-global.slatic.net/g/p/ce3526ad3a15cec3938284be56b9f504.png_80x80q80.jpg_.webp" class="rounded-lg z-0" alt="">
                  </div>
                </div>
                <div v-show="checked" class="shrink-0 text-white absolute z-9 top-1 right-1">
                  <svg class="h-3 w-3" viewBox="0 0 24 24" fill="none">
                    <circle
                      cx="12"
                      cy="12"
                      r="12"
                      fill="green"
                      fill-opacity="1"
                    />
                    <path
                      d="M7 13l3 3 7-7"
                      stroke="#fff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </RadioGroupOption>
        </div>
      </RadioGroup>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  RadioGroup,
  RadioGroupLabel,
  RadioGroupDescription,
  RadioGroupOption,
} from "@headlessui/vue";

const plans = [
  {
    name: "Startup",
    ram: "12GB",
    cpus: "6 CPUs",
    disk: "160 GB SSD disk",
  },
  {
    name: "Business",
    ram: "16GB",
    cpus: "8 CPUs",
    disk: "512 GB SSD disk",
  },
  {
    name: "Enterprise",
    ram: "32GB",
    cpus: "12 CPUs",
    disk: "1024 GB SSD disk",
  },
];

const selected = ref(plans[0]);
</script>
