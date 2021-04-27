import { gql } from '@apollo/client'
import Client from '../Client'

import Notification from '../../components/Notification'

import { storeData } from '../StoreData/index'

const POCSEARCH_QUERY = gql`
  query poc($id: ID!, $categoryId: Int, $search: String) {
    poc(id: $id) {
      id
      products(categoryId: $categoryId, search: $search) {
        id
        title
        rgb
        images {
          url
        }
        productVariants {
          availableDate
          productVariantId
          price
          inventoryItemId
          shortDescription
          title
          published
          volume
          volumeUnit
          description
          subtitle
          components {
            id
            productVariantId
            productVariant {
              id
              title
              description
              shortDescription
            }
          }
        }
      }
    }
  }
`
const _poc = (id) => {
  Client.query({
    query: POCSEARCH_QUERY,
    variables: {
      id: id,
      search: '',
      categoryId: null,
    },
  })
    .then((p) => {
      if (p) {
        let output = []
        const { data } = p
        const dds = JSON.stringify(data)
        const arr = JSON.parse(dds).poc.products.filter((r) => {
          let prd = {
            id: r.id,
            title: r.title,
            image: r.images.map((i) => i.url).toString(),
            price: r.productVariants.map((i) => i.price).toString(),
          }
          output.push(prd)

          storeData('product', output)
        })
      }
    })
    .catch((error) => {
      Notification.emitError(error)
    })
}

export { _poc }
