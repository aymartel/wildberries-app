
import { NextPage,  GetStaticPaths, GetStaticProps } from 'next';

import { IOrder } from '@/interfaces';



interface Props {
  order: IOrder
}


const ProductPage:NextPage<Props> = ({ order }) => {



  return (
    <h1>ORDER</h1>
  )
}


// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
// export const getStaticProps: GetStaticProps = async ({ params }) => {
  
//   const { slug = '' } = params as { slug: string };
//   const order = await dborders.getorderBySlug( slug );

//   if ( !order ) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false
//       }
//     }
//   }

//   return {
//     props: {
//       order
//     },
//     revalidate: 60 * 60 * 24
//   }
// }



export default ProductPage