<template>
  <div class="w-[80mm] bg-white p-2 mx-auto">
    <p class="text-xs">ເບີໂທ: 020 29898643</p>
    <p class="text-xs">FB Page: OHZAO</p>
    <p class="text-xs">website: https://www.ohzao.com/</p>
    <p class="text-center py-3">ບິນຮັບເງິນ</p>
    <div>
      <table class="w-full">
        <tr>
          <th class="text-xs">{{ $t("_NO_") }}</th>
          <th class="text-xs">{{ $t("_PRODUCT_") }}</th>
          <th class="text-xs">{{ $t("_QTY_") }}</th>
          <th class="text-xs">{{ $t("_PRICE_") }}</th>
          <th class="text-xs">{{ $t("_TOTAL_PRICE_") }}</th>
        </tr>
        <tr v-for="i in 10" :key="i">
          <td class="text-xs">{{ i }}</td>
          <td class="text-xs">10.000.000</td>
          <td class="text-xs">1000</td>
          <td class="text-xs">10.000</td>
          <td class="text-xs">10.000.000</td>
        </tr>
      </table>
      <hr />
      <div class="flex justify-between">
        <div>
          <Qrcode value="https://www.google.com" />
        </div>
        <div class="mt-3">
          <p class="text-xs">ລາຍການ</p>
          <p class="text-xs">ສ່ວນຫຼຸດ</p>
          <p class="text-xs">ລວມເງິນທັງໝົດ</p>
        </div>
        <div class="mt-3">
          <p class="text-xs text-right">01</p>
          <p class="text-xs text-right">0</p>
          <p class="text-xs text-right">1,000,000,000</p>
        </div>
      </div>
      <div class="absolute ml-[150px] -mt-[50px] -mt-3">
        ຂໍຂອບໃຈທີ່ໃຊ້ບໍລະການ
      </div>
    </div>
  </div>
</template>