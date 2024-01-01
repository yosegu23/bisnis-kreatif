/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  ],	
  theme: {
    extend: {
      colors : {
        primary:"#6e7051",
        secondary:"#f6aa28",
        third:"#262b2c",
        fourth:"#979a9b",
        fifth:"#fbfbf9",
        lightGrey:"#e4e6e7"
      },
      screens:{
        md : {max:"960px"},
        sm:  {max:"516px"},
        xsm:{max:"380px"},
        lg:{max:"1048px"},
        xl: {max:"1426px"}
      },
      spacing:{
        xl:'88rem'
      },
      fontFamily:{
        poppins : ["Poppins","sans-serif"],
        inter : ["Inter","sans-serif"]
      },
      backgroundImage:{
        lghero:"url('https://media.istockphoto.com/id/1316902142/photo/luxury-style-light-gray-bathroom-with-nature-view-3d-render.jpg?b=1&s=170667a&w=0&k=20&c=5tXTxQYM3PwgbSb2LorI9WK2lL0NsNq3pWFwE8RMOtY=')",
        menCat : "url('https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-shop-men-image-thumbnail.jpg')",
        womenCat : "url('https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-shop-women-image-tumbnail.jpg')"
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(300px, 1fr))',
      },
    },
  },
  plugins: [],
}
