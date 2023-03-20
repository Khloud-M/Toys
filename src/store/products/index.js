import getters from "@/store/products/getters.js";
// import actions from "@/store/products/actions.js";
// import mutations from "@/store/products/mutations.js";
export default {
  namespaced: true,
  state() {
    return {
      Categories: [
        {
          id: "c1",
          itemName: "Car Games",
          detailsCar:[
            {
              id: "d1",
              image:
                "https://toyshomekw.com/storage/products/1667291637OIP%20(8).jpg",
              name: "Mercedes G63 AMG",
              Sale:"Sale 5.55",
              price: 120.0,
              oldPrice: 130.0,
            },
            {
              id: "d2",
              image:
                "https://toyshomekw.com/storage/products/1667291476R%20(4).jpg",
              name: "Pink miny car toy",
              Sale:"Sale 5.55",
              price: 82.0,
              oldPrice: 90.0,
            },
            {
              id: "d3",
              image:
                "https://toyshomekw.com/storage/products/1667290758OIP%20(6).jpg",
              name: "Car",
              Sale:"Sale 5.55",
              price: 55.0,
              oldPrice: 60.0,
            },
          ],
        },
        {
          id: "c2",
          itemName: "Intelligence Development Games",
          detailsCar: [
            {
              id: "d1",
              image:
                "https://toyshomekw.com/storage/products/1667999351298415307_1227968158141660_4009726830810619828_n.jpg",
              name: "test",
              Sale:"Sale 5.55",
              price: 250.0,
              oldPrice: 300,
            },
            {
              id: "d2",
              image:
                "https://toyshomekw.com/storage/products/1667291955kids-puzzle-500x500.jpg",
              name: "Kids Puzzle",
              Sale:"Sale 8.55",
              price: 24.0,
              oldPrice: 28.0,
            },
            {
              id: "d3",
              image:
                "https://toyshomekw.com/storage/products/1667291785OIP%20(9).jpg",
              name: "Rubik's",
              Sale:"Sale 5.55",
              price: 61.0,
              oldPrice: 63.0,
            },
            {
              id: "d4",
              image:
                "https://toyshomekw.com/storage/products/1667290647Web%20capture_1-11-2022_101444_www.bing.com.jpeg",
              name: "Leaning Tower",
              Sale:"Sale 5.55",
              price: 25.0,
              oldPrice: 30.0,
            },
          ],
        },
        {
          id: "c3",
          itemName: "Strategy Games",
          detailsCar: [
            {
              id: "d1",
              image:
                "https://toyshomekw.com/storage/products/1667291212OIP%20(7).jpg",
              name: "Flying Chess",
              Sale:"Sale 5.55",
              price: 100.0,
              oldPrice: 110.0,
            },
            {
              id: "d2",
              image:
                "https://toyshomekw.com/storage/products/1667290918Mini-Strategy-Game-01.jpg",
              name: "Mini Strategy",
              Sale:"Sale 5.55",
              price: 85.0,
              oldPrice: 90.0,
            },
          ],
        },
      ],
      MoreSaling:[
          {
            id: "d1",
            image:
              "https://toyshomekw.com/storage/products/1667291637OIP%20(8).jpg",
            name: "Mercedes G63 AMG",
            Sale:"Sale 5.55",
            price: 120.0,
            oldPrice: 130.0,
          },
          {
            id: "d2",
            image:
              "https://toyshomekw.com/storage/products/1667291476R%20(4).jpg",
            name: "Pink miny car toy",
            Sale:"Sale 5.55",
            price: 82.0,
            oldPrice: 90.0,
          },
          {
            id: "d3",
            image:
              "https://toyshomekw.com/storage/products/1667290758OIP%20(6).jpg",
            name: "Car",
            Sale:"Sale 5.55",
            price: 55.0,
            oldPrice: 60.0,
          },
          {
            id: "d4",
            image:
              "https://toyshomekw.com/storage/products/1667291212OIP%20(7).jpg",
            name: "Flying Chess",
            Sale:"Sale 5.55",
            price: 100.0,
            oldPrice: 110.0,
          },
          {
            id: "d5",
            image:
              "https://toyshomekw.com/storage/products/1667290918Mini-Strategy-Game-01.jpg",
            name: "Mini Strategy",
            Sale:"Sale 5.55",
            price: 85.0,
            oldPrice: 90.0,
          },
          {
            id: "d6",
            image:
              "https://toyshomekw.com/storage/products/1667999351298415307_1227968158141660_4009726830810619828_n.jpg",
            name: "test",
            Sale:"Sale 5.55",
            price: 250.0,
            oldPrice: 300,
          },
          {
            id: "d7",
            image:
              "https://toyshomekw.com/storage/products/1667291955kids-puzzle-500x500.jpg",
            name: "Kids Puzzle",
            Sale:"Sale 8.55",
            price: 24.0,
            oldPrice: 28.0,
          },
          {
            id: "d8",
            image:
              "https://toyshomekw.com/storage/products/1667291785OIP%20(9).jpg",
            name: "Rubik's",
            Sale:"Sale 5.55",
            price: 61.0,
            oldPrice: 63.0,
          },
          {
            id: "d9",
            image:
              "https://toyshomekw.com/storage/products/1667290647Web%20capture_1-11-2022_101444_www.bing.com.jpeg",
            name: "Leaning Tower",
            Sale:"Sale 5.55",
            price: 25.0,
            oldPrice: 30.0,
          },


      ]
    }
  },
  getters ,
  // mutations,
};
