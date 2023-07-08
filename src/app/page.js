import React from 'react'
import CategoriesItem from './CategoryItem/Category-Item';
const Page=() => {
  // const categories = [
  //   {
  //     "id": 1,
  //     "title": "hats",
  //     "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
  //   },
  //   {
  //     "id": 2,
  //     "title": "jackets",
  //     "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
  //   },
  //   {
  //     "id": 3,
  //     "title": "sneakers",
  //     "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
  //   },
  //   {
  //     "id": 4,
  //     "title": "womens",
  //     "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
  //   },
  //   {
  //     "id": 5,
  //     "title": "mens",
  //     "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
  //   }
  // ]
  return(
    // <div className="categories-container">
    //   <div className="category-container">
    //     <div className="category-bod-container">
    //       <h2> Ha</h2>
    //       <p> Shop Now</p>
    //     </div>
    //   </div>
    //   <div className="category-container">
    //     <div className="category-bod-container">
    //       <h2> Hats</h2>
    //       <p> Shop Now</p>
    //     </div>
    //   </div>
    //   <div className="category-container">
    //     <div className="category-bod-container">
    //       <h2> Hats</h2>
    //       <p> Shop Now</p>
    //     </div>
    //   </div>
    //   <div className="category-container">
    //     <div className="category-bod-container">
    //       <h2> Hats</h2>
    //       <p> Shop Now</p>
    //     </div>
    //   </div>
    //   <div className="category-container">
    //     <div className="category-bod-container">
    //       <h2> Hats</h2>
    //       <p> Shop Now</p>
    //     </div>
    //   </div>
    // </div>
    <div className='categories-container'>
    {categories.map((category) => (
      <CategoriesItem key={category.id} category={category} />
    ))}
  </div>
  );
}

export default Page

// import Image from 'next/image'
// // import styles from './page.module.css'
// import styles from './categories.styles.scss'


// export default function Home() {
//   return (
//     <main className={styles.main}>
//       <div className={styles.description}>
//         <p>
//           Get started by editing&nbsp;
//           <code className={styles.code}>src/app/page.js</code>
//         </p>
//         <div>
//           <a
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{' '}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className={styles.vercelLogo}
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className={styles.center}>
//         <Image
//           className={styles.logo}
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className={styles.grid}>
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Docs <span>-&gt;</span>
//           </h2>
//           <p>Find in-depth information about Next.js features and API.</p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Learn <span>-&gt;</span>
//           </h2>
//           <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Templates <span>-&gt;</span>
//           </h2>
//           <p>Explore the Next.js 13 playground.</p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Deploy <span>-&gt;</span>
//           </h2>
//           <p>
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   )
// }
// app.js

